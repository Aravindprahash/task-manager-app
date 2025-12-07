import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACADFmnJMETRjMjr4IpxKEVjWCnLDHqYU",
  authDomain: "capstone-project-task-manager.firebaseapp.com",
  projectId: "capstone-project-task-manager",
  storageBucket: "capstone-project-task-manager.firebasestorage.app",
  messagingSenderId: "729925730748",
  appId: "1:729925730748:web:24d967726872cab61b6bb9",
  measurementId: "G-WR27GBX5NG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
