import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACI395Jw6OlZVBv1HN7htS1E8C4TDevns",
    authDomain: "crwn-clothing-db-6e680.firebaseapp.com",
    projectId: "crwn-clothing-db-6e680",
    storageBucket: "crwn-clothing-db-6e680.appspot.com",
    messagingSenderId: "1087486492086",
    appId: "1:1087486492086:web:b8101b556e5c19ad31d517"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup= () => signInWithPopup(auth, provider);