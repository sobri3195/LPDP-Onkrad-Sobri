import Card from '../components/Card'
import projectsData from '../data/projects.json'
import './Projects.css'

function Projects() {
  return (
    <div className="projects-page">
      <section className="section projects-intro">
        <div className="container">
          <div className="section-title">
            <h1>Proyek & Inovasi</h1>
            <p>Kontribusi melalui proyek kesehatan, inovasi, dan pengabdian masyarakat</p>
          </div>
        </div>
      </section>

      <section className="section projects-list">
        <div className="container">
          <h2>🏥 Proyek Kesehatan</h2>
          <div className="grid grid-2">
            {projectsData.filter(p => p.category === 'health').map((project, index) => (
              <Card
                key={index}
                title={project.title}
                subtitle={project.period}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
              />
            ))}
          </div>
          {projectsData.filter(p => p.category === 'health').length === 0 && (
            <div className="placeholder-card">
              <h3>[NAMA PROYEK KESEHATAN]</h3>
              <p className="project-period">[TAHUN/PERIODE]</p>
              <p>
                [DESKRIPSI PROYEK: tujuan, aktivitas, target populasi, dan dampak yang dicapai. 
                Contoh: Program skrining kanker serviks di [LOKASI], edukasi kesehatan di sekolah, 
                penyuluhan deteksi dini kanker payudara, dll.]
              </p>
              <div className="project-tags">
                <span className="badge badge-primary">[Tag 1]</span>
                <span className="badge badge-primary">[Tag 2]</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section innovation-section">
        <div className="container">
          <h2>💡 Inovasi & Teknologi</h2>
          <div className="grid grid-2">
            {projectsData.filter(p => p.category === 'innovation').map((project, index) => (
              <Card
                key={index}
                title={project.title}
                subtitle={project.period}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                link={project.link}
              />
            ))}
          </div>
          {projectsData.filter(p => p.category === 'innovation').length === 0 && (
            <div className="placeholder-card">
              <h3>[NAMA INOVASI/TEKNOLOGI]</h3>
              <p className="project-period">[TAHUN]</p>
              <p>
                [DESKRIPSI INOVASI: masalah yang diselesaikan, teknologi/tools yang digunakan, 
                dan dampak atau hasil implementasi. Contoh: Sistem informasi pasien, aplikasi edukasi 
                kanker, protokol klinis baru, dll.]
              </p>
              <div className="project-tags">
                <span className="badge badge-primary">[Teknologi]</span>
                <span className="badge badge-primary">[Platform]</span>
              </div>
              <p className="note">
                *Jika tidak memiliki proyek inovasi/teknologi, Anda dapat menghapus section ini atau 
                menggantinya dengan kategori lain seperti "Pengabdian Masyarakat" atau "Kegiatan Organisasi"
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section volunteer-section">
        <div className="container">
          <h2>🤝 Volunteer & Pengabdian Masyarakat</h2>
          <div className="volunteer-list">
            <div className="volunteer-card">
              <div className="volunteer-header">
                <h3>[NAMA ORGANISASI/KEGIATAN]</h3>
                <span className="badge">[TAHUN/PERIODE]</span>
              </div>
              <p className="volunteer-role"><strong>Peran:</strong> [POSISI/PERAN ANDA]</p>
              <p className="volunteer-description">
                [DESKRIPSI KEGIATAN: aktivitas yang dilakukan, dampak, dan pencapaian. 
                Contoh: Volunteer dokter di bencana alam, medical check-up gratis, 
                kampanye kesehatan, pengabdian di daerah terpencil, dll.]
              </p>
            </div>

            <div className="volunteer-card">
              <div className="volunteer-header">
                <h3>[NAMA ORGANISASI/KEGIATAN]</h3>
                <span className="badge">[TAHUN/PERIODE]</span>
              </div>
              <p className="volunteer-role"><strong>Peran:</strong> [POSISI/PERAN ANDA]</p>
              <p className="volunteer-description">
                [DESKRIPSI KEGIATAN]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-download">
        <div className="container">
          <div className="download-box">
            <h2>📂 Portfolio Lengkap</h2>
            <p>Unduh dokumentasi lengkap proyek dan inovasi dalam format PDF</p>
            <a href="/documents/Project_Portfolio.pdf" className="btn btn-primary" download>
              Unduh Portfolio Lengkap (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
