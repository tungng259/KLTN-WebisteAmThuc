import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const Index = () => {
  const [showDefault, setShowDefault] = useState("");
  const [showForm, setShowForm] = useState(true);

  let banner = "";
  if (showForm === true) {
    banner = (
      <section className="banner" id="banner">
        <div className="content">
          <h2>Always Choose Good</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud.
          </p>
          <NavLink to="/menu" exact className="btn">
            Our Menu
          </NavLink>
        </div>
      </section>
    );
  }

  useEffect(() => {
    if (window.location.pathname !== "/index") {
      setShowForm(false);
      setShowDefault("sticky");
    } else {
      setShowForm(true);
    }
  });

  window.addEventListener("scroll", function () {
    if (showForm === true) {
      if (window.scrollY > 0) {
        setShowDefault("sticky");
      } else {
        setShowDefault("");
      }
    }
  });

  const homeController = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div id="header">
        <header className={showDefault}>
          <NavLink to="/index" exact className="logo" onClick={homeController}>
            VFood<span>.</span>
          </NavLink>
          <div className="box">
            <form className="search_box">
              <select className="select_city">
                <option>Ho Chi Minh</option>
                <option>Ha Noi</option>
              </select>
              <input type="text" placeholder="Search VFood" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <ul className="navigation">
            <li>
              <NavLink
                to="/index"
                exact
                className="menu-link"
                onClick={homeController}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/newpost" exact className="menu-link">
                New Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign" exact className="menu-link">
                Sign in
              </NavLink>
            </li>
          </ul>
        </header>
        {banner}
      </div>
    </React.Fragment>
  );
};

export default Index;
