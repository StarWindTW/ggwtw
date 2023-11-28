// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVPyfZIcW31aej6L8L2f5zteKVnitVd7g",
  authDomain: "ggwtw-344616.firebaseapp.com",
  projectId: "ggwtw-344616",
  storageBucket: "ggwtw-344616.appspot.com",
  messagingSenderId: "948625745477",
  appId: "1:948625745477:web:ceb697d1ec4edf7f6a652c",
  measurementId: "G-DL92ZD1KHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)