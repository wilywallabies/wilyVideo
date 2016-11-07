var express = require('express');
var bodyparser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var path = require('path');
var cors = require('cors');


//initiate express
var app = express();

//middleware
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(cookieParser());


var apiRoutes = require('./route/route');

// All routes prefixed with /api get run through this router
app.use('/api', apiRoutes);


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'));
});

app.get('/styles/style.css', function(req, res){
  res.sendFile(path.join(__dirname, '../client/styles/style.css'));
});

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
