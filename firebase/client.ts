import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC0VqtOT5YQArkTDAp4C4XQMm6ldwUOm0",
  authDomain: "prepwise-e1faa.firebaseapp.com",
  projectId: "prepwise-e1faa",
  storageBucket: "prepwise-e1faa.firebasestorage.app",
  messagingSenderId: "266370705328",
  appId: "1:266370705328:web:8d54d6354443895e2c1875",
  measurementId: "G-CBR8SSZD12",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const firestore = getFirestore(app);
