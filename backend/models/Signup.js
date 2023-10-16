const mongoose = require("mongoose");
const { Schema } = mongoose;

const signupSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false, //select here will hide the pw
  },
});

module.exports = mongoose.model("Signup", signupSchema);
