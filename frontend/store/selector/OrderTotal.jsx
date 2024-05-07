import { selector } from "recoil";
import SubtotalSelector from "./SubtotalSelector";
import TaxSelector from "./TaxSelector";
import Shipping from "./ShippingSelector";

const OrderTotal = selector({
  key : 'CartOrderTotal',
  get : ({get})=>{
    const subtotal = get(SubtotalSelector)
    const tax = get(TaxSelector)
    const shipping = get(Shipping)

    return Math.floor(subtotal+shipping+tax)
  }
})

export default OrderTotal