const express = require("express");
const {
  postAddProduct,
  getAddProduct,
  getProductById,
  postDeleteProduct,
  postEditProduct,
} = require("../controllers/product");

const { authentication } = require("../middleware/auth");
const { product_validator } = require("../middleware/prod");

const router = express.Router();


// router.get("/", (req, res, next) => {
//   res.send("Route 1");
// });

//router.get("/products", authentication, getAddProduct);
// router.get("/products", getAddProduct);
// router.get("/products/:id", getProductById);

// router.use(authentication);
// router.post("/add-product", product_validator, postAddProduct);
// router.delete("/products/:id", postDeleteProduct);
// router.patch("/add-product/:id", postEditProduct);

router.get("/", getAddProduct);
router.get("/:id", getProductById);

router.use(authentication);
router.post("/add-product", product_validator, postAddProduct);
router.delete("/:id", postDeleteProduct);
router.patch("/add-product/:id", postEditProduct);

module.exports = router;
