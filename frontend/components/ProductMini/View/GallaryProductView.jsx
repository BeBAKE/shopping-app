import GallaryProduct from "../components/GallaryProduct"

const GallaryProductView = ({productArray})=>{

  return <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:px-6">

      {productArray.map((product,index)=>{
        return <div key={index}>
          <GallaryProduct id={product._id} name={product.name} price={product.price} image={product.image} />
        </div>
      })}
    
    </div>
}

export default GallaryProductView