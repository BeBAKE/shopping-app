import GallaryProductView from "../components/ProductMini/View/GallaryProductView"
import products from "../src/assets/Products"

const ProductPage = () =>{
  return <div className="mx-8 mb-24 lg:mx-auto lg:max-w-screen-0.5xl">
    <GallaryProductView productArray={products} />
  </div>
}

export default ProductPage