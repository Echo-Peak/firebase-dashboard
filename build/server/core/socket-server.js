let socketIO = require('socket.io');
let https = require('https');
let http = require('http');
let config = require('../../config');
let Ifirebase = require('./sync-firebase');
let regex = require('./regex');
let cwd = process.cwd();
let Path = require('path');
let fs = require('fs');

function handler(req ,res){}

module.exports = class SocketServer{
  static init(config){
    let server = http.createServer(handler);
    if(!config.persistToDisk){
      console.log(`
Its recrmended you enable 'persistToDisk' in the config to prevent accidently data loss
        `);
    }

    server.listen(config.ports.proxy + 1);
    this.prototype.io = socketIO(server);
  }
  constructor(config){
    Ifirebase = Ifirebase();
    this.config = config;
    this.io.of('/firebase').on('connection', socket => this.room_firebase(socket));
    this.methods = ['push' ,'set' ,'update'];
    this.firebase_socket = null;
  }
  room_firebase(socket){

    socket.on('connected' ,()=>{
      socket.emit('config' ,this.config);
    });
    socket.on('snapshots' ,()=>{
      Ifirebase.getSnapshots((result)=>{
        result ? socket.emit('got-snapshots' ,result) : socket.emit('got-snapshots' ,[])
      });
    });
    // this uses SET not UPDATE!!!! be carefull!!!
    // MAIN EVENT TO SYNC FROM BROWSER
    socket.on('sync' ,({path , data , method})=>{
      if(!path.match(regex.firebase_path)){
        this.error(socket, `invaild firebase path got '${path}'`);
        return
      }
      if(!data) {
        this.error(socket, `got invaild data got '${data}'`);
        return
      }
      if(!this.methods.includes(method.toLowerCase())){
        this.error(socket , `invalid method got '${method}' | expected '${this.methods.join(', ')}'`);
        return
      }
      Ifirebase.applyChange(path , method,  data ,config.cacheTracking, (status)=>{
        socket.emit('sync-complete');
        self.status(socket, status)
      });
    });
    // WATCH FOR REAL TIME CHANGES
    let self = this;
    socket.on('watching' , (path , bool)=>{
      Ifirebase.watch(path , bool ,function(result){
        if(result){
          socket.emit('query-result' , result);
        }else{
          self.status(socket, `Currently not watching ${path}`);
        }
      });
    });
    // GENERAL QUERY PATH
    socket.on('query' ,(path)=>{
      path = path.trim();
      if(!path.match(regex.firebase_path)){
        this.error(socket, `invaild firebase path got '${path}'`);
        return
      }

      Ifirebase.query(path , function(result){

        socket.emit('query-result' ,result)
      })
    });
    // UNDO
    socket.on('undo' ,(path)=>{
      if(!path.match(regex.firebase_path)){
        this.error(socket, `invaild firebase path got '${path}'`);
        return
      }
      Ifirebase.undo(path ,(olderSnapshot)=>{
        if(olderSnapshot){
          Ifirebase.applyChange(olderSnapshot.path ,'set' , olderSnapshot.data ,true, ()=>{
            console.log('>>>>',olderSnapshot.data);
            socket.emit('query-result', olderSnapshot.data);
            self.status(socket, `Reverted '${olderSnapshot.path}' to ${olderSnapshot.uuid}`)
          });
        }else{
          self.status(socket , `Nothing cached for ${path}`);
        }
      });
    });
    // RESTORE EARLIEST SNAPSHOT. (first snapshot taken at app instantiation)
    socket.on('restore' ,function(path){
      if(!path.match(regex.firebase_path)){
        this.error(socket , `invaild firebase path got '${path}'`);
        return
      }
      Ifirebase.restore(path);
    });
    socket.on('hard-clear' ,function(){
      Ifirebase.hardClear();
    });
    // MANUALY UPDATE FIREBASE CACHE! DANGER!
    socket.on('update-cache' ,function({path , data}){
      if(!path.match(regex.firebase_path)){
        this.error(`invaild firebase path got '${path}'`);
        return
      }
      if(!data){
        this.error(`got invaild data got '${data}'`);
        return
      }
      Ifirebase.addToCache(path , data);
    });
    // EXPORT
    socket.on('export-path' ,({path , data})=>{
      if(!path.match(regex.firebase_path)){
        this.error(socket, `invaild firebase path got '${path}'`);
        return
      }
      if(!data){
        this.error(socket, `got invaild data got '${data}'`);
        return
      }
      Ifirebase.exportToFile(path , data ,function(err){
        console.log(err);
        err ? self.status(socket, `failed to export ${path}`) : self.status(socket, `exported ${path} succsesfully`);

      });
    });
    socket.on('create-snapshot' ,()=>{

      Ifirebase.createSnapshot(function(err){
        console.log(err);
        err ? self.status(socket, `failed to export database`) :  self.status(socket, `exported database succsesfully`);

      });
    });
    socket.on('check-cache' ,()=>{
      socket.emit('got-cache' ,Ifirebase.cache());
    });
    socket.on('use-snapshot' ,(snapshot)=>{
      Ifirebase.useSnapshot(snapshot , (status)=>{
        status ? self.status(socket , `Snapshot succsesfull!`) : self.status(socket , `failed to use snapshot`);
        status && socket.emit('query-result' , status);
      })
    });
    socket.on('sync-config' , (newConfig)=>{
        let location = Path.resolve(__dirname , '../../config.json');

        if(typeof newConfig === 'string'){
          newConfig = Object.assign(config , JSON.parse(newConfig));
          config = newConfig;
        }else if(typeof newConfig === 'object' && newConfig !== null){
          newConfig = Object.assign(config , newConfig);
          config = newConfig;
        }

        Ifirebase.newConfig(newConfig);
        fs.writeFile(location , JSON.stringify(newConfig) , function(err){
          if(err){
            console.log(err);
          }
        })
    });
    socket.on('sync-locally' , ({path , data})=>{
      if((typeof data === 'object' && data !== null) || (Array.isArray(data)  && data.length)){
        Ifirebase.syncLocal(path , data ,(status) => {
          console.log('done! syncing locally')
        });
      }

    });
    socket.on('reset-path' , (path)=>{
      Ifirebase.resetPath(path , (result)=>{
        result ? self.status(socket , `Reset '${path}' succsesfull!`) : self.status(socket , `failed to reset '${path}'`);
        result && socket.emit('query-result' , result);
      })
    })
  }
  status(socket , status){
    console.log(status);
    socket.emit('status' ,status);
  }
  error(socket, msg){
    console.log(msg);
    socket.emit('err' ,msg)
  }

}
