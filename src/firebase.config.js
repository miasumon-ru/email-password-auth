
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrXwBIkMWdKz-jgbLSMpcP3vtQq-2dH-w",
  authDomain: "user-email-password-auth-121c3.firebaseapp.com",
  projectId: "user-email-password-auth-121c3",
  storageBucket: "user-email-password-auth-121c3.appspot.com",
  messagingSenderId: "1093756522726",
  appId: "1:1093756522726:web:df5317ea50817facfb2b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth