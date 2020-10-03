import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHybXbmNg3viSn2MsLmKohE0qO8mJpJI4",
  authDomain: "omit-url.firebaseapp.com",
  databaseURL: "https://omit-url.firebaseio.com",
  projectId: "omit-url",
  storageBucket: "omit-url.appspot.com",
  messagingSenderId: "677563687564",
  appId: "1:677563687564:web:5041256d4646f4583211a9",
  measurementId: "G-PZ3H5RRDPQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export const signIn = () => {
  auth.signInWithPopup(provider);
};

export const signOut = () => {
  auth.signOut();
};
