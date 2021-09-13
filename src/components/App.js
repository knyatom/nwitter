// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

//const { default: AppRouter } = require("./Router");


function App() {
  const [init, setInit] = useState(false);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj]=useState(null);
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />:"initializing"}

      <footer> {new Date().getFullYear()}  NWitter</footer>
    </>
  );
}

export default App;
