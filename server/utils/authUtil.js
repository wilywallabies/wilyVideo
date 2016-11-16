'use strict'

const jwt = require('jwt-simple');
const secret = process.env.jwtsecret;

exports.createToken = function(req, res, user_id){
  console.log("IN CREATE TOKEN", user_id)
  var payload = {'user_id': user_id};
  var token = jwt.encode(payload, secret);
  res.set('token', token).status(201).json({token: token, user_id: user_id});
};
