import { Routes,Route } from "react-router-dom"
import { Fragment } from "react"

import SignIn from '../auth/sign-in/sign-in.component'
import SignUp from '../auth/sign-up/sign-up.component'

const AuthLayout = () => {
    return (
      
              <Routes>
    <Route path="sign-in" element={<SignIn/>}/>
    <Route path="sign-up" element={<SignUp/>}/>
     </Routes>
         
   
    )
}

export default AuthLayout;