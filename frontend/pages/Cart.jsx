import ColorComponent from "../components/ColorComponent"

const Cart = ({image,name,brand,price,color,qty}) =>{
  return <div className="my-20 mx-8 lg:mx-auto lg:px-8 max-w-screen-0.5xl">

    <h1 className="text-3xl text-slate-600 font-medium border-b pb-5">
      Shopping Cart
    </h1>

    <CartItem />
    <CartItem />
    <CartItem />

    <CartOrderTotal />
    
  </div>
}


const CartItem = ({image,name,brand,price,color,qty}) => {
  return <div className="my-8 md:grid md:grid-cols-9">
      {/* image */}
      <img
        className="object-cover h-24 w-24 md:h-32 md:w-32 rounded-lg mb-4 col-span-2"
        src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="photo"
      />

      {/* product discription */}
      <div className="mb-4 col-start-3">

        <p className="text-slate-800 font-medium mb-2 w-full">
          Avant-Grade Lamp
        </p>

        <p className="mb-3 text-slate-300">
          Modenza
        </p>

        <div className="text-sm font-light flex flex:row gap-2 items-center">
          Color : <ColorComponent color={"blue"}/>
        </div>
      </div>

      {/* quantity */}
      <div className="mb-4 col-start-5">
        <p className="mb-2 text-sm text-slate-700">
          Amount
        </p>

        <input
          className="border rounded-lg px-2 text-sm mb-2 w-1/2 md:w-12"
          type="number"
          value={"2"}
        />

        <p className="text-blue-400 text-sm">
          remove
        </p>
      </div>

      <p className="col-start-9">
        {`$124.44`}
      </p>
    
    </div>
}


const CartOrderTotal = () => {

  return <div className="bg-blue-50 rounded-lg p-8">

    <CartOrderTotalSingle label={"Subtotal"} price={2231.99} />
    <CartOrderTotalSingle label={"Shipping"} price={231.99} />
    <CartOrderTotalSingle label={"Tax"} price={19.99} />

    <div className="flex justify-between text-slate-700 font-light my-4 text-sm">
      <p>Order Total</p>
      <p>$9999.99</p>
    </div>

    <div className="flex justify-center">
      <button 
        type="button" 
        className="w-full lg:max-w-screen-md text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
          PROCEED TO CHECKOUT
      </button>
    </div>

  </div>
}

const CartOrderTotalSingle = ({label,price}) => {
  return <div className="flex justify-between text-xs font-light text-slate-700 border-b-2 my-2 pb-2">
      <p>
        Subtotal
      </p>
      <p>
        $2231.99
      </p>
    </div>
}

export default Cart