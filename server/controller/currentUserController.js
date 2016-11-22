let request = require('request');
let db = require('../models/db');

module.exports.getCurrentUser = (req, res) => {
  var currentUser = req.query.currentUserId;
  console.log(currentUser,  ' CURRENT USER!!!')

  db('users').where('id', currentUser)
  .select('email', 'userName','onlineStatus')
  .then((data)=>{
    res.send(data)
  })
  .catch((err) => { console.log(err)} );

}
