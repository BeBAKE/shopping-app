import { useMemo } from "react"

const ColorComponent = ({color}) =>{
  
  return <p className={`h-4 w-4  bg-${color}-500 rounded-full border-2 border-black`}>
  </p>
}

export default ColorComponent