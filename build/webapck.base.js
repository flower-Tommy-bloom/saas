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
    filename: 'js/bundle.[hash].js'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 3000, // 大于30k才会代码分割
      minChunks: 1, // 被引入了多少次才会进行代码分割
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~', // 连接符
      name: true,
      cacheGroups: {
        vendors: { // 符合在目录下的包，会打包到这个组里面。
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先级，优先级高，就使用哪种打包
          reuseExistingChunk: true // 复用
        },
        // default: { // 不符合上面的，就按照这个进行代码分割
        //   minChunks: 1,
        //   priority: -20, // 优先级
        //   reuseExistingChunk: true // 复用
        // }
      }
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
