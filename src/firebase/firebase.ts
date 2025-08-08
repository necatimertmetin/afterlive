// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHIm3Q-LlUNl5zZi-tgErySk2wkCkLVvA",
  authDomain: "afterlive-869e5.firebaseapp.com",
  projectId: "afterlive-869e5",
  storageBucket: "afterlive-869e5.firebasestorage.app",
  messagingSenderId: "2287365593",
  appId: "1:2287365593:web:05feecc310379923657dc8",
  measurementId: "G-NY09S58MGF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
