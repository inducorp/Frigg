const fs = require('fs');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['stage-0', 'es2015', 'react']
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?name=[path][name].[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html'
        })
    ]
};