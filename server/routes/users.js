const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.json(JSON.stringify({'user': 1}))
})

module.exports = router;