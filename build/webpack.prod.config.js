/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webapck.base')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const prod = merge(baseWebpackConfig,{
  mode:'production',
  stats:'normal',
  module:{
    rules:[
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          {loader:'css-loader'},
          {loader:'less-loader'}
        ]
      }
    ]
  },
  plugins:[
    // 打包前 清理dist
    new CleanWebpackPlugin(),
    // 分离css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
})
module.exports = prod