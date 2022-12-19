import React from 'react';
import {
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import {signInWithGooglePopUp,createUserDocument} from '../../../utils/firebase/firebase'

import SignInForm from './sign-in-form/sign-in-form.component'

import('./sign-in.component.style.scss')



const  SignIn = () => {


   const logWithGoogle = async () => {
       const {user} = await signInWithGooglePopUp();
       createUserDocument(user)
   } 

  return (
    <div className="auth-container">
      
          <SignInForm/>
      <MDBBtn type='button' floating color="secondary" className='mx-1' onClick={logWithGoogle}>
            <MDBIcon fab icon='google' />
          </MDBBtn>
    </div>
  );
}

export default SignIn 