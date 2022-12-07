const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 30,
  },
  lastname: {
    type: String,
    require: true,
    maxlength: 30,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", userschema);
