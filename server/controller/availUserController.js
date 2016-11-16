let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.availableUser = (req, res) => {
  console.log('GET retrieveFriends /friend API called');

  var currentUser = 9;

  /*****************************************
    Selects All User except current user
  ******************************************/
  db.select('id', 'email', 'userName').from('users').whereNot('id',currentUser)


  /*****************************************
    Selects All non-friends and current user
  ******************************************/


  // select('id','email','userName').from('users')

  // db.select('id','email','userName').from('users')
  // .leftOuterJoin('friends','users.id','friends.user_id2')
  // .whereNot('friends.user_id2','2')

  .then((data)=>{
    console.log('*************Available Users(NonFriend)**********')
    console.log(data, "Data Sent, availableUser")
    console.log('*************Available Users(NonFriend)**********')

    res.send(data)
  })
  .catch((err) => {
    console.log(err);
  })
}

  // db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
  // .select('users.id', 'users.userName', 'users.email')


