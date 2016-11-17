'use strict';
let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.retrieveFriends = (req, res) => {
  console.log('GET retrieveFriends /friend API called');
  // db.select('id', 'email', 'userName').from('users')

  let currentUser = 9;//Need to retrieve current user id
  db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
  .select('users.id', 'users.userName', 'users.email')
  .then((data) => {
    console.log(data, ': data, retreiveFriends');
    res.send(data);
  })
  .catch((err)=> {
    console.log(err)
  })
}

//addFriend Friend List to DB
module.exports.addFriend = (req, res) => {
  console.log('POST /friend API called');
  //insert into friends table
  console.log(req.body, 'Received Request')

  let currentUser = 9;//Need to retrieve current user id
  console.log("ADDING FRIEND ID: ", req.body.friendId);
  db('friends').insert({user_id:currentUser, user_id2:req.body.friendId})
  .then((data) => {

    db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
    .select('users.id', 'users.userName', 'users.email')
    .then((data) => {
      console.log(data, ': data, retreiveFriends');
      res.send(data);
    })

    console.log(data, ': data, addFriends');
    // res.send(data);
  })
  .catch((err)=> {
    console.log(err)
  })
}

