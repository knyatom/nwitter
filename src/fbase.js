import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const  firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID,
  };

   firebase.initializeApp(firebaseConfig);
   
   export const firebaseInstance = firebase;
 //export default firebase.initializeApp(firebaseConfig);

  export const authService=firebase.auth();
  export const dbService=firebase.firestore();

  
