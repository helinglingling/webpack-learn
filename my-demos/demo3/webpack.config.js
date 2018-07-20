const path = require('path')
// 创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建之前，清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    // 开发环境 配置，方便调试  
    devtool: 'inline-source-map',
    // 自动编译架子啊
    // 配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    devServer: {
        contentBase: './dist',
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "开发配置"
        })
    ]

}