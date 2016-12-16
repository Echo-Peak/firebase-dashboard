import {observable ,computed ,action} from 'mobx';
import uuid from '../../components/util/uuid';
import {regex} from '../../components/util/regex';

export default class Modify{
  constructor(mobx$ , requestMessages , superClass){
    this.$ = mobx$;
    this.msg = newMessage => requestMessages.then(msg => msg.say(newMessage));
    this.requestMessages = requestMessages;
    this.socket = window.firebase_dashboard.sockets.db;
    this.superClass = superClass;
  }
  @action onSave(){
    //console.log(33, this.$.currentView);
  }
  @action undo(){
    console.log('undoing' , this.$.active);
    this.socket.emit('undo' ,this.$.active);
  }
  @action setView(obj){
    console.log('setting view...');
    if(obj){
      this.$.currentView = JSON.stringify(obj);
      this.$.editor.setValue(obj);
    }else{
      this.$.currentView = null;
      this.$.editor.setValue(false);
    }
  }
  @action sync(){
    console.log("syncing");
    if(this.$.active && this.$.currentView){
      if(this.$.config.editor.showRoot){
        this.$.syncing = true;
        this.socket.emit('sync', {path:this.$.active , method:'set' , data:JSON.parse(this.$.currentView)});
      }else if(this.$.active !== '/'  && this.$.currentView){
        this.$.syncing = true;
        this.socket.emit('sync', {path:this.$.active , method:'set' , data:JSON.parse(this.$.currentView)});
      }
    }
  }
  @action newItem(type){
    console.log("adding new item" ,type);
    let view = this.$.currentView;
    let allowAll = (type === 'object' || type === 'array' || type === 'number' || type === 'string');

    let getType = (_type) =>{
      let allTypes = {
        string:'',
        number:0,
        array:[],
        object:{}
      }
      return allTypes[type]
    }

    if(view !== null){
      try{
        let nextView = JSON.parse(view);
        let currentType = Array.isArray(nextView) ? 'array' : 'object';

        if(currentType === 'array'){

          nextView.push(getType(type));
        }
        if(currentType === 'object'){
          let id = uuid().match(/[a-z0-9]+$/i);

          let temp = {[`${type.toUpperCase()}_${id[0]}`]:getType(type)};

          nextView = Object.assign(nextView , temp);
        }
        this.setView(nextView);
      }catch(err){
        console.log("failed" ,err);
        this.msg(`cant add '${type}' to type '${typeof view}'`)
      }


    }

  }
  @action resetPath(){
    let path = this.$.active;
    let self = this;
    console.log(`Reseting ${path} to ealiest version for this session`);
    let actions = [
      {label:'Reset' , callback(){

        self.requestMessages.then(msg => msg.cancel());
        self.socket.emit('reset-path' , path);
      }},
      {label:'Cancel' , callback(){
        self.requestMessages.then(msg => msg.cancel())
      }}
    ];
    this.requestMessages.then((msg)=>{
      msg.specialSay(`Reset '${path}' to earliest version?` , actions)
    });
  }
  @action createNewPath(pathname){
    let match = pathname.match(regex.path);
    console.log(`creating new path ${this.$.active}/pathname`);
    if(match){
      if(match[0].trim().length){
        this.socket.emit('sync' ,{path:`${this.$.active}/${pathname}` , method:'update' ,data:{init:uuid()}});
        this.$.nodes.push(pathname);
      }else{
        this.msg('Invalid path')
      }
    }else{
      this.msg('Invalid path')
    }
  }
  remap(interate){
    for(let item = 0; item < interate; item ++){
      this.$.nodes[item] = item;
    }
  }
  @action deletePath(path , key){
    let index = this.$.nodes.indexOf(key);
    let view = JSON.parse(this.$.currentView);

    this.$.nodes = this.$.nodes.filter(e => e !== key);
    if(Array.isArray(view)){
      view.splice(index ,1);
      this.remap(this.$.nodes.length);
      this.setView(view);
    }else if(typeof view === 'object' && view !== null){
        this.setView(null);
    }



    this.socket.emit('sync',{path:`${this.$.active}/${pathname}` , method:'set' ,data:{}});
  }
}
