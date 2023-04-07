import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { credentials } from "./api";
const firebaseConfig = credentials;
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const auth=getAuth(app)
const db=getFirestore(app)
export {provider,auth,db}