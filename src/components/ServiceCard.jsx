// In ServiceCard.jsx
import { FaFan, FaShower, FaWind, FaBroom } from 'react-icons/fa';

// Map service types to icons
const iconMap = {
  'Ventilationsservice': <FaFan />,
  'Avloppsservice': <FaShower />,
  'Centraldammsugare': <FaWind />,
  'Paketrens': <FaBroom />,
};

export default function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {iconMap[title] || <FaFan />}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/services" className="service-link">Läs mer →</a>
    </div>
  );
}