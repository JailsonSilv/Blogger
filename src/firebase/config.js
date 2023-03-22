import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2MvGJAb7rwQ1F3ETAr1N8n8B2UP8Y-1I",
  authDomain: "blogger-tecs.firebaseapp.com",
  projectId: "blogger-tecs",
  storageBucket: "blogger-tecs.appspot.com",
  messagingSenderId: "497709748394",
  appId: "1:497709748394:web:e6e7b46845d07e4c0c00d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };