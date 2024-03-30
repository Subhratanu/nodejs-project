const { Student } = require("../models/userModel");

const userController = async (req, res, next) => {
  try {
    console.log(req.body);
    const { studentId, name, department } = req.body;
    console.log(studentId, name, department);
    const userStudentId = await Student.findOne({ studentId });
    console.log(userStudentId);
    if (!userStudentId) {
      await Student.create(req.body);
      return res.status(201).send("User Added!");
    } else {
      next("UC");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
