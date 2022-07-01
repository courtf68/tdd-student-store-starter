const express = require("express");
const router = express.Router();
const storeM = require("../models/store");

router.get("/", async (req, res) => {
  res.status(200);

  const dbProds = storeM.getProds;
  res.json(dbProds);
  console.log("products here^");
});

router.get("/:productId", (req, res) => {});
router.post("/", (req, res) => {});
module.exports = router;
