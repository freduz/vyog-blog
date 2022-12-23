import { createContext, useState } from "react";

export const ErrorContext = createContext({
    errors:'',
    setErrors:() => null
})

export const ErrorProvider = ({children}) => {
    const [errors,setErrors] = useState(null);
    const value = {errors,setErrors};

    return  <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
    


}