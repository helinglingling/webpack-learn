const path = require('path')
// 创建html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 构建之前，清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
        math: './src/math.js'
    },
  
    mode: 'development',  //模式配置，默认压缩， production 切换至压缩输出,development 不压缩
    // 开发环境 配置，方便调试  
    devtool: 'inline-source-map',
    // 自动编译架子啊
    // 配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "模块热替换  + tree shaking",
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            // template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
}