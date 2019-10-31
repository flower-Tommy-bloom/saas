/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webapck.base')
const merge = require('webpack-merge')

const prod = merge(baseWebpackConfig,{
  mode:'production',
  stats:'normal',
  plugins:[
    new CleanWebpackPlugin(),
  ]
})
module.exports = prod