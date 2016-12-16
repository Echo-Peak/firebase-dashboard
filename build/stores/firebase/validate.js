import Global from './index';
import {observable ,action} from 'mobx';

export default class Validator{
  constructor(mobx$ , requestMessages){
    this.$ = mobx$;
    this.msg = newMessage => requestMessages.then(msg => msg.say(newMessage));
    this.timeout = null;
    this.socket = window.firebase_dashboard.sockets.db;
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
  @action check(json){
    console.log("checking json...");
  //  console.log(json);

    clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>{
      if(this.$.validJSON){
        this.$.syncing = true;
        this.socket.emit('sync', {path:this.$.active , method:'set' , data:JSON.parse(this.$.currentView)});
      }else{

      }
      this.$.validJSON = null;

    },4000);

    try{
      let newview = JSON.parse(json);
      for(let prop in newview){
        if(typeof newview[prop] === 'number'){
          newview[prop] = newview[prop].toString();
        }
      }
      this.$.validJSON = true;
       this.$.currentView = json;

    }catch(err){
      this.$.validJSON = false;
      this.$.currentView = json;
      this.msg(err.toString());

    }
    //console.log(this.$.validJSON);
  }
  @action checkEditor(errorArray){
    if(this.$.config.mode === 'interactive' && this.$.currentView){

      this.$.syncing = true;
      this.socket.emit('sync', {path:this.$.active , method:'set' , data:JSON.parse(this.$.currentView)});
    }

  }
  resetValidateUI(){

  }
}
