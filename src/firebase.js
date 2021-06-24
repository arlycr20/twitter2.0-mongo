import 'firebase/storage';
import firebase from 'firebase/app';
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFSWkjpuVAHYi92544v0Kjm2nU_Vs-i3A",
    authDomain: "twitter-v2-aac8d.firebaseapp.com",
    databaseURL: "https://twitter-v2-aac8d-default-rtdb.firebaseio.com",
    projectId: "twitter-v2-aac8d",
    storageBucket: "twitter-v2-aac8d.appspot.com",
    messagingSenderId: "124733790435",
    appId: "1:124733790435:web:71397fb410a7a5bab58dd6",
    measurementId: "G-R7NH517L7P"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

//export default firebase.firestore();
var firebase1 = firebase.firestore();

export  {
    storage, firebase1 as default
}