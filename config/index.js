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
    proxyTable: {
        '**': {
            target: 'http://IP',
            changeOrigin: true,
            filter: function(pathname, req) {
                const isApi = pathname.indexOf('/aspire-demo') == 0;
                return isApi;
            }
        }
    },
    host:getIPAddress(), // host:'0.0.0.0',动态获取当前机器IP地址
    port: process.env.PORT || 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    devtool: 'eval-source-map',
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
