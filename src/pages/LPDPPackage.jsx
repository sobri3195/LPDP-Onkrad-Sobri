import Timeline from '../components/Timeline'
import './LPDPPackage.css'

function LPDPPackage() {
  const careerPlanData = []

  return (
    <div className="lpdp-page">
      <section className="section lpdp-intro">
        <div className="container">
          <div className="section-title">
            <h1>LPDP Package</h1>
            <p>Dokumen aplikasi beasiswa LPDP (belum tersedia secara publik)</p>
          </div>
        </div>
      </section>

      <section className="section motivation-section">
        <div className="container">
          <div className="content-box">
            <h2>💡 Motivation Letter</h2>
            <div className="motivation-content">
              <p className="lead">
                Dokumen motivation letter belum ditemukan pada sumber publik yang dapat diverifikasi.
              </p>
              <p>
                Bagian ini akan diperbarui ketika terdapat dokumen resmi atau ringkasan yang dapat 
                dipublikasikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-plan-section">
        <div className="container">
          <div className="content-box">
            <h2>🎯 Career Plan (5-10 Tahun)</h2>
            <p className="section-description">
              Rencana karier belum tersedia secara publik. Timeline akan ditambahkan berdasarkan dokumen 
              resmi yang dapat diverifikasi.
            </p>
            {careerPlanData.length > 0 ? (
              <Timeline items={careerPlanData} />
            ) : (
              <p>Belum ada data rencana karier yang dapat ditampilkan.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="container">
          <div className="content-box">
            <h2>🇮🇩 Contribution Plan</h2>
            <p className="section-description">
              Rencana kontribusi belum tersedia secara publik. Informasi akan ditambahkan jika terdapat 
              dokumen resmi.
            </p>

            <div className="contribution-grid">
              <div className="contribution-card">
                <div className="contribution-icon">🏥</div>
                <h3>Kontribusi Klinis</h3>
                <p>Belum tersedia informasi terverifikasi mengenai rencana kontribusi klinis.</p>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">🔬</div>
                <h3>Kontribusi Akademis & Riset</h3>
                <p>Belum tersedia informasi terverifikasi mengenai rencana riset atau akademik.</p>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">👨‍🏫</div>
                <h3>Kontribusi Edukasi</h3>
                <p>Belum tersedia informasi terverifikasi mengenai rencana edukasi atau capacity building.</p>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">📋</div>
                <h3>Kontribusi Kebijakan</h3>
                <p>Belum tersedia informasi terverifikasi mengenai rencana advokasi atau kebijakan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section study-plan-section">
        <div className="container">
          <div className="content-box">
            <h2>📚 Study Plan</h2>
            <div className="study-plan-content">
              <div className="study-item">
                <h3>Universitas Tujuan</h3>
                <p>Belum tersedia data universitas tujuan yang terverifikasi.</p>
              </div>

              <div className="study-item">
                <h3>Program Studi</h3>
                <p>Belum tersedia data program studi yang terverifikasi.</p>
              </div>

              <div className="study-item">
                <h3>Durasi</h3>
                <p>Belum tersedia data durasi studi yang terverifikasi.</p>
              </div>

              <div className="study-item">
                <h3>Fokus Pembelajaran</h3>
                <p>Belum tersedia data fokus pembelajaran yang terverifikasi.</p>
              </div>

              <div className="study-item">
                <h3>Rencana Riset</h3>
                <p>Belum tersedia data rencana riset yang terverifikasi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-all-section">
        <div className="container">
          <div className="download-box">
            <h2>📦 Download Full Package</h2>
            <p>Dokumen LPDP publik belum tersedia.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LPDPPackage
