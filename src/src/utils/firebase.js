// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC59wNpQHMEbf4Srp1OCr3ELbnOSRzwMc",
  authDomain: "n-netflixgpt.firebaseapp.com",
  projectId: "n-netflixgpt",
  storageBucket: "n-netflixgpt.firebasestorage.app",
  messagingSenderId: "406426487424",
  appId: "1:406426487424:web:c7dec06a316af0ed75f465",
  measurementId: "G-Z7HNFKM52V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();