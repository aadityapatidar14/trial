// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { 
  getDatabase, 
  ref, 
  set, 
  push, 
  onValue, 
  get, 
  child, 
  update, 
  remove 
} from "firebase/database";

// Replace these values with your actual Firebase project config
// You can get this from Firebase Console -> Project Settings -> General -> Your Apps
const firebaseConfig = {
  apiKey: "AIzaSyDfKrsI0-jPY0TLhvikTRrIw5VBcDD_GOI",
  authDomain: "trial-3bbde.firebaseapp.com",
  databaseURL: "https://trial-3bbde-default-rtdb.firebaseio.com", // Essential for Realtime DB
  projectId: "trial-3bbde",
  storageBucket: "trial-3bbde.firebasestorage.app",
  messagingSenderId: "929487933108",
  appId: "1:929487933108:web:784cb13229189fc8b711e1"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get reference to the service
const db = getDatabase(app);

export { db, ref, set, push, onValue, get, child, update, remove };
