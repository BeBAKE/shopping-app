import { selector } from "recoil";
import cartAtom from "../atom/cartAtom";

const ShippingSelector = selector({
  key : 'Shipping',
  get : ({get})=>{
    const cartItems = get(cartAtom)
    if(!cartItems){
      return 0
    }
    return cartItems.length!==0 ? 299.99 : 0
  }
})

export default ShippingSelector