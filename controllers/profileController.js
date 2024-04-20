const profileController = (req, res, next) => {
  try {
    //code
    return res.status(200).send("This is now Private");
  } catch (err) {
    next(err);
  }
};

module.exports = profileController;
