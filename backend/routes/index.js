const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const productRouter = require("./products");
const cartRouter = require("./cart");
const orderRouter = require("./order");

const authMiddleware = require("../middleware/auth");
const authChecker = require("../controllers/authChecker");

router.use("/user", userRouter);
router.use("/products", productRouter);
router.use("/cart", authMiddleware, cartRouter);
router.use("/order", authMiddleware, orderRouter);

// router.use("/auth_checker", authChecker);

module.exports = router;
