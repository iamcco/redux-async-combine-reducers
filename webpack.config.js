'use strict';

var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV;

var config = {
    devtool: false,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?presets[]=es2015'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ]
};

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    );
}

module.exports = config;

