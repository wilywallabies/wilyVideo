'use strict';
let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.retrieveFriends = (req, res) => {
  var currentUser = req.query.currentUserId;

  db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
  .select('users.id', 'users.userName', 'users.email', 'users.onlineStatus')
  .then((data) => {

     let sortedByOnline = data.sort((a,b)=>{
      return b.onlineStatus > a.onlineStatus})

    res.send(sortedByOnline);
  })
  .catch((err)=> {
    console.log(err)
  })
}

//addFriend Friend List to DB
module.exports.addFriend = (req, res) => {
  var currentUser = req.body.userId;

  db('friends').insert({user_id:req.body.friendId, user_id2:currentUser})
  .then(() => {

  db('friends').insert({user_id:currentUser, user_id2:req.body.friendId})
  .then((data) => {

    db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
    .select('users.id', 'users.userName', 'users.email', 'users.onlineStatus')
    .then((data) => {
      res.send(data);
    }).catch((err)=> {console.log(err) })

  })
  })

}

