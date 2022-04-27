// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2mCd59icqAr3Lo9XNKYB3gpvyFH_Drt4",
  authDomain: "gadget-freak-e02f3.firebaseapp.com",
  projectId: "gadget-freak-e02f3",
  storageBucket: "gadget-freak-e02f3.appspot.com",
  messagingSenderId: "179464591574",
  appId: "1:179464591574:web:022a0a7a82cf5de7ec5177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
