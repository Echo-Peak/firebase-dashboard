let WMI = require('node-wmi');
let child_process = require('child_process');
let colors = require('colors');



function kill(list) {
    let status = 0;
    return new Promise(function(resolve, reject) {

        let killer = function(command, newList) {

            newList.forEach((item ,index ,arr) => {
                child_process.exec(command.replace('{}' ,item.pid), function(stderr) {
                    status += 1;
                    if (status === arr.length) {
                        resolve();
                    } else {
                        stderr && reject(stderr.toString())
                    }
                })
            });

        }

        switch (process.platform) {
            case 'win32':{
                    //change object property names since platform dependant
                    let listCopy = list.map(function(item){
                      item.pid = item.ProcessId;
                      delete item.ProcessId;
                      return item
                    });
                    killer(`taskkill /pid {} /f` ,listCopy);
                }
        }
    });
}

class Process {
  constructor(){
    this.kill = kill;
    this.exists = this.exists;
  }
  /*
  uses node-wmi to query @param1{String , Object[]}
  @param1 required {String , Object[]}
  @param2 optinal flags {String[]}
  @param LAST callback {function}
  @return {undefined}
  */
  exists(...args){
    if(args.length < 1){
      throw new Error('1 or more arguments');
    }
    let callback = typeof args[args.length -1] === 'function' && args[args.length -1];


    if(!callback){
      throw new Error('expected last argument to be a callback function');
    }
    let lookfor = args[0];
    let lookfor_flags = Array.isArray(args[1]) && args[1];
    let query = WMI.Query().class('Win32_Process').properties(['caption','ProcessId', 'commandline']);
    let arrayList =[];

    let exec = function(err ,list){
      list = list.filter(e => e && e);

        if(list.length && !err){
            callback(true , list);
          }else{
            callback(false);
          }
    }

    switch(process.platform){
      case 'win32':{

        if(Array.isArray(lookfor) && lookfor.length){
          let c = 0;
          lookfor.forEach(function(item , index ,arr){
            query.where(`ProcessId='${item.pid}'`).exec(function(err ,list){

              c += 1;
              if(list){

                arrayList = arrayList.concat(list);
              }
              if(c === arr.length){
                exec(null ,arrayList);
              }

             });
          })
        }
        if(typeof lookfor === 'string' && lookfor.length){
          query.where(`name='${lookfor}.exe'`).exec((err ,list)=>{

            if(list && lookfor_flags && lookfor_flags.length){
              let newList = list.filter( item =>  lookfor_flags.some(e => item.CommandLine.includes(e)) );
              newList.length && exec(err , newList);

              if(!newList.length){
                exec('no matched' , []);
              }
            }else if(list && list.length){

              exec(err , list);

            }else{
              exec('not found' , []);

            }


          });
        }
      }
    }

  }
}

let cache_process;
if(require.main === module){
  cache_process = new Process();

}else{
  module.exports = new Process();
}


//EXAMPLES


  // function callback(){
  //   console.log('done');
  // }
  // let scripts = [
  //   {name:'foobar' ,flag:'--foo' ,use:'node'},
  //   {name:'robot' ,flag:'--robot' ,use:'node'},
  //   {name:'mocha' ,flag:'--mocha' ,use:'node'},
  // ];
  // let c = 0;
  // scripts.forEach(function(item,i, arr){
  //   debugger;
  //   cache_process.exists(item.use, [item.flag],function(bool ,list){
  //
  //     if(bool){
  //
  //          cache_process.kill(list).then(function(){
  //     c+= 1;
  //   //  console.log(list);
  //     if(c === arr.length){
  //       callback();
  //
  //     }
  //   });
  //     }else{
  //       c+= 1;
  //       if(c === arr.length){
  //         callback();
  //
  //       }
  //     }
  //   //  console.log(bool , list);
  //
  //
  //   });
  // })
//
// cache_process.exists([{pid:1234} ,{pid:4567} , {pid:8987}] ,function(bool ,list){
//   bool && cache_process.kill(list).then(function(){
//
//   });
// });
