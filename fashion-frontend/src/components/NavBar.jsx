import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-logo" onClick={closeMenu}>
                Fashion Magazine
            </NavLink>

            <button
                className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <NavLink
                    to="/brands"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={closeMenu}
                >
                    Brands
                </NavLink>
                <NavLink
                    to="/models"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={closeMenu}
                >
                    Models
                </NavLink>
                <NavLink
                    to="/outfits"
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                    onClick={closeMenu}
                >
                    Outfits
                </NavLink>
            </div>
        </nav>
    );
}
