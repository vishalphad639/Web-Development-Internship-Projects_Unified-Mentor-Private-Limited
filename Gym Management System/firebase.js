// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiKxkMOOah6ncKunh2S96o_JopaQzQ50k",
  authDomain: "gym-management-system-e9fd5.firebaseapp.com",
  projectId: "gym-management-system-e9fd5",
  storageBucket: "gym-management-system-e9fd5.appspot.com",
  messagingSenderId: "874797063671",
  appId: "1:874797063671:web:84810cdf192a821ad7e2f2",
  measurementId: "G-KPPKMDZ384",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install firebase
