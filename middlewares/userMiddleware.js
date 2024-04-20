const userMiddleware = async (err, req, res, next) => {
  if (err == "UC") {
    return res.status(403).send("You are already registered");
  } else if (err == "BF") {
    return res.status(400).send("Fields are Empty");
  } else if (err == "Auth-Blocker") {
    return res.status(401).send("UserName or Password is Incorrect");
  } else if (err == "Auth-Token-Blocker") {
    return res.status(401).send("Invalid Authorization");
  } else {
    return res.status(500).send(err);
  }
};

module.exports = userMiddleware;
