// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bolg-73883.firebaseapp.com",
  projectId: "bolg-73883",
  storageBucket: "gs://bolg-73883.appspot.com/",
  messagingSenderId: "981979768021",
  appId: "1:981979768021:web:374294aa5541a5bdb42e5c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);