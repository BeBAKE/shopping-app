import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route,useLocation, Outlet, Navigate, useNavigate  } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import isOpenAtom from '../store/atom/isOpenAtom'
import Login from '../pages/Login'
import Register from "../pages/Register"
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'
import Order from '../pages/Order'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {
  const  setIsOpen = useSetRecoilState(isOpenAtom)

  useEffect(()=>{
    window.addEventListener('click',(e)=>{
    if(e.target.id!=="hamburgerMenu"){
      setIsOpen(false)
    }
    })

    return ()=>{
      window.removeEventListener('click',(e)=>{
        if(e.target.id!=="hamburgerMenu"){
          setIsOpen(false)
        }
      })
    }

  },[])

  return (
    <>
      <Router>

        <NavBar/>
        
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/productPage' element={<ProductPage/>} />
          <Route path='/productPage/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>

      </Router>
      <ToastContainer autoClose={3000} limit={3} pauseOnFocusLoss={false} draggable/>
    </>
  )
}



export default App
