let request = require('request');
let db = require('../models/db');
//Table = 'users' || 'friends'

//Retrieve Friend List from DB
module.exports.retrieveAllUser = function (req, res){
  console.log('GET retrieveFriends /friend API called');
  let currentUser = 9;
  db.select('id', 'email', 'userName').from('users').whereNot('id',currentUser)

  .then((data) => {

    console.log(data, ': data, retreiveFriends');
    res.send(data);
  })
  .catch((err)=> {
    console.log(err)
  })
}

