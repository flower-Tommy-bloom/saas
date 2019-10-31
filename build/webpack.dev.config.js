/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require('path')
const baseWebpackConfig = require('./webapck.base')
const merge = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')
const px2rem = require('postcss-px2rem')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options:{
                ident:'postcss',
                plugins:() => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer:{
                      flexbox: 'no-2009'
                    }
                  }),
                  px2rem({remUnit:37.5})
                ]
            }
          },
          'less-loader',
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
      },
      clearConsole: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: config.dev.port,
    host: config.dev.host,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig)
})
