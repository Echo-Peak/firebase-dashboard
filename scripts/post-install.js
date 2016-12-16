let readline = require('readline');
let fs = require('fs');
let config = require('../build/config');
let path = require('path');
let child_process = require('child_process');

let regex = {
  url:/^https\:\/\/[a-z0-9\- ]+\.firebaseio.com\/?$/i
}
let rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
let dest = path.resolve(__dirname ,'../build/keys');
let configDest = path.resolve(__dirname ,'../build/config.json');

rl.question('Enter firebase databaseURL: ' ,(url)=>{
  if(url.match(regex.url)){
      config.databaseURL = url;
      rl.question('Enter location of service key: ' ,(_path)=>{

        _path = _path.replace(/\"|\'/g ,'');

        let serviceKey;

        if(path.isAbsolute(_path)){
          serviceKey = _path
        }else{
          serviceKey = path.resolve(_path);
        }
        let filename = path.basename(serviceKey);


        try{
          fs.accessSync(serviceKey , fs.F_OK);
          config.admin_service_key = `../../keys/${filename.replace('.json' ,'')}`;
          fs.createReadStream(serviceKey).pipe(fs.createWriteStream(`${dest}/${filename}`));
          fs.writeFileSync(`${configDest}` , JSON.stringify(config));
        }catch(err){
          console.log(err);
          process.exit();
          rl.close();
        }

        rl.question('run firebase-dashboard?(Y/n): ' ,(answer)=>{
          if(answer === 'y'){
            child_process.exec(`start cmd /k node ./build/app.js` ,{cwd:process.cwd()});

          }else{
            rl.close();
            process.exit();
          }
          rl.close();
        });
    });
  }else{
    console.log("invalid firebase url");
    rl.close();
  }

});
