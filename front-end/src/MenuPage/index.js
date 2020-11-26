import React from "react";

import "./index.css";

import salad from "./Images/menu.png";
import soup from "./Images/menu1.png";
import pasta from "./Images/menu2.png";
import beef from "./Images/menu3.png";
import cafe from "./Images/menu4.png";
import cake from "./Images/menu5.png";

const Index = () => {
  return (
    <React.Fragment>
      <section id="menupage">
        <div class="title">
          <h2 class="titleText">
            Our <span>M</span>enu
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="content">
          <div class="box">
            <div class="imgBx">
              <img src={salad} />
            </div>
            <div class="text">
              <h3>Special Salads</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={soup} />
            </div>
            <div class="text">
              <h3>Special Soup</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={pasta} />
            </div>
            <div class="text">
              <h3>Special Pasta</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={beef} />
            </div>
            <div class="text">
              <h3>Special Beefsteak</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={cafe} />
            </div>
            <div class="text">
              <h3>Special Coffee</h3>
            </div>
          </div>
          <div class="box">
            <div class="imgBx">
              <img src={cake} />
            </div>
            <div class="text">
              <h3>Special Cake</h3>
            </div>
          </div>
        </div>
        <div class="title">
          <a href="#" class="btn">
            View All
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Index;
