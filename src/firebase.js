import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyA-84Wm5-EfEWQXaEQJ4l6W4Bw8XQOjO-Y",
  authDomain: "voiceshop-49da9.firebaseapp.com",
  projectId: "voiceshop-49da9",
  storageBucket: "voiceshop-49da9.firebasestorage.app",
  messagingSenderId: "518783494985",
  appId: "1:518783494985:web:cc5a80376a8ba3c751c898",
  measurementId: "G-HYD0R44TPB"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();