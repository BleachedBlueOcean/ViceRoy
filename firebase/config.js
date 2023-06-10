// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwEjU1tQsClk-YnxE208dfz03Yq_f302w",
  authDomain: "bankaitrading-31a14.firebaseapp.com",
  projectId: "bankaitrading-31a14",
  storageBucket: "bankaitrading-31a14.appspot.com",
  messagingSenderId: "718804655036",
  appId: "1:718804655036:web:e9b40950e6430f056369b9",
  measurementId: "G-8TBEFGX92S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, analytics, db}