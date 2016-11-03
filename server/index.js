var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var expressSession = require('express-session');
var database = require('./db/');

var debug = require('debug')('passport-mongo');
var hash = require('bcrypt-nodejs');
var path = require('path');



//initiate express
var app = express();

//middleware
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(cookieParser());

//location to client index.html
app.use(express.static(__dirname + '/../client'));


var apiRoutes = require('./config/api-routes');
var authRoutes = require('./config/authRoutes');
var routes = require('./config/routes');


// All routes prefixed with /api get run through this router
app.use('/api', apiRoutes);
app.use('/api', authRoutes);
app.use('/api', routes);




//configure our server with routing file in /server/config/api-router
require('./config/api-router.js')(app, express);




//set and run the port and server
app.set('port',process.env.PORT || 9000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT", port);

module.exports = app;
