import 'amfe-flexible'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './routes'
import '@/style/index.less'
import API from '@/API'
React.$api = function(){
  return API
}

import 'weui'
import 'react-weui/build/packages/react-weui.css'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)
