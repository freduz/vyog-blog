import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import{ getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'



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

