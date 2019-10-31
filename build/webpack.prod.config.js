/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webapck.base')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const px2rem = require('postcss-px2rem')
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

const prod = merge(baseWebpackConfig, {
  mode: 'production',
  stats: 'normal',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true, // 开启缓存
        parallel: true, // 支持多进程
        sourceMap: true,
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009'
                  }
                }),
                px2rem({ remUnit: 37.5 })
              ]
            }
          },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [
    // 打包前 清理dist
    new CleanWebpackPlugin(),
    // 分离css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })

  ]
})
module.exports = prod