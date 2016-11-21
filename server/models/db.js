'use strict'
// This creates the connection and sets up the table if it doesn't exist

var knex = require('knex')({
  client: 'mysql',
  connection:{
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER ,
    password : process.env.DB_PASS,
    port     : process.env.DB_PORT,
    database: process.env.DB_NAME
  }, acquireConnectionTimeout: 15000


});

console.log('******* TESTING PURPOSE ********');
console.log(process.env.DB_HOST, 'DB_HOST');
console.log(process.env.DB_USER, 'DB_USER');
console.log('*********************************');

//Set up users table if it doesn't exist.
knex.schema.hasTable('users').then(exists => {
  if(!exists){
    return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('email', 250).unique();
      table.string('userName', 250).unique();
      table.string('password', 250);
      table.string('firstName');
      table.string('lastName');
      table.string('userStatus').defaultTo('n');
      table.timestamps();
      console.log('USERS Table Created');
    })
  }
});

//Set up friends table if it doesn't exist.
knex.schema.hasTable('friends').then(exists => {
  if(!exists){
    return knex.schema.createTable('friends', table => {
      table.increments('id').primary()
      table.integer('user_id').unsigned();
      table.integer('user_id2').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('user_id2').references('id').inTable('users');
      console.log('FRIENDS Table Created');
    })
  }
});

// Export for use in the models
module.exports = knex;

