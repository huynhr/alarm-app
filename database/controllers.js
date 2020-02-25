const knex = require('./knex');

const createFindUser = (profile) => {
  knex.from('usersTable').where({profile_id: profile.id})
    .then(result => {
      console.log('user: ', result)
      if (result.length === 0) {
          date = new Date().toISOString();
          date = knex.raw('CURRENT_TIMESTAMP')
          return knex('usersTable').insert({
            profile_id: profile.id,
            name: profile.displayName,
            created_at: date,
            updated_at: date
          }).then(user => user);
      } else {
        return result[0];
      }
    });
};

module.exports = {
  createFindUser
}