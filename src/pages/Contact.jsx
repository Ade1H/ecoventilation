// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Kontakta oss</h1>
      <p className="contact-intro">
        Har du frågor eller vill boka en tjänst? Fyll i formuläret så återkommer vi så snart som möjligt.
      </p>

      <div className="contact-grid">
        {/* Form Section */}
        <div className="contact-form-container">
          <h3 className="form-title">Skicka meddelande</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Namn *</label>
              <input type="text" id="name" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-post *</label>
              <input type="email" id="email" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Telefon</label>
              <input type="tel" id="phone" className="form-input" />
            </div>
            
            <div className="form-group">
              <label htmlFor="service" className="form-label">Tjänst</label>
              <select id="service" className="form-select">
                <option value="">Välj tjänst</option>
                <option value="ventilation">Ventilationsservice</option>
                <option value="avlopp">Avloppsservice</option>
                <option value="dammsugare">Centraldammsugare</option>
                <option value="other">Annat</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Meddelande *</label>
              <textarea id="message" rows="5" className="form-textarea" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Skicka meddelande</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h3 className="info-title">Kontaktinformation</h3>
          
          <div className="info-item">
            <h4 className="info-subtitle">Kontaktuppgifter</h4>
            <p><strong>E-post:</strong> info@epventilation.se</p>
            <p><strong>Telefon:</strong> 08-123 456 78</p>
            <p><strong>Mobil:</strong> 070-123 45 67</p>
          </div>
          
          <div className="info-item">
            <h4 className="info-subtitle">Arbetstider</h4>
            <p><strong>Måndag - Fredag:</strong> 8:00 - 17:00</p>
            <p><strong>Lördag:</strong> 9:00 - 14:00</p>
            <p><strong>Söndag:</strong> Stängt</p>
          </div>
          
          <div className="info-item">
            <h4 className="info-subtitle">Serviceområde</h4>
            <p>Hela Stockholms län och omnejd</p>
            <p>Inkluderar Stockholm, Södertälje, Uppsala, Västerås och omgivande kommuner</p>
          </div>
          
          <div className="info-item">
            <h4 className="info-subtitle">Besöksadress</h4>
            <p>EP Ventilation AB</p>
            <p>Industrigatan 15</p>
            <p>123 45 Stockholm</p>
          </div>
        </div>
      </div>
    </div>
  );
}