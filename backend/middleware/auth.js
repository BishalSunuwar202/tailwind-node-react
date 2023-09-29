var jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  console.log("auth");
  let token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.verify(token, process.env.SECRET_KEY);
  console.log(decoded);
  next()
};

exports.authentication = authentication;
