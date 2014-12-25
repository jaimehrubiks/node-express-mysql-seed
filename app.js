'use strict';

var debug = require('debug')('app');

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    Sequelize = require('sequelize');

var conf = require('./conf');

var routes = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//mount routes
app.use('/', routes);

//catch 404 erros
app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
function errorHandler(err, req, res, next){
  res.status(err.status || 500).json(err.message);
}

//detailed error handler for development
if(conf.get('NODE_ENV') === 'development'){
  errorHandler = function(err, req, res, next){
    res.status(err.status || 500).json(err);
  };
}

app.use(errorHandler);

module.exports = app;
