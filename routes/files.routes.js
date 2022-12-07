const express = require("express");
const routes = express.Router();
const { createFile } = require("../controllers/filecontroller");

routes.post("/create/", createFile);
module.exports = routes;
