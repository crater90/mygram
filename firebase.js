// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxHEPsKp6OVAriG4d0F_neKWl_cW_7KE",
  authDomain: "insta-2-0-9d916.firebaseapp.com",
  projectId: "insta-2-0-9d916",
  storageBucket: "insta-2-0-9d916.appspot.com",
  messagingSenderId: "709101227903",
  appId: "1:709101227903:web:3ff0dfa0f6e393b282d44a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };