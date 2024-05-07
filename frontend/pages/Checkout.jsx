import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import axios from "axios"

import ErrorEmptyCart from "../components/Error/ErrorEmptyCart"
import InputBox from "../components/Login/InputBox"

import SubtotalSelector from "../store/selector/SubtotalSelector"
import TaxSelector from "../store/selector/TaxSelector"
import OrderTotal from "../store/selector/OrderTotal"
import Shipping from "../store/selector/ShippingSelector"
import cartAtom from "../store/atom/cartAtom"
import { useRef } from "react"
import CartIconTotal from "../store/selector/CartIconTotal"
import orderAtom from "../store/atom/orderAtom"
import { useNavigate } from "react-router-dom"
import { notifyFailure, notifySuccess } from "../components/Toastify"

const Checkout = () => {
  const subtotal = useRecoilValue(SubtotalSelector)
  const taxTotal = useRecoilValue(TaxSelector)
  const orderTotal = useRecoilValue(OrderTotal)
  const shipping = useRecoilValue(Shipping)
  const totalCartItems = useRecoilValue(CartIconTotal)

  const setOrderList = useSetRecoilState(orderAtom)
  const [cartItems,setCartItems] = useRecoilState(cartAtom)

  const navigate = useNavigate()

  const nameRef = useRef()
  const addressRef = useRef()

  if(cartItems.length===0){
    return <ErrorEmptyCart/>
  }

  const placeOrderBtn = async()=>{
    if((nameRef.current.value.trim())==="" || (addressRef.current.value).trim()===""){
      notifyFailure("Please enter details")
      return 
    }
    try {
      const res = await axios({
        method : 'patch',
        url : 'http://localhost:4000/api/v1/order/updateOrder',
        data : {
          name : nameRef.current.value,
          address : addressRef.current.value,
          product : totalCartItems,
          cost : orderTotal
        },
        withCredentials : true
      })
      // console.log(res) //res.data.order (from backend order.order is coming)
      localStorage.removeItem('cart')
      localStorage.setItem('order',JSON.stringify(res.data))

      setOrderList(JSON.parse(localStorage.getItem('order')))
      setCartItems([])
      notifySuccess("Ordered placed successfully")
      navigate('/order')
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="mt-16 px-10 md:mx-auto md:max-w-screen-0.5xl ">

    <div className="border-b border-slate-200 text-4xl py-5">
      <h1 className="text-slate-600 font-medium">
        Place Your Order</h1>
    </div>

    <div className="mt-4 flex flex-col md:flex-row gap-8">

      <div className="md:w-1/2 mt-5">
        <h2 className="text-lg text-slate-700 font-medium">
          Shipping Information
        </h2>

        <InputBox label={'First Name'} ref={nameRef}/>
        <InputBox label={'Address'} ref={addressRef}/>

        <button 
        onClick={placeOrderBtn}
        type="button" className="w-full py-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Place Your Order</button>
      </div>

      <div className="bg-blue-50 h-fit rounded-xl p-7 mt-5 md:w-1/2">
        <Info label={'Subtotal'} price={subtotal} /> 
        <Info label={'Shipping'} price={shipping} />
        <Info label={'Tax'} price={taxTotal} />
        <div className="flex flex-row justify-between font-light text-md my-5">
          <p>Order Total</p>
          <p>{orderTotal}</p>
        </div>
      </div>

    </div>

  </div>
}

function Info ({label,price}) {
  return <div className="flex flex-row justify-between border-b border-slate-300 text-xs font-normal pb-2 mb-3">
    <p>{label}</p>
    <p>{price}</p>
  </div>
}

export default Checkout