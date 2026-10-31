import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Pre-populated with your 'istore' project details!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Get this from your Firebase Project Settings
  authDomain: "istore-859ef.firebaseapp.com",
  projectId: "istore-859ef",
  storageBucket: "istore-859ef.firebasestorage.app",
  messagingSenderId: "443064416302",
  appId: "YOUR_APP_ID" // Get this from your Firebase Project Settings
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Toggle between screens
document.getElementById('to-signup').addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

document.getElementById('to-login').addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Create Account Flow
document.getElementById('btn-signup').addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created successfully!"))
    .catch(err => alert(err.message));
});

// Log In Flow
document.getElementById('btn-login').addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Successfully logged in!"))
    .catch(err => alert(err.message));
});
