//Backend User API call
'use strict';

var request = require('request');

var User = require('../models/userModel');

module.exports.getUser = function (req, res){
  console.log('GET /user API called');
  User.findOne({}, (err, user) => {
    //do something
  });
};

module.exports.addUser = function (req, res){
  console.log('POST /user API called');
  console.log(req.body, 'req.body POST /USER');

  User.addOne({
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
};

