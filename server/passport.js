const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const { createFindUser } = require('../database/controllers');

module.exports = function() { 
  passport.use(new GoogleTokenStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        createFindUser(profile, user => {
          return done(null, user)
        });
      }
    )
  );
};
