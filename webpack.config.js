const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx']
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
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=[path][name].[hash].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: 'dist/',
        open: true,
        inline: true,
        historyApiFallback: true
    }
};

if (process.env.NODE_ENV !== 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/main.html',
            inject: 'body'
        })
    ])
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HTMLWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ])
}