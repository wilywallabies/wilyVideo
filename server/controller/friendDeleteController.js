'use strict';
let request = require('request');
let db = require('../models/db');
let currentUserInfo = require('../routes/accountRoutes');
let currentUser = currentUserInfo.currentUser;



//addFriend Friend List to DB
module.exports.deleteFriend = (req, res) => {

  // let currentUser = 9;//Need to retrieve current user id
  let reqId = req.params.friendid;
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


