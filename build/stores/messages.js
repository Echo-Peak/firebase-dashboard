import {observable ,computed ,action} from 'mobx';



export default class x_messages{
  @observable open = false
  @observable message = 'null'
  @observable actions = []
  @observable timeout = 4000

  @action setToggle(bool){
    this.open = bool
  }
  @action say(msg){
    this.message = msg;
    this.open = true;
  }
  @action specialSay(msg , actions){
    this.message = msg;
    this.actions = actions;
    this.open = true;
    this.timeout = 60000;
  
  }
  @action cancel(){

    this.message = 'null';
    this.actions = [];
    this.open = false;
    this.timeout = 4000;
  }
  constructor(){

  }


}
