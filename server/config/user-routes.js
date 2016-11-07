'use strict'

//Backend User API call

var express = require('express');
var router = express.Router();

var User = require('../models/user-model');



router.get('/user', function(req, res){
  console.log('GET /user API called');
  User.findOne({}, function(err, user){
    //do something
  })


})


router.post('/user', function(req, res){
  console.log('POST /user API called');
  console.log(req.body, 'req.body POST /USER');

  User.addOne({
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

})





module.exports = router;
