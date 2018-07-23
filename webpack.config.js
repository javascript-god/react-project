const path = require('path');

module.exports = {
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};