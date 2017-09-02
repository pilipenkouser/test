// global.Promise         = require('bluebird');

var webpack            = require('webpack');
var path               = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    filename: 'app/bundle.js',
    // publicPath: __dirname + "/build/",
    path: __dirname + '/build/'
  },
  devtool: 'cheap-inline-module-source-map',
  resolve: {},
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: [ '/node_modules']
      },     
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }, 
            {
              loader: 'autoprefixer-loader'
            },  
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'autoprefixer-loader']
        })
      },
      { 
        test: /\.(jpg|png|svg|gif)$/, 
        loader: "file-loader" ,
        options: {
          name: '[name].[ext]',
          // publicPath: '/img/',
          outputPath: '/img/',
          // useRelativePath: true,
          // context: ''
        }
      }
      
    ]
  },
  plugins: [
    new ExtractTextPlugin('./style/index.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: __dirname + '/src/index.html'
    })
  ],
  devServer: {
    stats: 'errors-only'
  }
}

