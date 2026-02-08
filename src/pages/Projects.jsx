import Card from '../components/Card'
import projectsData from '../data/projects.json'
import './Projects.css'

function Projects() {
  const healthProjects = projectsData.filter(project => project.category === 'health')
  const innovationProjects = projectsData.filter(project => project.category === 'innovation')

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
            {healthProjects.map((project, index) => (
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
          {healthProjects.length === 0 && (
            <p className="note">
              Belum ditemukan proyek kesehatan yang dapat diverifikasi dari sumber publik.
            </p>
          )}
        </div>
      </section>

      <section className="section innovation-section">
        <div className="container">
          <h2>💡 Inovasi & Teknologi</h2>
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
              />
            ))}
          </div>
          {innovationProjects.length === 0 && (
            <p className="note">
              Belum ditemukan inovasi atau proyek teknologi yang dapat diverifikasi dari sumber publik.
            </p>
          )}
        </div>
      </section>

      <section className="section volunteer-section">
        <div className="container">
          <h2>🤝 Volunteer & Pengabdian Masyarakat</h2>
          <div className="volunteer-list">
            <div className="volunteer-card">
              <div className="volunteer-header">
                <h3>Belum ditemukan kegiatan volunteer</h3>
                <span className="badge">—</span>
              </div>
              <p className="volunteer-role"><strong>Peran:</strong> Informasi belum tersedia</p>
              <p className="volunteer-description">
                Belum ada data publik terverifikasi mengenai kegiatan pengabdian masyarakat yang diikuti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-download">
        <div className="container">
          <div className="download-box">
            <h2>📂 Portfolio Lengkap</h2>
            <p>Dokumen portfolio proyek belum tersedia secara publik.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
