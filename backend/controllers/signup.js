const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const Signup = require("../models/Signup");

const getUser = async (req, res, next) => {
  try {
    res.send(await Signup.findById(req.params.id));
    //console.log(req.params); params = routes parameter 
    //console.log(req.query);
  } catch (err) {
    console.log(err);
  }

  // res.send(await Signup.findById((id) => req.param === id));
};
const getAllUser = async (req, res, next) => {
  res.send(await Signup.find({}));
};

//await will wait promise to finish and give result. Signup.find() here returns promise

const postSignUp = (req, res, next) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  //for these computation above, express handler(middleware) is used.
  try {
    Signup.create({ ...req.body, password: hash })
      .then((info) => {
        let user_obj = info.toObject();
        console.log(user_obj);
        delete user_obj.password;
        //to send data without password
        res.send({ info: user_obj });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  } catch (err) {
    next(err);
  }
};
const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let user = await Signup.findOne({ email }).select("password");
    //console.log(user));

    let status = bcrypt.compareSync(req.body.password, user.password);
    let user_obj = await Signup.findOne({ email });
    console.log(user_obj);
    //here we get Error: Expected "payload" to be a plain object. But when i check the type it will show object. This error comes because user_obj gives mongodb object and we need js object. so we use toObject() to change in plain js
    var token = jwt.sign(user_obj.toObject(), process.env.SECRET_KEY, {
      expiresIn: "30s",
    });

    if (status) {
      return res.send({
        access_token: token,
      });
    }
    return res.status(401).send({
      msg: "Invalid credentials",
    });
  } catch (err) {
    next(err);
  }
};

exports.postSignUp = postSignUp;
exports.getAllUser = getAllUser;
exports.getUser = getUser;
exports.login = login;
