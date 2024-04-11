import { useCallback } from "react"

const InputBox = ({label,onChange}) => {

  return <div className="my-6 text-sm font-light">
    <p className="mb-2">
      {label}
    </p>
    <input
      onChange={onChange}
      className="border border-slate-300 rounded-lg w-full h-12 px-4"
      type="text"
    ></input>
  </div>
}

export default InputBox