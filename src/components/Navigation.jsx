import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const Navigation = ({ darkMode, toggleDarkMode }) => (
  <nav className={`navbar navbar-expand-md ${darkMode ? 'bg-dark navbar-dark' : 'bg-primary '}`}>
    <div className="container-fluid">
      {/* Brand Name */}
      <Link to="/" className="navbar-brand">Loan Calculator</Link>

      {/* Navbar toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar items (collapsing) */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/exchange-rates" className="nav-link">Exchange Rates</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
        </ul>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className={`btn btn-sm ${darkMode ? 'btn-secondary text-white' : 'btn-light text-dark'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  </nav>
);

export default Navigation;
