'use strict';

let path = require('path');

module.exports = {
  entry: {
    bundle:  path.resolve(__dirname + '/src/index.jsx')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        loader: "style!css?sourceMap!postcss"
      }, {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  postcss: function () {
      return [require('autoprefixer'), require('precss')];
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  }
}


