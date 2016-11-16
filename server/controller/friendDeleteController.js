let request = require('request');
let db = require('../models/db');

//addFriend Friend List to DB
module.exports.deleteFriend = (req, res) => {
  let currentUser = 9;//Need to retrieve current user id
  let reqId = req.params.friendid;
  console.log('friendDelete /friend API called');
  //insert into friends table




//JOIN FIRST!


  // db('friends')
  // .where({'user_id':currentUser, 'user_id2':req.params.friendid})
  // .del()
  // .then((data) => {
  //   console.log(data, ': data, retreiveFriends');
  //   res.send(data);
  // })
  // .catch((err)=> {
  //   console.log(err)
  // })

  db('friends')
  .where({user_id2: reqId})
  .where({user_id:currentUser})
  .del()
  .then((data) => {
    console.log(data, ': data, retreiveFriends');
    res.send(data);
  })
  .catch((err)=> {
    console.log(err)
  })




}


