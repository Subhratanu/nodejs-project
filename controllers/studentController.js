const { Studentbio } = require("../models/studentModel");

const studentController = async (req, res, next) => {
  try {
    const { studentName, studentEmail, studentContact, studentDept, password } =
      req.body;
    if (!studentEmail && !studentName && !password) {
      next("BF"); // BF -> Blank Field
    }
    const student = await Studentbio.findOne({ studentEmail });
    // console.log(userStudentId);
    if (!student) {
      await Studentbio.create(req.body);
      const jwt = student.createJWT();
      console.log("My JWT is", jwt);
      return res.status(201).send("Student Added!");
    } else {
      next("UC");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = studentController;
