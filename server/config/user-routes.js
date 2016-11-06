//Backend User API call

var express = require('express');
var router = express.Router();

var User = require('../models/user-model');



router.get('/user', function(req, res){
  User.fetchAll()
  .then(function(user){
    res.send(user)
  })


})


router.post('/user', function(req, res){



})





module.exports = router;
