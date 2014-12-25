'use strict';

var debug = require('debug')('models');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Model', {
    field: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
};
