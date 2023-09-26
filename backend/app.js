const mainRoute = require("./routes/shop");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(mainRoute);

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(3001);
    console.log("listening");
  })
  .catch((err) => {
    console.log(err);
  });
