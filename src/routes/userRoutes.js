const express = require("express");
const userRouter = express.Router();

userRouter.post("/signin", (req, res) => {
  res.send("signIn");
});

userRouter.post("/signup", (req, res) => {
  res.send("signUp");
});

module.exports = userRouter;
