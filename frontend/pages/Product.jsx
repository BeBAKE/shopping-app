import ColorComponent from "../components/ColorComponent"

const Product = () => {
// make backend request for images and other resources
  

  return (
    <div className="w-full h-full mt-24 px-6 lg:mx-auto lg:max-w-screen-xl">
      {/* upper div  */}
      <div className="mb-8 text-lg">
        Links
      </div>

      {/* Lower div */}
      <div className="flex flex-col lg:flex-row h-fit">

        {/* Image div */}
        <div className="flex flex-row lg:justify-start h-96 mb-8 pr-8 lg:w-2/5">
          <img 
            className="shadow-lg rounded-lg object-fill w-80 h-96 lg:object-fit lg:w-96 lg:h-96"
            src="../src/assets/pexels-photo-943150.jpg"></img>
        </div>

        {/* Product discription div */}
        <div className="py-2 pr-4 lg:w-3/5">

          <h1 className="text-3xl text-slate-600 font-extrabold mb-3">
            Comfy Bed
          </h1>

          <h2 className="mb-3 text-xl font-bold text-slate-400">
            Brand
          </h2>

          <p className="mb-8 text-xl font-normal">
            $129.99
          </p>

          <p className="mb-8 leading-loose font-light text-slate-700 text-md">
            Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch ptchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
          </p>

          <div className="mb-4">
            <p className="font-bold mb-2">Colors</p>
            <div className="flex justify-start gap-4">
              <ColorComponent color={"red"}/>
              <ColorComponent color={"blue"}/>
              <ColorComponent color={"yellow"}/>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-bold mb-2">Amount</p>
            <input 
              type="number"
              placeholder="Qty"
              className="border border-black h-10 rounded-lg px-2"

            />
          </div>
          <button type="button" className="text-md focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600">Add to bag</button>
        </div>

      </div>
    </div>

  )
}

export default Product
