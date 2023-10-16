const { validationResult, check } = require("express-validator");

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

const signup_validator = validate([
  check("username").exists().withMessage("already exist").notEmpty(),
  check("email").exists().withMessage("already exist").notEmpty(),
  check("password").isLength({ max: 12 }).notEmpty(),
]);
const login_validator = validate([
  check("email").exists().notEmpty(),
  check("password").exists().isLength({ min: 1 }).withMessage("min 5"),
]);

// body('email').isEmail(),
// body('password').isLength({ min: 6 })
exports.signup_validator = signup_validator;
exports.login_validator = login_validator;
