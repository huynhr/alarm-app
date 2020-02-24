const passport = require("passport");
const GoogleTokenStrategy = require("passport-google-token").Strategy;

const _USERS = {}

const saveUser = (accessToken, refreshToken, profile, cb) => {
  _USERS[profile["id"]] = { accessToken, refreshToken, profile };
  error = null;
  let data = {
      id: profile["id"],
      ...profile
  };
  return cb(error, data);
}

module.exports = function() { 
  passport.use(new GoogleTokenStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        saveUser(accessToken, refreshToken, profile, (err, user) => {
          return done(err, user);
        })
      }
    )
  );
};
