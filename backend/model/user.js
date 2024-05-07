const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true, unique: true },
  password: {
    type: String,
    require: true,
    minLength: [8, "password can't be less than 8 characters"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
