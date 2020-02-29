const knex = require('./knex');
const logger = require('../node_modules/node-logger').createLogger();
logger.setLevel("debug");

const createFindUser = (profile, callback) => {
  logger.info('Creating or finding user...');
  knex.from('usersTable').where({profile_id: profile.id})
    .then(result => {
      if (result.length === 0) {
        logger.debug('User not found, creating user...');
        date = knex.raw('CURRENT_TIMESTAMP')
        return knex('usersTable').insert({
          profile_id: profile.id,
          name: profile.displayName,
          created_at: date,
          updated_at: date
        }).then(user => {
          if (user) {
            logger.debug('User created, fetching user...')
            knex.from('usersTable').where({profile_id: profile.id})
              .then(result => callback(result[0]))
          }
        });
      } else {
        logger.debug('Found user...')
        return callback(result[0]);
      }
    });
};

module.exports = {
  createFindUser
}