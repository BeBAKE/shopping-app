import { useEffect } from "react"
import {useSetRecoilState, useRecoilStateLoadable} from 'recoil'
import ProductAtom from "../store/atom/productsAtom"
import axios from "axios"

export default function useRefreshProducts() {
  const setAllProducts = useSetRecoilState(ProductAtom) 

  useEffect(()=>{
    const refresh = async()=>{
      try {
        const res = await axios({
        method : 'GET',
        url : 'http://localhost:4000/api/v1/products',
        withCredentials : true,
        headers : {
          "Content-Type" : "application/json"
          }
        })
        setAllProducts(res.data.products)
      } catch (error) {
        throw error.message
      }
    }

    const id = setInterval(refresh,4000)

    return ()=>{
      clearInterval(id)
    }
    
  },[])
}