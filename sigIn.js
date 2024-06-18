import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth();
async function signIn(){
    
    const  email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(email)
   

    const userCred = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.location.href = "http://localhost:5500/welcome.html";
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    signInText.innerText = errorMessage;
  });
  console.log(userCred);

}

document.getElementById("lin").addEventListener("click",signIn);