import React, { useState,useContext, Fragment } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

import {UserContext} from '../../contexts/user.context'
import {signOutUser} from '../../utils/firebase/firebase'


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const {currentUser,setCurrentUser} = useContext(UserContext)

  const signOutHandler = async () => {
    console.log('loggedout')
    const status =await signOutUser()
    setCurrentUser(null)
    console.log(status)
  }


  return (
    <MDBNavbar className='header' expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link to="/">
        <MDBNavbarBrand>Vogue</MDBNavbarBrand>
        </Link>


        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to='/'>
              <MDBNavbarLink active aria-current='page' to='/'>
                Home
              </MDBNavbarLink>
              </Link>
             
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/article/add'>
              <MDBNavbarLink >Add Article</MDBNavbarLink></Link>
              
            </MDBNavbarItem>

           
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>My Articles</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

         
        </MDBCollapse>
        <div>
            <MDBNavbarNav>
              {!currentUser ?   <Fragment><MDBNavbarItem>
              <Link to="auth/sign-in">
              <MDBNavbarLink>Sign in</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem><Link to="auth/sign-up">
              <MDBNavbarLink>Sign Up</MDBNavbarLink>
              </Link></MDBNavbarItem></Fragment>
       
            :  <MDBNavbarItem>
            
              <MDBNavbarLink onClick={signOutHandler}>Sign out</MDBNavbarLink>
             
       
            </MDBNavbarItem>}
            {/* <MDBNavbarItem>
              <Link to="auth/sign-in">
              <MDBNavbarLink>Sign in</MDBNavbarLink>
              </Link>
       
            </MDBNavbarItem> */}
            
            
            </MDBNavbarNav>
          </div>
      </MDBContainer>
    </MDBNavbar>
  );
}