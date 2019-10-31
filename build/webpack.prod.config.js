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
  module:{
    rules:[
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {loader:'less-loader',
            options: {
              name: '[name].[ext]', //  placeholder 占位符 name表示文件名 ext后缀 hash哈希值 例子:name:'[name]_[hash].[ext]',
              outputPath:'css/' // 把图片打包到images
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
  ]
})
module.exports = prod