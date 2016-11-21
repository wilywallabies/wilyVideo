'use strict';
let db = require('../models/db');

module.exports.toggleStatus = (req, res) => {
  console.log('/api online status')
  console.log(req.body, ' toggleOnline');

  db('users').where('id',req.body.currentUserId)
  .update({onlineStatus: req.body.status})

  .then((data)=>{
    res.status(200);
  })

  .catch((err)=> {
    console.log(err);
  })

}
