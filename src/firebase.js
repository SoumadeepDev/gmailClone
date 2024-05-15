import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAGP9CxpZoib8L5VXhReE8Dh1Evb3KnkD8",
  authDomain: "mailboxclient-f5b6a.firebaseapp.com",
  databaseURL: "https://mailboxclient-f5b6a-default-rtdb.firebaseio.com",
  projectId: "mailboxclient-f5b6a",
  storageBucket: "mailboxclient-f5b6a.appspot.com",
  messagingSenderId: "430133247906",
  appId: "1:430133247906:web:960e50121d24341cfb7cfb",
  measurementId: "G-SHV1L92LXB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
