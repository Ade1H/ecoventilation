// src/components/HeroCarousel.jsx
import { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const slides = [
       {
     id: 2,
      image: 'src/assets/image/herobildA.png', // Use imported image
      title: 'Ventilationsservice',
      description: 'Regelbunden rengöring och underhåll för optimal inomhusluftkvalitet.',
      ctaText: 'Läs mer',
      ctaLink: '/services'
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Anlita en expert redan idag!',
      description: 'Vi på EP ventilation erbjuder professionell service med erfarenhet i hela Sverige.',
      ctaText: 'Boka tjänst',
      ctaLink: '/contact'
    },
 
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Avloppsservice',
      description: 'Specialister på avloppsproblem - från akuta stopp till förebyggande underhåll.',
      ctaText: 'Kontakta oss',
      ctaLink: '/contact'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="hero-carousel">
      {/* Slides Container */}
      <div className={`slides-container ${isTransitioning ? 'transitioning' : ''}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 107, 93, 0.7), rgba(0, 80, 72, 0.8)), url(${slide.image})`
            }}
          >
            <div className="slide-content container">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a href={slide.ctaLink} className="btn btn-primary">
                {slide.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;