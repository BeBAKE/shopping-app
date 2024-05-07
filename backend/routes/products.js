const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getOneProduct,
  getFilteredProducts,
} = require("../controllers/products");

router.get("/", getAllProducts);
router.get("/productId/:prodId", getOneProduct);
router.get("/filter", getFilteredProducts);

module.exports = router;
