const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/logic.js'],
    plugins: [
        new htmlWebpackPlugin({
            inject: 'body',
            template: 'index.html',
            filename: 'index.html',
            scriptLoading: "blocking"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
}
