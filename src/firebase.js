import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyBjgTlep3McVgfS0epyUqvseR_r1CEFwtw",
  authDomain: "rcrud-b9dc6.firebaseapp.com",
  databaseURL: "https://rcrud-b9dc6-default-rtdb.firebaseio.com",
  projectId: "rcrud-b9dc6",
  storageBucket: "rcrud-b9dc6.appspot.com",
  messagingSenderId: "996978136674",
  appId: "1:996978136674:web:56e7f1a3f447dd3534a33b"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

