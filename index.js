const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");

const app = express();

require("./database");

app.use(morgan("dev"));
app.use(bodyparser.json());

app.use("/file/", require("./routes/files.routes"));
app.use("/user/", require("./routes/user.routes"));
app.use("/repository/", require("./routes/repository.routes"));

app.listen(3000, () => {
  console.log("Port 3000");
});
