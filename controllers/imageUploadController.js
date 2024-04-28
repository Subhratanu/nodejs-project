const imageUploadController = (req, res, next) => {
  try {
    //code
    console.log(req.file);
    return res.status(200).json({
      msg: "The image is successfully processed",
      imageDetails: req.file,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = imageUploadController;
