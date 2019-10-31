'use strict'

const path = require('path')
const config = require('./config')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot: true,
    watchOptions: {
      poll: true,
    },
    port: 8083,
  },
  ...config
}
