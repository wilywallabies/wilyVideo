'use strict';
let db = require('../models/db');

module.exports.toggleStatus = (req, res) => {
  console.log('/api online status')

  db('users').where('id',req.body.currentUserId)
  .update({onlineStatus: req.body.status})

  .then((data)=>{
    db('users').where('id', req.body.currentUserId)
    .select('email', 'userName', 'onlineStatus')
      .then((data)=>{

    res.send(data);
    })
  })

  .catch((err)=> {
    console.log(err);
  })

}
