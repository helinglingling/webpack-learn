const path = require('path')
// 创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建之前，清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "生产环境"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
}