const express = require("express");
const UserController = require("../controllers/userController");
const Validate=require('../middlewares/validate')
const app = express.Router();
app.post("/register", UserController.user_add);
app.get("/login", UserController.user_login);
app.put("/update",Validate,UserController.user_update)
module.exports = app;
