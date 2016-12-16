let socketIO = require('socket.io');
let http = require('http');
//let syncFirebase  = require('./sync-firebase');





let config  = require(`../build/config.json`);
let server = http.createServer(function(){});

console.log('server started' ,config.ports.dev );
let io = socketIO(server);
server.listen(config.ports.dev);


class Socket{
  constructor(socket){
    console.log("new socket");
    socket.on('reload' ,function(){
      console.log("realoding");
      socket.emit('reload');
      socket.broadcast.emit('reload');
    });
    socket.on('kill' ,function(){
      socket.emit('kill');
      socket.broadcast.emit('kill');
    });

    // socket.on('sync-firebase' ,function(changes){
    //
    //   if(!changes.path && !changes.data && !changes.method){
    //     console.log('error syncincg firebase. invailid changes got ', changes);
    //     return
    //   }
    //   syncFirebase.applyChange(changes.path , changes.method,  changes.data)
    // });
    // socket.on('rollback-firebase' ,function(howFar, path){
    //   syncFirebase.rollback(howFar , path);
    // });
    // socket.on('restore-original-path' ,function(path){
    //   syncFirebase.restore(path);
    // });
    // socket.on('firebase-cache' ,function(path){
    //   socket.emit('firebase-cache' ,syncFirebase.cache() )
    // });
    // socket.on('update-cache' ,function({path , data}){
    //   syncFirebase.addToCache(path , data);
    // });
    //
    // socket.on('undo-firebase' ,function(path){
    //   socket.emit('undo-firebase' ,syncFirebase.undo(path))
    // });
    // socket.on('query' ,function(path){
    //   syncFirebase.query(path , function(result){
    //
    //     socket.emit('query-result' ,result)
    //   })
    // });
    // socket.on('firebase-config' ,function(config){
    //   if(config.hasOwnProperty('watch')){
    //     syncFirebase.toggleMode(config.watch);
    //   }
    //
    // });
  }
}
io.on('connection' ,function(sock){
  new Socket(sock)
})
