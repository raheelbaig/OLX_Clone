import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDvtAaNFWu2eZodurAIdG0vlVHCEwTQ90o",
  authDomain: "olx-app-daaef.firebaseapp.com",
  projectId: "olx-app-daaef",
  storageBucket: "olx-app-daaef.appspot.com",
  messagingSenderId: "727870056376",
  appId: "1:727870056376:web:b15818fe6a2e098df3114d"
};

const app = initializeApp(firebaseConfig);

export default app;