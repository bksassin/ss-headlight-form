// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDN9WcQAYaeJXnTTsiw4NJ-oYzSnXxUyk",
  authDomain: "ss-headlights.firebaseapp.com",
  projectId: "ss-headlights",
  storageBucket: "ss-headlights.appspot.com",
  messagingSenderId: "925066216490",
  appId: "1:925066216490:web:b493c964c26346e8c3ef53",
  measurementId: "G-VSKDXXYLHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
