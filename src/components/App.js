// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import AppRouter from "components/Router";
import {autoService} from "fbase";


function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
 console.log(autoService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> {new Date().getFullYear()}  NWitter</footer>
    </>
  );
}

export default App;
