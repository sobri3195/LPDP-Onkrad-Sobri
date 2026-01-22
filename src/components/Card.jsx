import './Card.css'

function Card({ title, subtitle, description, tags, link, linkText, icon }) {
  return (
    <div className="card-component">
      {icon && <div className="card-icon">{icon}</div>}
      
      <h3 className="card-title">{title}</h3>
      
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      
      <p className="card-description">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-primary">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {link && (
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          {linkText || 'Lihat Selengkapnya'} →
        </a>
      )}
    </div>
  )
}

export default Card
