import React from "react";
import AppRouter from "./components/Router";
import firebase from 'firebase/compat/app'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import LoginPage from './components/LoginPage/LoginPage'
import Signup from './Signup/Signup'

const firebaseConfig = {
  apiKey: "AIzaSyDOFrFDBMpxgqAW4yyZBW9p1d58ZsioI5c",
  authDomain: "facebook-c7a45.firebaseapp.com",
  projectId: "facebook-c7a45",
  storageBucket: "facebook-c7a45.appspot.com",
  messagingSenderId: "123081652028",
  appId: "1:123081652028:web:e3f891ddf599f987e99039",
  measurementId: "G-CC5HCTY4C6",
};
firebase.initializeApp(firebaseConfig);
function App() {
  return <AppRouter/>
}

export default App;
