import axios from "axios"
import ColorComponent from "../components/ColorComponent"

import ErrorPage from "../components/Error/ErrorPage"
import ErrorEmptyCart from "../components/Error/ErrorEmptyCart"

import { useCallback, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import cartAtom from "../store/atom/cartAtom"
// import Toast from "../components/Toast"

import SubtotalSelector from "../store/selector/SubtotalSelector"
import TaxSelector from "../store/selector/TaxSelector"
import OrderTotal from "../store/selector/OrderTotal"
import ShippingSelector from "../store/selector/ShippingSelector"
import { useNavigate } from "react-router-dom"
import { notifyFailure, notifySuccess } from "../components/Toastify"

const Cart = () =>{
  const cartItems = useRecoilValue(cartAtom)

  if(cartItems.length!==0){
    return (
    <div className="my-20 mx-8 lg:mx-auto lg:px-8 max-w-screen-0.5xl">

        <h1 className="text-3xl text-slate-600 font-medium border-b pb-5">
          Shopping Cart
        </h1>
        {/* <Toast/> */}
        <ApplyData cart={cartItems} />
        <CartOrderTotal />
        
    </div> 
    )
  }
  if(cartItems.length===0){
    return <ErrorEmptyCart/>
  }
  if(!cartItems){
    return <ErrorPage/>
  }

}

const ApplyData = ({cart})=>{
    return <>
    {cart.map((e,i)=>{
          return <div key={i} id={e._id}>
            <CartItem image={e.image} name={e.name} brand={e.brand} price={e.price} amount={e.amount} />
          </div> 
    })}
    </>
}


const CartItem = ({image,name,brand,price,color,amount}) => {
  const setCartItems = useSetRecoilState(cartAtom)

  const removeItem = useCallback(async(e)=>{
    try {
      const res = await axios({
        method : 'delete',
        url : "http://localhost:4000/api/v1/cart/delete",
        data : {
          cartId : e.target.parentElement.parentElement.parentElement.id
        },
        withCredentials : true
      })
      // console.log(res.data)
      localStorage.setItem('cart',JSON.stringify(res.data))
      setCartItems(JSON.parse(localStorage.getItem('cart')))
      notifySuccess("Item removed")
    } catch (error) {
      notifyFailure("Some error occured")
      console.log(error.message)
    }
  },[])

  return <div className="my-8 md:grid md:grid-cols-9">
      <img
        className="object-cover h-24 w-24 md:h-32 md:w-32 rounded-lg mb-4 col-span-2"
        src={image}
        alt="photo"
      />

      {/* product discription */}
      <div className="mb-4 col-start-3">

        <p className="text-slate-800 font-medium mb-2 w-full">
          {name}
        </p>

        <p className="mb-3 text-slate-400">
          {brand}
        </p>

        <div className="text-sm font-light flex flex:row gap-2 items-center">
          Color : <ColorComponent color={"blue"}/>
        </div>
      </div>

      {/* quantity */}
      <div className="mb-4 col-start-5">
        <p className="mb-2 text-sm text-slate-700">
          {price}
        </p>

        <input
          className="border rounded-lg px-2 text-sm mb-2 w-1/2 md:w-12"
          type="number"
          placeholder={amount}
        />

        <button 
          onClick={removeItem}
          className="block text-blue-400 text-sm">
          remove
        </button>
      </div>

      <p className="col-start-9">
        {price}
      </p>
    
    </div>
}


const CartOrderTotal = () => {
  const subtotal = useRecoilValue(SubtotalSelector)
  const taxTotal = useRecoilValue(TaxSelector)
  const orderTotal = useRecoilValue(OrderTotal)
  const shipping = useRecoilValue(ShippingSelector)

  const navigate = useNavigate()

  const proceedToCheckout = ()=>{
    navigate("/checkout")
  }

  return <div className="bg-blue-50 rounded-lg p-8">

    <CartOrderTotalSingle label={"Subtotal"} price={subtotal} />
    <CartOrderTotalSingle label={"Shipping"} price={shipping} />
    <CartOrderTotalSingle label={"Tax"} price={taxTotal} />

    <div className="flex justify-between text-slate-700 font-light my-4 text-sm">
      <p>Order Total</p>
      <p>${orderTotal}</p>
    </div>

    <div className="flex justify-center">
      <button type="button" className="w-full lg:max-w-screen-md text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={proceedToCheckout}>
          PROCEED TO CHECKOUT
      </button>
    </div>

  </div>
}

const CartOrderTotalSingle = ({label,price}) => {
  return <div className="flex justify-between text-xs font-light text-slate-700 border-b-2 my-2 pb-2">
      <p>
        {label}
      </p>
      <p>
        ${price}
      </p>
    </div>
}

export default Cart