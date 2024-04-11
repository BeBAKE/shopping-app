import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes , Route,useLocation  } from 'react-router-dom'
import Login from '../pages/Login'
import Register from "../pages/Register"
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Checkout from '../pages/Checkout'


function App() {

  return (
    <>
      <Router>

        <NavBar/>

        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/productPage' element={<ProductPage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='product' element={<Product/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
