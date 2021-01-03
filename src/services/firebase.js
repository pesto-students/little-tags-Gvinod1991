import dotenv from 'dotenv'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
dotenv.config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
});

// https://little-tags-78c25-default-rtdb.firebaseapp.com/__/auth/handler
export const auth = firebase.auth();
export const database= firebase.database();
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        // console.log(res.user);
    }).catch((error) => {
        console.log(error.message)
    })
}


export const signInWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}

