import React, { useState, useEffect,useContext } from "react";

import { AuthContext } from "../Auth/auth-context";

import "./index.css";

import signin from "./Images/img1.png";
import signup from "./Images/img2.png";

const Index = () => {
  const [showDefault, setShowDefault] = useState(true);
  const [showForm, setShowForm] = useState("container");
  const formController = () => {
    setShowDefault(!showDefault);
  };
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (showDefault) {
      setShowForm("container");
    } else {
      setShowForm("container active");
    }
  });

  const authSumbitHandler=event => {
    event.preventDefault();
    auth.login();
  }
  return (
    <React.Fragment>
      <section id="signpage">
        <div className={showForm}>
          <div className="user signinBx">
            <div className="imgBx">
              <img src={signin} />
            </div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="Login" onClick={authSumbitHandler} />
                <p className="signup">
                  don't have an account?{" "}
                  <a href="#" onClick={formController}>
                    Sign up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form>
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign up" />
                <p className="signup">
                  Already have an account?{" "}
                  <a href="#" onClick={formController}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img src={signup} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Index;
