// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDX3bxf7wT8u0epyFxKZ-26sYa58xLmCVA",
    authDomain: "whatsapp-clone-abcbb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-abcbb.firebaseio.com",
    projectId: "whatsapp-clone-abcbb",
    storageBucket: "whatsapp-clone-abcbb.appspot.com",
    messagingSenderId: "959983358675",
    appId: "1:959983358675:web:e640ab011b1cc965db7a26",
    measurementId: "G-N220JWGD8N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider};
  export default db;