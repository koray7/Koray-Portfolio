import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="homePage">
      <section id="home">
        <div className="main">
          <section className="writer">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello..")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("My name is Koray Adams")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("I'm a Software Developer..")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </section>
        </div>
      </section>
      <div className="slider-area">
        <h2>Experiences with programming languages</h2>
        <div className="wrapper-logo">
          <div className="logo-item">
            <img
              className="logo"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt="HTML"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="CSS"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              alt="JavaScript"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png"
              alt="SQL Database"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"
              alt="GIT"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://zappysys.com/blog/wp-content/uploads/2018/07/jira-logo.jpg"
              alt="JIRA"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://spemer.com/img/works/jekyll/github.png"
              alt="GITHUB"
            />
          </div>
          <div className="logo-item">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png"
              alt="React.Js"
            />
          </div>
        </div>
      </div>
      <div className="aboutPage">
        <div>
          <img
            src="https://i.postimg.cc/Hxnc7r56/IMG-9528.jpg"
            className="self-img"
            alt="Self-Img"
          />
        </div>
        <div className="about-page-bio">
          <span id="about-page-text">Who is "Koray Adams?"</span>
          <br></br>
          <h5 className="about-page-text1">
            Born and raised in Turkey. I studied Business and Hotel Management
            at one of the biggest university in South of Turkey. And then came
            to United States back in 2015. It was a great experience as a front
            desk agent and as a supervisor at one of the best hotel in Fort
            Lauderdale, FL. I would say, It was an amazing feeling that my
            talents has been seen, all the way from overseas. After a year,
            contract ended, but my journey just started.
          </h5>
          <div className="education">
            <h3 className="about-page-topics">Education</h3>
            <h5 className="about-page-education">GENERAL ASSEMBLY</h5>
            <h6 className="about-page-education">
              Software Engineering Immersive | Full Stack Web Developer |
              AUSTIN, TX | OCTOBER 2021-MARCH 2022
            </h6>
            <h5 className="about-page-education">
              UDEMY AND FREE CODE CAMP ONLINE CLASSES
            </h5>
            <h6 className="about-page-education">
              Full Stack Web Development | SEPTEMBER 2021-MARCH 2022
            </h6>
          </div>
          <div className="experiences">
            <h3 className="about-page-topics">Experiences</h3>
            <h5 className="about-page-experience">
              🧑🏻‍💻SOFTWARE ENGINEERING IMMERSIVE🧑🏻‍💻<br></br>
              General Assembly | Washington, D.C. | December 2021-March 2022
              Successfully completed 500+ hours of expert-led applied computer
              science fundamentals using the industry's most in demand
              technologies. Learned Front-end and Back-end languages including
              HTML, CSS, JavaScript, ReactJS, NodeJS, Express, Python and Django
              and SQL database.<br></br>
              <br></br>● Developed projects, including a game called “CARD OF
              WAR” using HTML, CSS, JavaScript.<br></br>● LavenWoods Alchemy
              (Developed within a group of 4 people)<br></br>● Node.js, Express,
              MangoDB and Mongoose. It’s also a full CRUD project with a RESTful
              layout.
              <br></br>● SportForLife-ReactJS, bootstrap, API technology,
              Express, Heroku for deployment.<br></br>● RightAway-Python, Django
              and SQL database.
              <br></br>●And Over 15 More Projects..
            </h5>
          </div>
          <div className="contact">
            <h3 className="about-page-topics">Contact information</h3>
            <a
              href="https://www.linkedin.com/in/koray-adams/"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg"
                id="social-logo"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/koray7"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://media.xconomy.com/wordpress/wp-content/images/2016/06/06161811/github-logo.jpg"
                id="social-logo"
                alt="GitHub"
              />
            </a>
            <a
              href="mailto:softwarekoray@gmail.com"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                id="social-logo"
                alt="Gmail"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1tncNRrMLRyGLbMTf7anEV4pxORd_C1YuTkgOaUQqRhg/edit?usp=sharing"
              download="Koray-Resume.pdf"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png"
                id="social-logo"
                alt="Koray-Resume"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="projectsPage">
        <div className="projects">
          <div id="app">
            <a
              href="https://ecstatic-hopper-40c9b0.netlify.app"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://iili.io/GverJI.md.png"
                className="img"
                alt="SportsForLife"
              />
              <span id="app-text">SportsForLife</span>
            </a>

            <div className="project-details">
              <h3 className="details-header">Technologies</h3>
              <h5 className="details">
                HTML, CSS, JavaScript, React.Js, Bootstrap, API technology,
                Node.Js
              </h5>
              <h3 className="details-header">About</h3>
              <p className="details">
                I created this app because I believe that{" "}
                <u>
                  <strong>being physically active in life</strong>
                </u>
                , would brings more qualities in people's day to day living.
                Everyone has a different life and physical conditions where
                individuals can't practice most of the sports in their life and
                it's impossible. But how about if there is a specific sport that
                you can easily practice in your life and enjoy doing it every
                day. <br></br>
                <br></br>I created this app so user can find the best sport type
                for their life and start to learn about it and practice it every
                day to bring more qualities in their life.
              </p>
            </div>
          </div>
          <div id="app">
            <a
              href="https://sad-ptolemy-d0c1c8.netlify.app"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://iili.io/Gvkoe1.md.png"
                className="img"
                alt="War-Game"
              />
              <span id="app-text">War Card Game</span>
            </a>
            <div className="project-details">
              <h3 className="details-header">Technologies</h3>
              <h5 className="details">HTML, CSS, JavaScript</h5>
              <h3 className="details-header">About</h3>
              <p className="details">
                It's a very simple and fun{" "}
                <u>
                  <strong>"card game"</strong>
                </u>{" "}
                where users can shuffle the cards and whoever gets the greater
                number for that round, gets a point. users can shuffle the cards
                and play it until there is no card.<br></br>
                <br></br> Whoever collects more points on that round, that
                player would wind the game.
              </p>
            </div>
          </div>
          <div id="app">
            <a
              href="https://giphy-search-app-koray.herokuapp.com/"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://iili.io/Gvk0mX.md.png"
                className="img"
                alt="Giphy"
              />
              <span id="app-text">Giphy Search</span>
            </a>
            <div className="project-details">
              <h3 className="details-header">Technologies</h3>
              <h5 className="details">
                HTML, CSS, JavaScript, React.Js, Bootstrap, API technology,
                Node.Js
              </h5>
              <h3 className="details-header">About</h3>
              <p className="details">
                <strong>WE ALL LOVE GIPHY</strong>. I created this app so users
                can search for a Giphy. I used few different technologies that
                you can pick any topics that you like and app would show
                hundreds of different type of Giphy<br></br>
                <br></br>
              </p>
            </div>
          </div>
          <div id="app">
            <a
              href="https://star-wars-app-kk.herokuapp.com/"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://iili.io/GrHAxI.th.png"
                className="img"
                alt="Giphy"
              />
              <span id="app-text">Star Wars</span>
            </a>
            <div className="project-details">
              <h3 className="details-header">Technologies</h3>
              <h5 className="details">HTML, CSS, JavaScript</h5>
              <h3 className="details-header">About</h3>
              <p className="details">
                One of my first projects that I built and it's called{" "}
                <u>
                  <strong>"Star Wars"</strong>
                </u>
                .I created this project so users can look up some spaceships and
                get information about that ships and captans<br></br>
                <br></br>
              </p>
            </div>
          </div>

          <div id="app">
            <a
              href="https://benevolent-cannoli-729006.netlify.app/"
              target="_blank"
              rel="noReferrer"
            >
              <img
                src="https://i.ibb.co/vVm1PWS/Screen-Shot-2022-04-29-at-15-12-32.png"
                className="img"
                alt="Keeper"
              />
              <span id="app-text">Keeper</span>
            </a>
            <div className="project-details">
              <h3 className="details-header">Technologies</h3>
              <h5 className="details">
                HTML, CSS, JavaScript, React.Js, Icons with Material UI, ( Will
                be Full CRUD application soon )
              </h5>
              <h3 className="details-header">About</h3>
              <p className="details">
                <strong>"The most useful app that I have ever created"</strong>{" "}
                and it's basically an app that user can creat notes and keeps it
                for the future. It has create and delete button, but it will
                have also an edit button and I will use Node.Js (back-end
                technology) that it would keep the information after closing the
                app and save it into a database so when user try to open the app
                again, the information will still be there.<br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
