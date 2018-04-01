const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname),
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/html' },
      {
        from: './src/img/favicon.ico',
        to: './img',
      },
    ]),
    new UglifyJSPlugin(),
  ],
});
