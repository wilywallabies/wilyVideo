'use strict';
let db = require('../models/db');

module.exports.toggleStatus = (req, res) => {
  console.log('/api online status')
  console.log(req.body, ' Status Toggled');

  db('users').where('id',req.body.currentUserId)
  .update({onlineStatus: req.body.status})

  .then((data)=>{
    res.sendStatus(201);
  })

  .catch((err)=> {
    console.log(err);
  })

}


// module.exports.getStatus = (req, res) => {
//   console.log('/api online status')

//   var currentUser = req.query.currentUserId;

//   db('users').where({user_id:currentUser}).join('friends', 'users.id', '=', 'friends.user_id2')
//   .select('users.id', 'users.userName', 'users.email')
//   .then((data) => {
//     // console.log(data, ': data, retreiveFriends');
//     res.send(data);
//   })
//   .catch((err)=> {
//     console.log(err)
//   })

// }
