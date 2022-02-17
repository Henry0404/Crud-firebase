import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZXUw2zSkNJI-XacX_PztVaD_RgNp_Ynw",
  authDomain: "crud-react-f29e4.firebaseapp.com",
  projectId: "crud-react-f29e4",
  storageBucket: "crud-react-f29e4.appspot.com",
  messagingSenderId: "1077277872443",
  appId: "1:1077277872443:web:98b53d19fae29b6c7be71e",
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
