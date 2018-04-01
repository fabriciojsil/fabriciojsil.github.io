const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 7000,
    host: '0.0.0.0',
  },
});
