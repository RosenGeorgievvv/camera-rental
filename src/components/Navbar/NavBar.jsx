import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import sunny from "../../assets/sunny.png";
import night from "../../assets/night.png";
import logo from '../../assets/Navigation/logo.png';
import magicLight from '../../assets/Navigation/magicLight-2.png';

const NavBar = ({ theme, setTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [dropdownOpen, setDropdownOpen] = useState(null); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
                setDropdownOpen(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleSliderChange = () => {
        toggleMode();
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(null);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const scrollToFooter = () => {
        const footerElement = document.getElementById("contact-us");
        footerElement.scrollIntoView({ behavior: "smooth" });
    };

    const arrowIcon = (
        <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
            fill="#000000"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5H7z" />
        </svg>
    );

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
                    <li className="dropdown" onClick={() => toggleDropdown(0)}>
                        Cameras {arrowIcon}
                        <ul className={`dropdown-content ${dropdownOpen === 0 ? 'show' : ''}`}>
                            <li>Video</li>
                            <li>Cine</li>
                            <li>Photo</li>
                        </ul>
                    </li>
                    <li className="dropdown" onClick={() => toggleDropdown(1)}>
                        Lenses & Filters {arrowIcon}
                        <ul className={`dropdown-content ${dropdownOpen === 1 ? 'show' : ''}`}>
                            <li>Photo Lenses</li>
                            <li>Cine Lenses</li>
                            <li>Filters</li>
                        </ul>
                    </li>
                    <li className="dropdown" onClick={() => toggleDropdown(2)}>
                        Accessories {arrowIcon}
                        <ul className={`dropdown-content ${dropdownOpen === 2 ? 'show' : ''}`}>
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
                    <li className="dropdown" onClick={() => toggleDropdown(3)}>
                        Grip {arrowIcon}
                        <ul className={`dropdown-content ${dropdownOpen === 3 ? 'show' : ''}`}>
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
