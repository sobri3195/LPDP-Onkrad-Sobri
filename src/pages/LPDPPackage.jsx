import Timeline from '../components/Timeline'
import './LPDPPackage.css'

function LPDPPackage() {
  const careerPlanData = [
    {
      year: 'Tahun 1-2',
      title: 'Pendidikan Spesialis Onkologi Radiasi',
      subtitle: 'Fokus pada kompetensi inti',
      description: 'Mengikuti pendidikan dokter spesialis di universitas tujuan dengan fokus pada radiasi onkologi, mencakup modul radiasi biologi, fisika radiasi, dan rotations klinis di departemen onkologi radiasi.',
      highlights: [
        'Modul Radiasi Biologi dan Fisika Radiasi',
        'Rotasi Klinis di Departemen Onkologi Radiasi',
        'Pendampingan Pasien Kasus Umum'
      ]
    },
    {
      year: 'Tahun 3-4',
      title: 'Pendalaman Sub-spesialis',
      subtitle: 'Konsentrasi pada modalitas terapi',
      description: 'Pendalaman teknik-teknik radiasi modern seperti IMRT, VMAT, SBRT, SRS, dan brakiterapi. Fokus pada tumor solid umum (kanker paru, kepala-leher, prostat, payu dara).',
      highlights: [
        'Teknik IMRT, VMAT, SBRT, SRS',
        'Brakiterapi dan Radioterapi Pedriatik',
        'Rotasi di Pusat Kanker Utama'
      ]
    },
    {
      year: 'Tahun 5',
      title: 'Residensi senior & Riset',
      subtitle: 'Penyelidikan klinis',
      description: 'Melakukan penelitian klinis atau proyek riset untuk disertasi spesialis. Berlajar menangani kasus kompleks dengan pendekatan multidisiplin.',
      highlights: [
        'Proyek Riset Klinis',
        'Pendekatan Tim Multidisiplin',
        'Presentasi di Konferensi Nasional'
      ]
    },
    {
      year: 'Tahun 6-7',
      title: 'Lulus & Praktik Awal',
      subtitle: 'Dokter Spesialis Onkologi Radiasi',
      description: 'Lulus sebagai SpOnkRad dan memulai praktik di rumah sakit utama. Mulai membangun jaringan dengan tim onkologi medis dan bedah onkologi.',
      highlights: [
        'Praktik Klinis di RS Utama',
        'Tim Onkologi Multidisplin',
        'Konsultasi Pasien Rujukan'
      ]
    },
    {
      year: 'Tahun 8-10',
      title: 'Pengembangan Karir & Kontribusi',
      subtitle: 'Memulai dampak berskala',
      description: 'Berkontribusi melalui pelayanan klinis, riset, edukasi, dan pembangunan kapasitas SDM. Target membangun program radiasi onkologi yang berkualitas di Indonesia.',
      highlights: [
        'Program Riset Onkologi Radiasi',
        'Edukasi dan Pelatihan Dokter Muda',
        'Pembangunan Kapasitas SDM Kesehatan'
      ]
    }
  ]

  return (
    <div className="lpdp-page">
      <section className="section lpdp-intro">
        <div className="container">
          <div className="section-title">
            <h1>LPDP Package</h1>
            <p>Dokumen lengkap aplikasi beasiswa LPDP untuk program spesialis Onkologi Radiasi</p>
          </div>
        </div>
      </section>

      <section className="section motivation-section">
        <div className="container">
          <div className="content-box">
            <h2>💡 Motivation Letter</h2>
            <div className="motivation-content">
              <p className="lead">
                Motivasi utama saya untuk melanjutkan pendidikan spesialis Onkologi Radiasi adalah keinginan kuat 
                untuk meningkatkan akses dan kualitas pelayanan kanker di Indonesia, khususnya bagi pasien di wilayah 
                yang masih terbatas mendapatkan fasilitas radiasi onkologi.
              </p>
              <p>
                Sebagai dokter umum, saya telah menyaksikan langsung bagaimana keterbatasan fasilitas dan tenaga 
                spesialis onkologi radiasi mempengaruhi outcome pasien kanker di Indonesia. Dengan bekal pendidikan 
                spesialis ini, saya bertekad untuk berkontribusi dalam penurunan beban penyakit kanker nasional melalui 
                pelayanan klinis yang berkualitas, penelitian inovatif, dan pembangunan kapasitas tenaga kesehatan.
              </p>
              <div className="motivation-highlights">
                <h3>🎯 Fokus Kontribusi:</h3>
                <ul>
                  <li>Meningkatkan akses pelayanan radiasi onkologi berkualitas</li>
                  <li>Mengembangkan penelitian di bidang radioterapi precision</li>
                  <li>Membangun kapasitas SDM kesehatan di bidang onkologi radiasi</li>
                  <li>Memberikan edukasi masyarakat tentang deteksi dini kanker</li>
                </ul>
              </div>
            </div>
            <div className="content-actions">
              <a href="/documents/Motivation_Letter.pdf" className="btn btn-primary" download>
                📥 Unduh Motivation Letter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-plan-section">
        <div className="container">
          <div className="content-box">
            <h2>🎯 Career Plan (5-10 Tahun)</h2>
            <p className="section-description">
              Rencana karir terstruktur untuk 10 tahun ke depan, mencakup pendidikan spesialis, 
              praktik klinis, pengembangan kompetensi, hingga kontribusi akademik dan pelayanan masyarakat.
            </p>
            <Timeline items={careerPlanData} />
          </div>
          <div className="content-actions">
            <a href="/documents/Career_Plan.pdf" className="btn btn-primary" download>
              📥 Unduh Career Plan
            </a>
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="container">
          <div className="content-box">
            <h2>🇮🇩 Contribution Plan</h2>
            <p className="section-description">
              Rencana kontribusi konkret untuk Indonesia pasca studi, meliputi pelayanan kesehatan, 
              edukasi masyarakat, penelitian, dan pengembangan kapasitas SDM kesehatan.
            </p>

            <div className="contribution-grid">
              <div className="contribution-card">
                <div className="contribution-icon">🏥</div>
                <h3>Kontribusi Klinis</h3>
                <p>Memberikan pelayanan radiasi onkologi berkualitas di rumah sakit utama Indonesia, menangani pasien dari berbagai wilayah dengan pendekatan personalized medicine.</p>
                <ul>
                  <li>Praktik di RSUP atau RS Kanker utama</li>
                  <li>Mengembangkan program quality assurance radioterapi</li>
                  <li>Ikut dalam tumor board multidisplin</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">🔬</div>
                <h3>Kontribusi Akademis & Riset</h3>
                <p>Melakukan penelitian klinis dan translational di bidang onkologi radiasi untuk meningkatkan outcome pasien kanker Indonesia.</p>
                <ul>
                  <li>Riset epidemiologi kanker di Indonesia</li>
                  <li>Pengembangan protokol radioterapi lokal</li>
                  <li>Kolaborasi riset internasional</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">👨‍🏫</div>
                <h3>Kontribusi Edukasi</h3>
                <p>Membangun kapasitas SDM kesehatan melalui edukasi, pelatihan, dan mentoring bagi dokter umum dan residen.</p>
                <ul>
                  <li>Mengajar di fakultas kedokteran</li>
                  <li>Pelatihan radiasi onkologi untuk dokter</li>
                  <li>Edukasi masyarakat tentang kanker</li>
                </ul>
              </div>

              <div className="contribution-card">
                <div className="contribution-icon">📋</div>
                <h3>Kontribusi Kebijakan</h3>
                <p>Berpartisipasi dalam pengembangan kebijakan kesehatan terkait pencegahan dan penanganan kanker di Indonesia.</p>
                <ul>
                  <li>Konsultasi kebijakan kanker nasional</li>
                  <li>Pembentukan standar praktik onkologi radiasi</li>
                  <li>Advokasi akses layanan kanker</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content-actions">
            <a href="/documents/Contribution_Plan.pdf" className="btn btn-primary" download>
              📥 Unduh Contribution Plan
            </a>
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
                <p>Fakultas Kedokteran Universitas Indonesia (FKUI) atau universitas lain yang menyelenggarakan program spesialis Onkologi Radiasi terakreditasi.</p>
              </div>

              <div className="study-item">
                <h3>Program Studi</h3>
                <p>Program Pendidikan Dokter Spesialis Onkologi Radiasi (SpOnkRad) dengan durasi 5-6 tahun.</p>
              </div>

              <div className="study-item">
                <h3>Durasi</h3>
                <p>5-6 tahun (termasuk tahun preklinik dan klinis dengan rotasi lengkap).</p>
              </div>

              <div className="study-item">
                <h3>Fokus Pembelajaran</h3>
                <ul>
                  <li>Radiasi Biologi dan Fisika Radiasi</li>
                  <li>Teknik Radioterapi Modern (IMRT, VMAT, SBRT, SRS)</li>
                  <li>Brakiterapi dan Radioterapi Sistemik</li>
                  <li>Onkologi Klinis dan Tumor Board</li>
                  <li>Penelitian Klinis dan Biostatistik</li>
                </ul>
              </div>

              <div className="study-item">
                <h3>Rencana Riset</h3>
                <p>Riset tentang efektivitas radioterapi pada populasi Indonesia, pengembangan protokol treatment adaptif, atau studi outcome pasien kanker yang menjalani radioterapi di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section download-all-section">
        <div className="container">
          <div className="download-box">
            <h2>📦 Download Full Package</h2>
            <p>Unduh semua dokumen LPDP dalam satu file:</p>
            <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
              📥 Download Full Package
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LPDPPackage
