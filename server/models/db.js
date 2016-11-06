// This creates the connection and sets up the table if it doesn't exist

var knex = require('knex')({
  client: 'mysql',
  connection:{
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME
  }
});

//Set up users table if it doesn't exist.
knex.schema.hasTable('users').then(function(exists){
  if(!exists){
    return knex.schema.createTable('users', function(table){
      table.increments('id').primary()
      table.string('email', 50).unique();
      table.string('userName', 50).unique();
      table.string('password', 50);
      table.string('firstName');
      table.string('lasttName');
      table.timestamps();
      console.log('USERS Table Created');
    })
  }
});

//Set up friends table if it doesn't exist.
knex.schema.hasTable('friends').then(function(exists){
  if(!exists){
    return knex.schema.createTable('friends', function(table){
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('Items.user_id_in_items').inTable('users')
      table.timestamps();
      console.log('FRIENDS Table Created');
    })
  }
});

// Export for use in the models
module.exports = knex