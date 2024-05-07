import { Link, useLocation } from "react-router-dom"


const NavBarLinks = () => {

  return <>
    <div>
      <ul className="flex flex-col lg:flex-row lg:justify-around lg:items-center h-12">
        <li><SingleLink path={'/'} label={"Home"}/></li>
        <li><SingleLink path={'/about'} label={"About"}/></li>
        <li><SingleLink path={'/productPage'} label={"Products"}/></li>
        <li><SingleLink path={'/cart'} label={"Cart"}/></li>
        <li><SingleLink path={'/checkout'} label={"Checkout"}/></li>
        <li><SingleLink path={'/order'} label={"Order"}/></li>
      </ul>    

    </div>
  </>
}

const SingleLink = ({path,label})=>{
  const location = useLocation()
  return <>
      <Link to={path}>
        <p  
          className={`${location.pathname === `${path}` ? 'bg-black text-slate-300 hover:bg-black':"hover:bg-slate-200"}  rounded-lg px-3.5 leading-9`}>{label}</p>
      </Link>
  </>
}

export default NavBarLinks