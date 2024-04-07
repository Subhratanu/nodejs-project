const { Studentbio } = require("../models/studentModel");

const studentLoginController = async (req, res, next) => {
  try {
    const { studentEmail, password } = req.body;
    if (!studentEmail && !password) {
      next("BF"); // BF -> Blank Field
    }
    const student = await Studentbio.findOne({ studentEmail });
    // console.log(userStudentId);
    if (!student) {
      next("Auth-Blocker");
    } else {
      const check = await student.isCheck(password);
      if (check) {
        const jwt = student.createJWT();
        console.log("My JWT is", jwt);
        return res.status(200).send("Login Successful");
      } else {
        next("Auth-Blocker");
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = studentLoginController;
