import './Timeline.css'

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <h4>{item.title}</h4>
            {item.subtitle && <p className="timeline-subtitle">{item.subtitle}</p>}
            <p>{item.description}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="timeline-highlights">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
