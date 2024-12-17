// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxuOCFByQioU336y1jOxDpY6lo35UgWsA",
  authDomain: "auth-72f57.firebaseapp.com",
  projectId: "auth-72f57",
  storageBucket: "auth-72f57.firebasestorage.app",
  messagingSenderId: "1098110447622",
  appId: "1:1098110447622:web:a3fce7e8b4fe9532aad387",
  measurementId: "G-G8NQKNZE9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()