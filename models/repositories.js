const mongoose = require("mongoose");

const repositorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 30,
  },
  description: {
    type: String,
    require: true,
    maxlength: 40,
  },
  OwnerName: {
    type: String,
    require: true,
    maxlength: 30,
    ref: "file",
  },
});

module.exports = mongoose.model("repository", repositorySchema);
