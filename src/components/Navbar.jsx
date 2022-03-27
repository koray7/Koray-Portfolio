import React from "react";
import { Link } from "react-router-dom"
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar-pages">
            <Link className="navbar" to="/">Home</Link>
            <Link className="navbar" to="/about">About</Link>
            <Link className="navbar" to="/projects">Projects</Link>
        </nav>
    )
}


export default Navbar;