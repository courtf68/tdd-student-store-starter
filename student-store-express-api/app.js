// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const storeR = require("./routes/store");
const { storage } = require("./data/storage");

const app = express();

//install cors --> see pm , //make err pg from lab 1

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use("/store", storeR);

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
  // res.send("Hi");
});
// app.get("/store", (req, res) => {

//   res.send(storage.get("products").value());
// });

module.exports = app;
