// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHfOdMepeo7n85IWCOVjl124aRUVXha9o",
  authDomain: "chat-vacaciones-4ever.firebaseapp.com",
  projectId: "chat-vacaciones-4ever",
  storageBucket: "chat-vacaciones-4ever.appspot.com",
  messagingSenderId: "679775460355",
  appId: "1:679775460355:web:f12bf35f023276a7290236",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
