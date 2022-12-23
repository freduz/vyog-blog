import {
    MDBBtn,

  } from 'mdb-react-ui-kit';

  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { signInUserWithEmailAndPassword } from '../../../../utils/firebase/firebase';
  import FormInput from '../../../form-input/form-input.component'
  

import('./sign-in-form.style.scss');

  const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  }

const SignInForm = () => {

  const [formFields,setFormField] = useState(defaultFormFields);
  const {  password,
  email} = formFields;


  const onChangeInput = (event) => {
    const {name,value} = event.target;
    setFormField({...formFields,[name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {user} = await await signInUserWithEmailAndPassword(email,password)
  }

    return (
        <form  className='sign-in-form' onSubmit={handleSubmit}>
     
       <FormInput inputOptions={
      {  className:'mb-4',
        type:'email',
        id:'email',
        label:'Email',
        name:'email',
        onChange:onChangeInput ,
        required:true
}
       }/>
       <FormInput inputOptions={
      {  className:'mb-4',
        type:'password',
        id:'password',
        label:'password',
        name:'password',
        onChange:onChangeInput ,
        required:true
}
       }/>
     

        <MDBBtn type='submit' className='mb-4' block>
          Sign in
        </MDBBtn>
    
        <div className='text-center'>
          <p>
            Don't have account? <Link to="/auth/sign-up">Register</Link>
          </p>
          <p>or sign up with:</p>
    
       

         
        </div>
      </form>
    )
}

export default SignInForm;