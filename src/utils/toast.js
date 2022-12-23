import {  toast } from 'react-toastify';


 const success = (options) => {
   toast.success(options.message,{...options})
}

 const warning = ({options}) => {
    toast.warn(options.message,{...options})
}

 const error = (options) => {
    toast.error(options.message,{...options})
}

 const info = ({options}) => {
    toast.info(options.message,{...options})
}

const toastNotification = {
    success,
    error,
    warning,
    info
}


export default toastNotification;
