const path = require('path')

module.exports = {
    entry: './src',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}