const express = require("express");
const app = express();
const quotes = require("./quotes.json");

app.get("/", (req, res) => {
  res.send("hello jack ");
});

app.get("/quotes", (req, res) => {
  res.status(200).json(quotes);
});

app.get("/random", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  res.json(quote);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
