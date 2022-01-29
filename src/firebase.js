import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLCBRy8BFx6naHRe8v-Lkow8WgchF5nFQ",
  authDomain: "clone-b51f3.firebaseapp.com",
  projectId: "clone-b51f3",
  storageBucket: "clone-b51f3.appspot.com",
  messagingSenderId: "853706123511",
  appId: "1:853706123511:web:b92f11a336c773b8154bf2",
  measurementId: "G-G3RZCWPEG7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };