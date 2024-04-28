const multer = require("multer");
const path = require("path");
const fileNameGenerator = require("../utils/fileNameGenerator");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.join(__dirname, "/uploads/"));
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      fileNameGenerator(file.originalname, "U-654789AX", Date.now())
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
