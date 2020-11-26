import React, { useState, useEffect } from "react";

import "./index.css";

import signin from "./Images/img1.png";
import signup from "./Images/img2.png";

const Index = () => {
  const [showDefault, setShowDefault] = useState(true);
  const [showForm, setShowForm] = useState("container");

  const formController = () => {
    setShowDefault(!showDefault);
  };

  useEffect(() => {
    if (showDefault) {
      setShowForm("container");
    } else {
      setShowForm("container active");
    }
  });

  return (
    <React.Fragment>
      <section id="signpage">
        <div class={showForm}>
          <div class="user signinBx">
            <div class="imgBx">
              <img src={signin} />
            </div>
            <div class="formBx">
              <form>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="Login" />
                <p class="signup">
                  don't have an account?{" "}
                  <a href="#" onClick={formController}>
                    Sign up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form>
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign up" />
                <p class="signup">
                  Already have an account?{" "}
                  <a href="#" onClick={formController}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <img src={signup} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Index;
