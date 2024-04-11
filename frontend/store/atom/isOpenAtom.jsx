import { atom } from "recoil"

const isOpenAtom = atom({
  key : "IsOpen",
  default : false
})

export default isOpenAtom