// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6DSGjVPivwRJBUOL3-957PxJJWV0l87c",
  authDomain: "student-teacher-appointm-6fb0f.firebaseapp.com",
  projectId: "student-teacher-appointm-6fb0f",
  storageBucket: "student-teacher-appointm-6fb0f.appspot.com",
  messagingSenderId: "779838753768",
  appId: "1:779838753768:web:90b478fa8d6b72c019f25d",
  measurementId: "G-KNFZ1WP8GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install firebase
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase init
