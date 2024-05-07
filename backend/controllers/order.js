const { default: mongoose } = require("mongoose");
const Cart = require("../model/cart");
const Order = require("../model/order");

const updateOrder = async (req, res) => {
  const session = await mongoose.startSession();
  const orders = req.body;
  try {
    session.startTransaction();
    const options = { session };

    const cart = await Cart.findOneAndUpdate(
      { userId: req.userId },
      {
        $set: { cart: [] },
      },
      options
    );

    const order = await Order.findOneAndUpdate(
      { userId: req.userId },
      { $push: { order: orders } },
      { new: true },
      options
    );

    await session.commitTransaction();
    session.endSession();
    return res.status(200).json(order.order);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error.message);
    return req.status(403).json({ response: "failed", message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ userId: req.userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ response: "failed", message: error.message });
  }
};

module.exports = {
  updateOrder,
  getOrder,
};
