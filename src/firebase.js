
import  firebase  from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3qNd2eAgAxLjcb0YMkFrEv039hVNyy7g",
//   authDomain: "nwitter-878a5.firebaseapp.com",
//   projectId: "nwitter-878a5",
//   storageBucket: "nwitter-878a5.appspot.com",
//   messagingSenderId: "364953097562",
//   appId: "1:364953097562:web:ffc6d7d3b6cd0b10740f63"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  
// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig);