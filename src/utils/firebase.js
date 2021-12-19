import firebase from 'firebase';

// app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7LZBduqmvoGI0_0Cz7yd6Owui8ZqUPeM",
    authDomain: "clone-6942e.firebaseapp.com",
    projectId: "clone-6942e",
    storageBucket: "clone-6942e.appspot.com",
    messagingSenderId: "1024838338103",
    appId: "1:1024838338103:web:107584a5de2355f2d5e1b2"
};
  
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize db for database and auth for authentication 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
