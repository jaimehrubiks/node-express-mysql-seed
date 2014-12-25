//jshint strict:false

/* global describe */
/* global it */
/* global before */
/* global beforeEach */
/* global after */
/* global afterEach */

var testData = require('./test-data.json');

var expect = require('chai').expect,
    request = require('supertest')(testData.server);
