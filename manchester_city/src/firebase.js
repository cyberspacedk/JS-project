import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'


const config = {
  apiKey: "AIzaSyDn1ZFuEC6oj3Jz8YkMmYuSldwIXjNLP9k",
  authDomain: "manchester-cyberspacedk.firebaseapp.com",
  databaseURL: "https://manchester-cyberspacedk.firebaseio.com",
  projectId: "manchester-cyberspacedk",
  storageBucket: "manchester-cyberspacedk.appspot.com",
  messagingSenderId: "179326565084"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches, 
}