const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/TIproyect", {})
  .then(() => {
    console.log("connection Succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
