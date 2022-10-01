import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhztZWfo23m1efUcyzxQEUAyrVcnxzFdM",
  authDomain: "react-test-ce1ce.firebaseapp.com",
  databaseURL:
    "https://react-test-ce1ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-test-ce1ce",
  storageBucket: "react-test-ce1ce.appspot.com",
  messagingSenderId: "147554772372",
  appId: "1:147554772372:web:4f9e6e56e469d5957bdb81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
