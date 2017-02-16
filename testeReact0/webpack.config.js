'use strict'

const path = require('path')
//path < module of node
//porque utilizar const? path é uma var global, logo evito problemas de sobrescrição em minha app
const webpack = require('webpack')
//exportação com module.exports do CommonJS para trazer o objeto 
const validate = require('webpack-validator') // require do validate para ajudar no webpack

//que o webpack precisa pra ler nosso arquivo e gerar o bundle (pacote ECMAS5)
module.exports = validate( { //exported direct in validate to verify webpack
//estrutura do bojeto
    devtool: 'source-map', //gera mapa do bundler Scode

        entry: [ 
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.join(__dirname, 'src', 'index')

        ],
        //entry to webpack read: path of file main, dirname var global node, paste src file main, name index file main
        //path join tratamento do path para todos S.O.

        output: {
            //output : where the webpack save the file
            path: path.join(__dirname, 'dist'),//path to webpack save 
            filename: 'bundle.js',//name of file save
            publicPath: '/dist/' //local onde o webpackdevserver assiste/serve o file (bundle) de dev (virtual)
        },

        plugins:[
            new webpack.HotModuleReplacementPlugin()//action to dev
        ],

        module: {
            loaders: [{//colocando preLoaders ele acusou um erro
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/, 
                loader: 'standard' 

            }],

            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: /src/, 
                loader: 'babel-loader' 

            }]

        }
         /* 
            objeto do webpack --- modules --- loaders
            //tratar cada tipo de file
            //regex pega todo file.js 
            //ignorar files node_modules
            //procurar em src
            // babel irá compilar files.js
             */
})//function validate



