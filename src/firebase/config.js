// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnGc2NfdLIYbHVQN5RQdeScKV3NrXHb8c",
  authDomain: "alejandro-b1354.firebaseapp.com",
  projectId: "alejandro-b1354",
  storageBucket: "alejandro-b1354.appspot.com",
  messagingSenderId: "490811186546",
  appId: "1:490811186546:web:1cfc5afd8516a032fa91eb"
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseDB = getFirestore( FirebaseApp );