const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  image: String,
  name: String,
  brand: String,
  price: Number,
  color: String,
  about: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
