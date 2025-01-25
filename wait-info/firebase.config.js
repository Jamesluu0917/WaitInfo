// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFtrGYUkCyKA_f_EzRTNtfbBc1c6F8BL8",
  authDomain: "waitinfo-mchacks.firebaseapp.com",
  projectId: "waitinfo-mchacks",
  storageBucket: "waitinfo-mchacks.firebasestorage.app",
  messagingSenderId: "720576760182",
  appId: "1:720576760182:web:08c3fe52e7363606749257",
  measurementId: "G-E9M0FT4GXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);