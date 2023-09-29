const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const mainRoute = require("./routes/shop");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cors());

app.use(mainRoute);

//error handling
app.use((err, req, res, next) => {
  //console.log("error");
  console.log(err.name);
  let status = 500;
  if (err.name === "ValidationError") {
    status = 400;
  }
  res.status(status).send({
    data: "server error",
    msg: err.message,
  });
});

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(3001);
    console.log("listening");
  })
  .catch((err) => {
    console.log(err);
  });
