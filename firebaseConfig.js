import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";

// Optionally import the services that you want to use 
// import {...} from "firebase/database"; 
// import {...} from "firebase/firestore"; 
// import {...} from "firebase/functions"; 
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANbCEvJXf2ZLOq9-kpK8dkGSFhWICIAlI",
  authDomain: "mealstogo-e7246.firebaseapp.com",
  projectId: "mealstogo-e7246",
  storageBucket: "mealstogo-e7246.appspot.com",
  messagingSenderId: "629280418526",
  appId: "1:629280418526:web:92c967cf47ad7b8759b04f",
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth, getAuth };
