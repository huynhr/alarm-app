const express = require('express');
const router = express.Router();
const passport = require('passport')
const {generateToken, sendToken} = require('../utils/token/utils')
require('../passport')();

router.route('/')
  .post(passport.authenticate('google-token', {session: false}), (req, res, next) => {
    if (!req.user) return res.status(401).send("User Not Authenticated");

    req.auth = {
      id: req.user.id
    };

    next();
  }, generateToken, sendToken)

module.exports = router;
