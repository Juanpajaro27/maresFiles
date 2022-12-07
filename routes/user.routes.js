const express = require("express");
const routes = express.Router();
const { createUser, GetUser } = require("../controllers/userController");

routes.get("/", GetUser);
routes.post("/create/", createUser);
module.exports = routes;
