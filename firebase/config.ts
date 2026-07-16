import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzs-jExz9vSVNTgAjR2yWqwzDXra5ky2A",
  authDomain: "i-dx-fc2e5.firebaseapp.com",
  projectId: "i-dx-fc2e5",
  storageBucket: "i-dx-fc2e5.firebasestorage.app",
  messagingSenderId:  "954278898331",
  appId: "1:954278898331:web:487f8ea1b447d25529b43e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;