// import libraries
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../../webpack.dev');
// inject webpack
var compiler = webpack(config);
// initial express
var app = express();
app.use(webpackDevMiddleware(compiler, {
    stats: { children: false },
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
require('../../router/main.js')(app, compiler);
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');
