// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDfGJywdOJU0hs99k7Oo1U4V88UDbV7pHw",
  authDomain: "refinance-fd2ed.firebaseapp.com",
  projectId: "refinance-fd2ed",
  storageBucket: "refinance-fd2ed.appspot.com",
  messagingSenderId: "454666913694",
  appId: "1:454666913694:web:5f21c0a2727898eae7b88f",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);