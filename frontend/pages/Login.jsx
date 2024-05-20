import { useCallback, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import { useSetRecoilState } from "recoil"

import InputBox from "../components/Login/InputBox"
import Heading from "../components/Login/Heading"
import LoginButton from "../components/Login/LoginButton"
import BottomWarning from "../components/Login/BottomWarning"
import cartAtom from "../store/atom/cartAtom"
import orderAtom from '../store/atom/orderAtom'
import { notifyFailure, notifySuccess } from "../components/Toastify"
import Username from "../store/atom/Username"


const Login = () => {
  const navigate = useNavigate();
  const setCart = useSetRecoilState(cartAtom)
  const setOrder = useSetRecoilState(orderAtom)
  const setUsername = useSetRecoilState(Username)

  const emailRef = useRef()
  const passwordRef = useRef()
  // const [user,setUser] = useState({
  //   email : "",
  //   password : ""
  // })
  // res.data - {cart: {cart:[],userId…}, message: 'User logged in successfully'}
  const submit = useCallback(async () => {
    try {
      const res = await axios({
        method: 'post',
        url: "http://localhost:4000/api/v1/user/signin",
        data: {
          email: emailRef.current.value,
          password: passwordRef.current.value
        },
        withCredentials: true
      })
      console.log(res.data);

      localStorage.setItem('cart', JSON.stringify(res.data.cart.cart))
      localStorage.setItem('order', (res.data.order?.order) ? JSON.stringify(res.data.order.order) : [])
      localStorage.setItem('username', JSON.stringify(res.data.username))

      setCart(JSON.parse(localStorage.getItem('cart')))
      setOrder((res.data.order?.order) ? JSON.parse(localStorage.getItem('order')) : [])
      setUsername(JSON.parse(localStorage.getItem("username")))

      navigate("/")
    } catch (error) {
      notifyFailure("Login Error")
      console.log(error.message)
    }
  }, [])



  return (

    <div className="h-screen w-screen flex justify-center items-center">

      <div className="flex flex-col w-96 bg-white p-8 rounded-lg shadow-lg">

        <Heading label={"Login"} />

        <div>
          <InputBox label={"Email"} ref={emailRef}
          // onChange={(e)=>setUser({...user,email : e.target.value})}
          />
          <InputBox label={"Password"} ref={passwordRef}
          // onChange={(e)=>setUser({...user,password : e.target.value})}
          />
        </div>

        <LoginButton label={"Login"} onClick={submit} />

        <BottomWarning label={"Register"} path={"/register"} message="Not a member yet?" />

        {/* <NavLink to="/home">Home</NavLink> */}

      </div>

    </div>
  )
}


export default Login