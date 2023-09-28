const { query, validationResult, check } = require("express-validator");

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

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
  check("email").exists(),
  check("password").exists(),
]);

// body('email').isEmail(),
// body('password').isLength({ min: 6 })
exports.signup_validator = signup_validator;
exports.login_validator = login_validator
