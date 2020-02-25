const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PG_CONNECTION_STRING,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE
  }
});

const usersTable = (table) => {
  table.increments('id')
  table.string('name')
  table.string('profile_id')
  table.time('created_at')
  table.time('updated_at')
};

knex.schema.hasTable('usersTable').then(exists => {
  if (!exists) {
    knex.schema.createTable('usersTable', usersTable).then(() => console.log('Created usersTable...'));
  } else {
    console.log('usersTable exists, skipping creation...')
  }
});


module.exports = knex;