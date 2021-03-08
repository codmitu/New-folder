import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwzobGIfojoLIfKFXFPfTdExJpPVL6uOM",
    authDomain: "photo-gallery-405fd.firebaseapp.com",
    projectId: "photo-gallery-405fd",
    storageBucket: "photo-gallery-405fd.appspot.com",
    messagingSenderId: "975333322921",
    appId: "1:975333322921:web:09083f9a699a73139079b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataStorage = firebase.storage();
const dataFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { dataFirestore, dataStorage, timestamp };