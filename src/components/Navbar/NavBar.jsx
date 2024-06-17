import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import sunny from "../../assets/sunny.png";
import night from "../../assets/night.png";
import darklogo from "../../assets/darklogo.jpg";
import whitelogo from '../../assets/whitelogo.jpg';

const NavBar = ({ theme, setTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? whitelogo : darklogo} alt="" className="logo" />
            <div className="menu-container">
                {isMobile && (
                    <div className="hamburger" onClick={toggleMenu}>
                        {menuOpen ? '✖' : '☰'}
                    </div>
                )}
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li>Cameras</li>
                    <li>Lenses & Filters</li>
                    <li>Accessories</li>
                    <li>Grip</li>
                    <li>Lighting</li>
                    <li>Sound</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <img onClick={toggle_mode} src={theme === 'light' ? night : sunny} alt="" className="toggle-icon" />
        </div>
    );
};

export default NavBar;
