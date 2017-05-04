const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'client')],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      },
    ],
  },
  plugins: [
    // new HtmlPlugin({
    //   template: 'index.ejs', inject: false,
    // }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
  ].filter(x => x),
  resolve: { modules: ['node_modules', path.resolve(__dirname)] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
  },
};
