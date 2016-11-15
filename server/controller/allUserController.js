let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.retrieveAllUser = (req, res) => {
  console.log('GET retrieveFriends /friend API called');

  var currentUser = 9;


  db.select('id', 'email', 'userName').from('users').whereNot('id',currentUser)
  .then((data)=>{
    console.log(data, "Data Sent, retrieveAllUser")
    res.send(data)
  })

  .then((data)=>{
    console.log(data, "Data Sent, retrieveAllUser")
    res.send(data)
  })

  .catch((err) => {
    console.log(err);
  })
}

  // db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
  // .select('users.id', 'users.userName', 'users.email')


