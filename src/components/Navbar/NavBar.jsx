import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useState, useEffect } from "react";
import "./NavbarStyle.css";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

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

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <div className={`content-container ${menuOpen ? "open" : ""}`}>
                <ul className="navbar-contents">
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/upload" onClick={() => setMenuOpen(false)}>Upload</Link></li>
                <li><Link to="/information" onClick={() => setMenuOpen(false)}>Information</Link></li>
                <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;