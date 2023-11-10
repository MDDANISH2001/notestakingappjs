  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCnCHezKvWYbzzirRZset8Nh3TybYeaTlU",
    authDomain: "notesapp-d5e3a.firebaseapp.com",
    projectId: "notesapp-d5e3a",
    storageBucket: "notesapp-d5e3a.appspot.com",
    messagingSenderId: "209566248821",
    appId: "1:209566248821:web:c54c1d0421a7c14feead3c"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
    //Get the databse reference

export default db;