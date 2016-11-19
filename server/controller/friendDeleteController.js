'use strict';
let request = require('request');
let db = require('../models/db');


//addFriend Friend List to DB
module.exports.deleteFriend = (req, res) => {
  // var currentUser = global.currentUser_Id;
  var currentUser = 9;

  let reqId = req.params.friendId;
  console.log(reqId, 'friendDelete /friend API called');

  db('friends')
  .where({'user_id':currentUser, 'user_id2':reqId})
  .del()
  .then(() => {
    db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
    .select('users.id', 'users.userName', 'users.email')
    .then((data) => {
      console.log(data, ': data, after friendDelete');
      res.send(data);
    })
  })
  .catch((err)=> {
    console.log(err)
  })
}


