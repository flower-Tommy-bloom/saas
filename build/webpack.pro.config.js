/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  mode:'production',
  resolve:{
    alias:{'@':path.resolve(__dirname,'../src')},
    extensions:['.js','.jsx'],
  },
  entry:{
    main:'./src/App.js'
  },
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.[hash].js'
  },
  module:{
    rules:[
      {  
        test: /\.(woff2?|eot|ttf|svg|otf|png|jpg)$/,  
        use: [  
          {  
            loader: 'url-loader',  
            options: {  
              limit: '1024' ,
              name: '[name].[hash].[ext]'  
            }                        
          },  
        ]  
      },
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
          'less-loader'
        ]
      },
      {
        test:/\.(js|jsx)$/,
        use:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  devtool: false,
  plugins:[
    new CleanWebpackPlugin(),
    // html 模板插件
    new HtmlWebpackPlugin({template:'./index.html'}),
    // 启用作用域提升,让代码文件更小、运行的更快
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // 提取公共代码vendors
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'vendors',
    //   filename:'[name].[hash:4].js'
    // }),
    // 抽离出css
    // new ExtractTextPlugin('style.css'),
    // 压缩js代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: true,
    //     pure_funcs: ['console.log']
    //   }
    // }),
  ]
}
