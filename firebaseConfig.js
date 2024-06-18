// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGT4QPIaalUSgt4nKrnXw5iSJe-gq9fk",
  authDomain: "facetrack-ff450.firebaseapp.com",
  projectId: "facetrack-ff450",
  storageBucket: "facetrack-ff450.appspot.com",
  messagingSenderId: "448146427247",
  appId: "1:448146427247:web:05a9a1c9cfe41e5a796c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{ app };
