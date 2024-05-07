import { selector } from "recoil";
import cartAtom from "../atom/cartAtom";

const CartIconTotal = selector({
  key : 'CartIconTotal',
  get : ({get})=>{
    const cartItems = get(cartAtom)

    return cartItems ? cartItems.length : 0
  }
})

export default CartIconTotal