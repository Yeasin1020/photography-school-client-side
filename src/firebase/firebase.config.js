// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdanPRtc-w2SLDN04OiSgD135GjrW5yMk",
  authDomain: "drawing-school.firebaseapp.com",
  projectId: "drawing-school",
  storageBucket: "drawing-school.appspot.com",
  messagingSenderId: "194055789338",
  appId: "1:194055789338:web:43cd9869997a026cd2eaa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;