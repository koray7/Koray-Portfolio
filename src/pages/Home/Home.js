import React, { useState } from "react";

const Home = () => {
  return (
    <div className="homePage">
      <section id="home">
        <div className="main">
          <h1 className="headings">
            {" "}
            Hello.. <br></br> Welcome to my page!
          </h1>
        </div>
      </section>

      <section id="about">
        <h1 className="headings">About Me</h1>
        <div id="pic">
          <img
            src="https://i.ibb.co/WDcXytJ/IMG-9528.jpg"
            id="intro"
            alt="SelfImg"
          />
          <div>
            <h2 className="myName">Koray Adams</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </section>

      {/* <div className="homePage1">
        <div className="self-img-div">
          <img
            src="https://iili.io/Gveul2.md.jpg"
            className="img-self"
            alt="SelfImg"
          />
        </div>

        <h1 className="myName">Koray Adams</h1>
        <h2>Full Stack Web Developer🧑🏻‍💻</h2>
      </div>
      <div className="intro">

      </div> */}
    </div>
  );
};

export default Home;
