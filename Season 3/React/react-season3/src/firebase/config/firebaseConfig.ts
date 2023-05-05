// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA3oqXQCwxeiReMsZWJ7aq0mbuUrn8YZHI",
  authDomain: "franapi-b4607.firebaseapp.com",
  projectId: "franapi-b4607",
  storageBucket: "franapi-b4607.appspot.com",
  messagingSenderId: "198024345301",
  appId: "1:198024345301:web:32c9e555e089f88610945c",
  measurementId: "G-BQLSPWFJYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);