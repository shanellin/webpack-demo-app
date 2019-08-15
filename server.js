// import libraries
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev');
// inject webpack
var compiler = webpack(config);
// initial express
var app = express();
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(webpackDevMiddleware(compiler, {
    stats: { children: false },
    noInfo: true,
    publicPath: '/'//config.output.path
}));
app.use(webpackHotMiddleware(compiler));
var port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0');
// import router
require('./router/main.js')(app, compiler);
module.exports = app;
