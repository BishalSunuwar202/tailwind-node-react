const express = require("express");
const {
  postAddProduct,
  getAddProduct,
  getProductById,
  postDeleteProduct,
  postEditProduct,
} = require("../controllers/product");

const { signup_validator, login_validator } = require("../middleware/user");
const { authentication } = require("../middleware/auth");
const { product_validator } = require("../middleware/prod");
const router = express.Router();

router.use(authentication);

router.get("/", (req, res, next) => {
  res.send("Route 1");
});

//router.get("/products", authentication, getAddProduct);
router.get("/products", getAddProduct);
router.get("/products/:id", getProductById);

router.post("/add-product", product_validator, postAddProduct);
router.delete("/products/:id", postDeleteProduct);
router.patch("/add-product/:id", postEditProduct);

module.exports = router;
