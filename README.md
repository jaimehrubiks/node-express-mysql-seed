Node Express MySQL seed
=======================

This is a project template to kick start you developent with Node, Express and
MySQL.

It features Express 4.x, mysql 2.x and Sequelize 2.x.

Structure
=========

    ├── app.js
    ├── bin
    │   ├── debug
    │   └── www
    ├── conf
    │   ├── conf.json
    │   └── index.js
    ├── controllers
    │   └── model-ctrl.js
    ├── models
    │   ├── index.js
    │   └── model.js
    ├── routes
    │   └── index.js
    └── test
        ├── data.json
        └── index.js


app.js
------
Main Express app configurations.

bin/www
-------
Executable ready for launch

bin/debug
---------
Executable that enables debug module and runs server under nodemon.

bin/inspect
-----------
Executable that allows debugging with node-inspector

conf
----
Uses nconf to load configurations. Default order is
ARGV > ENV > FILE(conf.json).

models
------
In this folder are put all model definitions. They are automatically loaded by
`index.js`, assuming every file in this directory defines only one model at
time.

controllers
-----------
In this folder are put all controllers

routes
------
In this folder are put all routes definition. `index.js` is mounted by deafult
to `/`.

test
----
In this folder are put all test definition. Mocha is the default test suite.

`data.json` contains setup data for tests.
