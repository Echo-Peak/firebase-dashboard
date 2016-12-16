import {observable ,computed ,action ,observe ,autorun} from 'mobx';
import debounce from '../../components/util/debounce';
import {parse} from 'query-string';
import {browserHistory} from 'react-router';
import {regex} from '../../components/util/regex';
import uuid from '../../components/util/uuid';
import Ajax from 'superagent';

export default class firebase_interface{
  constructor(mobx$ , requestMessages ,superClass){
    //this methods add added to proto automatily

    this.$ = mobx$;
    this.msg = newMessage => requestMessages.then(msg => msg.say(newMessage));
    this.socket = window.firebase_dashboard.sockets.db;
    this.superClass = superClass;
    this.socket.emit('connected');
    this.socket.emit('snapshots');
    this.socket.on('status' ,this.status.bind(this));
    this.socket.on('err' ,this.error.bind(this));
    this.socket.on('config' ,this.loadConfig.bind(this));
    this.socket.on('sync-complete' ,this.doneSyncing.bind(this));
    this.socket.on('got-cache',this.checkBackendCache.bind(this));
    this.socket.on('got-snapshots',this.updateSnapshots.bind(this));
    this.socket.on('query-result' ,result =>{
      this.superClass.then(parent =>{
        parent.traverse.onQuery(result);
      });
    });
  }

  error(msg){
    console.error('ERROR',msg);
    if(msg && msg.length){
      this.msg(msg);

    }
  }
  status(msg){
    console.log('STATUS',msg);
    if(msg && msg.length){
      this.msg(msg);
    }
  }
  checkCache(){
    console.log("checking cache...");
    this.socket.emit('check-cache');
  }
  checkBackendCache(result){
    console.log(result);
  }
  updateSnapshots(newSnapshots){
    this.$.snapshots = newSnapshots;
  }
  doneSyncing(){
    console.log("done syncing");
    this.$.setProp('syncing' , false);
  }
  loadConfig(config){
    this.$.active = config.defaultNode;
    this.$.config.mode = config.defaultMode;
    this.$.config.databaseName = config.databaseURL.split(/\.|\//g)[2];
    this.$.config.keyboardSave = config.keyboardSave;
    this.$.config.persistToDisk = config.persistToDisk;
    this.$.config.watch = config.watch;
    this.$.config.databaseURL = config.databaseURL;
    this.$.config.cacheChecking = config.cacheChecking;
    this.$.config.editor.charLimit = 8000 || config.editor.charLimit;
    this.socket.emit('query' , config.defaultNode);
    this.setupKeyboard();
    console.log("config loaded.");
  }
  setupKeyboard(){
    let {modify} = this;

    this.$.config.keyboardSave && window.addEventListener('keydown' , (e)=>{
      if(e.key === 's' && e.ctrlKey){
        e.preventDefault();
        debounce(modify.onSave.bind(modify),800)()
      }

    });

  }
}
