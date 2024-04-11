import { useMemo } from "react"

import products from "../../../src/assets/Products"

const ScrollableProduct = () =>{

  const featuredProducts = useMemo((e)=>{
    const newArr = []
    for(let i = 0; i<3 ;i++){
      newArr.push( products[i] );
    }
    return newArr;
  },[products])

  return <div className="h-96 flex flex-row overflow-scroll no-scrollbar bg-black content-center p-4 rounded-2xl gap-4">

    {/* <img 
      className='object-cover rounded-xl'
      src={`../../src/assets/pexels-photo-1034584.jpg`} alt="photo"></img>
    <img 
      className='object-cover rounded-xl'
      src={`../../src/assets/pexels-photo-3679601.jpg`} alt="photo"></img>
    <img 
      className='object-cover rounded-xl'
      src={`../../src/assets/pexels-photo-943150.jpg`} alt="photo"></img> */}
    {
      featuredProducts.map((element,index)=>{
        return <img className='object-cover rounded-xl'src={element.image} alt="photo" key={index}></img>
      })
    }

  </div>
}

export default ScrollableProduct