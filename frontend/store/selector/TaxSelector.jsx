import { selector } from "recoil";
import SubtotalSelector from "./SubtotalSelector";

const TaxSelector = selector({
  key : 'TaxSelector',
  get : ({get})=>{
    const subtotal = get(SubtotalSelector)
    return Math.floor(subtotal*0.25)
  }
})

export default TaxSelector