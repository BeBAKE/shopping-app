import { selector } from "recoil";
import cartAtom from "../atom/cartAtom";

const SubtotalSelector = selector({
  key : "SubtotalSelector",
  get : ({get})=>{
    const cartItems = get(cartAtom)

    if(!cartItems){
      return 0
    }

    return cartItems.reduce((acc,cur)=>{
      const actualPrice = cur.price*(cur.amount===0 || !cur.amount ? 1:cur.amount)
      return acc+actualPrice
    },0)
  }
})

export default SubtotalSelector

