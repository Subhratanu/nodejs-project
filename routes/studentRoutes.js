const express = require("express");
const studentRegisterController = require("../controllers/studentController");
const router = express.Router();

router.post("/register", studentRegisterController);

// router.post("/login", studentLoginController);

module.exports = router;
