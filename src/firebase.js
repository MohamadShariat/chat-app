import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDo7nv3pSPi1t7DMq0P_Lp9-sXX5aPHYGM",
    authDomain: "chatgram-6bbc9.firebaseapp.com",
    projectId: "chatgram-6bbc9",
    storageBucket: "chatgram-6bbc9.appspot.com",
    messagingSenderId: "735413397968",
    appId: "1:735413397968:web:09e0143364d42dd361b1d5",
  })
  .auth();
