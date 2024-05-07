import { useRecoilValue } from "recoil"
import orderAtom from "../store/atom/orderAtom"
import ErrorEmptyOrder from "../components/Error/ErrorEmptyOrder"

function Order() {
  const orderList = useRecoilValue(orderAtom)

  if(!orderList){
    return <ErrorPage/>
  }

  if(orderList.length === 0 ){
    return <ErrorEmptyOrder/>
  }

  return (
    <div
      className="m-8">

        <div className="py-6 border-b border-slate-300">
          <h1 className="text-3xl font-xl text-slate-700">Your Orders</h1>
        </div>

        <div className="my-8">
          <div className="text-slate-700 font-xl">
            Total Orders : {orderList.length}
          </div>

          {/* Heading */}
          <div 
            className="grid grid-cols-4 gap-4 text-sm m-4 text-slate-500 border-b pb-3">
            <div>Name</div>
            <div>Address</div>
            <div>Products</div>
            <div>Cost</div>
          </div>

          <PutElements list={orderList}/>

        </div>

      </div>
  )
}

function PutElements({list}){

  return <>

    {list.map((e)=>{
      return <Element key={e._id} name={e.name} address={e.address} products={e.product} cost={e.cost} />
    })}

  </>
}


function Element({name,address,products,cost}){
  return (
    <div className="grid grid-cols-4 gap-4 text-sm m-4 font-extralight">
      <div className="text-wrap truncate">
        {name}
      </div>

      <div className="text-wrap truncate">
        {address}
      </div>

      <div className="text-wrap truncate">
        {products}
      </div>

      <div className="text-wrap truncate">
        {cost}
      </div>
    </div>
  )
}
export default Order