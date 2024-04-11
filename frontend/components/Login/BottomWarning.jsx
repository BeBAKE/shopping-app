import { NavLink } from "react-router-dom"

const BottomWarning = ({path,label,message}) => {
  return <div className="self-center">
    {message}{'\t'}  
    <NavLink
    className="text-blue-500"
    to={path}>
      {label}
    </NavLink>

  </div>
}

export default BottomWarning