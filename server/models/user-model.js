var knex = require('./db');


//User Model
var User = {
  addUser: function(data){
      return knex.insert({
        email: data.email,
        userName: data.userName,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName
      })
      .into('users')
      .then(function() {
      return {inserted: true};
    });
  },

  fetchAllUser: function(){
    return knex('*').from('users');
  }
}

module.exports = User
