// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");

const app = express();
//const cors = require("cors")
//install cors --> see pm , //make err pg from lab 1

app.use(morgan("tiny"));
app.use(express.json());
//app.use(cors())
app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
  // res.send("Hi");
});

module.exports = app;
