const LoginButton = ({label,onClick}) => {

  return <>
    <button 
      type="button" 
      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 my-4 focus:outline-none"
      onClick={onClick}
      >
      {label.toUpperCase()}
    </button>
  </>
}

export default LoginButton