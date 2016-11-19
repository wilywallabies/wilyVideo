let request = require('request');
let db = require('../models/db');

module.exports.getCurrentUser = (req, res) => {
  var currentUser = req.query.currentUserId;
  console.log(currentUser,  ' CURRENT USER!!!')

  // db.select('email, userName').where('id', currentUser)
  db('users').where('id', currentUser)
  .select('email', 'userName')

  .then((data)=>{
    console.log(data, ' RES DATA GET CURRENT **********')
    res.send(data)
  })
  .catch((err) => { console.log(err)} );

}
