const express = require("express");
const router = express.Router();

const {
  postSignUp,
  getAllUser,
  getUser,
  login,
} = require("../controllers/signup");

const { signup_validator, login_validator } = require("../middleware/user");

router.get("/users", getAllUser);
router.get("/users/:id", getUser);

router.post("/auth/signup", signup_validator, postSignUp);
router.post("/auth/login", login_validator, login);

module.exports = router;