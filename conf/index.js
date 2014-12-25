'use strict';

var nconf = require('nconf'),
    path = require('path');

var file = path.join(__dirname, 'conf.json');

/**
 * arguments loading order:
 * 1. command line arguments
 * 2. environment variables
 * 3. bin/conf.json
 */
module.exports = nconf.argv().env().file({ file: file });
