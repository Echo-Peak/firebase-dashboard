import Global from './index';
import {observable ,action} from 'mobx';
import {regex} from '../../components/util/regex';
import uuid from '../../components/util/uuid';
import Ajax from 'superagent';

export default class Util{
  constructor(mobx$ ,requestMessages, superClass){
    this.$ = mobx$;
    this.msg = newMessage => requestMessages.then(msg => msg.say(newMessage));
    this.requestMessages = requestMessages;
    this.socket = window.firebase_dashboard.sockets.db;
    this.superClass = superClass;

  }
  @action setEditor(editor){
    console.log("interactive editor mounted");
    this.$.editor = editor;
  }
  @action setProp(prop ,value){
    let nested = prop.split('/');
    if(nested.length === 1){
      this.$[prop] = value;
    }
    if(nested.length === 2){
      this.$[nested[0]][nested[1]] = value;
    }
    if(nested.length === 3){
      this.$[nested[0]][nested[1]][nested[2]] = value;
    }
    //console.log(prop , value);
  }
  @action setView(obj){
    console.log("setting view...");
    if(obj){
      this.$.currentView = JSON.stringify(obj);
      this.$.editor.setValue(obj);
    }else{
      this.$.currentView = null;
      this.$.editor.setValue(false);
    }
  }

  @action query(path){
    console.log("querying" ,path);
    this.socket.emit('query' ,path);
  }
  @action setupWatch(bool){
    this.$.config.editor.showRoot = bool;
    console.log("currently watching" ,bool);
    if(this.$.active === '/' && bool){
      if(this.$.rootSnapshot){
        this.setView(this.$.rootSnapshot);
      }else{
        this.query('/');
      }

    }else{
      this.setView({});
    }
  }
  @action importFromURL(url){
    let self = this;
    console.log(`importing from ${url}`);
    if(url.match(regex.url)){
      let request = Ajax.get(url).send().set('Accept' ,'application/json')
      .end((err ,res)=>{
        if(err){
          this.msg(`Error fetching ${url}`);
          return
        }
          try{
            let data = JSON.parse(res.text);

          let messageToSay = `This will overwrite '${this.$.active}' path! Continue?`;
          let actions = [
            {label:'Yes',callback(){
              self.setView(data);
              self.requestMessages.then(msg => msg.cancel());
              self.socket.emit('sync' , {path:self.$.active , method:'set', data:data});
            }},
            {label:'Cancel' , callback(){
              self.requestMessages.then(msg => msg.cancel());
            }}
          ];
          this.requestMessages.then(msg => msg.specialSay(messageToSay, actions));
        }catch(err){
          this.msg(`Error parseing JSON | ${err.toString()}`)
        }

      })
    }else{
      this.msg('invalid url')
    }
  }
  @action importFromLocal(incomingData){
    let self = this;
    console.log(`importing locally`);
    let messageToSay = `This will overwrite '${this.$.active}' path! Continue?`;
    let actions = [
      {label:'Yes',callback(){
        self.setView(incomingData);
        self.requestMessages.then(msg => msg.cancel());
        self.socket.emit('sync' , {path:self.$.active , method:'set', data:incomingData});
      }},
      {label:'Cancel' , callback(){
        self.requestMessages.then(msg => msg.cancel());
      }}
    ];
    this.requestMessages.then(msg => msg.specialSay(messageToSay, actions));
  }
  @action switchMode(nextMode){
    let modes = this.$.modes;
    console.log(`switched to ${nextMode}`);
    if(modes.includes(nextMode)){
      this.$.config.mode = nextMode
    }else{
      this.msg('invalid mode')
    }
  }
  @action useSnapshot(snapshotName){
    console.log(`now using snapshot '${snapshotName}'`)
    if(this.$.snapshots.includes(snapshotName)){
      this.$.selectedSnapshot = snapshotName;

    }else{
      this.msg(`Cant find snapshot '${snapshotName}'`)
    }
  }
  @action failsafe(){
    console.warn(`About to switch databases!!! to ${this.$.selectedSnapshot}`);
    let confirm = window.confirm(`THIS CANT BE UNDONE! Countie anyways?`);
    if(confirm){
      this.socket.emit('use-snapshot' , this.$.selectedSnapshot);
    }
  }
  @action togglePersistToDisk(bool){
    this.$.config.persistToDisk = bool;
    let config = this.$.config;
    this.socket.emit('sync-config',JSON.stringify(config));

  }
  @action setupRoot(bool){
    this.$.config.editor.showRoot = bool;
    console.log("show root enabled");
  }
  @action toggleCacheChecking(bool){
    console.log(`toggleing cache checking`);
    this.$.config.cacheChecking = bool;
    let config = this.$.config;
    this.socket.emit('sync-config',JSON.stringify(config));
  }
}
