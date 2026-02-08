import Card from '../components/Card'
import publicationsData from '../data/publications.json'
import './Publications.css'

function Publications() {
  return (
    <div className="publications-page">
      <section className="section publications-intro">
        <div className="container">
          <div className="section-title">
            <h1>Publikasi & Riset</h1>
            <p>Kontribusi ilmiah dan riset di bidang kesehatan</p>
          </div>
        </div>
      </section>

      <section className="section publications-list">
        <div className="container">
          <h2>📚 Publikasi Ilmiah</h2>
          <div className="grid grid-2">
            {publicationsData.filter(pub => pub.type === 'journal' || pub.type === 'other').map((pub, index) => (
              <Card
                key={index}
                title={pub.title}
                subtitle={`${pub.journal} • ${pub.year}`}
                description={pub.description}
                tags={pub.tags}
                link={pub.doi}
                linkText="Lihat Publikasi"
              />
            ))}
          </div>
          {publicationsData.length === 0 && (
            <p className="empty-state">
              Belum ada publikasi yang ditambahkan.
            </p>
          )}
        </div>
      </section>

      <section className="section conference-section">
        <div className="container">
          <h2>🎤 Konferensi & Presentasi</h2>
          <div className="conference-list">
            {publicationsData.filter(pub => pub.type === 'conference').map((pub, index) => (
              <div className="conference-item" key={index}>
                <div className="conference-date">{pub.date || pub.year}</div>
                <div className="conference-content">
                  <h3>{pub.title}</h3>
                  <p className="conference-name">{pub.journal}</p>
                  <p className="conference-location">{pub.description}</p>
                  <span className="badge badge-primary">Oral Presentation</span>
                </div>
              </div>
            ))}
            {publicationsData.filter(pub => pub.type === 'conference').length === 0 && (
               <p>Belum ada presentasi konferensi.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section download-section">
        <div className="container">
          <div className="download-box">
            <h2>📄 Full Publication List</h2>
            <p>Unduh daftar lengkap publikasi dan riset dalam format PDF</p>
            <a href="/documents/Publication_List.pdf" className="btn btn-primary" download>
              Unduh Publication List (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
