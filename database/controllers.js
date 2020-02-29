const knex = require('./knex');

const createFindUser = (profile, callback) => {
  console.log('Creating or finding user...');
  knex.from('usersTable').where({profile_id: profile.id})
    .then(result => {
      if (result.length === 0) {
        console.log('User not found, creating user...');
        date = knex.raw('CURRENT_TIMESTAMP')
        return knex('usersTable').insert({
          profile_id: profile.id,
          name: profile.displayName,
          created_at: date,
          updated_at: date
        }).then(user => {
          if (user) {
            console.log('User created, fetching user...')
            knex.from('usersTable').where({profile_id: profile.id})
              .then(result => callback(result[0]))
          }
        });
      } else {
        console.log('Found user...')
        return callback(result[0]);
      }
    });
};

module.exports = {
  createFindUser
}