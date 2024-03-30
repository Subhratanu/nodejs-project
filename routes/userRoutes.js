const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/user", (req, res) => {
  return res.send("Hello from /api/user endpoint");
});

router.post("/register", userController);

module.exports = router;
