const express = require("express");
const router = express.Router();
const { updateOrder, getOrder } = require("../controllers/order");

router.patch("/updateOrder", updateOrder);
router.get("/order", getOrder);

module.exports = router;
