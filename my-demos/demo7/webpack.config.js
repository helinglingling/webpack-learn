const path = require('path')
const webpack = require("webpack")
// 创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        math: './src/math.js'

    },
    plugins: [
        // 多页面开发
        new HtmlWebpackPlugin({
            template: './src/index.html',   
            filename: 'index.html',
            chunks: ['index']   // 对应关系,index.js对应的是index.html
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
            chunks: ['login']   // 对应关系,login.js对应的是login.html
        }),
        new HtmlWebpackPlugin({
            title: "tree shaking",
        }),
        // 移出js上下文未引用的代码
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    mode: "production"  // 压缩
}