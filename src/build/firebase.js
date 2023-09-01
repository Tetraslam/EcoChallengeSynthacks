import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyCQCRwRA064HL7EWAA1_6mLUCUaHW4hPss",
  authDomain: "ecochallengesynthacks.firebaseapp.com",
  projectId: "ecochallengesynthacks",
  storageBucket: "ecochallengesynthacks.appspot.com",
  messagingSenderId: "564188884094",
  appId: "1:564188884094:web:eb666336d065ce51733c2f",
  measurementId: "G-P20H8RPDP3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

//create your custom method
export const getData = () => {
  return getDocs(collection(db, "posts"));
};