// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

//const { default: AppRouter } = require("./Router");


function App() {
  const [init, setInit] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(authService.currentUser);

  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init? <AppRouter isLoggedIn={isLoggedIn} />:"initializing"}
      <footer> {new Date().getFullYear()}  NWitter</footer>
    </>
  );
}

export default App;
