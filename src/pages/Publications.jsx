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
            {publicationsData.map((pub, index) => (
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
              Belum ada publikasi yang ditambahkan. Silakan edit file 
              <code>src/data/publications.json</code> untuk menambahkan publikasi Anda.
            </p>
          )}
        </div>
      </section>

      <section className="section research-section">
        <div className="container">
          <h2>🔬 Riset Ongoing/Completed</h2>
          <div className="research-list">
            <div className="research-card">
              <h3>[JUDUL RISET]</h3>
              <p className="research-status">
                <span className="badge badge-success">Completed</span>
                <span className="research-year">[TAHUN]</span>
              </p>
              <p className="research-description">
                [DESKRIPSI RISET: tujuan, metodologi, dan hasil utama]
              </p>
              <p className="research-institution">
                <strong>Institusi:</strong> [NAMA INSTITUSI/RUMAH SAKIT]
              </p>
            </div>

            <div className="research-card">
              <h3>[JUDUL RISET ONGOING]</h3>
              <p className="research-status">
                <span className="badge">Ongoing</span>
                <span className="research-year">[TAHUN MULAI] - Present</span>
              </p>
              <p className="research-description">
                [DESKRIPSI RISET: tujuan, metodologi, dan progress saat ini]
              </p>
              <p className="research-institution">
                <strong>Institusi:</strong> [NAMA INSTITUSI]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section conference-section">
        <div className="container">
          <h2>🎤 Konferensi & Presentasi</h2>
          <div className="conference-list">
            <div className="conference-item">
              <div className="conference-date">[BULAN TAHUN]</div>
              <div className="conference-content">
                <h3>[JUDUL PRESENTASI]</h3>
                <p className="conference-name">[NAMA KONFERENSI]</p>
                <p className="conference-location">[LOKASI/FORMAT: offline/online]</p>
                <span className="badge badge-primary">[Oral/Poster]</span>
              </div>
            </div>

            <div className="conference-item">
              <div className="conference-date">[BULAN TAHUN]</div>
              <div className="conference-content">
                <h3>[JUDUL PRESENTASI]</h3>
                <p className="conference-name">[NAMA KONFERENSI]</p>
                <p className="conference-location">[LOKASI/FORMAT]</p>
                <span className="badge badge-primary">[Oral/Poster]</span>
              </div>
            </div>
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
