import Timeline from '../components/Timeline'
import educationData from '../data/education.json'
import experienceData from '../data/experience.json'
import './Profile.css'

function Profile() {
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
              <p>
                Profil singkat dr. Muhammad Sobri Maulana pada saat ini masih terbatas karena sumber publik 
                yang dapat diverifikasi belum ditemukan. Informasi mengenai latar belakang pendidikan, 
                minat spesialisasi, serta tujuan karier akan diperbarui ketika tersedia rujukan resmi.
              </p>
              <p>
                Jika terdapat profil profesional di platform akademik (misalnya ORCID, ResearchGate, 
                Google Scholar) atau halaman institusi, tautan dan ringkasannya akan ditambahkan pada 
                bagian ini.
              </p>
              <p>
                Mohon gunakan dokumen resmi seperti CV, motivation letter, serta dokumen institusional 
                sebagai dasar pembaruan konten agar akurat dan terverifikasi.
              </p>
              
              <div className="profile-cta">
                <p className="note">CV publik belum tersedia.</p>
              </div>
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
            <div className="cert-card">
              <h3>Data sertifikasi belum tersedia</h3>
              <p className="cert-date">—</p>
              <p>Belum ditemukan sertifikasi atau pelatihan klinis yang dapat diverifikasi secara publik.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <div className="section-title">
            <h2>Penghargaan & Prestasi</h2>
          </div>
          <div className="achievements-list">
            <div className="achievement-item">
              <div className="achievement-icon">🏅</div>
              <div className="achievement-content">
                <h3>Belum ditemukan penghargaan publik</h3>
                <p className="achievement-date">—</p>
                <p>Bagian ini akan diperbarui jika terdapat sumber resmi yang mencantumkan penghargaan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
