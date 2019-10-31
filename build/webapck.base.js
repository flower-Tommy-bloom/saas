/* eslint-disable no-undef */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/App.js',
  },
  resolve:{
    alias:{'@':path.resolve(__dirname,'../src')},
    extensions:['.js','.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:['babel-loader'], // , 'eslint-loader'
        exclude:/node_modules/
      },
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
    })
  ]
}
