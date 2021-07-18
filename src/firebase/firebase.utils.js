import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDuyLVORct0QNraGTSKpnY6QG9xp6kFX1s",
  authDomain: "crown-db-79295.firebaseapp.com",
  projectId: "crown-db-79295",
  storageBucket: "crown-db-79295.appspot.com",
  messagingSenderId: "1084685906889",
  appId: "1:1084685906889:web:4ff110fb236da653feae18",
  measurementId: "G-PEEBMG20TB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;
