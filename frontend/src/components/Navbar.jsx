import { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            Ventilation Service & Installation
          </span>
        </div>
      </Link>

      {/* Mobile menu toggle button */}
      <button 
        className="navbar-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Hem</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Tjänster</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
