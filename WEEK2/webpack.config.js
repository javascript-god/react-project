const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // resolve: {
    //     extensions: ['.jsx']
    // },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hi World!',
            template: './src/index.html'
        })
    ]
};