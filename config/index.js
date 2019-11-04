/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'
const path = require('path')
/**获取本机ip**/
function getIPAddress(){
  var interfaces = require('os').networkInterfaces()
  for(var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

module.exports = {
  dev: {
    proxy: {
      '**': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        filter: function(pathname, req) {
          // const isApi = pathname.indexOf('/aspire-demo') == 0
          // return isApi
        }
      }
    },
    host: getIPAddress(),
    port: process.env.PORT || 8081, 
    devtool: 'eval-source-map',
  },

  build: {

  }
}
