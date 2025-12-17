// pages/Services.jsx
import ServiceCard from '../components/ServiceCard';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "Ventilationsservice",
      description: "Regelbunden rengöring och underhåll av ventilationssystemet för att säkerställa god inomhusluftkvalitet och förhindra problem som dålig luftkvalitet och mögel."
    },
    {
      title: "Avloppsservice",
      description: "Vi löser alla typer av avloppsproblem, från akuta stopp till förebyggande underhåll. Vårt mål är att säkerställa att ditt avloppssystem fungerar optimalt."
    },
    {
      title: "Centraldammsugare",
      description: "Fullständig service av centraldammsugare inklusive byte av dammsugarpåse, rengöring av filter och munstycken samt kontroll av slangar och rör."
    },
    {
      title: "Paketrens",
      description: "Attraktiva pakettjänster som ger dig möjlighet att spara pengar. Våra paket är utformade för att passa olika behov och budgetar."
    },
    {
      title: "Kyl & Frysservice",
      description: "Service och reparation av kyl- och frysutrustning för att säkerställa optimal prestanda och energiförbrukning."
    },
    {
      title: "Elservice",
      description: "Certifierade elektriker som hjälper dig med installationer, felsökning och underhåll av elektriska system i hemmet."
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-header">
          <h1>Våra Tjänster</h1>
          <p className="subtitle">
            Vi erbjuder ett brett utbud av professionella tjänster för ditt hem. 
            Alla våra tjänster utförs av certifierade experter med år av erfarenhet.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="cta-section">
          <h2>Redo att boka en tjänst?</h2>
          <p>Kontakta oss för en kostnadsfri konsultation eller bokning.</p>
          <a href="/contact" className="btn btn-primary">Kontakta oss</a>
        </div>
      </div>
    </div>
  );
}