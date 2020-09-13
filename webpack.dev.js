const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common,{
    mode : 'development',
    output : {
        path : path.join(__dirname,'public'),
        filename : '[name].bundle.js'
    },
    devtool : 'inline-source-map',
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})