import React, { useState } from "react";


const Home = () => {

    return(
        <div className="homePage">
            <div className="homePage1">
                <div className="self-img-div">
                <img src="https://iili.io/Gveul2.md.jpg" className="img-self" alt='SelfImg' />
                </div>
                
                <h1 className="myName">Koray Kurtoglu</h1>
                <h2>Full Stack Web Developer🧑🏻‍💻</h2>
                <div className="main-page-logo">
                    <img src="https://www.html5rocks.com/static/demos/svgmobile_fundamentals/images/html5-640x960.jpg" id="social-logo" alt='Html' />
                    <img src="https://encoresky.com/blog/wp-content/uploads/2020/03/1561458_7f3b.jpg" id="social-logo" alt='CSS' />
                    <img src="https://www.pngitem.com/pimgs/m/720-7208829_javascript-logo-png-transparent-png.png" id="social-logo" alt='JavaScript' />
                    <img src="https://quantlabs.net/wp-content/uploads/2019/12/python-main-qimg-28cadbd02699c25a88e5c78d73c7babc.png" id="social-logo" alt='Python' />
                    <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" id="social-logo" alt='ReactJS' />
                    <img src="https://w7.pngwing.com/pngs/1005/334/png-transparent-express-js-node-js-javascript-session-web-application-others.png" id="social-logo" alt='NodeJS' />
                    
                    <img src="https://i0.wp.com/useforcode.com/wp-content/uploads/2021/04/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.jpg?fit=820%2C454&ssl=1" id="social-logo" alt='MongoDB' />
                    <img src="https://webobjects2.cdw.com/is/image/CDW/5942177?$product-main$" id="social-logo" alt='SQL' />
                    <img src="https://miro.medium.com/max/640/1*75jvBleoQfAZJc3sgTSPQA.jpeg" id="social-logo" alt='GitHub' />
                    <img src="https://logodix.com/logo/1758777.jpg" id="social-logo" alt='Django' />
                </div>
            </div>
            <div className="intro">
                <h1>INTRODUCTION</h1>
                <h4 id="intro-text">
                    I'm resilient and disciplined in staying focused on completing my goals until my desired outcome is met, and I love going above and beyond that. I'm also a career driven person and I have a "lifetime learning" mindset. I'm a good team player, hardworking, positive and fully motivated person. Every role that I take in the company, I would love to add international perspectives and useful ideas on top of my role to make the job easier and effective.
                </h4>
            </div>
        </div>
    )
}

export default Home;