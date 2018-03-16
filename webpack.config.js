'use strict';

const fs = require('fs');
const path = require('path');
const babelOptions = JSON.parse(fs.readFileSync('.babelrc'));

module.exports = {
    mode: 'development',
    entry: './src/client/index.jsx',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist', 'client'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions,
                },
            },
        ],
    },
};
