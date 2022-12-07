const express = require("express");
const routes = express.Router();
const {
  CreateRepository,
  GetRepository,
} = require("../controllers/repositoryController");

routes.get("/All/", GetRepository);
routes.post("/create/", CreateRepository);

module.exports = routes;
