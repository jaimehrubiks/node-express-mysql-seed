'use strict';

/**
 * This script autoloads files in this directory.
 * Each of this file should define a model and it's assigned to a property of
 * models object.
 * Database istance is assigned to models.db
 */

var debug = require('debug')('models');

var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize');

var conf = require('../conf');

var db = new Sequelize(conf.get('databaseUri')),
    models = {};

//read directory's content
fs.readdirSync(__dirname)
  .filter(function(file){
    //exclude index.js and hindden files
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file){
    //import models
    var model = db.import(path.join(__dirname, file));
    models[model.name] = model;
  });

//run associate for every model if present
Object.keys(models).forEach(function(modelName){
  if ('associate' in models[modelName]) models[modelName].associate(models);
});

//store database instance
models.db = db;

module.exports = models;
