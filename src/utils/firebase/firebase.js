import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import{ getFirestore,doc,getDoc,setDoc,collection, addDoc} from 'firebase/firestore'
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

import { uuidv4 } from '@firebase/util'


const firebaseConfig = {
  apiKey: "AIzaSyBugqx6rVoxK0AfyvjOhT7snTL_K3ppQqo",
  authDomain: "neoblog-c6d7c.firebaseapp.com",
  projectId: "neoblog-c6d7c",
  storageBucket: "neoblog-c6d7c.appspot.com",
  messagingSenderId: "524061173177",
  appId: "1:524061173177:web:fecf1a41fc160f67f14268",
  measurementId: "G-2CYW4QXRRL"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const auth =getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore();
const storage = getStorage();

const articleCollection = collection(db,'articles')

provider.setCustomParameters({
  prompt:'select_account'
})



export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)

export const createNormalUserWithEmailAndPassword =   (email,password) => {
   return  createUserWithEmailAndPassword(auth,email,password)
}


export const signInUserWithEmailAndPassword = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser =  async() => {
  return await signOut(auth)

}

export const onAuthStateChangedListener = (callBack) => onAuthStateChanged(auth,callBack)

export const createUserDocument = async(userAuth) => {
    const userRef = doc(db,'users',userAuth.uid)
    const userDocSnapShot = await getDoc(userRef)
    if(!userDocSnapShot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date()
      await setDoc(userRef,{
        displayName,
        email,
        createdAt
      })
    }
    else{
      return false;
    }

}

export const createArticleWithFirebase = async(formFields,currentUser) => {
 
    return await addDoc(articleCollection,{...formFields,createdAt:new Date(),uid:currentUser.uid})
}

export const uploadFileToFirebase = async(file,setUploadProgress,setErrors,setFormFields,formFields) => {
  if(!file) return;

  const storageRef = ref(storage,`articles/${uuidv4()}`);
  const uploadtask =  uploadBytesResumable(storageRef,file);

  uploadtask.on('state_changed',(snapshot) => {

    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    setUploadProgress(progress)

  },
  (err) => {
   setErrors(err)
  },
   async () => {
      const imageUrl =  await getDownloadURL(uploadtask.snapshot.ref);
      setFormFields({...formFields,imageUrl})
  }
  )

}

