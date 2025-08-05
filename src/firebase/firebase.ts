// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaiNRnlPzXD9w5BmIaeFr72P70UTVh44s",
  authDomain: "golbahce-54a5f.firebaseapp.com",
  projectId: "golbahce-54a5f",
  storageBucket: "golbahce-54a5f.firebasestorage.app",
  messagingSenderId: "221634355798",
  appId: "1:221634355798:web:f5f0965267b839ddfe51f7",
  measurementId: "G-C5LW1XDYTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
