const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  // Order: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
  order: [
    {
      name: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
      product: { type: Number, required: true },
      cost: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
