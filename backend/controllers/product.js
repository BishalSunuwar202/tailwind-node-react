const Product = require("../models/Product");

const postAddProduct = (req, res, next) => {
  //here can be other function
  //these funciton will be executed before creating the product schema downside. If there is any missing requirement, then there will be validation error so, we use external validator such as express-validator, so that the error is shown before executing these extra function. external validator is used in app.js
  //use express validator or joi or yup
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
        next(err);
      });
  } catch (err) {
    next(err);
  }
};

const getAddProduct = async (req, res, next) => {
  try {
    res.send(await Product.find({}));
  } catch (err) {
    next(err);
  }
};
const getProductById = async (req, res, next) => {
  try {
    res.send(await Product.findById(req.params.id));
  } catch (err) {
    next(err);
  }
};

exports.postAddProduct = postAddProduct;
exports.getAddProduct = getAddProduct;
exports.getProductById = getProductById;
