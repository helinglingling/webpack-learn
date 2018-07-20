const webpack = require("webpack")
const merge = require("webpack-merge")   // 合并
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')   // 压缩
const common = require("./webpack.common.js")

module.exports = merge(common,{
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        // 指定生产环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })   
    ]
})
