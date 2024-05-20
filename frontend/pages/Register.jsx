import { useCallback, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import InputBox from "../components/Login/InputBox"
import Heading from "../components/Login/Heading"
import LoginButton from "../components/Login/LoginButton"
import BottomWarning from "../components/Login/BottomWarning"
import { useSetRecoilState } from "recoil"
import Username from "../store/atom/Username"

import { notifyFailure } from "../components/Toastify"

const Register = () => {
  const navigate = useNavigate()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const setUsername = useSetRecoilState(Username)
  // const [user,setUser] = useState({
  //   username : '',
  //   email : "",
  //   password : ""
  // })

  // {cart: {cart:[],_id:…}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3M…Q0N30.mOuhCnnvGnd4hPil0YLEFQf6dWRcsrpiRt_jSIwiy5w'}
  const submit = useCallback(async () => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/v1/user/signup',
        data: {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        },
        withCredentials: true
      })
      localStorage.setItem('cart', JSON.stringify(res.data.cart.cart))
      localStorage.setItem('order', JSON.stringify(res.data.order.order))
      localStorage.setItem('username', JSON.stringify(res.data.username))

      setUsername(JSON.parse(localStorage.getItem("username")))
      navigate('/')
    } catch (error) {
      notifyFailure("Register Error")
      console.log(error.message)
    }
  }, [])

  return (
    <div className="h-screen w-screen flex justify-center items-center">

      <div className="flex flex-col w-96 bg-white p-8 rounded-lg shadow-lg">

        <Heading label={"Register"} />

        <div>
          <InputBox label={"Username"} ref={usernameRef}
          // onChange={(e)=>setUser({...user,username : e.target.value})}
          />

          <InputBox label={"Email"} ref={emailRef}
          // onChange={(e)=>setUser({...user,email : e.target.value})}
          />

          <InputBox label={"Password"} ref={passwordRef}
          // onChange={(e)=>setUser({...user,password : e.target.value})}
          />
        </div>

        <LoginButton label={"Register"} onClick={submit} />

        <BottomWarning label={"Login"} path={"/login"} message={"Already a member"} />

      </div>

    </div>
  )
}


export default Register