let cwd = process.cwd();
var firebaseAdmin = require("firebase-admin");
let firebase = require('firebase');
let config = require('../../config');
let key = require(config.admin_service_key);
let db = config.databaseURL;
let fs = require('fs');
let path = require('path');
let yamlify = require('js-yaml');
let jsonify = require('json2yaml');
let colors = require('colors');
let uuid = require('uuid');

let root;
let cache = [];
let currntlyWatching = null;

let actions = {
  addToCache(_path , data){
    cache.push({uuid:uuid() , path:_path , date:Date.now(), data});
  },
  newConfig(_config){
    config = _config;
  },
  resetPath(_path ,callback){
    let filtered = cache.filter(e => e.path === _path).sort((a ,b) => a.date - b.date);


    if(filtered.length){
      let uuid = filtered[0].uuid;
      cache.forEach((item ,index) => {
        if(item.uuid === uuid){
          cache.splice(index ,1);
        }
      });

      root.child(_path).set(filtered[0].data);
      callback(filtered[0].data);
    }else{
      callback()
    }
  },
  getSnapshots(callback){
    let location = path.resolve(cwd , `build/${config.localDB}`);
    let currentDatabse = config.databaseURL.split(/\.|\//g)[2];
    fs.readdir(location , function(err , dirlist){
      if(err || !dirlist || !dirlist.length){
        callback();
        return
      }
      let avail = dirlist.filter(e => e.match(`SNAPSHOT-${currentDatabse}-`) && e);
      if(!avail.length){
        callback()
      }else{
        callback(avail)
      }
    });
  },
  undo(_path ,callback){
    let filtered = cache.filter(e => e.path === _path).sort((a ,b) => b.date - a.date);

    if(filtered.length){
      let uuid = filtered[0].uuid;
      cache.forEach((item ,index) => {
        if(item.uuid === uuid){
          cache.splice(index ,1);
        }
      });

      callback(filtered[0]);
    }else{
      callback()
    }
  },
  cache(){
    return cache

  },
  syncLocal(_path, value ,callback){
    let filename = _path.replace(/\//g ,'-');
    let location = path.resolve(cwd, `build/${config.localDB}/local/${filename}.json` );
     callback = typeof callback === 'function' ? callback : noop => null;
    try{
      fs.accessSync(location ,fs.FS_OK);
      fs.writeFile(location ,JSON.stringify(value ,null ,2) ,err => callback(err));
    }catch(err){
      fs.writeFile(location ,JSON.stringify(value ,null ,2), err => callback(err));
    }
  },
  restore:function(_path){
    //restores most oldest {_path} in cache
    let restorepoint = cache.filter(e => e.path === _path).sort((a , b) => a.date - b.date)[0];
    root.child(_path).set(restorepoint.data)
  },
  applyChange(_path , method , newValue , skip_cache , callback){
    if(!/^\/?[a-z0-9\-\/]/g.test(_path)) {
      console.log('invalid path got ' ,_path);
      return
    }
    if(!method && !newValue){
      console.log('must pass method & new value');
      return
    }
    console.log(`Syncing '${_path}' , '${method}'`);
    if(!skip_cache){
      cache.push({uuid:uuid() , path:_path , date:Date.now(), data:newValue});
    }
    if(config.persistToDisk){
      if((typeof newValue === 'object' && newValue !== null) || (Array.isArray(newValue)  && newValue.length)){
        this.syncLocal(_path ,newValue );

      }
    }
    let fixedData = newValue;

    if(Array.isArray(newValue)){
      fixedData =  fixedData.reduce((start , item ,index)=>{
        start[index] = item;
        return start
      },{});
    }
    switch(method){
      case 'set':{
        root.child(_path).set(newValue).then( e => callback());
      };break;
      case 'push':{ root.child(_path).push(newValue).then(e => callback()); };break;
      case 'update':{

        root.child(_path).update(fixedData).then(e => callback());
      };break;
    }
  },
  query(_path ,callback){


    root.child(_path).once('value' , snapshot =>{
      let data = snapshot.val();
      let map = cache.map(e => e.path);
      if(config.persistToDisk){
        if((typeof data === 'object' && data !== null) || (Array.isArray(data)  && data.length)){
          this.syncLocal(_path ,data );
        }
      }
      //only add uniqe paths as the earliest restore point for that path
      if(!map.includes(_path)){
        cache.push({uuid:uuid() , path:_path , date:Date.now(), data:data});
      }
      callback(data);

    });

  },
  newWatch(_path , bool , callback){
    if(bool){
      root.child(_path).off('value' ,callback);
    }
  },
  watch(_path , bool ,callback){
    if(bool){
      root.child(_path).on('value' ,snapshot => callback(snapshot.val()));
    }else{
      root.child(_path).off('value' ,callback.bind(this , null));
    }
  },
  // DATA is already stingifyed!
  exportToFile(_path , data , done){
    let location = path.resolve(cwd, `build/${config.localDB}`);
    let filename = _path.replace(/\//g,'-');
    fs.writeFile(`${location}/${filename}.json` ,data , done);
  },
  // DATA is already stingifyed!

  createSnapshot(done){
    let location = path.resolve(cwd, `build/${config.localDB}`);
    let databaseName = config.databaseURL.split(/\.|\//g)[2];
    root.once('value' ,(snapshot)=>{
      let filename = `SNAPSHOT-${databaseName}-${Date.now()}`;
      let data = snapshot.val();
      fs.writeFile(`${location}/${filename}.json` ,JSON.stringify(data, null ,2), done);

    });
  },
  useSnapshot(snapshot ,callback){
    let location = path.resolve(cwd, `build/${config.localDB}`);
    fs.readFile(`${location}/${snapshot}` ,function(err ,result){
      if(err || !result || result.length < 1){
        console.log(err);
        callback();
        return;
      }
      try{
        let json = JSON.parse(result);
        //console.log('ROOT SET TO ' ,snapshot);
        root.child('/').set(json);
        root.once('value' , _snapshot => callback(_snapshot.val()));
      }catch(err2){
        console.log(err2);
        callback();
      }
    });
  }
}
module.exports = function(){
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(key),
    databaseURL: db
  });

  firebase.initializeApp({
    databaseURL: db
  });

   root = firebaseAdmin.database().ref();


  return actions
};
