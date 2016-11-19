'use strict';
let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.availableUser = (req, res) => {
  console.log('GET retrieveFriends /allUser API called');
  var currentUser = req.query.currentUserId;
console.log('*****************************************')

console.log(req.query, ' PARAMS')
console.log('*****************************************')
  /*****************************************
    Selects All User except current user
  ******************************************/
let friends;
  db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
  .select('users.id', 'users.userName', 'users.email')
  .then((data)=>{
    friends = data;
    db('users').select('*').whereNot({id:currentUser}).then((data2)=>{
      var friendIds = friends.map((user)=>{
        return user.id;
      });
    var result = [];
    let filtered = data2.forEach((user) => {
      if(friendIds.indexOf(user.id) === -1 ){
        result.push(user);
         }
       });
      console.log(result, ' NONFRIEND, availUserCtrl')
      res.send(result);
    }
  )
  })
  .catch((err) => {
    console.log(err);
  })
}



