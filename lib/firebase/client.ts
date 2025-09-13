import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAfxGRYC54EKHrdHu9Fj3spkhzHMSXw7MI",

  authDomain: "collaboai-fcbee.firebaseapp.com",

  projectId: "collaboai-fcbee",

  storageBucket: "collaboai-fcbee.firebasestorage.app",

  messagingSenderId: "53531109636",

  appId: "1:53531109636:web:8bfd626af5e5ff548e8851",

  measurementId: "G-P4BQKN4025"

};



// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} 

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };