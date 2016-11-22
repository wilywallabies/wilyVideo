'use strict';
// loads environment variables from .env into ENV (process.env)
require('dotenv').config();


var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var path = require('path');
var cors = require('cors');

var https = require('https');
var fs = require('fs');

//initiate express
var app = express();

//middleware
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(cookieParser());


var apiRoutes = require('./routes/api');
var accountRoutes = require('./routes/accountRoutes')
var profilePicUtil = require('./utils/profilePicUtil')

// All routes prefixed with /api get run through this router
app.use('/api', apiRoutes);
app.use('/api', accountRoutes);
app.use('/api', profilePicUtil);



var webrtcRouter = require('./webrtcRouter');
app.use('/webrtc', webrtcRouter)

// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'));
});

// app.get('/styles/style.scss', function(req, res){
//   res.sendFile(path.join(__dirname, '../client/styles/style.scss'));
// });

app.get('*', function(req, res){
  console.log('REQ.URL IS: ', req.url);
  res.sendFile(path.join(__dirname, '../client/index.html'));
});



//set and run the port and server
app.set('port',process.env.PORT || 2000);
var port = app.get('port');
app.listen(port);
console.log("Server listening on PORT", port);

module.exports = app;
