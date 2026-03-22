import Timeline from '../components/Timeline'
import { downloadPdfByFilename } from '../utils/pdfDownload'
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

  const handlePdfDownload = (event, filename) => {
    event.preventDefault()
    const handled = downloadPdfByFilename(filename)
    if (!handled) {
      window.location.href = `/documents/${filename}`
    }
  }

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

      <section className="section quick-download-section">
        <div className="container">
          <div className="download-all-box">
            <h2>📦 Unduh Semua Dokumen</h2>
            <p>Akses lengkap semua dokumen LPDP dalam satu file</p>
            <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary btn-lg" download onClick={(event) => handlePdfDownload(event, 'LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf')}>
              📥 Download Full Package
            </a>
          </div>
        </div>
      </section>

      <section className="section motivation-section">
        <div className="container">
          <div className="content-box">
            <div className="section-header-with-download">
              <h2>💡 Motivation Letter</h2>
              <a href="/documents/Motivation_Letter.pdf" className="btn btn-primary" download onClick={(event) => handlePdfDownload(event, 'Motivation_Letter.pdf')}>
                📥 Unduh PDF
              </a>
            </div>
            <div className="motivation-content">
              <div className="essay-structure">
                <h3>📝 Motivation Letter — Versi Personal-Emosional</h3>

                <div className="essay-item">
                  <h4>1) Pengalaman Hidup yang Membentuk Pilihan Saya</h4>
                  <p>
                    Bagi saya, kanker bukan sekadar istilah medis yang saya pelajari di ruang kuliah atau saya temui
                    di ruang pelayanan. Kanker adalah pengalaman hidup yang meninggalkan jejak emosional sangat dalam.
                    Saya kehilangan Papa saya, Saiful Deru Amaludin, karena kanker. Saya juga menyaksikan ibu mertua
                    saya berpulang akibat kanker serviks. Dua kehilangan ini membuat saya memahami bahwa di balik setiap
                    diagnosis kanker, selalu ada keluarga yang cemas, menunggu, berharap, lalu berusaha tetap kuat di
                    tengah ketidakpastian. Sejak itu, saya tidak lagi memandang kanker hanya sebagai penyakit yang harus
                    diterapi, tetapi sebagai ujian besar yang mengguncang martabat, ketenangan, dan masa depan sebuah
                    keluarga.
                  </p>
                </div>

                <div className="essay-item">
                  <h4>2) Alasan Memilih Onkologi Radiasi</h4>
                  <p>
                    Dari pengalaman tersebut, saya semakin yakin memilih Onkologi Radiasi sebagai jalan pengabdian saya.
                    Saya melihat radioterapi sebagai bidang yang menuntut ketelitian ilmiah, presisi teknologi, dan rasa
                    tanggung jawab yang sangat tinggi terhadap keselamatan pasien. Setiap keputusan mengenai dosis,
                    fraksinasi, target terapi, dan perlindungan jaringan sehat memiliki dampak langsung terhadap peluang
                    kesembuhan dan kualitas hidup pasien. Di sisi lain, Indonesia masih menghadapi beban kanker yang terus
                    meningkat, sementara distribusi fasilitas radioterapi dan tenaga spesialis belum merata. Kondisi ini
                    membuat banyak pasien datang terlambat, menunggu terlalu lama, atau menjalani terapi dengan beban
                    sosial dan ekonomi yang tidak ringan. Karena itu, bagi saya, memilih Onkologi Radiasi bukan hanya
                    keputusan akademik, melainkan keputusan moral untuk hadir di titik pelayanan yang sangat menentukan.
                  </p>
                </div>

                <div className="essay-item">
                  <h4>3) Keterhubungan Medis, Teknologi, dan Kemanusiaan</h4>
                  <p>
                    Ketertarikan saya pada bidang ini juga tumbuh dari keyakinan bahwa masa depan layanan kanker harus
                    dibangun melalui kolaborasi antara ilmu kedokteran, teknologi, keselamatan pasien, dan inovasi sistem.
                    Saya tertarik pada transformasi digital di layanan onkologi radiasi karena saya melihat banyak ruang
                    yang dapat diperbaiki: edukasi pasien yang lebih mudah dipahami, alur layanan yang lebih jelas,
                    pemantauan pasien yang lebih rapi, serta alat bantu klinis yang dapat meningkatkan konsistensi kerja.
                    Saya ingin berkontribusi pada sistem yang tidak hanya membantu klinisi mengambil keputusan dengan lebih
                    terstruktur, tetapi juga membantu pasien memahami terapi mereka dengan lebih tenang dan bermartabat.
                    Bagi saya, pelayanan kanker yang baik tidak cukup hanya akurat secara klinis; ia juga harus manusiawi,
                    komunikatif, dan mampu mengurangi kecemasan pasien sejak awal perjalanan terapi.
                  </p>
                </div>

                <div className="essay-item">
                  <h4>4) Bukti Komitmen Melalui Karya</h4>
                  <p>
                    Komitmen tersebut sudah mulai saya wujudkan melalui karya-karya awal yang saya bangun. OnkoSob saya
                    kembangkan sebagai platform frontend layanan onkologi radiasi yang berfungsi untuk edukasi pasien,
                    panduan layanan, monitoring pasien anonim, dan dashboard admin demo. Saya juga mengembangkan Clinical
                    Calculation Workspace, sebuah dashboard kalkulator klinis onkologi radiasi untuk simulasi,
                    eksplorasi perhitungan, validasi input, histori, preset, serta efisiensi workflow. Walaupun masih
                    berupa prototype, kedua karya ini menunjukkan cara saya bekerja: berangkat dari kebutuhan klinis,
                    menerjemahkannya menjadi solusi digital, lalu menjadikannya jembatan antara kebutuhan medis dan
                    teknologi. Bagi saya, karya-karya ini adalah pijakan awal menuju inovasi yang lebih besar untuk
                    meningkatkan mutu layanan kanker di Indonesia.
                  </p>
                </div>
              </div>

              <p className="lead">
                Saya memilih melanjutkan pendidikan Spesialis Onkologi Radiasi karena saya ingin mengubah pengalaman
                kehilangan, keprihatinan, dan pengamatan klinis saya menjadi kontribusi yang nyata bagi bangsa.
              </p>
              <p>
                Saya ingin kembali setelah studi bukan hanya sebagai dokter spesialis, tetapi sebagai bagian dari SDM
                nasional yang mampu memperkuat pelayanan kanker Indonesia melalui praktik klinis yang aman, inovasi
                digital yang relevan, penguatan kapasitas tenaga kesehatan, dan pengembangan sistem yang membuat pasien
                merasa lebih dipahami sepanjang proses terapinya.
              </p>
              <p>
                Dukungan LPDP akan menjadi fondasi penting bagi saya untuk memperdalam kompetensi klinis dan akademik,
                lalu mengembalikannya dalam bentuk dampak nyata: pelayanan onkologi radiasi yang lebih modern, lebih
                berkeadilan, lebih terjangkau, dan lebih manusiawi bagi masyarakat Indonesia.
              </p>
              <div className="motivation-highlights">
                <h3>🎯 Fokus Kontribusi:</h3>
                <ul>
                  <li>Meningkatkan akses pelayanan radiasi onkologi yang aman, presisi, dan berkualitas</li>
                  <li>Mengembangkan inovasi digital untuk edukasi pasien dan efisiensi workflow klinis</li>
                  <li>Membangun kapasitas SDM kesehatan di bidang onkologi radiasi</li>
                  <li>Mendorong sistem layanan kanker yang lebih modern, adil, dan berpihak pada pasien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section career-plan-section">
        <div className="container">
          <div className="content-box">
            <div className="section-header-with-download">
              <h2>🎯 Career Plan (5-10 Tahun)</h2>
              <a href="/documents/Career_Plan.pdf" className="btn btn-primary" download onClick={(event) => handlePdfDownload(event, 'Career_Plan.pdf')}>
                📥 Unduh PDF
              </a>
            </div>
            <p className="section-description">
              Rencana karir terstruktur untuk 10 tahun ke depan, mencakup pendidikan spesialis, 
              praktik klinis, pengembangan kompetensi, hingga kontribusi akademik dan pelayanan masyarakat.
            </p>
            <Timeline items={careerPlanData} />
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="container">
          <div className="content-box">
            <div className="section-header-with-download">
              <h2>🇮🇩 Contribution Plan</h2>
              <a href="/documents/Contribution_Plan.pdf" className="btn btn-primary" download onClick={(event) => handlePdfDownload(event, 'Contribution_Plan.pdf')}>
                📥 Unduh PDF
              </a>
            </div>
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
            <a href="/documents/LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download onClick={(event) => handlePdfDownload(event, 'LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf')}>
              📥 Download Full Package
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LPDPPackage
