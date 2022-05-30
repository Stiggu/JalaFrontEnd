const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        logic: './src/logic.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: 'body',
            template: 'index.html',
            filename: 'index.html',
            scriptLoading: "blocking"
        }),
    ],
}
