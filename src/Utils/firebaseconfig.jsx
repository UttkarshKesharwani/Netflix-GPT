// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxBFW8ptvzzpEITYh0zbLVGrxXNhHOCNY",
  authDomain: "netflix-gpt-c023d.firebaseapp.com",
  projectId: "netflix-gpt-c023d",
  storageBucket: "netflix-gpt-c023d.appspot.com",
  messagingSenderId: "744947688660",
  appId: "1:744947688660:web:2a7e35219ce7a3c3980741",
  measurementId: "G-3BHW63K7MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);