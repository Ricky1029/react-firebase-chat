import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1c56a.firebaseapp.com",
  projectId: "reactchat-1c56a",
  storageBucket: "reactchat-1c56a.appspot.com",
  messagingSenderId: "469300646285",
  appId: "1:469300646285:web:41b545e32cba7e8db6adc4"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore()
export const storage = getStorage()