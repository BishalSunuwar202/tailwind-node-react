const express = require("express");
const { postAddProduct, getAddProduct } = require("../controllers/product");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Route 1");
});
//router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);

module.exports = router;
