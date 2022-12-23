import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
import { ToastContainer } from 'react-toastify';


import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/header.component'
import MainRoute from './routes/main';
const App = () => {
  return (
    
    <MDBContainer className='body-container'>
        <Header/>
        <MainRoute/>
        <ToastContainer />
    </MDBContainer>
   
  )
}

export default App