const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      next("Auth-Token-Blocker");
    } else {
      const token = authHeader.split(" ")[1];
      const validate = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      console.log(validate);
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
