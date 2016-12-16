var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var socketIOClient = require('socket.io-client');
let config = require('./build/config');


let socket = socketIOClient.connect(`http://localhost:${config.ports.dev}`);


socket.on('kill' ,function(){
  process.exit();
});

let meta = {
firebaseDashboard:{
  path:path.resolve(__dirname , 'build/router/react-router.jsx'),
  out:'./build/server/static',
  include:[
    path.resolve(__dirname, './build/components'),
    path.resolve(__dirname, './build/router'),
    path.resolve(__dirname, './build/stores')
  ],
  vendors:[
    'react',
    'react-dom',
    'react-router',
    'material-ui' ,
    'react-motion' ,
    'react-swipeable-views' ,
    'react-markdown' ,
    'mobx',
    'mobx-react',
    'react-router-transition',
    'react-addons-css-transition-group',
    'simple-ajax'
 ]
}
}



let querys = {
    babel:{
      presets:['stage-0','es2015','react'],
      plugins:['transform-es2015-modules-commonjs','transform-decorators-legacy' , 'transform-class-properties']
    }
}



module.exports = {
    entry: {
      'bundle':meta['firebaseDashboard'].path,
      vendor:meta['firebaseDashboard'].vendors
    },
    output: {
          path:meta['firebaseDashboard'].out,
        filename: '[name].js'
    },
    cache: true,
    watch:true,
    module: {
        loaders: [
           {
              test: /\.jsx|\.js$/,
              include:meta['firebaseDashboard'].include,
              loader:`babel`,
              query:querys.babel
          },

          {
             test: /\.json$/,
             loader: `json`
         }
      ]

    },
resolve: {
        extensions: ['.js','.jsx','' ,'.json'],
        modulesDirectories: ['node_modules']
    },
plugins: [
    new CommonsChunkPlugin('vendor',"vendors.js"),
    new webpack.optimize.OccurrenceOrderPlugin(),
    function(){
    this.plugin("done", function(stats){
        if (stats.compilation.errors && stats.compilation.errors.length){
          //console BEEP
          console.log("\007"+stats.compilation.errors);

          return
        }
        socket.emit('reload');
    });
}

],


}
