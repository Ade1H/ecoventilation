// pages/Contact.jsx
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="text-center">Kontakta oss</h1>
        <p className="text-center mb-4">
          Har du frågor eller vill boka en tjänst? Fyll i formuläret så återkommer vi så snart som möjligt.
        </p>
        
        <div className="contact-grid">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Namn</label>
                <input type="text" id="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-post</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Telefon</label>
                <input type="tel" id="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="form-label">Tjänst</label>
                <select id="service">
                  <option value="">Välj tjänst</option>
                  <option value="ventilation">Ventilationsservice</option>
                  <option value="avlopp">Avloppsservice</option>
                  <option value="dammsugare">Centraldammsugare</option>
                  <option value="other">Annat</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Meddelande</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Skicka meddelande</button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3>Kontaktinformation</h3>
            <div className="info-item">
              <h4>E-post</h4>
              <p>info@epventilation.se</p>
            </div>
            <div className="info-item">
              <h4>Telefon</h4>
              <p>08-123 456 78</p>
            </div>
            <div className="info-item">
              <h4>Arbetstider</h4>
              <p>Mån-Fre: 8:00-17:00</p>
              <p>Lördag: 9:00-14:00</p>
              <p>Söndag: Stängt</p>
            </div>
            <div className="info-item">
              <h4>Områden vi täcker</h4>
              <p>Hela Stockholms län och omnejd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}