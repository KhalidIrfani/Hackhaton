// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2g2cqIggjfvNY8BrzUyZJntTBzzv2MBI",
  authDomain: "eventplanner-482c1.firebaseapp.com",
  projectId: "eventplanner-482c1",
  storageBucket: "eventplanner-482c1.appspot.com",
  messagingSenderId: "73554631236",
  appId: "1:73554631236:web:4c41b256a24e943a0bfa11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
export const storage = getStorage(app);