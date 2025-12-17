// src/pages/Home.jsx
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

// Du måste lägga till din bild i mappen public/images eller src/assets
// För detta exempel antar jag att din bild ligger i public/images/ eller src/assets/
// Du kan använda import om bilden är i src/assets eller en relativ sökväg om den är i public/

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

      {/* Image Section - Lägg till detta efter Services Section */}
      <section className="image-section">
        <div className="container">
          <div className="image-container">
            {/* Välj en av dessa alternativ beroende på var din bild finns */}
            
            {/* Alternativ 1: Om bilden är i public/images/ */}
            <img 
              src="src/assets/image/bildpappaochson.png" 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            
            {/* Alternativ 2: Om du importerar bilden från src/assets/ */}
            {/* 
            import serviceImage from '../assets/your-image.jpg';
            och använd sedan:
            <img 
              src={serviceImage} 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            */}
            
            {/* Alternativ 3: Om du vill använda en extern bild */}
            {/* 
            <img 
              src="https://example.com/your-image.jpg" 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Varför välja oss?</h2>
            <p className="section-subtitle">
              Vi är stolta över att erbjuda den bästa servicen på marknaden.
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Redo att boka en tjänst?</h2>
          <p>Kontakta oss för en kostnadsfri konsultation eller bokning.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Kontakta oss</a>
            <a href="tel:+46812345678" className="btn btn-secondary">Ring oss</a>
          </div>
        </div>
      </section>

       <section className="image-section">
        <div className="container">
          <div className="image-container">
            {/* Välj en av dessa alternativ beroende på var din bild finns */}
            
            {/* Alternativ 1: Om bilden är i public/images/ */}
            <img 
              src="src/assets/image/ftx.png" 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            
            {/* Alternativ 2: Om du importerar bilden från src/assets/ */}
            {/* 
            import serviceImage from '../assets/your-image.jpg';
            och använd sedan:
            <img 
              src={serviceImage} 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            */}
            
            {/* Alternativ 3: Om du vill använda en extern bild */}
            {/* 
            <img 
              src="https://example.com/your-image.jpg" 
              alt="Beskrivande text för bilden" 
              className="services-image"
            />
            */}
          </div>
        </div>
      </section>

    </div>
  );
}