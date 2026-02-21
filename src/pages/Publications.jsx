import Card from '../components/Card'
import publicationsData from '../data/publications.json'
import './Publications.css'

function Publications() {
  const availablePublications = publicationsData.length > 0

  return (
    <div className="publications-page">
      <section className="section publications-intro">
        <div className="container">
          <div className="section-title">
            <h1>Publikasi & Riset</h1>
            <p>Kontribusi ilmiah dan riset di bidang kesehatan dan onkologi radiasi</p>
          </div>
        </div>
      </section>

      <section className="section publications-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{publicationsData.filter(pub => pub.type === 'journal').length}</div>
              <div className="stat-label">Artikel Jurnal</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{publicationsData.filter(pub => pub.type === 'conference').length}</div>
              <div className="stat-label">Presentasi Konferensi</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{publicationsData.filter(pub => pub.type === 'other').length}</div>
              <div className="stat-label">Publikasi Lainnya</div>
            </div>
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
                link={pub.link || (pub.fullTextAvailable ? "#" : null)}
                linkText={pub.fullTextAvailable ? "Lihat Publikasi" : "Informasi"}
              />
            ))}
          </div>
          {publicationsData.filter(pub => pub.type === 'journal' || pub.type === 'other').length === 0 && (
            <p className="empty-state">
              Belum ditemukan publikasi yang dapat diverifikasi dari sumber publik.
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
                  <div className="conference-tags">
                    {pub.tags && pub.tags.map((tag, idx) => (
                      <span key={idx} className="badge badge-primary">{tag}</span>
                    ))}
                  </div>
                  <span className="badge badge-primary">Oral Presentation</span>
                </div>
              </div>
            ))}
            {publicationsData.filter(pub => pub.type === 'conference').length === 0 && (
               <p>Belum ditemukan presentasi konferensi yang dapat diverifikasi.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section research-areas">
        <div className="container">
          <h2>🔬 Area Riset</h2>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">🎯</div>
              <h3>Radioterapi Precision</h3>
              <p>Pengembangan teknik radioterapi presisi dengan AI untuk meningkatkan outcome pasien.</p>
            </div>
            
            <div className="research-card">
              <div className="research-icon">🤖</div>
              <h3>AI dalam Onkologi</h3>
              <p>Implementasi artificial intelligence dalam diagnosis dan treatment planning.</p>
            </div>
            
            <div className="research-card">
              <div className="research-icon">📊</div>
              <h3>Meta-analisis Klinis</h3>
              <p>Analisis komprehensif data klinis untuk evidence-based medicine.</p>
            </div>
            
            <div className="research-card">
              <div className="research-icon">🧬</div>
              <h3>Radiobiologi</h3>
              <p>Penelitian mekanisme biologis radiasi pada sel kanker dan jaringan normal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-section">
        <div className="container">
          <div className="download-box">
            <h2>📄 Full Publication List</h2>
            <p>Download daftar publikasi lengkap dalam format PDF:</p>
            <a href="/documents/Publication_List.pdf" className="btn btn-primary" download>
              📥 Unduh Daftar Publikasi
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
