import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
            <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>    
            <NavLink to="/about_me" className="nav-link" activeClassName="active">About Me</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </nav>
    );
}

export default Navbar;
