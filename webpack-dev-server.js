const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const webpackConfig = require('./webpack.config.js');

const express = require('express');
const request = require('request');
const proxy = require('proxy-middleware');
const url = require('url');

const expressServer = express();
expressServer.use('/', proxy(url.parse('http://localhost:8081')));
expressServer.use((req, res) => {
  request('http://localhost:8081/index.html').pipe(res);
});

const webpackDevServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: path.resolve(__dirname, '../'),
  quiet: false,
  noInfo: false,
  publicPath: '/',
  stats: { colors: true },
});

webpackDevServer.listen(8081, 'localhost', () => {});
expressServer.listen(8080);
