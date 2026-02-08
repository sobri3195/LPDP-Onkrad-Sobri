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
                Dokter Berdedikasi untuk Menjadi Spesialis Onkologi Radiasi yang Membawa Dampak bagi Indonesia
              </h2>
              <p className="hero-description animate-fadeInUp">
                Saya dr. Muhammad Sobri Maulana, seorang dokter umum dengan dedikasi mendalam terhadap pelayanan kanker di Indonesia. 
                Dengan pengalaman dalam pelayanan medis, saya berkomitmen untuk 
                melanjutkan pendidikan Spesialis Onkologi Radiasi melalui beasiswa LPDP.
              </p>
              <p className="hero-description">
                Website ini merangkum perjalanan, motivasi, rencana karir, dan kontribusi saya untuk Indonesia pasca-pendidikan. 
                Kanker adalah masalah kesehatan global yang membutuhkan SDM berkualitas dan akses terapi yang merata. 
                Saya siap menjadi bagian dari solusi tersebut.
              </p>
              <div className="hero-cta animate-stagger">
                <Link to="/lpdp-package" className="btn btn-primary">
                  Lihat LPDP Package
                </Link>
                <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-outline" download>
                  Unduh CV
                </a>
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
              <div className="stat-number">2+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">16</div>
              <div className="stat-label">Publikasi Ilmiah</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">4</div>
              <div className="stat-label">Sertifikat Pelatihan</div>
            </div>
            <div className="stat-card animate-scaleIn">
              <div className="stat-number">10</div>
              <div className="stat-label">Proyek Kesehatan</div>
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
                Motivasi mendalam untuk menjadi Spesialis Onkologi Radiasi didasari kesadaran urgensi nasional, 
                pengalaman klinis, dan visi jangka panjang untuk berkontribusi bagi Indonesia.
              </p>
              <Link to="/lpdp-package" className="highlight-link">
                Baca Selengkapnya →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Career Plan</h3>
              <p>
                Rencana karir terstruktur untuk 5-10 tahun ke depan, mencakup pendidikan, praktik klinis, 
                riset, dan kontribusi sistemik untuk meningkatkan layanan onkologi di Indonesia.
              </p>
              <Link to="/lpdp-package" className="highlight-link">
                Lihat Timeline →
              </Link>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">📚</div>
              <h3>Publikasi & Riset</h3>
              <p>
                Pengalaman riset dan publikasi ilmiah di bidang kesehatan yang menunjukkan komitmen 
                terhadap evidence-based medicine dan pengembangan ilmu pengetahuan.
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
            <h2>Mengapa Saya Kandidat yang Tepat</h2>
          </div>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Komitmen Klinis & Akademis</h3>
              <p>
                Track record pelayanan medis yang kuat dengan pengalaman riset dan publikasi di bidang 
                onkologi/kesehatan yang menunjukkan dedikasi terhadap pembelajaran berkelanjutan.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Visi Pembangunan Nasional</h3>
              <p>
                Rencana karir dan kontribusi yang jelas untuk mengatasi kesenjangan akses terapi radiasi 
                di Indonesia, dengan fokus pada pemerataan layanan kesehatan.
              </p>
            </div>

            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Kesiapan Eksekusi</h3>
              <p>
                Persiapan matang dengan motivasi terukur, career plan realistis, dan contribution plan 
                yang berkelanjutan untuk memberikan dampak jangka panjang bagi Indonesia.
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
              Pelajari lebih detail tentang motivasi, rencana karir, publikasi, dan kontribusi saya 
              untuk Indonesia melalui halaman-halaman berikut.
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
