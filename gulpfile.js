var gulp = require('gulp');
let  config  = require(`./build/config.json`);
let commandInterface = require('./scripts/command-interface');
let server = require('./scripts/server');
let colors = require('colors');
let browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sassify = require('gulp-sass');
var concat = require('gulp-concat');
var jadeify = require('gulp-jade');
var path = require('path');
var watch = require('gulp-watch');
let socketIOClient = require('socket.io-client');
let child_process = require('child_process');
let jade = require('jade');
let autoprefix = require('gulp-autoprefixer');
let fs = require('fs');
let argvParser = require('./scripts/argv-parser');
let $argv = argvParser(process.argv);
let stdoutFormat = require('./scripts/stdout-format');
let appClients = {};

// use this command to run app
// gulp init -env:dev

process.name = 'Firebase Dashboard';
let currentEnv = $argv.env || config.defaultEnviroment;
let hotReload = typeof $argv.hotReload === 'boolean' ? $argv.hotReload : config.hotReload;



console.log(hotReload, $argv.hotReload  , typeof $argv.hotReload  , $argv);

commandInterface.loadTasks([
  'startApp',
  'scss',
  'jadeify',
  'inject-html',
  'hot-reload',
]);

let hotReloadServer = require(`./build/app`)(browserSync);

let tasks = [
  'scss',
  'inject-html',
  'hot-reload',
  'watches',
];


gulp.task('init' ,tasks);
gulp.task('restart' ,restart);
gulp.task('startApp' ,startApp);
gulp.task('scss',scss);
gulp.task('jadeify', _jadeify);
gulp.task('watches',watches);
gulp.task('sync-firebase', syncFirebase);
gulp.task('inject-html' ,injectHTML);
gulp.task('hot-reload' ,hotReloadServer);



let dest = {
  jade:'',
  scss:'',
  currentDB:null,
  assets:{
    app:'',
    static:'',
    item:''
  }
}


let socket = socketIOClient.connect(`http://localhost:${config.ports.dev}`);

let chrome_path  = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
($argv.chrome || config.chrome) && child_process.execFile(chrome_path ,[`http://localhost:${config.ports.proxy}`]);


socket.on('reload' ,function(){
  console.log('apps reloading')
});



function reload(done){
  socket.emit('reload');
  //done();
}
// servers will be hanndled by command intterface


function restart(done){
  if(!appClients['main'].connected){
    startApp(done);
    return
  }
  appClients['main'].kill();
  appClients['main'].on('close' ,function(){
    startApp(done)
  });
  //console.log(appClients['main'])
}

function startApp(done){

    appClients['main'] = child_process.fork(`./build/app.js` ,process.argv.slice(2),{stdio:'pipe' ,silent:true});
    appClients['main'].stdout.setEncoding('utf8');
    appClients['main'].stderr.setEncoding('utf8');
    appClients['main'].stdout.on('data',function(msg){
      console.log(msg);
      console.log(stdoutFormat(msg));

    });
    appClients['main'].stderr.on('data',function(msg){
      console.log('[MAIN]'.red.bold, msg);
      console.log("[MAIN]".red.bold ,'has been terminated');
      appClients['main'].kill();

    });

    done()
}



function injectHTML(done){
  let _config = require('./build/config.json');

  let html = jade.renderFile(`./build/server/views/base.jade` ,
    {config:_config , env:'dev' , dev_port:_config.ports.dev} );
  fs.writeFile(`./build/server/static/index.html` ,html ,function(err){
    if(err){
      console.log(err);
      done();
      return
    }
    browserSync.reload({stream:true});
    done()
  })
}

function syncFirebase(done){
  if(!dest.currentDB){
    done();
    return
  }
  let dbPath = null;
  let dbData = null;

  console.log("firebase syncing not enabled");
  done()
}

function plumberHandler(done){

  return {
    errorHandler(err){

      console.log((err.message).yellow);
      done(err);
    }
  }
}

function _jadeify(done){
  let stream;
  if(!dest.jade){
    done();
    return
  }
    injectHTML(done);
    stream = gulp.src(`build/server/views/*.jade`)
    .pipe(plumber(plumberHandler(done)))
    .pipe(gulp.dest(`build/views`))
    .pipe(browserSync.reload({stream:true}));

    return stream
}

function scss(done){
  let stream;
  stream = gulp.src(`build/components/**/*.scss`)
  .pipe(plumber(plumberHandler(done)))
  .pipe(sassify())
  .pipe(concat('styles.css'))
  .pipe(autoprefix( {browsers:['last 2 versions'], cascade:false} ))
  .pipe(gulp.dest(`build/server/static`))
  .pipe(browserSync.reload({stream:true}));

  return stream
}



let watchFiles = {
  backend:[
    `build/app.js`,
    `build/config.json`,
    `build/router/*.*`,
    `build/server/**/*.*`,
    `build/stores/*.*`,
    `build/workers/*.*`,
  ]
}
function watches(){


  watch(`build/components/**/*.scss` ,(e) =>{

    gulp.start('scss');
  });


    watch(['./build/server/views/*.jade' ,'./build/server/views/**/*.jade'] ,(e) =>{

      gulp.start('inject-html');
    });

  // watch('./firebase/db/*.yml' ,(e) =>{
  //   dest.currentDB = e.relative.replace(/\.yml$/,'');
  //   gulp.start('sync-firebase');
  // });

 }
