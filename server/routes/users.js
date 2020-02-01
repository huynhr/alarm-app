const express = require("express");
const cors = require('cors');
const { authenticateToken } = require('../utils/token/utils');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  res.json([{'id': 1, 'name': 'Ray'}])
})

module.exports = router;