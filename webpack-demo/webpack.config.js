const join = require('path').join

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: join(__dirname, 'dist')
    }
}