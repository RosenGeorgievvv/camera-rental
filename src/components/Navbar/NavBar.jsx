import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import sunny from "../../assets/sunny.png";
import night from "../../assets/night.png";
import logo from '../../assets/Navigation/logo.png';
import magicLight from '../../assets/Navigation/magicLight-2.png';

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

    const handleSliderChange = () => {
        toggle_mode();
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToFooter = () => {    
        const footerElement = document.getElementById("contact-us");
        footerElement.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={theme === 'light' ? logo : magicLight} alt="" className="logo" />
            <div className="menu-container">
                {isMobile && (
                    <div className="hamburger" onClick={toggleMenu}>
                        {menuOpen ? '✖' : '☰'}
                    </div>
                )}
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li className="dropdown">
                        Cameras
                        <ul className="dropdown-content">
                            <li>Video</li>
                            <li>Cine</li>
                            <li>Photo</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        Lenses & Filters
                        <ul className="dropdown-content">
                            <li>Photo Lenses</li>
                            <li>Cine Lenses</li>
                            <li>Filters</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        Accessories
                        <ul className="dropdown-content">
                            <li>Batteries</li>
                            <li>Cables</li>
                            <li>Follow Focus</li>
                            <li>Adaptors</li>
                            <li>Radio Focus</li>
                            <li>Matt Box</li>
                            <li>Handheld</li>
                            <li>Monitors</li>
                            <li>Recorders</li>
                            <li>Wireless Video</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        Grip
                        <ul className="dropdown-content">
                            <li>Booms</li>
                            <li>Tripods</li>
                            <li>Heads</li>
                        </ul>
                    </li>
                    <li>Lighting</li>
                    <li>Sound</li>
                    <li onClick={scrollToFooter} style={{ cursor: "pointer" }}>Contact Us</li>
                </ul>
            </div>
            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="theme-toggle"
                    className="theme-toggle"
                    checked={theme === 'dark'}
                    onChange={handleSliderChange}
                />
                <label htmlFor="theme-toggle" className="toggle-label">
                    <img src={sunny} alt="light mode" className="toggle-icon" />
                    <img src={night} alt="dark mode" className="toggle-icon" />
                </label>
            </div>
        </div>
    );
};

export default NavBar;
