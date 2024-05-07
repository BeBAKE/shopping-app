import { atom } from "recoil";

const cartAtom = atom({
  key : 'cartAtom',
  default : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
})

export default cartAtom