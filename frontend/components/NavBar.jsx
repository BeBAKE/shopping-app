import { useLocation , Link} from "react-router-dom"
import { useRecoilState } from 'recoil'

import isOpenAtom from "../store/atom/isOpenAtom"

import NavBarLinks from '../components/NavBarLinks'
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import { LogoOpen } from "../src/assets/HamburgerIcon"
import { useCallback } from "react"

function NavBar(){
  
  const [isOpen , setIsOpen] = useRecoilState(isOpenAtom)
  const location = useLocation()

  const hamburgerMenu = useCallback(()=>{
    setIsOpen(prev => !prev);
  })

  return (
    <div className={`${location.pathname==="/login"||location.pathname==="/register" ? "hidden" : "block"} w-screen bg-blue-50`}>

      {/* Register/Login bar */}
      <nav className="bg-indigo-950 h-10">
        <div 
          className="h-full mx-8 lg:mx-auto py-2 lg:px-8 flex flex-row justify-center sm:justify-end  items-center lg:max-w-screen-0.5xl gap-8">

            <p className="text-slate-300 text-sm">
              Hello User
            </p>
            <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 h-full text-center">Default</button>
            
        </div>

      </nav>

      {/* Navbar */}
      <nav className="mx-8 lg:mx-auto h-16 lg:max-w-screen-0.5xl flex flex-row justify-between items-center px-6 ">

        <div className=" relative">
          {/* Comfy Logo when window is large */}
          <div className="hidden lg:block">
            <Logo/>
          </div>

          {/* Hamburger Logo when window is small */}
          <div 
            onClick={hamburgerMenu}
            className="block lg:hidden w-16 h-12 py-1 flex items-center justify-center  hover:bg-slate-300 rounded-lg">
            <LogoOpen/>
          </div>

          <div 
            className={`${isOpen ? "block" : "hidden"} lg:hidden bg-slate-100 absolute top-16 -left-2 h-56 w-48 rounded-lg p-2 text-sm`}> 
            <NavBarLinks />
          </div>
        </div>

        <div className="hidden lg:block w-48 lg:w-5/12 text-sm">
          <NavBarLinks />
        </div>

        <Link to="/cart">
          <CartIcon noOfItems={'6'}/>
        </Link>
      </nav>
    </div>
  
  )
  // return(

  // <div 
  // className={`${location.pathname==="/login"||location.pathname==="/register" ? "hidden" : "block"} bg-indigo-300 h-24`}>
  //   navbar
  // </div>

  // )
  
}

export default NavBar