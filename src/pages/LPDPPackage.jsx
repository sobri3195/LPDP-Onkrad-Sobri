import Timeline from '../components/Timeline'
import './LPDPPackage.css'

function LPDPPackage() {
  const careerPlanData = [
    {
      year: 'Tahun 1-4',
      title: 'Pendidikan Spesialis Onkologi Radiasi',
      subtitle: 'PPDS di Fakultas Kedokteran Universitas Indonesia',
      description: 'Fokus pada pembelajaran klinis dan riset di bidang onkologi radiasi',
      highlights: [
        'Menyelesaikan program PPDS Onkologi Radiasi',
        'Pembelajaran klinis: radioterapi eksternal, brachytherapy, treatment planning',
        'Riset dengan topik: Efektivitas Radioterapi pada Kanker Serviks di Indonesia',
        'Target publikasi minimal 2 artikel jurnal nasional/internasional'
      ]
    },
    {
      year: 'Tahun 5-7',
      title: 'Praktik Klinis & Pengembangan Kompetensi',
      subtitle: 'Spesialis Onkologi Radiasi',
      description: 'Memberikan pelayanan berkualitas dan pengembangan keahlian lanjutan',
      highlights: [
        'Bergabung dengan Rumah Sakit Kanker Dharmais atau RS rujukan onkologi',
        'Memberikan pelayanan radioterapi standar internasional',
        'Fellowship atau pelatihan lanjutan (IMRT, stereotactic radiosurgery)',
        'Kolaborasi riset dengan institusi dalam dan luar negeri'
      ]
    },
    {
      year: 'Tahun 8-10',
      title: 'Kontribusi Sistemik & Kepemimpinan',
      subtitle: 'Leader dalam Onkologi Radiasi Indonesia',
      description: 'Peran strategis dalam pengembangan SDM dan sistem kesehatan',
      highlights: [
        'Narasumber/trainer untuk tenaga medis di bidang onkologi radiasi',
        'Pengembangan pusat pelatihan atau klinik satelit di daerah',
        'Advokasi kebijakan kesehatan (JKN coverage, pengadaan alat)',
        'Pembimbingan dokter muda dan residen'
      ]
    }
  ]

  return (
    <div className="lpdp-page">
      <section className="section lpdp-intro">
        <div className="container">
          <div className="section-title">
            <h1>LPDP Package</h1>
            <p>Dokumen lengkap aplikasi beasiswa LPDP untuk Program Spesialis Onkologi Radiasi</p>
          </div>
        </div>
      </section>

      <section className="section motivation-section">
        <div className="container">
          <div className="content-box">
            <h2>💡 Motivation Letter</h2>
            <div className="motivation-content">
              <p className="lead">
                Motivasi saya melanjutkan pendidikan Spesialis Onkologi Radiasi didasari oleh tiga pilar utama:
              </p>

              <div className="motivation-points">
                <div className="motivation-point">
                  <h3>1. Kesadaran Urgensi Nasional</h3>
                  <p>
                    Indonesia memiliki beban kanker yang terus meningkat dengan 400.000+ kasus baru per tahun, 
                    namun jumlah spesialis onkologi radiasi masih sangat terbatas (kurang dari 100 spesialis untuk 
                    populasi 270+ juta). Fasilitas radioterapi hanya tersedia di sekitar 15 provinsi, menciptakan 
                    kesenjangan akses yang luar biasa, terutama bagi masyarakat di luar Jawa. Saya ingin menjadi 
                    bagian dari solusi untuk mengatasi kesenjangan ini.
                  </p>
                </div>

                <div className="motivation-point">
                  <h3>2. Pengalaman Klinis</h3>
                  <p>
                    Pengalaman saya selama internship dan bekerja di Rumah Sakit Kanker Dharmais telah memberikan 
                    perspektif langsung tentang tantangan pasien kanker—baik dari sisi diagnosis terlambat, biaya 
                    pengobatan, maupun keterbatasan terapi. Saya menyaksikan bagaimana radioterapi dapat menyelamatkan 
                    nyawa dan meningkatkan kualitas hidup pasien. Saya ingin menguasai kompetensi radioterapi yang 
                    evidence-based dan berdaya saing internasional untuk memberikan pelayanan terbaik.
                  </p>
                </div>

                <div className="motivation-point">
                  <h3>3. Visi Jangka Panjang</h3>
                  <p>
                    Pasca-pendidikan, saya berkomitmen untuk tidak hanya berpraktik, tetapi juga mengembangkan riset 
                    lokal yang relevan dengan kondisi Indonesia, melakukan edukasi kepada tenaga kesehatan lain, serta 
                    berperan dalam advokasi kebijakan untuk meningkatkan infrastruktur onkologi. Beasiswa LPDP adalah 
                    kunci untuk mewujudkan misi tersebut demi kesehatan masyarakat Indonesia.
                  </p>
                </div>
              </div>

              <div className="document-download">
                <a href="/documents/Motivation_Letter.pdf" className="btn btn-primary" download>
                  📄 Unduh Motivation Letter Lengkap (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-plan-section">
        <div className="container">
          <div className="content-box">
            <h2>🎯 Career Plan (5-10 Tahun)</h2>
            <p className="section-description">
              Rencana karir terstruktur yang mencakup pendidikan, praktik klinis, riset, dan kontribusi sistemik 
              untuk pengembangan layanan onkologi radiasi di Indonesia.
            </p>
            <Timeline items={careerPlanData} />
            <div className="document-download">
              <a href="/documents/Career_Plan.pdf" className="btn btn-primary" download>
                📄 Unduh Career Plan Lengkap (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="container">
          <div className="content-box">
            <h2>🇮🇩 Contribution Plan</h2>
            <p className="section-description">
              Rencana kontribusi nyata untuk Indonesia pasca-pendidikan, mencakup pelayanan klinis, riset, edukasi, 
              dan advokasi kebijakan.
            </p>

            <div className="contribution-grid">
              <div className="contribution-card">
                <div className="contribution-icon">🏥</div>
                <h3>Kontribusi Klinis</h3>
                <ul>
                  <li>Pelayanan onkologi radiasi di rumah sakit rujukan, khususnya di wilayah akses terbatas</li>
                  <li>Penerapan protokol berbasis evidence-based medicine dan standar internasional</li>
                  <li>Layanan konsultasi dan second opinion untuk pasien kanker</li>
                  <li>Implementasi teknologi radioterapi modern (IMRT, VMAT, SRS/SBRT)</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">🔬</div>
                <h3>Kontribusi Akademis & Riset</h3>
                <ul>
                  <li>Riset relevan dengan kondisi Indonesia (kanker endemik, cost-effectiveness)</li>
                  <li>Publikasi di jurnal nasional dan internasional</li>
                  <li>Kolaborasi dengan universitas dan lembaga riset</li>
                  <li>Pengembangan AI dan teknologi inovatif dalam radioterapi</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">👨‍🏫</div>
                <h3>Kontribusi Edukasi & Capacity Building</h3>
                <ul>
                  <li>Workshop deteksi dini kanker untuk dokter umum di daerah</li>
                  <li>Dosen/pembimbing mahasiswa kedokteran dan residen</li>
                  <li>Edukasi publik tentang kanker dan radioterapi melalui media sosial</li>
                  <li>Pelatihan tenaga medis di pusat-pusat layanan onkologi baru</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">📋</div>
                <h3>Kontribusi Kebijakan & Advokasi</h3>
                <ul>
                  <li>Partisipasi aktif di Perhimpunan Onkologi Radiasi Indonesia (PORI)</li>
                  <li>Advokasi peningkatan fasilitas radioterapi dan coverage JKN</li>
                  <li>Program pemerataan layanan onkologi (telemedicine, mobile radiotherapy)</li>
                  <li>Pengembangan protokol nasional untuk berbagai jenis kanker</li>
                </ul>
              </div>
            </div>

            <div className="document-download">
              <a href="/documents/Contribution_Plan.pdf" className="btn btn-primary" download>
                📄 Unduh Contribution Plan Lengkap (PDF)
              </a>
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
                <p>Universitas Indonesia / Universitas Gadjah Mada, Indonesia</p>
              </div>

              <div className="study-item">
                <h3>Program Studi</h3>
                <p>Program Pendidikan Dokter Spesialis (PPDS) Onkologi Radiasi</p>
              </div>

              <div className="study-item">
                <h3>Durasi</h3>
                <p>4 Tahun (8 Semester)</p>
              </div>

              <div className="study-item">
                <h3>Fokus Pembelajaran</h3>
                <ul>
                  <li>Radioterapi eksternal (EBRT): 3D-CRT, IMRT, VMAT</li>
                  <li>Brachytherapy (high-dose rate dan low-dose rate)</li>
                  <li>Treatment planning dan dosimetri</li>
                  <li>Manajemen efek samping radioterapi</li>
                  <li>Radioterapi paliatif dan kuratif</li>
                  <li>Onkologi radiasi pediatrik dan geriatrik</li>
                </ul>
              </div>

              <div className="study-item">
                <h3>Rencana Riset</h3>
                <p>
                  "Efektivitas dan Cost-Effectiveness Radioterapi pada Kanker Serviks Stadium Lanjut di Indonesia: 
                  Studi Kohort Retrospektif" - dengan fokus pada konteks epidemiologi dan infrastruktur kesehatan Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-all-section">
        <div className="container">
          <div className="download-box">
            <h2>📦 Download Full Package</h2>
            <p>Unduh semua dokumen LPDP dalam satu file lengkap</p>
            <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-secondary" download>
              Unduh Full LPDP Package (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LPDPPackage
