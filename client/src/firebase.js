// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WSZjpYMuZMKqBzrr7Gbu3cSU0Qw_JF8",
  authDomain: "ecommerce-99507.firebaseapp.com",
  projectId: "ecommerce-99507",
  storageBucket: "ecommerce-99507.appspot.com",
  messagingSenderId: "677806753118",
  appId: "1:677806753118:web:e609130bb61188894cfbcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)