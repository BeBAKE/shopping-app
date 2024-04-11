import { useEffect, useState } from "react"
import GallaryProductView from "../components/ProductMini/View/GallaryProductView"
import products from "../src/assets/Products"
import ScrollableProduct from "../components/ProductMini/View/ScrollableProduct"

const Home = () =>{
  const [prodArr , setProdArr] = useState([])

  useEffect(()=>{
    let newArr = [];
    for(let i = 0 ; i<=2 ;i++){
      newArr[i] = products[i]
    }
    setProdArr(newArr)
  },[])


  return <div className="mx-8 mt-24 h-screen mb-16 lg:mx-auto lg:px-8 lg:max-w-screen-0.5xl">

{/* upper div */}
    <div className="lg:flex lg:flex-row lg:gap-16">

      {/* discription */}
      <div className="w-4/5 lg:w-1/2">
        <h1 className="text-slate-600 text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aperiam neque accusantium laborum voluptates esse provident, repudiandae minus quod nulla, atque ut modi reiciendis quo! Molestias itaque aliquid recusandae mollitia.
        </p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">OUR PRODUCTS</button>
      </div>

      {/* scrollable images */}
      <div className="hidden lg:block lg:w-1/2">
        <ScrollableProduct />
      </div>

    </div>


{/* Gallary of products */}
    <div>
      <h2 className="text-3xl text-slate-700 font-medium border-b py-7 my-10 tracking-wider capitalize">
        Featured Products
      </h2>
      <GallaryProductView productArray={prodArr}/>
    </div>
  </div>
}

export default Home