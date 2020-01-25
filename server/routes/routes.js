const express = require('express');
const users = require('./users');
const auth = require('./auth');

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/auth', auth);
router.use('/users', users);

module.exports = router;
