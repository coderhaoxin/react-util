'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'example/index'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'example.js'
  },

  externals: {
    react: 'React'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        loose: 'all',
        stage: 0
      }
    }]
  },

  devtool: 'source-map'
}
