import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/">About Me</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
