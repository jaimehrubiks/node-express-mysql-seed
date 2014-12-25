'use strict';

var debug = require('debug')('routes');

var express = require('express');

var modelCtrl = require('../controllers/model-ctrl');

var router = express.Router();

router.route('/')
  .get(function(req, res, next){
    res.status(200).send();
  });

router.route('/models')
  .get(modelCtrl.list, function(req, res){
    res.json(res.models);
  });

module.exports = router;
