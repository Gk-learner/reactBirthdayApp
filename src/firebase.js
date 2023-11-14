// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
// import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyA9NtnGGk2jW16iM9atNhLPL_Ho7xyn-ps",
//     authDomain: "js-firebase-f7740.firebaseapp.com",
//     projectId: "js-firebase-f7740",
//     storageBucket: "js-firebase-f7740.appspot.com",
//     messagingSenderId: "710429195461",
//     appId: "1:710429195461:web:b94425e45e1694ba5544ac",
//     measurementId: "G-NXG9K1YH2Y"
//   };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig)
// const auth = getAuth()
// const db = getDatabase(app)

// export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
//         db, ref, set, child, get, remove}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//         // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getDatabase, ref, set, child, get, remove } from 'firebase/analytics'
// import { getFirestore} from "@firebase/firestore"

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9NtnGGk2jW16iM9atNhLPL_Ho7xyn-ps",
//   authDomain: "js-firebase-f7740.firebaseapp.com",
//   databaseURL: "https://js-firebase-f7740-default-rtdb.firebaseio.com",
//   projectId: "js-firebase-f7740",
//   storageBucket: "js-firebase-f7740.appspot.com",
//   messagingSenderId: "710429195461",
//   appId: "1:710429195461:web:b94425e45e1694ba5544ac",
//   measurementId: "G-NXG9K1YH2Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth()
// const db = getDatabase(app)

// export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
//         db, ref, set, child, get, remove}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
import {getDatabase, ref, set, child, get, remove } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA9NtnGGk2jW16iM9atNhLPL_Ho7xyn-ps",
    authDomain: "js-firebase-f7740.firebaseapp.com",
    projectId: "js-firebase-f7740",
    storageBucket: "js-firebase-f7740.appspot.com",
    messagingSenderId: "710429195461",
    appId: "1:710429195461:web:b94425e45e1694ba5544ac",
    measurementId: "G-NXG9K1YH2Y"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getDatabase(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
        db, ref, set, child, get, remove}