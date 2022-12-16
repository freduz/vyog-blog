import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

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
            <MDBNavbarItem>
              <Link to="auth/sign-in">
              <MDBNavbarLink>Sign in</MDBNavbarLink>
              </Link>
       
            </MDBNavbarItem>
            <Link to="auth/sign-up">
              <MDBNavbarLink>Sign Up</MDBNavbarLink>
              </Link>
            </MDBNavbarNav>
          </div>
      </MDBContainer>
    </MDBNavbar>
  );
}