
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFPfnSEP4V6oGuRobSjlaHtl6YeUZg188",
  authDomain: "module56-5.firebaseapp.com",
  projectId: "module56-5",
  storageBucket: "module56-5.appspot.com",
  messagingSenderId: "176672921834",
  appId: "1:176672921834:web:1290941ebcc7d877f4df93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
