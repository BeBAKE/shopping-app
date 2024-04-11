import InputBox from "../components/Login/InputBox"

const Checkout = () => {
  return <div className="mt-16 px-10 md:mx-auto md:max-w-screen-0.5xl ">

    <div className="border-b border-slate-200 text-4xl py-5">
      <h1 className="text-slate-600 font-medium">
        Place Your Order</h1>
    </div>

    <div className="mt-4 flex flex-col md:flex-row gap-8">

      <div className="md:w-1/2 mt-5">
        <h2 className="text-lg text-slate-700 font-medium">
          Shipping Information
        </h2>

        <InputBox label={'First Name'} />
        <InputBox label={'Address'} />

        <button type="button" className="w-full py-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Place Your Order</button>
      </div>

      <div className="bg-blue-50 h-fit rounded-xl p-7 mt-5 md:w-1/2">
        <Info label={'Subtotal'} price={'$190.99'} /> 
        <Info label={'Shipping'} price={'$5.00'} />
        <Info label={'Tax'} price={'$18.99'} />
        <div className="flex flex-row justify-between font-light text-md my-5">
          <p>Order Total</p>
          <p>{'$202.00'}</p>
        </div>
      </div>

    </div>

  </div>
}

function Info ({label,price}) {
  return <div className="flex flex-row justify-between border-b border-slate-300 text-xs font-normal pb-2 mb-3">
    <p>{label}</p>
    <p>{price}</p>
  </div>
}

export default Checkout