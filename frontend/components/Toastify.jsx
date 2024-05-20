import { toast } from "react-toastify"

const notifySuccess = (msg) => {
  return toast.success(msg ? `${msg}` : "Action Succeded", {
    position: "top-center"
  })
}

const notifyFailure = (msg) => {
  return toast.error(msg ? `${msg}` : "Action Failed", {
    position: 'top-center'
  })
}


export {
  notifyFailure,
  notifySuccess
}