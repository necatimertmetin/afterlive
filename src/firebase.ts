// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7MRT5rPcFCF5mdSlzpm3GTTM0vX1BOQE",
  authDomain: "afterlive-28c12.firebaseapp.com",
  databaseURL:
    "https://afterlive-28c12-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "afterlive-28c12",
  storageBucket: "afterlive-28c12.firebasestorage.app",
  messagingSenderId: "726544194665",
  appId: "1:726544194665:web:197c5a5798ad07f47056f8",
  measurementId: "G-KPFXJZCPT7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
