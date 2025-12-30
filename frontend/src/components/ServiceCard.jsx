

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      {/* Visa bilden först, om den finns */}
      {image && <img src={image} alt={title} className="service-image" />}
      
      {/* Ikonen */}
      

      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/contact" className="service-link">booka tjänst →</a>
    </div>
  );
}
