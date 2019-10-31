const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const config = require('../config')

const dev = {
  stats: 'errors-only',
  entry: {
    main: ['babel-polyfill', './src/App.js'],
  },
  resolve:{
    alias:{'@':path.resolve(__dirname,'../src')},
    extensions:['.js','.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:['babel-loader', 'eslint-loader'],
        exclude:/node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '1024'
          }
        }, ]
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
      },
      clearConsole:true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
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
}

module.exports = new Promise((resolve, reject) => {
  resolve(dev)
})
