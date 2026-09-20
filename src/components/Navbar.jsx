import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserRoundSearch, LogIn, Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Left: Brand Logo */}
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <div className="logo-icon" aria-label="Cambedor Icon">
            <Zap size={20} strokeWidth={2.5} fill="#84D400" />
          </div>
          <span className="logo-text">CAMBEDOR</span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="nav-links">
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/why-join" className={`nav-link ${isActive('/why-join') ? 'active' : ''}`}>
              Why Join
            </Link>
          </li>
          <li>
            <Link to="/student-voices" className={`nav-link ${isActive('/student-voices') ? 'active' : ''}`}>
              Student Voices
            </Link>
          </li>
          <li>
            <Link to="/explore" className={`nav-link ${isActive('/explore') ? 'active' : ''}`}>
              <UserRoundSearch size={16} />
              Explore
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-login nav-link-login">
              <LogIn size={15} />
              Login
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/why-join" className="mobile-nav-link" onClick={closeMobileMenu}>
            Why Join
          </Link>
          <Link to="/student-voices" className="mobile-nav-link" onClick={closeMobileMenu}>
            Student Voices
          </Link>
          <Link to="/explore" className="mobile-nav-link" onClick={closeMobileMenu}>
            <UserRoundSearch size={18} />
            Explore Campaigns
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link to="/login" className="btn btn-primary" onClick={closeMobileMenu} style={{ marginTop: '0.5rem', width: '100%' }}>
            <LogIn size={18} />
            Login / Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
