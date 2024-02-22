
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAttCbBIdAFFmswFMjVeb7sy5yTY6NrivY",
  authDomain: "my-pharma-8703f.firebaseapp.com",
  projectId: "my-pharma-8703f",
  storageBucket: "my-pharma-8703f.appspot.com",
  messagingSenderId: "609439490186",
  appId: "1:609439490186:web:bbf7a6fe216053986a4d73",
  measurementId: "G-SW6GZR7250"
};


getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const fireStore = getFirestore();