import React, { useState } from "react";
import { Link } from "react-router-dom"
import '../App.css';


const Navbar = () => {

    const now = new Date().toLocaleTimeString();
    let today = new Date().toLocaleDateString();
    
    setInterval(timeNow, 1000);

    const [time, setTime] = useState(now)
    
    function timeNow() {
    const showTime = new Date().toLocaleTimeString();
        setTime(showTime)
    }

    return (
        <nav className="navbar-pages">
            <Link className="navbar" to="/">Home</Link>
            <Link className="navbar" to="/about">About</Link>
            <Link className="navbar" to="/projects">Projects</Link>
            <Link className="navbar" to="/contact">Contact</Link>

            <div className="timeDiv">
                    <h1 className="time">{time}</h1>
                    <h3 className="day">{today}</h3>
                    <span className="deepNote">The most important thing in life, use it wisely..</span>
            </div>
        </nav>
    )
}


export default Navbar;