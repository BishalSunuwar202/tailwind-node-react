const { validationResult, check } = require("express-validator");

const validate = (validations) => {
  return async (req, res, next) => {
    try {
      await Promise.all(validations.map((validation) => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      res.status(400).json({ errors: errors.array() });
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
};

const product_validator = validate([
  check("name").exists().notEmpty().withMessage("enter a name"),

  check("price").exists().notEmpty().withMessage("enter a price"),

  check("url")
    .exists()
    .notEmpty()
    .withMessage("url should not be empty")
    .isURL()
    .withMessage("enter valid url"),

  check("description")
    .exists()
    .notEmpty()
    .withMessage("description should not be empty")
    .isLength({ min: 10, max: 500 })
    .withMessage("Need to be around 200 word"),
]);

// body('email').isEmail(),
// body('password').isLength({ min: 6 })
exports.product_validator = product_validator;
