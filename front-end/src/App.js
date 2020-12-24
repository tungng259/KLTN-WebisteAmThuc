import React, { useState, useEffect,  useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter,
} from "react-router-dom";
import "./App.css";

import { AuthContext } from "./Auth/auth-context";

import LandingPage from "./LandingPage/index.js";
import HomePage from "./HomePage/index.js";
import SignPage from "./SignPage/index.js";
import ContactPage from "./ContactPage/index.js";
import MenuPage from "./MenuPage/index.js";
import AccountPage from "./AccountPage/index.js";
import NewPostPage from "./NewPostPage/index.js";
import Header from "./Header/index.js";

export default withRouter(function App({ location }) {
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [id,setID]=useState("");

  const getid=useCallback(props => {
    setID(props)
  },[]);
  
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    const { pathname } = location;
    setCurrentPath(pathname);
  }, [window.location.pathname]);

  let routes;
  if(isLoggedIn){
    routes=(
    <React.Fragment>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/menu" exact>
        <MenuPage />
      </Route>
      <Route path="/account" exact>
        <AccountPage />
      </Route>
      <Route path="/newpost" exact>
        <NewPostPage />
      </Route>
      <Route path="/index" exact>
        <HomePage />
      </Route>
      <Redirect to="/index" />
    </React.Fragment>);
  }
  else{
    routes=( <React.Fragment>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/sign" exact>
        <SignPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route path="/menu" exact>
        <MenuPage />
      </Route>
      <Route path="/index" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
      </React.Fragment>);
  }

    
  return (
    <AuthContext.Provider
      value={{ id:id,isLoggedIn: isLoggedIn, login: login, logout: logout,getid:getid }}
    >
      <Header/>
      <div>                
        <Switch>
          {routes}
        </Switch> 
      </div>
    </AuthContext.Provider>
  );
});
