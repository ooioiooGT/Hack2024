import  {initializeApp} from  "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 
    apiKey: "AIzaSyDoR5KJeYBtdiwtjVm6I4dUv3cc_5rBS-g",
   
    authDomain: "usu-hack.firebaseapp.com",
   
    projectId: "usu-hack",
   
    storageBucket: "usu-hack.appspot.com",
   
    messagingSenderId: "740088735484",
   
    appId: "1:740088735484:web:b6d5ab5df731fa8afd1979",
   
    measurementId: "G-F4G71VG2N0"
   
  };

  const app = initializeApp(firebaseConfig);
  export const FIREBASE_DB = getFirestore(app);
  export const FIREBASE_AUTH = getAuth(app);
