import {useState} from 'react';
import {HashRouter as Router,Redirect, Route,Switch}  from 'react-router-dom';
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from './Navigation';
import Profile from 'routes/Profile';

const AppRouter=({isLoggedIn})=>{
  //   const [isLoggedIn, setIsLoggedIn]=useState(true);
    return(
    <Router>
        { isLoggedIn && <Navigation />}
        <Switch>
            { isLoggedIn?(
             <>
                <Route exact path="/">   <Home />    </Route>
                <Route exact path="/profile">    <Profile />    </Route>
             </>
            ):( 
                <Route exact path="/">   <Auth />  </Route>
            )
         }
         <Redirect from="*" to="/" />
        </Switch>
    </Router>
    )
};

export default AppRouter;