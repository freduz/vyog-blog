import { Routes,Route } from "react-router-dom"

import Layout from "../components/layout/layout.component"
import AuthLayout from '../components/layout/auth-layout.component'

const MainRoute = () => {
    return (
      <Routes>
        <Route path="auth/*" element={<AuthLayout/>}/>
        <Route path="/*" element={<Layout/>}/>
      </Routes>
    )
}

export default MainRoute