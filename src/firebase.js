import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOFrFDBMpxgqAW4yyZBW9p1d58ZsioI5c",
  authDomain: "facebook-c7a45.firebaseapp.com",
  projectId: "facebook-c7a45",
  storageBucket: "facebook-c7a45.appspot.com",
  messagingSenderId: "123081652028",
  appId: "1:123081652028:web:e3f891ddf599f987e99039",
  measurementId: "G-CC5HCTY4C6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;

