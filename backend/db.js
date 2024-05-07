const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Mongo db connected");
  } catch (error) {
    console.log(error.message);
    // process.exit(0);
  }
};

module.exports = connectDB;
