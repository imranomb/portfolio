import { initializeApp } from "firebase/app";
import { collection, getDoc, doc  } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVdP-SgW6pNNJsYgNWuJVRsg3XSqyoeko",
  authDomain: "portfolio-b5e9a.firebaseapp.com",
  projectId: "portfolio-b5e9a",
  storageBucket: "portfolio-b5e9a.firebasestorage.app",
  messagingSenderId: "197167169226",
  appId: "1:197167169226:web:fbbf53b497e876ac53be33",
  measurementId: "G-K9QMG1BGG1"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const database = getFirestore(app);
export {storage};