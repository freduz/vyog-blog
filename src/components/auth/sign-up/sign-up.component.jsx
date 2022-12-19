import React from 'react';
import {
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import {signInWithGooglePopUp,createUserDocument} from '../../../utils/firebase/firebase'

import SignUpForm from './sign-up-form/sign-up-form.component'

import('./sign-up.component.style.scss')



const  SignUp = () => {

  const signIn = () => {

  }


   const logWithGoogle = async () => {
       const {user} = await signInWithGooglePopUp();
       createUserDocument(user)
   } 

  return (
    <div className="auth-container">
      
          <SignUpForm/>
      <MDBBtn type='button' floating color="secondary" className='mx-1' onClick={logWithGoogle}>
            <MDBIcon fab icon='google' />
          </MDBBtn>
    </div>
  );
}

export default SignUp