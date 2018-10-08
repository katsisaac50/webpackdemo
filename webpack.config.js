const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
           },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist'
       },
  plugins: [
    new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
           title: 'Output Management'
         })
       ],
};
