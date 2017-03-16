let argvParser = require('./server/core/argv-parser');
let argv = argvParser(process.argv);
let path = require('path');
let config = require('./config');
let history = require('connect-history-api-fallback');
let socketServer = require('./server/core/socket-server');
let jade = require('jade');
let fs = require('fs');

let browser = process.argv.indexOf('-b');
if(~browser && process.argv[browser + 1]){
  browser = process.argv[browser + 1];
}
function createApp(browserSync){
    socketServer.init(config);
    new socketServer(config);
      browserSync.init({
      middleware:[history()],
      serveStatic:[path.resolve(__dirname ,'server/static')],
      browser:browser || 'google chrome', 
      server:{
        baseDir:path.resolve(__dirname ,'server/static')
      },
      port:argv.port || config.ports.proxy
    });
    console.log("app started");

}
function init(browserSync){
    let file = path.resolve(__dirname , 'server/views/base.jade');
    let dest = path.resolve(__dirname ,'server/static/index.html');
    let newIndexFile = jade.renderFile(file ,{config:config , env:argv.env ,dev_port:config.ports.dev});
    fs.writeFileSync(dest,newIndexFile);
  //command line
  if(typeof browserSync === 'undefined'){
    browserSync = require('browser-sync').create();
    createApp(browserSync);
  }else{
    return createApp(browserSync)
  }

}


if(module.parent === null){
  init();
}else{
  module.exports = init;
}
