import React, { useState, useEffect } from "react";

import "./index.css";

import post from "./Images/post.jpg";

const Index = () => {
  const [showForm, setShowForm] = useState(true);
  const [showCancel, setShowCancel] = useState("cancel");

  let form = "";
  let value = "";
  if (showForm) {
    value = "Edit";
    form = (
      <div className="info">
        <div className="box">
          <div className="text">
            <h3>Username</h3>
            <p>vfood123</p>
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h3>Email address</h3>
            <p>vfood@gmail.com</p>
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h3>Phone</h3>
            <p>012-345-6789</p>
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h3>Birthday</h3>
            <p>31/12/2020</p>
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h3>Gender</h3>
            <p>Male</p>
          </div>
        </div>
        <div className="box">
          <div className="text">
            <h3>Country/Region</h3>
            <p>Ho Chi Minh</p>
          </div>
        </div>
      </div>
    );
  } else {
    value = "Save";
    form = (
      <div className="edit">
        <form>
          <div className="item">
            <h3>Full name</h3>
            <input type="text" name="" placeholder="Full Name" value="VFood" />
          </div>
          <div className="item">
            <h3>Email address</h3>
            <input
              type="email"
              name=""
              placeholder="Email"
              value="vfood@gmail.com"
            />
          </div>
          <div className="item">
            <h3>Phone</h3>
            <input
              type="text"
              name=""
              placeholder="Phone"
              value="012-345-6789"
            />
          </div>
          <div className="item">
            <h3>Birthday</h3>
            <input
              type="text"
              name=""
              placeholder="Birthday"
              value="31/12/2020"
            />
          </div>
          <div className="item">
            <h3>Gender</h3>
            <input type="text" name="" placeholder="Gender" value="Male" />
          </div>
          <div className="item">
            <h3>Country/Region</h3>
            <input
              type="text"
              name=""
              placeholder="Country/Region"
              value="Ho Chi Minh"
            />
          </div>
        </form>
      </div>
    );
  }

  useEffect(() => {
    if (showForm) {
      setShowCancel("cancel active");
    } else {
      setShowCancel("cancel");
    }
  });

  const formController = () => {
    setShowForm(!showForm);
  };

  let account_info = (
    <section id="account">
      <h2 className="titleText">
        <span>A</span>ccount
      </h2>
      <div className="content">
        <div className="account_info">
          <h3 className="name">VFood</h3>
          {form}
        </div>
        <div className="btn">
          <input type="submit" value={value} onClick={formController} />
          <input type={showCancel} value="Cancel" onClick={formController} />
        </div>
      </div>
    </section>
  );
  let posts = (
    <section id="post">
      <div className="title">
        <h2 className="titleText">
          Your <span>P</span>ost
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="content">
        <div className="box">
          <div className="imgBx">
            <img src={post} />
          </div>
          <div className="text">
            <h3>Food1</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={post} />
          </div>
          <div className="text">
            <h3>Food2</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={post} />
          </div>
          <div className="text">
            <h3>Food3</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={post} />
          </div>
          <div className="text">
            <h3>Food4</h3>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={post} />
          </div>
          <div className="text">
            <h3>Food5</h3>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <React.Fragment>
      {account_info}
      {posts}
    </React.Fragment>
  );
};

export default Index;
