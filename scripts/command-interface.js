const readline = require('readline');
const colors = require('colors');
const child_process = require('child_process');
const webpack = require('webpack');
const subProcess = [];
let gulp = require('gulp');
const socketIO = require('socket.io-client');
const ps = require('ps-node');
const path = require('path');
const Process = require('./process'); //this is different than /built/core/process.js
const uuid = require('uuid');

let gulptasks;
let flags = {
  dev:process.argv.includes('--dev'),
  live:process.argv.includes('--live')
}

let processIDs = {};
let scriptID = function(name){
  processIDs[name] = '--'+uuid();
}

const config = require(`../build/config.json`);

console.log("Interface Loaded.".cyan.bold , 'Type "help" to see available commands');


let chrome_path  = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

let System = socketIO.connect(`http://localhost:${config.ports.dev}/system`);
System.on('kill' ,kill);

let Scripts = {
  webpack:{
    exec:'webpack',
    bin:'node',
    append:['--config'],
    path:process.cwd(),
    script:`./webpack.config.js`,
    argID:scriptID('webpack'),
    special:{
      flag:'use'
    }
  },
  mocha:{
    exec:'mocha',
    bin:'node',
    script:'./index.js',
    path:path.resolve(__dirname, `./tests`),
    argID:scriptID('mocha')
  },
  chrome:{
    exec:chrome_path,
    script:`http://localhost:${config.ports.http}`,
    argID:'--chrome',
    bin:'chrome',
    shell:false
  },
  main:{
    exec:'node',
    bin:'node',
    script:'./deploy/live/app.js',
    path:path.resolve(__dirname , 'apps/live'),
    argID:scriptID('main')
  },
  blog:{
    exec:'node',
    bin:'node',
    path:path.resolve(__dirname ,'scripts'),
    argID:scriptID('blog'),
    script:'./deploy.js'
  },
  backup:{
    exec:'node',
    bin:'node',
    path:path.resolve(__dirname ,'scripts'),
    argID:scriptID('backup'),
    script:'./backup.js'
  }

}

let platform_shell = {
  win32:{
    shell:'start cmd /k'
  },
  darwin:{
    shell:''
  },
  linux:{
    shell:''
  }
}


/*
  @param1 script {string} - name of script to choose from Scripts object
  @param2 args{object} - object containing several properties including arguments to pass into the script
  examples:
  run webpack --shell use:admin args:--displayReasons
  run electron args:--dev
*/
function runScript(script, args ,help ,callback){
  if(!script){
    console.log('expected script. type scripts to see available scripts');
    return
  }
  let getCallback = [...arguments].filter(e => typeof e === 'function');
  script = script.replace(/\r\n$/,'');
  if(!Scripts.hasOwnProperty(script)){
    console.log(`Script not found.  available: ${Object.keys(Scripts).join(', ')}`);
    return
  }
  if(help){
    let help = JSON.stringify(Scripts[script].special , null, 2);
    console.log(help || 'no extra arguments found');
    return
  }
  let shell = '';
  if(Scripts[script].shell !== false){
    shell = platform_shell[process.platform].shell;
  }
  let cwd = Scripts[script].path ? Scripts[script].path : process.cwd();
  let specialFlags =  Scripts[script].special ? Scripts[script].special : '';
  let id = processIDs[script];
  let filename = Scripts[script].script ? Scripts[script].script : '';
  let _args = args.args.join(' ') || '';
  let scriptSpecificArgs = Scripts[script].append ? Scripts[script].append.join(' ') : '';

  if(specialFlags && args[specialFlags.flag]){
    specialFlags = `--${specialFlags.flag} ${args[specialFlags.flag]}`
  }else if(!args[specialFlags.flag] && specialFlags.flag){
    console.log(`expected ${specialFlags.flag}:<string> to be passed`);
    return
  }
  let safetyQoutes = Scripts[script].exec.match(/\\|\//g) && `"${Scripts[script].exec}"` || Scripts[script].exec;

  let startWith  = args.shell ? `${shell} ${safetyQoutes} ${scriptSpecificArgs}`: `"${Scripts[script].exec}"`;


  let EXEC = `${startWith} ${filename} ${specialFlags} ${id} ${_args}`;

  console.log(`running ${script}`.green.bold );
  child_process.exec(EXEC ,{cwd} ,function(stderr ,stdout){
    getCallback[0] && getCallback[0]();

    args.stdout  && !args.shell && stderr ? console.log(stderr) : console.log(stdout);

  });

}

function killScript(script){

  if(!script){
    console.log('expected script name');
    return
  }
  if(!script in Scripts){
    console.log('script not found.');
    return
  }
  let bin = Scripts[script].bin;

  let id = processIDs[script];
    Process.exists(bin ,[id],function(bool ,list){

      bool && Process.kill(list).then(function(){
        //console.log(list);
        console.log(`killed ${list[0].Caption} - ${list[0].pid}`.green.bold);
      });
    });

}

function kill(done){

  let status = 0;
  let keys = Object.keys(Scripts);

  keys.forEach(function(item ,index ,arr){
    //TODO: undifined case!!!!
    Process.exists(Scripts[item].bin ,[processIDs[item]] ,(bool , list)=>{

      if(bool){
        Process.kill(list).then(()=>{
          status += 1;
          status === arr.length && done();
        });
      }else{
        status += 1;
        status === arr.length && done()
      }
    })
  });

}


function help(){
  console.log(`
    Run script inside of another shell: use --shell
    Run script inside of parent shell & use parent stdout: use --stdout
    Pass arguments to a script: args:[...arguments seperated by ',']

    Type:
    ${'clear'.green} - to clear console
    ${'scripts or list'.green}  - to show list of scripts to run
    ${'run <script-name> ? '.green}  - to show special properties

    Scripts:
    ${'run'.green} - <script-name>  ...args
    ${'test'.green} - args
    ${'electron-packager'.green} -  out:<optional(string)>  msi:<optional(boolean)> ...args
    ${'restart'.green}
    ${'kill'.green} - script:<script-name>
    ${'electron'.green} - ...args

    `);
}
function runGulpTask(task){
  //console.log(process.env , process.env.tasks)
  if(!gulptasks){
    console.log("gulptasks not defined");
    return
  }
  if(!gulptasks.includes(task)){
    console.log('no task found')
  }else{
    console.log(`running '${task}' task`.green);
    gulp.start(task);
  }
}

function clearConsole(){
  process.stdout.write('\033c');
  console.log('console cleared!'.green.bold);
}
let stdin = process.stdin;
stdin.setEncoding('utf8');

stdin.resume();

function listScripts(){
  let s = Object.keys(Scripts).map(e => e.cyan.bold).join(', ');
  console.log(s)
}

let regex = /(([a-z0-9]+)\:(\[?([a-z0-9\-\.,"'\~]+))\]?)/gi;
stdin.on('data',function(key){
  key = key.replace(/\r\n/g,'');
let extraArgs;
let args = key.match(regex);

  if(args){
    extraArgs = args.reduce(function(start ,item){

      let i = item.split(':');

      if(i[1] === 'true' || i[1] === 'false'){
        start[i[0]] = JSON.parse(i[1]);
      }
      if(i[1].match(/,/g)){
        start[i[0]] = i[1].split(',');
      }
      if(i[1].match(/\d+/g)){
        start[i[0]] = parseInt(i[1]);
      }

      start[i[0]] = i[1];

      return start
    },{});
  }else{
    extraArgs = {}
  }

  extraArgs.shell = key.includes('--shell');

  extraArgs.stdout = key.includes('--stdout');
  extraArgs.args = extraArgs.args ? extraArgs.args.split(',')
  .map(e => e.trim())
  .filter(e => e.length) : [];

  let command = key.match(/^[a-z\-]+/i);
  command = command ? command[0] : '';
  let binary = extraArgs.bin;
  let segments = key.split(' ');

  switch(extraArgs.path){
    case '~':extraArgs.path = process.cwd();break;
  }
  command.match(/quit|exit|stop|q/) && SIGKILL();
  let questionMark = key.includes('?');

  switch(command){

    case 'kill':killScript(segments[1]);break;
    case 'test':loadMocha(extraArgs);break;
    case 'build':build(extraArgs);break;
    case 'help':help();break;
    case 'run':runScript(segments[1] ,extraArgs ,questionMark);break;
    case 'clear':clearConsole();break;
    case 'scripts': // intentional fall through
    case 'list':listScripts();break;
    case 'task':runGulpTask(segments[1]);break;
    default:{
      console.log(`'${(command.toString()).yellow.bold}' not found. type 'help' to list available commands`)
    }
  }
});


let isKilling = false;
function SIGKILL(){
    if(!isKilling){
    isKilling = true;
    console.log("killing build process".red.bold);

    kill(function(){
      console.log("build process killed!".cyan.bold);
     process.exit();
    });
  }else{
    console.log("waiting".yellow);
  }

  //temp
  setTimeout(function(){
    console.log("force quit");
    process.exit();
  },8000);
}
process.on('SIGINT', SIGKILL);

module.exports = {
  runScript(scriptName ,newOpts, callback){
    let opts = {shell:false,stdout:true, args:[]}
    if(arguments.length >= 3){
      opts = Object.assign(opts, newOpts);
    }
    if(!(scriptName in Scripts)){
      callback()
    }else{

      runScript(scriptName ,opts ,'', callback)
    }
  },
  loadTasks(tasks){
    let gulptasks = tasks;
  }
}
