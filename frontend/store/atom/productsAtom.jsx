import { atom, selector } from "recoil";
import axios from "axios";

const ProductAtom = atom({
  key : 'ProductAtom',
  default : selector({
    key : 'ProductAtom/Selector',
    get : async({get})=>{
      try {
        const res = await axios({
        method : 'GET',
        url : 'http://localhost:4000/api/v1/products',
        withCredentials : true,
        headers : {
          "Content-Type" : "application/json"
        }
        })
        // console.log(res.data.products)
        // console.log("atom");
        return res.data.products // array
      } catch (error) {
        return null
      }
    }
  })

})

export default ProductAtom


