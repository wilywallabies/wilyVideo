var express = require('express');
var router = express.Router();
var profilePicUtil = require('../utils/profilePicUtil');

router.post('/image', function (req, res) {

console.log("inside imageeeeeee");

  var image = profilePicUtil({
    currentUserId: req.body.currentUserId,
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

module.exports = router;
