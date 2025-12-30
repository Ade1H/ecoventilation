import { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand navbar-brand-with-tagline" to="/">
        <img 
          src="src/assets/image/logo.png" 
          alt="Ecoventilation Logo" 
          className="navbar-logo"
        />
        <div className="navbar-brand-content">
          <span className="company-name">Ecoventilation</span>
          <span className="company-tagline mobile-hide-text">
            Ventilation Service & Installationer
          </span>
        </div>
      </Link>

      {/* Hamburger menu button */}
      <button 
        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Hem</Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>Tjänster</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Kontakt</Link>
        </li>
        <li>
          <Link to="/careers" onClick={closeMenu}>Kariär</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>Om</Link>
        </li>
      </ul>

      {/* Overlay for mobile */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
}