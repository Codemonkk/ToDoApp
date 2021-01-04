// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbPWG6VVRQ83XDXJJ2hVwAZBawspDlOO0",
    authDomain: "todo-app-be007.firebaseapp.com",
    projectId: "todo-app-be007",
    storageBucket: "todo-app-be007.appspot.com",
    messagingSenderId: "362281859987",
    appId: "1:362281859987:web:f1474423b8bdcd2cfb4666",
    measurementId: "G-JCHZ7GD980"
});

const db = firebaseApp.firestore();

export default db;

