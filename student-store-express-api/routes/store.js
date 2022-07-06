const express = require("express");
const router = express.Router();
const storeM = require("../models/store");

//connect back to front, change url -> local host
router.get("/", async (req, res) => {
  //   res.status(200);
  res.send("hello from store"); //send is shortcut for res json
  const dbProds = await storeM.getProds(); //
  //   res.json(dbProds);
  //   res.send(dbProds);
  console.log(dbProds, "products here^");
  res.status(200).send(dbProds);
});

router.get("/:productId", async (req, res) => {
  const idProd = req.params.productId;
  const eachh = await storeM.getProdById(idProd);
  res.status(200).send(eachh);
});
router.post("/receipt", async (req, res) => {});

module.exports = router;
