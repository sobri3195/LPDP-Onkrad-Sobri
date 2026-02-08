import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fadeInLeft">
              <h1 className="animate-glowText">dr. Muhammad Sobri Maulana</h1>
              <h2 className="hero-subtitle">
                Portofolio LPDP (informasi publik terbatas)
              </h2>
              <p className="hero-description animate-fadeInUp">
                Halaman ini disusun berdasarkan informasi yang dapat diverifikasi dari sumber publik. Saat ini, 
                rincian pendidikan, pengalaman klinis, publikasi, serta dokumen pendukung resmi belum ditemukan 
                sehingga beberapa bagian masih menunggu pembaruan.
              </p>
              <p className="hero-description">
                Jika dokumen atau profil profesional resmi tersedia, konten akan diperbarui agar mencerminkan 
                rekam jejak akademik dan klinis yang terverifikasi.
              </p>
              <div className="hero-cta animate-stagger">
                <Link to="/lpdp-package" className="btn btn-primary">
                  Lihat LPDP Package
                </Link>
                <Link to="/documents" className="btn btn-outline">
                  Lihat Dokumen
                </Link>
              </div>
            </div>
            <div className="hero-image animate-fadeInRight">
              <div className="profile-image-container animate-pulseShadow">
                <img 
                  src="/profile.jpg" 
                  alt="dr. Muhammad Sobri Maulana" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-stats">
        <div className="container">
          <div className="stats-grid animate-stagger">
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">—</div>
              <div className="stat-label">Pengalaman Klinis (Belum tersedia)</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">—</div>
              <div className="stat-label">Publikasi Ilmiah (Belum tersedia)</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">—</div>
              <div className="stat-label">Sertifikasi (Belum tersedia)</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">—</div>
              <div className="stat-label">Proyek/Inovasi (Belum tersedia)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <div className="container">
          <div className="section-title">
            <h2>Highlights</h2>
          </div>
          <div className="grid grid-3">
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Motivation Letter</h3>
              <p>
                Dokumen motivation letter publik belum ditemukan. Bagian ini akan diperbarui setelah 
                tersedia sumber resmi yang dapat diverifikasi.
              </p>
              <Link to="/lpdp-package" className="highlight-link">
                Baca Selengkapnya →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Career Plan</h3>
              <p>
                Rencana karir dan target akademik belum tersedia dalam sumber publik. Timeline akan 
                ditambahkan berdasarkan dokumen resmi.
              </p>
              <Link to="/lpdp-package" className="highlight-link">
                Lihat Timeline →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📚</div>
              <h3>Publikasi & Riset</h3>
              <p>
                Belum ditemukan publikasi ilmiah terverifikasi yang mencantumkan dr. Muhammad Sobri Maulana 
                sebagai penulis. Bagian ini akan diperbarui saat data tersedia.
              </p>
              <Link to="/publications" className="highlight-link">
                Lihat Publikasi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section value-propositions">
        <div className="container">
          <div className="section-title">
            <h2>Ringkasan Ketersediaan Data</h2>
          </div>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Profil Akademik</h3>
              <p>
                Data pendidikan formal dan capaian akademik belum ditemukan pada sumber publik yang dapat 
                diverifikasi.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Pengalaman Klinis</h3>
              <p>
                Informasi pengalaman klinis atau tempat kerja belum tersedia secara publik. Bagian ini akan 
                diperbarui ketika data resmi tersedia.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Dokumen Pendukung</h3>
              <p>
                Dokumen LPDP, CV, serta rencana karir belum ditemukan di sumber publik. Silakan rujuk dokumen 
                resmi untuk melengkapi portofolio ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Siap Menjelajahi Lebih Lanjut?</h2>
            <p>
              Lihat halaman profil, publikasi, dan dokumen untuk memahami bagian yang sudah terisi serta 
              area yang masih membutuhkan data terverifikasi.
            </p>
            <div className="cta-buttons">
              <Link to="/profile" className="btn btn-primary">
                Lihat Profil Lengkap
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
