import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {} from "firebase/auth"
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxR5vVKLDzCY4eR5UVRMUUES5i4fPFY7I",
  authDomain: "maximumprotocol-50f77.firebaseapp.com",
  projectId: "maximumprotocol-50f77",
  storageBucket: "maximumprotocol-50f77.appspot.com",
  messagingSenderId: "866448606384",
  appId: "1:866448606384:web:31f4fe1790a13d20342775",
  measurementId: "G-H2H3CVBE0C",
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export {auth}