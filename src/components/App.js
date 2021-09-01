// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";


function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(authService.currentUser);
 console.log(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> {new Date().getFullYear()}  NWitter</footer>
    </>
  );
}

export default App;
