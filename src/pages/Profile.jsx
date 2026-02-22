import Timeline from '../components/Timeline'
import educationData from '../data/education.json'
import experienceData from '../data/experience.json'
import './Profile.css'

function Profile() {
  const profileData = {
    name: 'dr. Muhammad Sobri Maulana',
    title: 'Calon Peserta Program Spesialis Onkologi Radiasi',
    about: `Dokter umum dengan dedikasi tinggi dalam bidang kesehatan dan komitmen kuat untuk berkontribusi 
    dalam pelayanan onkologi radiasi di Indonesia. Memiliki minat khusus dalam pengembangan teknologi 
    radioterapi berbasis AI dan peningkatan akses pelayanan kanker bagi masyarakat Indonesia.`,
    objectives: [
      'Menjadi Dokter Spesialis Onkologi Radiasi yang kompeten dan berempati',
      'Mengembangkan penelitian di bidang radioterapi precision',
      'Meningkatkan akses pelayanan radiasi onkologi berkualitas di Indonesia',
      'Membangun kapasitas SDM kesehatan melalui edukasi dan pelatihan'
    ],
    skills: [
      'Pemeriksaan Klinis Umum',
      'Manajemen Pasien Onkologi',
      'Radioterapi Dasar',
      'Penelitian Klinis',
      'AI dalam Radiologi Medis',
      'Public Speaking & Edukasi'
    ]
  }

  const certifications = [
    {
      name: 'ACLS (Advanced Cardiac Life Support)',
      issuer: 'American Heart Association',
      date: '2024',
      status: 'Aktif',
      filename: 'ACLS_Certificate.pdf'
    },
    {
      name: 'ATLS (Advanced Trauma Life Support)',
      issuer: 'American College of Surgeons',
      date: '2024',
      status: 'Aktif',
      filename: 'ATLS_Certificate.pdf'
    },
    {
      name: 'Basic Life Support (BLS)',
      issuer: 'American Heart Association',
      date: '2024',
      status: 'Aktif'
    }
  ]

  const achievements = [
    {
      title: 'Partisipan various penelitian di bidang onkologi radiasi',
      description: 'Terlibat dalam berbagai penelitian terkait radioterapi, AI dalam healthcare, dan meta-analisis.',
      year: '2024-2026'
    },
    {
      title: 'Penulis berbagai publikasi ilmiah internasional',
      description: 'Mempublikasikan artikel di jurnal-jurnal bereputasi dengan fokus onkologi radiasi dan digital health.',
      year: '2025-2026'
    }
  ]

  return (
    <div className="profile-page">
      <section className="section profile-intro">
        <div className="container">
          <div className="section-title">
            <h1>Profil Saya</h1>
          </div>
          <div className="profile-content">
            <div className="profile-image-section">
              <div className="profile-image-wrapper">
                <img 
                  src="/profile.jpg" 
                  alt="dr. Muhammad Sobri Maulana" 
                  className="profile-photo"
                />
              </div>
            </div>
            <div className="profile-summary">
              <h2>Tentang Saya</h2>
              <p className="lead">{profileData.name}</p>
              <p className="profile-title">{profileData.title}</p>
              <p>{profileData.about}</p>
              
              <div className="profile-objectives">
                <h3>🎯 Tujuan Utama:</h3>
                <ul>
                  {profileData.objectives.map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="profile-skills">
                <h3>💪 Kompetensi:</h3>
                <div className="skills-list">
                  {profileData.skills.map((skill, idx) => (
                    <span key={idx} className="badge badge-primary">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="profile-cta">
                <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
                  📥 Download CV Lengkap
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-section-top">
        <div className="container">
          <div className="download-box-top">
            <h2>📄 Dokumen Profil</h2>
            <p>Unduh dokumen terkait profil lengkap</p>
            <div className="download-buttons">
              <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
                📥 Unduh CV
              </a>
              <a href="/documents/Publication_List.pdf" className="btn btn-secondary" download>
                📚 Daftar Publikasi
              </a>
              <a href="/documents/Project_Portfolio.pdf" className="btn btn-secondary" download>
                📂 Portfolio Proyek
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <div className="section-title">
            <h2>Pendidikan</h2>
          </div>
          <Timeline items={educationData} />
        </div>
      </section>

      <section className="section experience-section">
        <div className="container">
          <div className="section-title">
            <h2>Pengalaman Klinis</h2>
          </div>
          <Timeline items={experienceData} />
        </div>
      </section>

      <section className="section certifications-section">
        <div className="container">
          <div className="section-title">
            <h2>Sertifikasi & Pelatihan</h2>
          </div>
          <div className="grid grid-2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <div className="cert-footer">
                  <span className="badge badge-success">{cert.status}</span>
                  {cert.filename && (
                    <a href={`/documents/${cert.filename}`} className="btn btn-sm" download>
                      📥 Unduh
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <div className="section-title">
            <h2>Penghargaan & Prestasi</h2>
          </div>
          <div className="achievements-list">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-item">
                <div className="achievement-icon">🏅</div>
                <div className="achievement-content">
                  <h3>{achievement.title}</h3>
                  <p className="achievement-date">{achievement.year}</p>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
