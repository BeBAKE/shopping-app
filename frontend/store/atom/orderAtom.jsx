import { atom } from "recoil";

const orderAtom = atom({
  key : 'orderAtom',
  default : localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : []
})

export default orderAtom