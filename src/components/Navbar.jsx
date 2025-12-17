import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
<a className="navbar-brand navbar-brand-with-tagline" href="/">
  <img 
    src="src/assets/image/logo.png" 
    alt="FTX Logo" 
    className="navbar-logo"
  />
  <div className="navbar-brand-content">
    <span className="company-name">Ecoventilation</span>
    <span className="company-tagline mobile-hide-text">ventilation Service & Installation</span>
  </div>
</a>
      
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
          <a href="/" onClick={() => setIsMenuOpen(false)}>Hem</a>
        </li>
        <li>
          <a href="/services" onClick={() => setIsMenuOpen(false)}>Tjänster</a>
        </li>
        <li>
          <a href="/contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}