const express = require("express");
const studentRegisterController = require("../controllers/studentController");
const studentLoginController = require("../controllers/studentLoginController");
const imageUploadController = require("../controllers/imageUploadController");
const upload = require("../utils/storage");
const router = express.Router();

router.post("/register", studentRegisterController);

router.post("/login", studentLoginController);

router.post("/upload", upload.single("sampleImage"), imageUploadController);

// router.post("/login", studentLoginController);

module.exports = router;
