const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  return res.send("Hello from /api/user endpoint");
});

module.exports = router;
