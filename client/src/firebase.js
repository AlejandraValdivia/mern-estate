// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1cb19.firebaseapp.com",
  projectId: "mern-estate-1cb19",
  storageBucket: "mern-estate-1cb19.firebasestorage.app",
  messagingSenderId: "95114709862",
  appId: "1:95114709862:web:12d0ecc455d21e7cffd6a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
