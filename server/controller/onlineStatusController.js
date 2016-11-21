'use strict';
let db = require('../models/db');

module.exports.toggleStatus = (req, res) => {
  console.log('/api online status')

  db('users').where('id',req.body.currentUserId)
  .update({onlineStatus: req.body.status})

  .then((data)=>{
    res.sendStatus(201);
  })

  .catch((err)=> {
    console.log(err);
  })

}
