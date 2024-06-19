// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC__UZUDo1tvqEG1Ih82pEjOnJcydGTUTs",
  authDomain: "project-auto-37357.firebaseapp.com",
  projectId: "project-auto-37357",
  storageBucket: "project-auto-37357.appspot.com",
  messagingSenderId: "626195830956",
  appId: "1:626195830956:web:8ad0f88261a4baa8682709",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
