// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw2XrP8Q6gFqgeHy8GF61mtrdw25FyE4I",
  authDomain: "smartshoes-45d2f.firebaseapp.com",
  projectId: "smartshoes-45d2f",
  storageBucket: "smartshoes-45d2f.appspot.com",
  messagingSenderId: "733014253475",
  appId: "1:733014253475:web:9c82f345f811eb21914416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;