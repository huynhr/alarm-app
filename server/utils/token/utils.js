const jwt = require('jsonwebtoken')
const config = require('../../../config/config.json')

const createToken = function(auth) {
  return jwt.sign(
    {
      id: auth.id
    },
    'savannah',
    {
      expiresIn: 60 * 120
    }
  );
};

module.exports = {
  generateToken: (req, res, next) => {
    console.log('Generate token req.auth = ', req.auth);
    req.token = createToken(req.auth);
    return next();
  },
  sendToken: (req, res) => {
    res.setHeader("x-auth-token", req.token);
    console.log('Send token req.token = ', req.token)
    return res.status(200).send(req.user);
  }
};
