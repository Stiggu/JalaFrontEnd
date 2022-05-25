const { merge } = require('webpack-merge');
const common = require("./webpack.common");

module.exports = merge(common, {
    mode:'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
})