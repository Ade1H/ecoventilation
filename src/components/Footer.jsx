// components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">EP Ventilation</h3>
            <p>Professionell service för ditt hem med erfarenhet i hela Sverige.</p>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Email: info@epventilation.se</p>
            <p>Telefon: 08-123 456 78</p>
          </div>
          
          <div className="footer-section">
            <h4>Snabblänkar</h4>
            <ul className="footer-links">
              <li><a href="/">Hem</a></li>
              <li><a href="/services">Tjänster</a></li>
              <li><a href="/contact">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EP Ventilation. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}