const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  url: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
