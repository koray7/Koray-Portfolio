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
                        Born and raised in Turkey. I studied Business and Hotel Management at one of the biggest university in South of Turkey. And then came to United States back in 2015. It was a great experience as a front desk agent and as a supervisor at one of the best hotel in Fort Lauderdale, FL. It was an amazing feelings that my talents has been seen, all the way from overseas. After a year, contact ended, but my journey just started.
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
                    <h5 className="about-page-education">
                        AKDENIZ UNIVERSITY
                    </h5>
                    <h6 className="about-page-education">
                    Business and Hotel Management | Turkey | JULY 2011-JULY 2015
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
                    <h5 className="about-page-experiences">
                    🚚PENSKE LOGISTICS<br></br>
                    Route Driver/Driver Mentor | Grand Prairie, TX | September 2019-October 2021.
                    Worked a year as a route driver and started mentoring new drivers and showing them how the work needs to be done if the company trainer needs to work on something else that could not be able to work that day.<br></br>
                    </h5>
                    <h5 className="about-page-experiences">
                        🚛LIQUID ENVIRONMENTAL SOLUTION<br></br>
                        Collecting disposable liquid with a company tanker and vacuum operator, from different locations.I was responsible for complying with all DOT, state regulations, and company safety and compliance policies.
                    </h5>
                    <h5 className="about-page-experiences">
                        🚚LABATT FOOD SERVICE<br></br>
                        Truck Driver | Dallas, TX | July 2017-June 2018<br></br>
                        I worked as a route driver, delivering the company products to the customers at different locations.
                    </h5>
                    <h5 className="about-page-experiences">
                        ⛱FOUR SEASONS HOTEL<br></br>
                        Pool Bar Supervisor | Miami, FL | June 2016-July 2017<br></br>
                        I started this role as a waiter and took this position as it became available. After the supervisor position, there was more responsibility added to my waiter position. I would work as a waiter and top of that, I would make schedules for the other team members and cover their shifts as needed.
                    </h5>
                    <h5 className="about-page-experiences">
                        🏖PELICAN GRAND BEACH RESORT<br></br>
                        Front Desk Supervisor | Fort Lauderdale, FL | June 2015-June2016<br></br>
                        I took this position right after I graduated from my university. Since I had previous experience for many years, they sponsored me, made a contract for a year. I got a trainee for 3 months for this role and started my shift supervisor role right after that.
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
                </div>
            </div>
        </div>
    )
}

export default About;
// style={{ paddingTop: "30%" }}