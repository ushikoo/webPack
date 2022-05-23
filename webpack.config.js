
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',

    entry: ['./script.js'],
    output: {
        path: path.resolve(__dirname, 'main'),
        filename: 'boundle.js'
    },
    devServer: {
       

        static:{
            directory:path.resolve(__dirname,'main'),
        },
         
            port:8080,
            open:true,
            hot:true,
            compress:true,
            historyApiFallback:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],  
    
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                  loader:'babel-loader',
                  options:{
                    presets:['@babel/preset-env']
                   }
                }
            }
        ]
    }  
    
}