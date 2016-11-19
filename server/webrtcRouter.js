var express = require('express');
var request = require('request');

var webrtc = express.Router();

webrtc.post('/signal/token', function(req, res){

  var params = {
    ident: "bernardlin",
    secret: "4a8e67be-a8f7-11e6-ba7c-5eddb856325a",
    domain: "www.wilyvideo.com",
    application: "default",
    room: "default",
    secure: 1
  };

  var options = { method: 'POST',
    url: 'https://service.xirsys.com/signal/token'
   };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  }).write(JSON.stringify(params));

});

webrtc.post('/ice', function(req, res){

  var params = {
    ident: "bernardlin",
    secret: "4a8e67be-a8f7-11e6-ba7c-5eddb856325a",
    domain: "www.wilyvideo.com",
    application: "default",
    room: "default",
    secure: 1
  };

  var options = { method: 'POST',
    url: 'https://service.xirsys.com/ice'
   };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.send(body);
  }).write(JSON.stringify(params));

});

module.exports = webrtc;
