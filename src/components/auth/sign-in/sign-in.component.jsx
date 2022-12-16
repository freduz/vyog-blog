import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import {signInWithGooglePopUp,createUserDocument} from '../../../utils/firebase/firebase'

import('./sign-in.component.style.scss')



const  SignIn = () => {
   const logWithGoogle = async () => {
       const {user} = await signInWithGooglePopUp();
       createUserDocument(user)
   } 

  return (
    <div className="auth-container">
        <form  className='sign-in-form'>
    <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
    <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

    <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
      </MDBCol>
      <MDBCol>
        <a href='#!'>Forgot password?</a>
      </MDBCol>
    </MDBRow>

    <MDBBtn type='submit' className='mb-4' block>
      Sign in
    </MDBBtn>

    <div className='text-center'>
      <p>
        Not a member? <a href='#!'>Register</a>
      </p>
      <p>or sign up with:</p>

   

      <MDBBtn type='button' floating color="secondary" className='mx-1' onClick={logWithGoogle}>
        <MDBIcon fab icon='google' />
      </MDBBtn>

     
    </div>
  </form>
    </div>
  );
}

export default SignIn