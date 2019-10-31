const path = require('path')
module.exports = {
    mode:'production',
    entry: {
        vendors:['react','react-dom','react-router-dom']
    },
    output:{
        filename:'[name].dll.[hash:4].js',
        path:path.resolve(__dirname,'../dll'),
    },
}