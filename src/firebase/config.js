import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: 'AIzaSyC4dSxeiS8YlDQ8oZ93_Ud-xK4tg07MzbU',
  authDomain: 'firegram-gauravshrestha.firebaseapp.com',
  databaseURL: 'https://firegram-gauravshrestha.firebaseio.com',
  projectId: 'firegram-gauravshrestha',
  storageBucket: 'firegram-gauravshrestha.appspot.com',
  messagingSenderId: '771092419741',
  appId: '1:771092419741:web:ff2b664c041e982f217074',
  measurementId: 'G-LT1KJ8P661',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
