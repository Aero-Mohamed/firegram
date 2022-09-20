import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqc1C8kA1NWOsfN5W-qez5SavZYEghcVk",
  authDomain: "firegram-3ca6c.firebaseapp.com",
  projectId: "firegram-3ca6c",
  storageBucket: "firegram-3ca6c.appspot.com",
  messagingSenderId: "902364051741",
  appId: "1:902364051741:web:5e15852df0eee66f36c9f4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };