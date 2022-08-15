//firebase connect to react
// v9 compat packages are API compatible with v8 code
//import firebase from 'firebase/compat/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbmbXCq3ADHF4bM0riBrQOlZqDPk5BPN4",
  authDomain: "auth-js-9ff11.firebaseapp.com",
  projectId: "auth-js-9ff11",
  storageBucket: "auth-js-9ff11.appspot.com",
  messagingSenderId: "334576749570",
  appId: "1:334576749570:web:677d3d84ad50ebe10deb1b",
  measurementId: "G-7QTJB7GCBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getAnalytics(app);
console.log(db)
export {db}
