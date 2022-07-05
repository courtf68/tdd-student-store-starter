const express = require("express");
const router = express.Router();
const storeM = require("../models/store");

//connect back to front, change url -> local host
router.get("/", async (req, res) => {
  //   res.status(200);
  res.send("hello from store"); //send is shortcut for res json
  const dbProds = storeM.getProds(); //
  res.json(dbProds);
  res.send(dbProds);
  console.log("products here^");
});

router.get("/:productId", (req, res) => {});
router.post("/", (req, res) => {});
module.exports = router;
