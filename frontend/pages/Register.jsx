import { useCallback, useState } from "react"

import InputBox from "../components/Login/InputBox"
import Heading from "../components/Login/Heading"
import LoginButton from "../components/Login/LoginButton"
import BottomWarning from "../components/Login/BottomWarning"

import axios from "axios"

const Register = () => {
  const [user,setUser] = useState({
    username : '',
    email : "",
    password : ""
  })

  const submit = useCallback(async()=>{
    console.log(user)
    try {
      const res = await axios({
        method : 'post',
        url : 'http://localhost:4000/api/v1/user/signup',
        data : user
      })
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  },[user])

  return (
  <div className="h-screen w-screen flex justify-center items-center">

    <div className="flex flex-col w-96 bg-white p-8 rounded-lg shadow-lg">
      
      <Heading label={"Register"}/>

      <div>
        <InputBox 
        label={"Username"}
        onChange={(e)=>setUser({...user,username : e.target.value})}/>

        <InputBox
        label={"Email"} 
        onChange={(e)=>setUser({...user,email : e.target.value})}/>

        <InputBox 
        label={"Password"} 
        onChange={(e)=>setUser({...user,password : e.target.value})}/>
      </div>

      <LoginButton label={"Register"} onClick={submit}/>

      <BottomWarning label={"Login"} path={"/login"}
      message={"Already a member?"}/>




    </div>

  </div>
  )
}


export default Register