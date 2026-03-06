import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import SocialShare from '../components/SocialShare'
import './Home.css'

function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      <section className="hero">
        <ParticleBackground />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fadeInLeft">
              <div className="hero-badge animate-fadeInDown">
                <span>🎓</span>
                <p>Beasiswa LPDP 2025</p>
              </div>
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
                  <span>Lihat LPDP Package</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link to="/documents" className="btn btn-outline">
                  <span>Lihat Dokumen</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </Link>
              </div>
              <div className="hero-meta animate-fadeInUp">
                <SocialShare
                  title="Portofolio LPDP - Dr. Muhammad Sobri Maulana"
                  url={window.location.href}
                />
              </div>
            </div>
            <div className="hero-image animate-fadeInRight">
              <div className="profile-image-container animate-pulseShadow">
                <div className="profile-glow"></div>
                <div className="profile-placeholder">
                  <div className="profile-icon">👨‍⚕️</div>
                  <div className="image-note">Foto Profil</div>
                </div>
              </div>
              <div className="floating-card card-1 animate-fadeInUp">
                <div className="floating-icon">🎯</div>
                <div className="floating-text">Onkologi Radiasi</div>
              </div>
              <div className="floating-card card-2 animate-fadeInUp">
                <div className="floating-icon">🇮🇩</div>
                <div className="floating-text">Indonesia</div>
              </div>
              <div className="floating-card card-3 animate-fadeInUp">
                <div className="floating-icon">💡</div>
                <div className="floating-text">Inovasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-download scroll-reveal">
        <div className="container">
          <div className="download-banner">
            <div className="download-icon-wrapper">
              <div className="download-icon animate-pulseShadow">
                📥
              </div>
            </div>
            <h2>Unduh Dokumen LPDP</h2>
            <p>Akses langsung semua dokumen penting untuk aplikasi beasiswa LPDP</p>
            <div className="download-buttons">
              <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
                <span>📦</span>
                <span>Full Package</span>
              </a>
              <a href="/documents/Motivation_Letter.pdf" className="btn btn-secondary" download>
                <span>💡</span>
                <span>Motivation Letter</span>
              </a>
              <a href="/documents/Career_Plan.pdf" className="btn btn-secondary" download>
                <span>🎯</span>
                <span>Career Plan</span>
              </a>
              <a href="/documents/Contribution_Plan.pdf" className="btn btn-secondary" download>
                <span>🇮🇩</span>
                <span>Contribution Plan</span>
              </a>
              <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-secondary" download>
                <span>📄</span>
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-stats scroll-reveal">
        <div className="container">
          <div className="section-title">
            <h2 className="animate-fadeInUp">Statistik</h2>
          </div>
          <div className="stats-grid animate-stagger">
            <div className="stat-card animate-scaleIn">
              <div className="stat-icon-wrapper">
                <div className="stat-icon">🎓</div>
              </div>
              <div className="stat-number">S1</div>
              <div className="stat-label">Pendidikan Kedokteran</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-icon-wrapper">
                <div className="stat-icon">⚕️</div>
              </div>
              <div className="stat-number">SpOnkRad</div>
              <div className="stat-label">Program Spesialis yang Dituju</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-icon-wrapper">
                <div className="stat-icon">💰</div>
              </div>
              <div className="stat-number">LPDP</div>
              <div className="stat-label">Beasiswa yang Dilamar</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-icon-wrapper">
                <div className="stat-icon">📅</div>
              </div>
              <div className="stat-number">5-10</div>
              <div className="stat-label">Rencana Karir (Tahun)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlights scroll-reveal">
        <div className="container">
          <div className="section-title">
            <h2 className="animate-fadeInUp">Highlights</h2>
          </div>
          <div className="grid grid-3">
            <div className="highlight-card scroll-reveal">
              <div className="highlight-icon-wrapper">
                <div className="highlight-icon">💡</div>
              </div>
              <h3>Motivation Letter</h3>
              <p>
                Motivasi kuat untuk berkontribusi dalam peningkatan akses dan kualitas pelayanan
                onkologi radiasi di Indonesia, khususnya di wilayah yang masih terbatas fasilitasnya.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Motivation_Letter.pdf" className="btn btn-primary" download>
                  <span>📥</span>
                  <span>Unduh PDF</span>
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Baca Selengkapnya <span>→</span>
                </Link>
              </div>
            </div>

            <div className="highlight-card scroll-reveal">
              <div className="highlight-icon-wrapper">
                <div className="highlight-icon">🎯</div>
              </div>
              <h3>Career Plan</h3>
              <p>
                Rencana karir terstruktur untuk 5-10 tahun ke depan, mencakup pendidikan spesialis,
                praktik klinis, pengembangan kompetensi, hingga kontribusi akademik dan pelayanan masyarakat.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Career_Plan.pdf" className="btn btn-primary" download>
                  <span>📥</span>
                  <span>Unduh PDF</span>
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Lihat Timeline <span>→</span>
                </Link>
              </div>
            </div>

            <div className="highlight-card scroll-reveal">
              <div className="highlight-icon-wrapper">
                <div className="highlight-icon">📚</div>
              </div>
              <h3>Contribution Plan</h3>
              <p>
                Rencana kontribusi konkret untuk Indonesia pasca studi, meliputi pelayanan kesehatan,
                edukasi masyarakat, penelitian, dan pengembangan kapasitas SDM kesehatan.
              </p>
              <div className="highlight-actions">
                <a href="/documents/Contribution_Plan.pdf" className="btn btn-primary" download>
                  <span>📥</span>
                  <span>Unduh PDF</span>
                </a>
                <Link to="/lpdp-package" className="highlight-link">
                  Lihat Rencana <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section value-propositions scroll-reveal">
        <div className="container">
          <div className="section-title">
            <h2 className="animate-fadeInUp">Mengapa Onkologi Radiasi?</h2>
          </div>
          <div className="value-grid">
            <div className="value-item scroll-reveal">
              <div className="value-icon-wrapper">
                <div className="value-icon">🇮🇩</div>
              </div>
              <div className="value-number">01</div>
              <h3>Kebutuhan Nasional</h3>
              <p>
                Indonesia menghadapi peningkatan kasus kanker yang signifikan, namun jumlah spesialis
                onkologi radiasi masih sangat terbatas. Hal ini menciptakan kesenjangan akses pelayanan
                yang perlu segera ditangani.
              </p>
            </div>

            <div className="value-item scroll-reveal">
              <div className="value-icon-wrapper">
                <div className="value-icon">⚕️</div>
              </div>
              <div className="value-number">02</div>
              <h3>Komitmen Pelayanan</h3>
              <p>
                Dengan latar belakang sebagai dokter umum, saya memiliki pemahaman mendalam tentang kebutuhan
                pasien dan sistem kesehatan Indonesia. Pendidikan spesialis ini akan memperkuat kapasitas untuk
                memberikan pelayanan terbaik.
              </p>
            </div>

            <div className="value-item scroll-reveal">
              <div className="value-icon-wrapper">
                <div className="value-icon">🚀</div>
              </div>
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

      <section className="section cta-section scroll-reveal">
        <div className="container">
          <div className="cta-box">
            <div className="cta-decoration">
              <div className="cta-circle circle-1"></div>
              <div className="cta-circle circle-2"></div>
              <div className="cta-circle circle-3"></div>
            </div>
            <h2 className="animate-fadeInUp">Jelajahi Portofolio LPDP</h2>
            <p>
              Pelajari lebih lanjut tentang latar belakang pendidikan, pengalaman, rencana karir,
              dan dokumentasi lengkap yang mendukung aplikasi beasiswa LPDP untuk program spesialis
              Onkologi Radiasi.
            </p>
            <div className="cta-buttons animate-stagger">
              <Link to="/profile" className="btn btn-primary">
                <span>Lihat Profil Lengkap</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Hubungi Saya</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2H5z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
