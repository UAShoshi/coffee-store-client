// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtFCY_xV0BHtV52ZpMgl_BkwraaoCeeZA",
  authDomain: "coffee-store-f8cfe.firebaseapp.com",
  projectId: "coffee-store-f8cfe",
  storageBucket: "coffee-store-f8cfe.appspot.com",
  messagingSenderId: "475310564726",
  appId: "1:475310564726:web:95a11a05c346c0a8d9c657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;