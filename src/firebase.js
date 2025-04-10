// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1zURrc5fExW3p9Rj4S8GtyOpyZxIJL_w",
  authDomain: "padelzoneapp-c38de.firebaseapp.com",
  projectId: "padelzoneapp-c38de",
  storageBucket: "padelzoneapp-c38de.appspot.com",
  messagingSenderId: "733972386420",
  appId: "1:733972386420:web:9ac0f70950516755063721",
  measurementId: "G-X7PB8K96G9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
