var request = require('request');
var db = require('../models/db');

//Retrieve Friend List from DB
module.exports.retrieveFriends = function (req, res){
  console.log('GET /friend API called');
  // db('friends').where({user_id: 1}).select('user_id2').returning('user_id2')
  db('friends').where({user_id: 1}).select('user_id2')

  .then((data) => {
    console.log(data, ': data, retreiveFriends')

    res.send(data);
  })
  .catch((err)=> {
    console.log(err)
  })
}

//addFriend Friend List to DB
module.exports.addFriend = function (req, res){
  console.log('POST /friend API called');
  //insert into friends table
  // db('friends').insert({user_id:1, user_id2:4})

}





