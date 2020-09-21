import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1yuzSQyG9zcQxfxIK4v-BYmFM5XZWSTg",
  authDomain: "clone-83740.firebaseapp.com",
  databaseURL: "https://clone-83740.firebaseio.com",
  projectId: "clone-83740",
  storageBucket: "clone-83740.appspot.com",
  messagingSenderId: "984922312391",
  appId: "1:984922312391:web:59ead170dea93da30bf8e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
