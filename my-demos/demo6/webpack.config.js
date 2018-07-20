const path = require('path')
const webpack = require("webpack")
// 创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        // other: './src/another-module.js'

    },
    plugins: [

        new HtmlWebpackPlugin({
            title: "代码分离"
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common"  // 指定公共bundle的名字
        // })
    ],

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
}