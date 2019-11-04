/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    main: ['babel-polyfill', './src/main.js'],
    // vendors: ['react', 'react-dom', 'react-router-dom']
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '../src') },
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/bundle.[hash].js',
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|svg|otf|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '1024',
              name: '[name].[hash].[ext]',
              outputPath: 'images/'
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './src/assets/images/favicon.png'
    }),
    // // 启用作用域提升,让代码文件更小、运行的更快
    // new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}
