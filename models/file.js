const mongoose = require("mongoose");

const fileschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 30,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  nameOwner: {
    type: String,
    ref: "user",
    require: true,
  },
  namerepository: {
    type: String,
    ref: "repository",
    require: true,
  },
});

module.exports = mongoose.model("file", fileschema);
