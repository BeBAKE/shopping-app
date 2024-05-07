import { useRecoilStateLoadable } from "recoil"
import GallaryProductView from "../components/ProductMini/View/GallaryProductView"
import ProductAtom from "../store/atom/productsAtom"

import ErrorPage from "../components/Error/ErrorPage"


const ProductPage = () =>{
  const [product,setAllProducts] = useRecoilStateLoadable(ProductAtom)

  // useRefreshProducts()

  if(product.state==="hasValue" && product.contents!==null){
    return <div className="mx-8 mb-24 lg:mx-auto lg:max-w-screen-0.5xl">
      <GallaryProductView productArray={product.contents} />
    </div>  
  }
  if(product.state==="loading"){
    return <div>
      Loading......
    </div>
  }
  if(product.state === "hasError" || product.contents===null){
    return <ErrorPage/>
  }
}  

export default ProductPage