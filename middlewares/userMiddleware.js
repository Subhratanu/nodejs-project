const userMiddleware = async (err, req, res, next) => {
  if (err == "UC") {
    return res.status(403).send("You are already registered");
  } else {
    return res.status(500).send("Internal Error");
  }
};

module.exports = userMiddleware;
