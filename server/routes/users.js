const express = require("express");
const cors = require('cors');

const router = express.Router();

router.get('/', cors(), (req, res) => {
  res.json([{'id': 1, 'name': 'Ray'}])
})

module.exports = router;