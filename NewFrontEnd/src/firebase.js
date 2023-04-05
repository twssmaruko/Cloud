import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACQAFlQUL9fp7MkGiAM77fMOsESwN_D5Y",
  authDomain: "chat-1a5fa.firebaseapp.com",
  projectId: "chat-1a5fa",
  storageBucket: "chat-1a5fa.appspot.com",
  messagingSenderId: "916633760377",
  appId: "1:916633760377:web:bde22cbe30c50b5a8c9aa8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();