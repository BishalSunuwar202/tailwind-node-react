const express = require("express");
const { postAddProduct, getAddProduct } = require("../controllers/product");
const {
  postSignUp,
  getAllUser,
  getUser,
  login,
} = require("../controllers/signUp");
const { signup_validator, login_validator } = require("../middleware/user");
const { authentication } = require("../middleware/auth");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Route 1");
});

router.get("/users", getAllUser);

router.get("/users/:id", getUser);
router.post("/login", login_validator, login);

router.get("/products", authentication, getAddProduct);

router.post("/add-product", postAddProduct);

router.post("/signup", signup_validator, postSignUp);

module.exports = router;
