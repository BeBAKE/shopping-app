import { useNavigate } from 'react-router-dom'
import products from '../../../src/assets/Products'

const GallaryProduct = ({name , price ,image,id}) => {
  const navigate = useNavigate()


  return <div className='h-fill w-fill p-4 pb-6 shadow-xl rounded-xl flex flex-col items-center' id={id}
  onClick={(e)=>{
    // console.log(e.currentTarget.id)
    navigate(`/productPage/${e.currentTarget.id}`)
  }}
  >
    
    <img 
      className='h-64 md:h-48 lg-36 w-full object-cover rounded-xl mb-8'
      src={image} alt="photo"></img>
    {/* <img 
      className='h-64 md:h-48 lg-36 w-full object-cover rounded-xl mb-8'
      src={`../../src/assets/pexels-photo-${image}.jpg`} alt="photo"></img> */}

    <p
      className='mb-2 text-xl font-medium text-slate-700'>
      {name}
    </p>

    <p className='text-indigo-800'>
      € {price}
    </p>

  </div>
}

export default GallaryProduct