import {observable ,computed ,action ,observe ,autorun} from 'mobx';
import Global from './index';
import {regex} from '../../components/util/regex';
import debounce from '../../components/util/debounce';

export default class Traverse{
  constructor(mobx$ , requestMessages , superClass){
    this.$ = mobx$;
    this.requestMessages = requestMessages;
    this.msg = newMessage => requestMessages.then(msg => msg.say(newMessage));
    this.socket = window.firebase_dashboard.sockets.db;
    this.superClass = superClass;
  }
  @action query(path){
    this.$.active = path;
    this.socket.emit('query' ,path);
  }
  @action update(){
    this.global.then((parent)=>{

      let result = parent.check(this.$.currentView);
      if(!result){
        return
      }
      //this will be only updateing
      let data = this.$.editor.getValue();
      if(data){
        this.socket.emit('update-cache' ,{path:this.$.active , data:data});
        this.socket.emit('sync-firebase' ,{path:this.$.active , data:data , method:'update'});

      }
    });
  }
  @action query(nextPath){
    this.$.active = nextPath;
    this.socket.emit('query' ,nextPath);
  }
  @action back(){
    let active = this.$.active;

    if(active.match(regex.firebase_path)){
      let nextPath = active.split('/');
      nextPath.pop();

      if(nextPath.length === 1 && nextPath[0] === ''){
        nextPath = '/';
        this.setView(this.$.rootSnapshot);
        this.query('/');
      }else{
        this.setView(null);
        nextPath = nextPath.join('/');
        this.query(nextPath);
      }

    }
  }
  @action setCurrentDB(db){

      if(this.$.active === '/'){
        this.$.active = `${this.$.active}${db}`;
      }else{
        this.$.active = `${this.$.active}/${db}`;
      }

      this.socket.emit('query' ,this.$.active)

  }
  @action setView(obj){



    if(obj){
      for(let prop in obj){
        if(typeof obj[prop] === 'number'){
          obj[prop] = obj[prop].toString();
        }
      }
      this.$.currentView = JSON.stringify(obj);
      this.$.editor.setValue(obj);
    }else{
      this.$.currentView = null;
      this.$.editor.setValue(false);
    }
  }
  @action checkSize(json , callback){
    let js = JSON.stringify(json);
    let self = this;
    if(js.length > 8000){
      let actions = [
        {label:'Render' , callback(){
          self.requestMessages.then(msg =>{msg.cancel()})
          callback('render');
        }},
        {label:'show first 8000 chars' ,callback(){
          self.requestMessages.then(msg =>{msg.cancel()})
          callback('first 8000');
        }},
        {label:'cancel' ,callback(){
          self.requestMessages.then(msg =>{msg.cancel()})
          callback(null);
        }},
      ];
      this.requestMessages.then(msg =>{
        msg.specialSay('Content exeeds 8000+ chars!' ,actions)
      })
    }

  }
  limitJSONSize(json , limit){
    let score = 0;
    let newObj = {}

    let rootKeys = Object.keys(json).reduce((start , item) => start += item.length ,score);
    score += rootKeys;

    let walker = function(tree ,parentProp){
      if(score >= limit){
        return newObj
      }else{
       if(typeof tree === 'object'){
         for(let prop in tree){
           score += tree[prop].toString().length + prop.toString().length;
          walker(tree[prop], prop);
        }
      }else{
        newObj[parentProp] = tree
        }
      }


      return newObj
    }
    return walker(json);
  }
  @action prepareSnapshot(obj){
    let self = this;
    let totalLength = JSON.stringify(obj);
    let root = this.$.active === '/';
    let showRoot = this.$.config.editor.showRoot;
    let nodes = this.$.nodes;
    let charLimit = self.$.config.editor.charLimit;
    let actions = [
      {label:'Render' , callback(){
        self.setView(obj);
        nodes = Object.keys(obj);
        self.requestMessages.then(msg =>{msg.cancel()})

      }},
      {label:`show first ${self.$.config.editor.charLimit} chars` ,callback(){
        let data = self.limitJSONSize(obj , charLimit);

        nodes = Object.keys(data);
        if(!nodes.length){
          self.setView(null);
          self.msg(`could not render ${self.$.active}`);
          return
        }

        self.setView(data);
        self.requestMessages.then(msg =>{msg.cancel()})

      }},
      {label:'cancel' ,callback(){
        nodes = [];
        self.setView(null);
        self.requestMessages.then(msg =>{msg.cancel()})

      }},
    ];

    if(totalLength.length > this.$.config.editor.charLimit){
      if(root && showRoot){
        this.requestMessages.then(msg =>{
          msg.specialSay(`Content exeeds ${this.$.config.editor.charLimit} chars!` ,actions)
        });
      }else if(!root){
        this.requestMessages.then(msg =>{
          msg.specialSay(`Content exeeds ${this.$.config.editor.charLimit} chars!` ,actions)
        });
      }

    }

  }
  @action onQuery(snapshot){
    let self = this;
    let charLimit = self.$.config.editor.charLimit;
    let nodes = this.$.nodes;
    let totalLength = JSON.stringify(snapshot);
        if(snapshot){
          //this.prepareSnapshot(snapshot);

          if(!this.$.rootSnapshot){
            this.$.rootSnapshot = snapshot;
          }

          let nodes = Object.keys(snapshot);
          if(typeof snapshot === 'object' && snapshot !== null || Array.isArray(snapshot)){
            this.$.nodes = nodes;
          //  console.log(nodes);

          }else{
            this.$.nodes = [];
          }

          if(this.$.config.persistToDisk){
              this.socket.emit('sync-locally',{path:this.$.active , data:snapshot});
          }
        if(!this.$.config.editor.firstRun){
          this.$.config.editor.firstRun = true;
        }else{

          if(this.$.active === '/'){
            this.$.rootSnapshot = snapshot;

            this.$.config.editor.showRoot ? this.setView(snapshot) : this.setView(null)
          }else{
            if(totalLength.length > this.$.config.editor.charLimit){

              let actions = [
                {label:'Render' , callback(){
                  self.setView(snapshot);
                  nodes = Object.keys(snapshot);
                  self.requestMessages.then(msg =>{msg.cancel()})

                }},
                {label:`show first '${self.$.config.editor.charLimit}' chars` ,callback(){
                  let data = self.limitJSONSize(snapshot , charLimit);
                  nodes = Object.keys(data);
                  if(!nodes.length){

                    self.setView(null);
                    self.requestMessages.then(msg =>{
                      msg.cancel();
                      self.msg(`could not render ${self.$.active}`);
                    });
                    return
                  }
                  self.setView(data);
                  self.requestMessages.then(msg =>{msg.cancel()})

                }},
                {label:'cancel' ,callback(){
                  nodes = [];
                  self.setView(null);
                  self.requestMessages.then(msg =>{msg.cancel()})

                }},
              ];

              this.requestMessages.then(msg =>{
                msg.specialSay(`Content exeeds ${this.$.config.editor.charLimit} chars!` ,actions)
              });
            }else{
              self.setView(snapshot);
            }

          }
        }

      }else{
        this.setView(null);
        this.msg(`Nothing found at '${this.$.active}'`)
      }






  }
  @action queryInput(uncleanPath){
      if(uncleanPath.match(regex.firebase_path)){
      //  this.$.active = uncleanPath;
        this.query(uncleanPath);
      }else{

        if(this.$.active === '/' || !uncleanPath.lenth){
          this.setView(null);
          this.$.active = '/';
        }else{
          this.msg(`invalid path got '${uncleanPath}'`);

        }
      }

  }

}
