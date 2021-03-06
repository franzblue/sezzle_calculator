const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  
  devServer: {
    contentBase: [contentBasePublic, contentBaseOther],
    contentBasePublicPath: [contentBasePublicPath, contentBasePublicOtherPath],
  },

  devServer: {
    disableHostCheck: true,
  },
};