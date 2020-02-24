const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PG_CONNECTION_STRING,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE
  }
});



module.exports = knex;