import { atom, selector } from "recoil"

const Username = atom({
  key: 'Username',
  default: localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : null
}
)


export default Username