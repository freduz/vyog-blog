import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';


import './App.scss'
import Header from './components/header/header.component'
import MainRoute from './routes/main';
const App = () => {
  return (
    
    <MDBContainer className='body-container'>
        <Header/>
        <MainRoute/>
    </MDBContainer>
   
  )
}

export default App