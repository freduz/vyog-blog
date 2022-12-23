
import {
    MDBInput,
    MDBBtn,
    MDBTextArea,
    MDBFile
  } from 'mdb-react-ui-kit';
import React ,{ useContext, useEffect, useRef, useState } from 'react';

import { createArticleWithFirebase, uploadFileToFirebase } from '../../../utils/firebase/firebase';
import {ProgressBar} from '../../progress-bar/progress-bar.component'
import { UserContext } from '../../../contexts/user.context';
import {ErrorContext} from '../../../contexts/error.context'
import toastNotification from '../../../utils/toast'


  import ('./add-article.component.scss')


 const initialFormFields = {
    title:'',
    description:'',
    imageUrl:'',
    createdAt:'',
    tags:[],
    uid:''
 } 

const AddArticle = () => {

  const [formFields,setformFields] = useState(initialFormFields)
  const [uploadProgress,setUploadProgress] = useState(0);
  const fileRef = useRef(null)
  const {currentUser} = useContext(UserContext)
  const {errors,setErrors} = useContext(ErrorContext)

  useEffect(() => {
    if(uploadProgress === 100){
      toastNotification.success({message:'Media uploaded successfully'})
    }else{
      return
    }
  },[uploadProgress])




  const onInputChange = (event) => {
     const {name,value} = event.target;
    
     setformFields({...formFields,[name]:value})
  }

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    if(!['jpg','jpeg','png','gif'].includes(file.type.split('/')[1])){
      setErrors('File selected is not supported')
      toastNotification.error({message:errors})
       return
    }
    await uploadFileToFirebase(file,setUploadProgress,setErrors,setformFields,formFields)
 
  }

  const createArticle  = async(event) => {
    event.preventDefault();
    const docRef = await createArticleWithFirebase(formFields,currentUser)
    if(docRef.id){
      setformFields(initialFormFields)
      setUploadProgress(0)
      fileRef.current.value = null;
      toastNotification.success({message:'Article added succesfully'})
    }

  }

    return (
        <div className="add-article-container">
            <div className="header">
                <h1>Add your ideas here</h1>
            </div>
            <form onSubmit={createArticle}>
   

      <MDBInput wrapperClass='mb-4' id='title' name='title' onChange={onInputChange} label='Article title' value={formFields.title} required />
   
      <MDBTextArea wrapperClass='mb-4' onChange={onInputChange} label='Description' id='description' value={formFields.description} name='description' rows={7} required />
    
       <div className="file-upload-area">
        <div className="file-input-area">
        <MDBFile className='mb-4' name='media-article' inputRef={fileRef} onChange={onChangeFile} label='Media for article' id='article-file' />
        </div>
        { uploadProgress > 0 ? <ProgressBar progress={uploadProgress}/> : '' }
       </div>
       <MDBBtn className='mb-4' type='submit' block disabled={!formFields.imageUrl}>
        Add Article
      </MDBBtn>
    </form>
        </div>
    )
}

export default AddArticle