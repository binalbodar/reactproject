// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPj19wbn1429SOirb2FJbMMOtcY97EVAc",
  authDomain: "finalproject-87c80.firebaseapp.com",
  projectId: "finalproject-87c80",
  storageBucket: "finalproject-87c80.appspot.com",
  messagingSenderId: "532812987359",
  appId: "1:532812987359:web:5d47c88582bc878290626a",
  measurementId: "G-BCMJLZK0ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);