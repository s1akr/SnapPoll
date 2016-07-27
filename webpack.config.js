const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    Result: "./Client/Result/app.js",
    Vote: "./Client/Vote/app.js"
  },
  output: {
      path: __dirname + '/Build',
      // publicPath: '/assets/',
      filename: "[name].bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
          {
            test: /\.css$/,
            loaders: ['style', 'css']
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react']
            }
          }
      ]
  }
};