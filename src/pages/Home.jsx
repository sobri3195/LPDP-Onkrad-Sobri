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
                Calon Peserta Program Pendidikan Dokter Spesialis Onkologi Radiasi
              </h2>
              <p className="hero-description animate-fadeInUp">
                Dokter umum dengan dedikasi tinggi dalam bidang kesehatan dan komitmen untuk berkontribusi 
                dalam pelayanan onkologi radiasi di Indonesia. Portofolio ini disusun sebagai bagian dari 
                persyaratan beasiswa LPDP untuk melanjutkan pendidikan spesialis Onkologi Radiasi.
              </p>
              <p className="hero-description">
                Website ini menyajikan visi, rencana karir, kontribusi yang direncanakan, serta dokumentasi 
                pendukung yang relevan dengan aplikasi beasiswa LPDP dan program pendidikan spesialis.
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

      <section className="section quick-download">
        <div className="container">
          <div className="download-banner">
            <h2>📥 Unduh Dokumen LPDP</h2>
            <p>Akses langsung semua dokumen penting untuk aplikasi beasiswa LPDP</p>
            <div className="download-buttons">
              <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
                📦 Full Package
              </a>
              <a href="/documents/Motivation_Letter.pdf" className="btn btn-secondary" download>
                💡 Motivation Letter
              </a>
              <a href="/documents/Career_Plan.pdf" className="btn btn-secondary" download>
                🎯 Career Plan
              </a>
              <a href="/documents/Contribution_Plan.pdf" className="btn btn-secondary" download>
                🇮🇩 Contribution Plan
              </a>
              <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-secondary" download>
                📄 Curriculum Vitae
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-stats">
        <div className="container">
          <div className="stats-grid animate-stagger">
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">S1</div>
              <div className="stat-label">Pendidikan Kedokteran</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">SpOnkRad</div>
              <div className="stat-label">Program Spesialis yang Dituju</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">LPDP</div>
              <div className="stat-label">Beasiswa yang Dilamar</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">5-10</div>
              <div className="stat-label">Rencana Karir (Tahun)</div>
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
                Motivasi kuat untuk berkontribusi dalam peningkatan akses dan kualitas pelayanan 
                onkologi radiasi di Indonesia, khususnya di wilayah yang masih terbatas fasilitasnya.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Motivation_Letter.pdf" className="btn btn-primary" download>
                  📥 Unduh PDF
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Career Plan</h3>
              <p>
                Rencana karir terstruktur untuk 5-10 tahun ke depan, mencakup pendidikan spesialis, 
                praktik klinis, pengembangan kompetensi, hingga kontribusi akademik dan pelayanan masyarakat.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Career_Plan.pdf" className="btn btn-primary" download>
                  📥 Unduh PDF
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Lihat Timeline →
                </Link>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📚</div>
              <h3>Contribution Plan</h3>
              <p>
                Rencana kontribusi konkret untuk Indonesia pasca studi, meliputi pelayanan kesehatan, 
                edukasi masyarakat, penelitian, dan pengembangan kapasitas SDM kesehatan.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Contribution_Plan.pdf" className="btn btn-primary" download>
                  📥 Unduh PDF
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Lihat Rencana →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section value-propositions">
        <div className="container">
          <div className="section-title">
            <h2>Mengapa Onkologi Radiasi?</h2>
          </div>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Kebutuhan Nasional</h3>
              <p>
                Indonesia menghadapi peningkatan kasus kanker yang signifikan, namun jumlah spesialis 
                onkologi radiasi masih sangat terbatas. Hal ini menciptakan kesenjangan akses pelayanan 
                yang perlu segera ditangani.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Komitmen Pelayanan</h3>
              <p>
                Dengan latar belakang sebagai dokter umum, saya memiliki pemahaman mendalam tentang kebutuhan 
                pasien dan sistem kesehatan Indonesia. Pendidikan spesialis ini akan memperkuat kapasitas untuk 
                memberikan pelayanan terbaik.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Visi Jangka Panjang</h3>
              <p>
                Tidak hanya fokus pada praktik klinis, tetapi juga berkomitmen untuk mengembangkan 
                penelitian, edukasi masyarakat, dan pembangunan kapasitas SDM kesehatan dalam bidang 
                onkologi radiasi di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Jelajahi Portofolio LPDP</h2>
            <p>
              Pelajari lebih lanjut tentang latar belakang pendidikan, pengalaman, rencana karir, 
              dan dokumentasi lengkap yang mendukung aplikasi beasiswa LPDP untuk program spesialis 
              Onkologi Radiasi.
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
