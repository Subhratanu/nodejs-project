const express = require("express");
const studentRegisterController = require("../controllers/studentController");
const studentLoginController = require("../controllers/studentLoginController");
const router = express.Router();

router.post("/register", studentRegisterController);

router.post("/login", studentLoginController);

// router.post("/login", studentLoginController);

module.exports = router;
