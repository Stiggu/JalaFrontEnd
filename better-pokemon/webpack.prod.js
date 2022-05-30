const {merge} = require('webpack-merge');
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const EncryptModule = require("webpack-encrypt-nodejs-module");
const JavaScriptObfuscator = require("webpack-obfuscator");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/build'
    },
    plugins: [
        new EncryptModule({
            algorithm: "aes-192-cbc",
            keylen: 24,
            ivlen: 16,
            password: "ufJlWkf/9LMkJm4C18mw4fiT15RpDD8JgHOBan9hcCM06C9MN0a01FjrV7IQ8KurvXQcXwreoAEn3JoJq5KxYebfLuJhBA4PxFAPz6zXMxXr9NyeoTAPFQC3ZYWhhPtuODlXwtz44NntIUiqwqYn/UvGMJh/yAT0jWxTd4L8g2Y=",
            envVar: "PROTECTION_KEY",
        }),
        new JavaScriptObfuscator(
            {
                // obfuscate code first
                unicodeEscapeSequence: true,
                rotateUnicodeArray: true,
            },
            ["excluded_bundle_name.js"]
        ),
        new CopyPlugin({
            patterns: ["package.json"],
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    externals: [nodeExternals()],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devtool: 'source-map'
})