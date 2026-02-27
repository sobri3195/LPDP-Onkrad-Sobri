import Card from '../components/Card'
import projectsData from '../data/projects.json'
import './Projects.css'

function Projects() {
  const healthProjects = projectsData.filter(project => project.category === 'health')
  const innovationProjects = projectsData.filter(project => project.category === 'innovation')

  const hasProjects = healthProjects.length > 0 || innovationProjects.length > 0

  return (
    <div className="projects-page">
      <section className="section projects-intro">
        <div className="container">
          <div className="section-title">
            <h1>Proyek & Inovasi</h1>
            <p>Kontribusi melalui proyek kesehatan, inovasi berbasis AI, dan pengabdian masyarakat</p>
          </div>
        </div>
      </section>

      <section className="section download-section-top">
        <div className="container">
          <div className="download-box-top">
            <h2>📂 Portfolio Proyek Lengkap</h2>
            <p>Unduh portfolio proyek dan inovasi lengkap dalam format PDF</p>
            <a href="/documents/Project_Portfolio.pdf" className="btn btn-primary" download>
              📥 Unduh Portfolio Proyek
            </a>
          </div>
        </div>
      </section>

      {hasProjects && (
        <section className="section projects-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{innovationProjects.length}</div>
                <div className="stat-label">Proyek Inovasi AI</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{healthProjects.length}</div>
                <div className="stat-label">Proyek Kesehatan</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section projects-list">
        <div className="container">
          <h2>🌐 Website & Aplikasi Layanan Pasien</h2>
          <p className="section-description">
            Inisiatif digital untuk mendampingi pasien dan keluarga melalui edukasi,
            orientasi layanan, serta pemantauan perjalanan terapi onkologi radiasi.
          </p>
          <div className="grid grid-2">
            {healthProjects.map((project, index) => (
              <Card
                key={`health-${index}`}
                title={project.title}
                subtitle={project.period}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                link={project.link}
                linkText={project.link ? "Lihat Detail" : "Implementasi"}
              />
            ))}
          </div>
          {healthProjects.length === 0 && (
            <p className="note">
              Belum ada proyek kesehatan yang ditampilkan.
            </p>
          )}

          <h2>💡 Inovasi & Teknologi AI</h2>
          <p className="section-description">
            Pengembangan teknologi inovatif berbasis Artificial Intelligence untuk meningkatkan 
            kualitas dan efisiensi pelayanan radioterapi.
          </p>
          <div className="grid grid-2">
            {innovationProjects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                subtitle={project.period}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                link={project.link}
                linkText={project.link ? "Lihat Detail" : "Konsep Riset"}
              />
            ))}
          </div>
          {innovationProjects.length === 0 && (
            <p className="note">
              Inovasi dan proyek teknologi dalam tahap perencanaan.
            </p>
          )}
        </div>
      </section>

      <section className="section innovation-section">
        <div className="container">
          <h2>🔬 Fokus Riset AI dalam Radioterapi</h2>
          <div className="research-focus-grid">
            <div className="focus-card">
              <div className="focus-icon">🎯</div>
              <h3>Auto-contouring</h3>
              <p>Pengembangan AI untuk auto-segmentasi target tumor dan organ berisiko tinggi.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">📊</div>
              <h3>Adaptive Radiotherapy</h3>
              <p>Sistem deteksi perubahan anatomi dan pemicu replanning adaptif berbasis AI.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">🔮</div>
              <h3>Outcome Prediction</h3>
              <p>Model prediksi toksisitas dan outcome pasien pasca radioterapi.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">⚙️</div>
              <h3>Treatment Planning</h3>
              <p>AI-assisted treatment planning untuk optimasi rencana radioterapi.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">🔍</div>
              <h3>Quality Assurance</h3>
              <p>Sistem audit otomatis untuk konsistensi dokumen dan mencegah error.</p>
            </div>
            
            <div className="focus-card">
              <div className="focus-icon">📅</div>
              <h3>Scheduling Optimization</h3>
              <p>Algoritma prioritisasi jadwal radioterapi berbasis risiko progression.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section volunteer-section">
        <div className="container">
          <h2>🤝 Volunteer & Pengabdian Masyarakat</h2>
          <p className="section-description">
            Kegiatan pengabdian masyarakat dan edukasi kesehatan yang telah dan akan dilakukan.
          </p>
          <div className="volunteer-list">
            <div className="volunteer-card">
              <div className="volunteer-header">
                <h3>Edukasi Kesehatan Masyarakat</h3>
                <span className="badge badge-primary">Ongoing</span>
              </div>
              <p className="volunteer-role"><strong>Peran:</strong> Penyedia edukasi kesehatan</p>
              <p className="volunteer-description">
                Memberikan edukasi tentang pencegahan kanker, deteksi dini, dan pentingnya 
                pemeriksaan rutin melalui berbagai platform media sosial dan komunitas.
              </p>
            </div>
            
            <div className="volunteer-card">
              <div className="volunteer-header">
                <h3>Pembelajaran Online & Konten Edukatif</h3>
                <span className="badge badge-primary">Ongoing</span>
              </div>
              <p className="volunteer-role"><strong>Peran:</strong> Content Creator</p>
              <p className="volunteer-description">
                Membuat konten edukasi tentang kesehatan, onkologi radiasi, dan inovasi 
                teknologi kesehatan melalui YouTube dan platform digital lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-download">
        <div className="container">
          <div className="download-box">
            <h2>📂 Portfolio Lengkap</h2>
            <p>Download portfolio proyek dan inovasi lengkap dalam format PDF:</p>
            <a href="/documents/Project_Portfolio.pdf" className="btn btn-primary" download>
              📥 Unduh Portfolio Proyek
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
