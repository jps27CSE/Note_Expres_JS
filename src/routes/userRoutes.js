const express = require("express");
const userRouter = express.Router();
const { signin, signup } = require("../controllers/userController");

userRouter.post("/signin", signin);

userRouter.post("/signup", signup);

module.exports = userRouter;
