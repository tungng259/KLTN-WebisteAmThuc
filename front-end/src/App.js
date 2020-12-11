import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import logo from "./logo.svg";
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

function App() {
  let routes;
  routes = (
    <Switch>
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
      <Route path="/account" exact>
        <AccountPage />
      </Route>
      <Route path="/newpost" exact>
        <NewPostPage />
      </Route>
      <Route path="/index" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <Header/>
      <div>
        {routes}
      </div>
    </Router>
  );
}

export default App;
