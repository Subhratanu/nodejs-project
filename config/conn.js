const mongoose = require("mongoose");

const mongoDBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connection Established to DB!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { mongoDBConnection };
