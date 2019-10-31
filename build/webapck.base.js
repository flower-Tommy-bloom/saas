/* eslint-disable no-undef */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: ['babel-polyfill','./src/main.js'],
  },
  resolve:{
    alias:{'@':path.resolve(__dirname,'../src')},
    extensions:['.js','.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[hash].js'
  },
  optimization:{
    usedExports: true,
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:['babel-loader', 'eslint-loader'],
        exclude:/node_modules/
      },
      {  
        test: /\.(woff2?|eot|ttf|svg|otf|png|jpg)$/,  
        use: [  
          {  
            loader: 'url-loader',  
            options: {  
              limit: '1024' ,
              name: '[name].[hash].[ext]',
              outputPath:'images/'
            }                        
          },  
        ]  
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon:'./src/assets/images/favicon.png'
    })
  ]
}
