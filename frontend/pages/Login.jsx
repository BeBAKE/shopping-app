import { useCallback, useState } from "react"

import InputBox from "../components/Login/InputBox"
import Heading from "../components/Login/Heading"
import LoginButton from "../components/Login/LoginButton"
import BottomWarning from "../components/Login/BottomWarning"

import axios from "axios"

const Login = () => {
  const [user,setUser] = useState({
    email : "",
    password : ""
  })

  const submit = useCallback(async()=>{
    console.log(user)
    try {
      const res = await axios({
        method : 'post',
        url : "http://localhost:4000/api/v1/user/signin",
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
      
      <Heading label={"Login"}/>

      <div>
        <InputBox 
        label={"Email"} 
        onChange={(e)=>setUser({...user,email : e.target.value})}
        />
        <InputBox 
        label={"Password"} 
        onChange={(e)=>setUser({...user,password : e.target.value})}
        />
      </div>

      <LoginButton label={"Login"}
      onClick={submit}
      />

      <BottomWarning label={"Register"} path={"/register"} 
      message="Not a member yet?"/>

      {/* <NavLink to="/home">Home</NavLink> */}

    </div>

  </div>
  )
}


export default Login