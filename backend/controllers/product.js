const Product = require("../models/Product");

const postAddProduct = (req, res, next) => {
  try {
    Product.create({
      name: req.body.name,
      price: req.body.price,
      url: req.body.url,
      description: req.body.description,
    })
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    next(err);
  }
};

// const getAddProduct = (req, res, next) => {
//   console.log("test");
// };

exports.postAddProduct = postAddProduct;
//exports.getAddProduct = getAddProduct;
