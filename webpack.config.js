var path=require('path');

var config={
    entry:path.resolve(__dirname,'app/main.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            query: {  
                presets: ['react', 'es2015']  
              }
        }]
    }
}
module.exports =config;
