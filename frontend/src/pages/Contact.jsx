// src/pages/Contact.jsx
import React, { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Set page title
    document.title = "Kontakta oss | Ecoventilation";

    // Set meta description dynamically
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Kontakta Ecoventilation för ventilationsservice, avloppsservice och centraldammsugare. Fyll i formuläret eller ring oss direkt för snabb hjälp.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
        e.target.reset();
      } else {
        alert("Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      console.error(error);
      alert("Något gick fel. Försök igen senare.");
    }
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
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">E-post *</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Telefon</label>
              <input type="tel" id="phone" name="phone" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">Tjänst</label>
              <select id="service" name="service" className="form-select">
                <option value="">Välj tjänst</option>
                <option value="ventilation">Rensning imkanal</option>
                <option value="avlopp">Rensning frånluft</option>
                <option value="dammsugare">Rensning tilluft</option>
                <option value="other">Rensning luft luft</option>
                <option value="other">FTX/värmeväxlare</option>
                <option value="other">Avlopsrensning/spolning</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Meddelande *</label>
              <textarea id="message" name="message" rows="5" className="form-textarea" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Skicka meddelande</button>
          </form>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h3 className="info-title">Kontaktinformation</h3>

          <div className="info-item">
            <h4 className="info-subtitle">Kontaktuppgifter</h4>
            <p><strong>E-post:</strong> johan.karlsson@ecoventilation.se</p>
            <p><strong>Mobil:</strong> </p>
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
            <p>Ecoventilation AB</p>
            <p>Petregatan 1</p>
            <p>802 50 Gävle</p>
            <p>Ecoview Solution AB</p>
            <p>Orgnummer: 559143-3957</p>
            


          </div>
        </div>
      </div>
    </div>
  );
}
