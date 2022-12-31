import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKWueP-we4CRc1ByHS0PNp1_0Dmie2vr0",
    authDomain: "netflix-clone-ddddf.firebaseapp.com",
    projectId: "netflix-clone-ddddf",
    storageBucket: "netflix-clone-ddddf.appspot.com",
    messagingSenderId: "731801652854",
    appId: "1:731801652854:web:1cf18d9347211c4cf8d957"
  };

  const firebasApp = firebase.initializeApp(firebaseConfig);
  const db = firebasApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
