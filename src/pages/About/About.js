import React from "react";

const About = () => {
    return(
        <div className="aboutPage">
            <div>
                <img src="https://i.postimg.cc/Hxnc7r56/IMG-9528.jpg" className="self-img" alt='Self-Img'/>
            </div>
                <div className="about-page-bio">
                    <span id="about-page-text">Who is "Koray Kurtoglu?"</span><br></br>
                    <h5 className="about-page-text1">
                        Born and raised in Turkey. I studied Business and Hotel Management at one of the biggest university in South of Turkey. And then came to United States back in 2015. It was a great experience as a front desk agent and as a supervisor at one of the best hotel in Fort Lauderdale, FL. I would say, It was an amazing feeling that my talents has been seen, all the way from overseas. After a year, contract ended, but my journey just started.
                    </h5>
                <div className="education">
                    <h3 className="about-page-topics">Education</h3>
                    <h5 className="about-page-education">
                        GENERAL ASSEMBLY
                    </h5>
                    <h6 className="about-page-education">
                    Software Engineering Immersive | Full Stack Web Developer | AUSTIN, TX | OCTOBER 2021-MARCH 2022
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
                        Successfully completed 500+ hours of expert-led applied computer science fundamentals using the industry's most in demand technologies. Learned Front-end and Back-end languages including HTML, CSS, JavaScript, ReactJS, NodeJS, Express, Python and Django and SQL database.<br></br><br></br>
                        ● Developed projects, including a game called “CARD OF WAR” using HTML, CSS, JavaScript.<br></br>
                        ● LavenWoods Alchemy (Developed within a group of 4 people)<br></br>
                        ● Node.js, Express, MangoDB and Mongoose. It’s also a full CRUD project with a RESTful
                        layout.<br></br>
                        ● SportForLife-ReactJS, bootstrap, API technology, Express, Heroku for deployment.<br></br>
                        ● RightAway-Python, Django and SQL database.
                    </h5>
                </div>
                <div className="contact">
                    <h3 className="about-page-topics">Contact information
                    </h3>
                    <a href="https://www.linkedin.com/in/koray-kurtoglu/" target="_blank" rel="noReferrer">
                        <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg" id="social-logo" alt='LinkedIn' />
                    </a>
                    <a href="https://github.com/koray7" target="_blank" rel="noReferrer">
                        <img src="https://media.xconomy.com/wordpress/wp-content/images/2016/06/06161811/github-logo.jpg" id="social-logo" alt='GitHub' />
                    </a>
                    <a href="mailto:softwarekoray@gmail.com" target="_blank" rel="noReferrer">
                        <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" id="social-logo" alt='Gmail' />
                    </a>
                    <a href="https://docs.google.com/document/d/1tncNRrMLRyGLbMTf7anEV4pxORd_C1YuTkgOaUQqRhg/edit?usp=sharing" download="Koray-Resume.pdf" target="_blank" rel="noReferrer"><img src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" id="social-logo" alt='Koray-Resume' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;

