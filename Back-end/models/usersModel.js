const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 4,
    maxlength: 10,
    match: /[a-zA-Z]/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  },
  Birthday: Date,
  password: { type: String, required: true },
  token:{type:String}
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
