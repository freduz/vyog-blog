import {
    MDBBtn,

  } from 'mdb-react-ui-kit';

  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { createNormalUserWithEmailAndPassword,createUserDocument } from '../../../../utils/firebase/firebase';
  import FormInput from '../../../form-input/form-input.component'

import('./sign-up-form.style.scss');

  const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  }

const SignUpForm = () => {

  const [formFields,setFormField] = useState(defaultFormFields);
  const {  displayName,
  email,
  password,
  confirmPassword} = formFields;


  const onChangeInput = (event) => {
    const {name,value} = event.target;
    setFormField({...formFields,[name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  const {user} = await createNormalUserWithEmailAndPassword(email,password)
  await createUserDocument({...user,displayName})
  
    
  }

    return (
        <form  className='sign-in-form' onSubmit={handleSubmit}>
       <FormInput inputOptions={
      {  className:'mb-4',
        type:'text',
        id:'display-name',
        label:'Display Name',
        name:'displayName',
        onChange:onChangeInput ,
        required:true,
        value:displayName
}
       }
       />
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
       <FormInput inputOptions={
      {  className:'mb-4',
        type:'password',
        id:'confrm-password',
        label:'Confirm password',
        name:'confirmPassword',
        onChange:onChangeInput ,
        required:true
}
       }/>

        <MDBBtn type='submit' className='mb-4' block>
          Sign Up
        </MDBBtn>
    
        <div className='text-center'>
          <p>
          Already have account? <Link to="/auth/sign-in">Login</Link>
          </p>
          <p>or sign up with:</p>
    
       

         
        </div>
      </form>
    )
}

export default SignUpForm;