import globalStore from './global';
import x_messages from './messages';
import x_device from './device';



function requestStore(name){
  return new Promise(function(resolve){
    let i = null;
    clearInterval(i);
    i = setInterval(function(){
      if(STORES && STORES[name]){
        resolve(STORES[name]);
        clearInterval(i)
      }
    },10);
  })
}

export let STORES = {
  global:globalStore(requestStore('messages') ,requestStore('global') ),
  messages:new x_messages(),
  device:new x_device(requestStore('global'))
}

export let actions = {
  inject(...storesArray){
    return storesArray.reduce((start ,item)=> {
      if(STORES.hasOwnProperty(item)){
        start[item] = STORES[item];
      }else{
        start[item] = null
      }

      return start
    },{})
  }
}
// console.warn('stores enabled');
// window.STORES = STORES
