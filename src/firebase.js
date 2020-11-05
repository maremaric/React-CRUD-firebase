import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyDBQe-MlPwKbYH7CpPUdFrv7-NN7ylV3FY",
    authDomain: "react-crud-f6b09.firebaseapp.com",
    databaseURL: "https://react-crud-f6b09.firebaseio.com",
    projectId: "react-crud-f6b09",
    storageBucket: "react-crud-f6b09.appspot.com",
    messagingSenderId: "989349353713",
    appId: "1:989349353713:web:75b189ab9ea58391123150"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

