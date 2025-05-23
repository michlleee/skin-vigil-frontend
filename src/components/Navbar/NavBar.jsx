import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useState, useEffect } from "react";
import "./NavbarStyle.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
    return (
        <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
            <a href="/" className="logo-container">
                <img src={logo} alt="Logo" className="logo"/>
            </a>
            <div className="content-container">
                <ul id="navbar-contents">
                <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                    <li><Link to="/information">Information</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;