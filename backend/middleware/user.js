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
  check("email").isEmail(),
  check("password").isLength({ min: 6 }),
]);
const login_validator = validate([
  check("email").exists().notEmpty(),
  check("password").exists().isLength({min: 5}),
]);

// body('email').isEmail(),
// body('password').isLength({ min: 6 })
exports.signup_validator = signup_validator;
exports.login_validator = login_validator;
