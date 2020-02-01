const jwt = require('jsonwebtoken')
const config = require('../../../config/config.json')

const createToken = function(auth) {
  return jwt.sign(
    {
      id: auth.id
    },
    config.JWT_SECRET,
    {
      expiresIn: 60 * 120
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    console.log(decoded);
    if (err) return false;
    return true;
  });

}

module.exports = {
  generateToken: (req, res, next) => {
    req.token = createToken(req.auth);
    return next();
  },
  sendToken: (req, res) => {
    res.setHeader("x-auth-token", req.token);
    return res.status(200).send(req.user);
  },
  authenticateToken: (req, res, next) => {
    if (verifyToken(req.headers.token)) {
      return next()
    }
    return res.status(401).send("User Not Authenticated");
  }
};
