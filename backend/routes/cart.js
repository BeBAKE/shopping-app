const express = require("express");
const router = express.Router();

const {
  pushToCart,
  updateQuantityInCart,
  removeFromCart,
  getCart,
} = require("../controllers/cart");

router.patch("/insert", pushToCart);
router.patch("/updtQty", updateQuantityInCart);
router.delete("/delete", removeFromCart);
router.get("/getCart", getCart);

module.exports = router;

/* 

getting cart ( getting cart value on following events :-
  1. after signin
  2. after every operation (addition of new ,update qty ,remove, order )
  )

updating qty of existing cartItem (patch)

deleting cartItems (delete)

adding CartItems (patch)

*/

/*

http://localhost:4000/api/v1/cart/delete

http://localhost:4000/api/v1/cart/insert

http://localhost:4000/api/v1/cart/updtQty

*/
