'use strict';

var port = process.env.PORT;
var db = process.env.DB;

var express = require('express');
var app = express();

//basic way:
//var config = require('./lib/config');
//config(app);
require('./lib/config')(app);
require('./lib/pipeline')(app, express);
require('./lib/mongodb')(db);

app.listen(port, function(){
  console.log('Express Ready:', port);
});
