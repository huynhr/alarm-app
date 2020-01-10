const express = require("express");
const cors = require('cors');

const router = express.Router();

router.get('/', cors(), (req, res) => {
  res.json({'user': 1})
})

module.exports = router;