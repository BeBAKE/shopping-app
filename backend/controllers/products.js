const mongoose = require("mongoose");
const Product = require("../model/product");

const getAllProducts = async (req, res) => {
  try {
    const prods = await Product.find({});
    res.status(200).json({ products: prods });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOneProduct = async (req, res) => {
  let prodId = req.params.prodId;
  // console.log(prodId);
  if (!prodId) {
    return res.status(403).json({ message: "Invalid id" });
  }
  try {
    prodId = new mongoose.Types.ObjectId(prodId);
    const prod = await Product.findOne({ _id: prodId });
    res.status(200).json({ product: prod });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFilteredProducts = async (req, res) => {
  let { min, max } = req.query;
  if (!min && !max) {
    return res.redirect(".");
    // return res.status(409).json({ message: "Filter error" });
  }
  if (!min || min < 0) {
    min = 0;
  }

  if (!max || max < 0 || max < min) {
    try {
      const prods = await Product.find({
        price: { $gte: min },
      });
      return res
        .status(200)
        .json({ message: "invalid max range", products: prods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  // const result = `min : ${min} , max : ${max}`;
  // res.json(result);
  try {
    const prods = await Product.find({
      $and: [{ price: { $lte: max } }, { price: { $gte: min } }],
    });
    res.status(200).json({ products: prods });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getFilteredProducts,
};

/*

image
name 
brand 
price
color
about

*/

/*

  min can be
undefined
less than 0

  max can be
undefined
less than 0
less than min 


*/
