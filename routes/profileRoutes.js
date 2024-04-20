const express = require("express");
const profileController = require("../controllers/profileController");
const router = express.Router();

router.get("/view", profileController);

router.put("/edit", profileController);

// router.post("/login", studentLoginController);

module.exports = router;
