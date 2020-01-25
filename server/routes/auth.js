const express = require("express");
const cors = require("cors");

const router = express.Router();

router.post("/", (req, res) => {
  console.log('Request', req.body);
  res.json({token: 'someRandomStringOfTokens'});
});

module.exports = router;
