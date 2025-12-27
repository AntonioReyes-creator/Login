// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0kh3673dTIRs7nwEWfb6fTsgJ7Vmn6jY",
  authDomain: "loginfirebase-cf8b2.firebaseapp.com",
  projectId: "loginfirebase-cf8b2",
  storageBucket: "loginfirebase-cf8b2.firebasestorage.app",
  messagingSenderId: "1080334148988",
  appId: "1:1080334148988:web:8d94fe64fca8cc669970f9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;