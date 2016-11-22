var express = require('express');
var app = express();
var profilePicUtil = require('../utils/profilePicUtil');

app.post('/api/v1/image', function (req, res) {

  var image = profilePicUtil({
    data_uri: req.body.data_uri,
    filename: req.body.filename,
    filetype: req.body.filetype
  }).then(onGoodImageProcess, onBadImageProcess);

  function onGoodImageProcess(resp) {
    res.send({
      status: 'success',
      uri: resp
    });
  }

  function onBadImageProcess(resp) {
    res.send({
     status: 'error'
    });
  }

});
