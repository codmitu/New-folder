import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB4r9KLzX9xFipozExoJgQYilWupupzXK4",
    authDomain: "shopping-list-bc921.firebaseapp.com",
    databaseURL: "https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shopping-list-bc921",
    storageBucket: "shopping-list-bc921.appspot.com",
    messagingSenderId: "973164288339",
    appId: "1:973164288339:web:3e8148df9a80a07980a9a6"
};

firebase.initializeApp(firebaseConfig);

const data = firebase.firestore();

export { data };