var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV;

var config = {
    devtool: false,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: 'AsyncCombineReducers',
        libraryTarget: 'umd'
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
            test: /\.jsx?$/,
            output: {
                comments: false  // remove all comments
            },
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })

    );
}

module.exports = config;

