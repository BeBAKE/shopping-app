const Cart = require("../model/cart");

const pushToCart = async (req, res) => {
  try {
    const cartItem = req.body;
    // console.log(cartItem);
    const value = await Cart.findOneAndUpdate(
      {
        userId: req.userId,
      },
      { $push: { cart: cartItem } },
      { new: true }
    );
    res.status(200).json(value?.cart); //return: { cart = [ {} ,{} ]  }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateQuantityInCart = async (req, res) => {
  try {
    const { index, newAmount } = req.body;
    // const { cartId, newAmount } = req.body;
    if (!index || !newAmount) {
      return res.status(300).json({ message: "Cart can't be updated" });
    }

    const oldCart = await Cart.findOne({ userId: req.userId });

    oldCart.cart[index].amount = newAmount;

    const newCart = await Cart.findOneAndUpdate(
      { userId: req.userId },
      { $set: { cart: oldCart.cart } },
      { new: true }
    );
    // const value = await Cart.findOneAndUpdate(
    //   { userId: req.userId, $in: { _id: cartId } },
    //   { $set: { cart: { amount: newAmount } } }
    // );

    // console.log(newCart);

    res.status(200).json(newCart.cart); // return :-  [ {} , {} ]
  } catch (error) {
    res.status(400).json({ messaege: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { cartId } = req.body;
    // console.log(cartId);
    const value = await Cart.findOneAndUpdate(
      { userId: req.userId },
      { $pull: { cart: { _id: cartId } } },
      { new: true }
    );
    res.status(200).json(value.cart); //return: { cart = [ {} ,{} ]  }
  } catch (error) {
    res.status(400).json({ messaege: error.messaege });
  }
};

const getCart = async (req, res) => {
  try {
    const cartValue = await Cart.findOne({ userId: req.userId });
    res.status(200).json(cartValue.cart);
  } catch (error) {
    res.status(404).json({ message: "Can't fetch cart" });
  }
};

module.exports = {
  pushToCart,
  updateQuantityInCart,
  removeFromCart,
  getCart,
};
