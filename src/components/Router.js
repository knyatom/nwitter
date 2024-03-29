//import { useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation from './Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({ isLoggedIn,userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )
                }
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
};

export default AppRouter;