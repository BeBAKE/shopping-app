import { useCallback, useEffect, useRef, useState } from "react"
import ColorComponent from "../components/ColorComponent"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useRecoilValue, useSetRecoilState } from "recoil"
import cartAtom from "../store/atom/cartAtom"
import { notifySuccess,notifyFailure } from "../components/Toastify"


const Product = () => {
  const [product , setProduct] = useState({
    "image" : "Loading...",
    "name": "Loading....",
    "brand": "Loading....",
    "price": "Loading....",
    "color": "Loading....",
    "about": "Loading....",
  })
  // const [qty,setQty] = useState(0)
  const amountRef = useRef()
  const {productId} = useParams()
  const setCartItems = useSetRecoilState(cartAtom)


  useEffect(()=>{
    (async()=>{
      try {
        const res = await axios({
          method : 'get',
          url : `http://localhost:4000/api/v1/products/productId/${productId}`,
          withCredentials : true,
          headers : {
            "Content-Type" : "application/json"
          }
        })
        setProduct(res.data.product)
      } catch (error) {
        console.error(error.message)
      }
    })()
  },[])

  const addToCart = useCallback(async()=>{
    try {
      const res = await axios({
        method : 'patch',
        url : "http://localhost:4000/api/v1/cart/insert",
        data : {...product,amount : amountRef.current.value},
        withCredentials : true
      })
      localStorage.setItem('cart',JSON.stringify(res.data))
      setCartItems(JSON.parse(localStorage.getItem('cart')))
      notifySuccess("Item added to Cart")
    } catch (error) {
      console.log(error)

      error.response.data.message.includes("jwt") ?  notifyFailure("user not logged in") : notifyFailure("some error has occured")
    }
  },[product])

  return (
    <div className="w-full h-full mt-24 px-6 lg:mx-auto lg:max-w-screen-xl">
      {/* upper div  */}
      {/* <div className="mb-8 text-lg">
        Links
      </div> */}

      {/* Lower div */}
      <div className="flex flex-col lg:flex-row h-fit">

        {/* Image div */}
        <div className="flex flex-row lg:justify-start h-96 mb-8 pr-8 lg:w-2/5">
          <img 
            className="shadow-lg rounded-lg object-fill w-80 h-96 lg:object-fit lg:w-96 lg:h-96"
            alt="Product Image"
            src={product.image}
            ></img>
        </div>

        {/* Product discription div */}
        <div className="py-2 pr-4 lg:w-3/5">

          <h1 className="text-3xl text-slate-600 font-extrabold mb-3">
            {product.name}
          </h1>

          <h2 className="mb-3 text-xl font-bold text-slate-400">
            {product.brand}
          </h2>

          <p className="mb-8 text-xl font-normal">
            ${product.price}
          </p>

          <p className="mb-8 leading-loose font-light text-slate-700 text-md">
            {product.about}
          </p>

          <div className="mb-4">
            <p className="font-bold mb-2">Colors</p>
            <div className="flex justify-start gap-4">
              <ColorComponent color={"red"}/>
              <ColorComponent color={"blue"}/>
              <ColorComponent color={"yellow"}/>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold mb-2">Amount</p>
            <input 
              type="number"
              placeholder="Qty"
              className="border border-black h-10 rounded-lg px-2"
              // onChange={(e)=>setQty(e.target.value)}
              ref={amountRef}
            />
          </div>
          <button 
            type="button" 
            className="text-md focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600" 
            onClick={addToCart}>Add to bag</button>
        </div>

      </div>
      {/* <ToastContainer/> */}
    </div>

  )
}

export default Product
