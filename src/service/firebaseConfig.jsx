import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "webd-b59df.firebasestorage.app",
  messagingSenderId: "317702205688",
  appId: "1:317702205688:web:278c1f9828e3030bb08b0d",
  measurementId: "G-B39TD0814V"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);