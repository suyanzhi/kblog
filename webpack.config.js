'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './app/public/js/app.js',
    output: {
        path: path.join(__dirname, 'app/public/js'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css', },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
};
