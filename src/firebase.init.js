// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNVXV515Lroc4xsy8iDhnJhbVchyZglrE",
  authDomain: "private-route-cc8fd.firebaseapp.com",
  projectId: "private-route-cc8fd",
  storageBucket: "private-route-cc8fd.firebasestorage.app",
  messagingSenderId: "725921128635",
  appId: "1:725921128635:web:770b9993cd9642be42899e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);