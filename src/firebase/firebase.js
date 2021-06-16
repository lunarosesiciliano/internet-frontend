import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDdeUK8rAq6CAecV9IjO7GVvpV2OUcalhw",
  authDomain: "this-is-internet.firebaseapp.com",
  projectId: "this-is-internet",
  storageBucket: "this-is-internet.appspot.com",
  messagingSenderId: "485970909108",
  appId: "1:485970909108:web:26bc90b8e1526e3b9ec4e1",
  measurementId: "G-QKCQBCBF3S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
// firebase.analytics();
