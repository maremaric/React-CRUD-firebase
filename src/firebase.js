import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyCMpe_VxAONaqY1KuxDz10sdba3IiAS_lo",
  authDomain: "react-crud-84eae.firebaseapp.com",
  databaseURL: "https://react-crud-84eae-default-rtdb.firebaseio.com",
  projectId: "react-crud-84eae",
  storageBucket: "react-crud-84eae.appspot.com",
  messagingSenderId: "454944861558",
  appId: "1:454944861558:web:f5dd9e27af6f2016069e57"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

