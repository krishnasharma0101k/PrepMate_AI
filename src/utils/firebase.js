import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multi-ai-interview.firebaseapp.com",
  projectId: "multi-ai-interview",
  storageBucket: "multi-ai-interview.firebasestorage.app",
  messagingSenderId: "242571103854",
  appId: "1:242571103854:web:ad329166544d22c72c607f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider

export { auth, provider}