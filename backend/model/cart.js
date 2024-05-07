const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  cart: [
    {
      image: { type: String },
      name: { type: String },
      brand: { type: String },
      amount: { type: Number },
      price: { type: Number },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

/*
  one item
image,
name,
brand,
amount - (increase,decrease) [backend calls]
price

  price
subtotal (addition of all items)
shipping (no of items * 10)
tax (8% percent of subtotal)
order total (subtotal + shipping + tax)

*/

/*



*/
