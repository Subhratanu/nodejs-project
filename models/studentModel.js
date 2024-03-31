const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const studentBioSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    unique: true,
    required: true,
    validate: validator.isEmail,
  },
  studentContact: {
    type: String,
    unique: true,
    required: true,
  },
  studentDept: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
studentBioSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const Studentbio = mongoose.model("studentBio", studentBioSchema);

module.exports = { Studentbio };
