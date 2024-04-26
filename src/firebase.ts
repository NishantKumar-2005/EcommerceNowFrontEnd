// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD8LArMA2BjtW2D5IrJeZEAj4bk340k3OE",
  authDomain: "green-gifts-b1a3c.firebaseapp.com",
  projectId: "green-gifts-b1a3c",
  storageBucket: "green-gifts-b1a3c.appspot.com",
  messagingSenderId: "393723930171",
  appId: "1:393723930171:web:e1a4f002bba23041f49e1e",
  measurementId: "G-GT2VVMY9QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);