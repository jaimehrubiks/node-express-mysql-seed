'use strict';

var debug = require('debug')('controllers');

var Model = require('../models').Model;

exports.list = function(req, res, next){
  Model.get().then(function(models){
    res.models = models;
    next();
  }, next);
};
