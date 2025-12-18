// src/pages/Home.jsx
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

// Import your images if they are in src/assets
// If images are in public folder, use relative paths
import serviceImage1 from '../assets/image/bildpappaochson.png';
import serviceImage2 from '../assets/image/ftx.png';

export default function Home() {
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
    }
  ];

  const features = [
    {
      title: "Erfarenhet",
      description: "Flera års erfarenhet i branschen med verksamhet över hela Sverige"
    },
    {
      title: "Expertis",
      description: "Certifierade experter som garanterar högsta kvalitet på alla tjänster"
    },
    {
      title: "Prisvärt",
      description: "Konkurrenskraftiga priser med transparenta prissättningar"
    },
    {
      title: "Snabb service",
      description: "Akuta ärenden hanteras snabbt och effektivt"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-section">
        <HeroCarousel />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Våra Tjänster</h2>
            <p className="section-subtitle">
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
          
          <div className="text-center mt-4">
            <a href="/services" className="btn btn-secondary">Se alla tjänster</a>
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className="image-section">
        <div className="container">
          <div className="image-container">
            <img 
              src={serviceImage1} 
              alt="Expertpersonal som utför ventilationsservice" 
              className="services-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Varför välja oss?</h2>
            <p className="section-subtitle">
              Vi är stolta över att erbjuda den bästa servicen på marknaden med fokus på kvalitet och kundnöjdhet.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span className="feature-number">{index + 1}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="image-section">
        <div className="container">
          <div className="image-container">
            <img 
              src={serviceImage2} 
              alt="Modern utrustning för avlopps- och ventilationsservice" 
              className="services-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Redo att boka en tjänst?</h2>
          <p>Kontakta oss för en kostnadsfri konsultation eller bokning. Vi är här för att hjälpa dig med alla dina servicebehov.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Kontakta oss</a>
            <a href="tel:+46812345678" className="btn btn-secondary">Ring oss</a>
          </div>
        </div>
      </section>
    </div>
  );
}