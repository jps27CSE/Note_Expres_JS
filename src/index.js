const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello jack ");
});

app.use("/user", userRouter);
app.use("/note", noteRouter);

mongoose
  .connect(
    "mongodb+srv://jackpritomsoren:admin123@cluster0.lsbetjy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));
