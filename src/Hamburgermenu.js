import React from 'react';
import { Link } from 'react-router-dom';
import './Hamburgermenu.css'; // Create this CSS file for styles

const HamburgerMenu = () => {
    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    };

    return (
        <div>
            <div className="hamburger" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className="sidebar" id="sidebar">
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Főoldal</Link></li>
                    <li><Link to="/register" onClick={toggleSidebar}>Regisztráció</Link></li>
                    <li><Link to="/signin" onClick={toggleSidebar}>Bejelentkezés</Link></li>
                    <li><a href="#">Rólunk</a></li>
                    <li><a href="#">Kapcsolat</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;