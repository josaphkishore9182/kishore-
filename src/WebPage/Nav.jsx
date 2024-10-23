import React, { useState } from 'react';
// Import your CSS file

const MobileMenu = () => {
    // State to manage the active class
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the active state
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">
              <img src='/Images/jk logo.jpg' alt='logos'></img>
              <h1>JOSAPH KISHORE</h1>
            </div>
            <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`nav-list ${isActive ? 'active' : ''}`}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MobileMenu;