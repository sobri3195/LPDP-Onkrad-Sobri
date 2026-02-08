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
                Saya adalah dr. Muhammad Sobri Maulana, seorang dokter umum yang memiliki dedikasi tinggi 
                untuk mengembangkan layanan kesehatan di Indonesia, khususnya dalam bidang Onkologi Radiasi.
              </p>
              <p>
                Ketertarikan saya pada onkologi radiasi dimulai dari pengalaman selama internship di Rumah Sakit Kanker Dharmais, 
                di mana saya menyaksikan langsung tantangan pasien kanker dalam mengakses terapi radiasi. Saya menyadari bahwa 
                Indonesia masih menghadapi kesenjangan besar dalam akses terapi radiasi—hanya sekitar 15 dari 38 provinsi yang 
                memiliki fasilitas radioterapi. Hal ini mendorong saya untuk melanjutkan pendidikan spesialis guna berkontribusi 
                nyata dalam meningkatkan kualitas dan ketersediaan layanan onkologi di Indonesia, terutama di daerah yang masih terbatas aksesnya.
              </p>
              <p>
                Saya juga aktif dalam kegiatan ilmiah, pelatihan klinis, dan penelitian di bidang onkologi radiasi. 
                Saya telah menerbitkan 16 publikasi ilmiah terkait radioterapi, kanker, dan inovasi AI dalam onkologi. 
                Aktivitas ini terus mempertajam kemampuan akademis dan kepemimpinan saya di bidang onkologi radiasi.
              </p>
              
              <div className="profile-cta">
                <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-primary" download>
                  📄 Unduh CV Lengkap
                </a>
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
              <h3>ACLS (Advanced Cardiovascular Life Support)</h3>
              <p className="cert-date">2023</p>
              <p>Sertifikasi penanganan kegawatdaruratan kardiovaskular tingkat lanjut</p>
            </div>

            <div className="cert-card">
              <h3>ATLS (Advanced Trauma Life Support)</h3>
              <p className="cert-date">2022</p>
              <p>Sertifikasi penanganan trauma tingkat lanjut</p>
            </div>

            <div className="cert-card">
              <h3>Workshop Manajemen Nyeri pada Pasien Kanker</h3>
              <p className="cert-date">2023</p>
              <p>Pelatihan manajemen nyeri dan palliative care untuk pasien onkologi</p>
            </div>

            <div className="cert-card">
              <h3>Basic Life Support (BLS)</h3>
              <p className="cert-date">2022</p>
              <p>Sertifikasi resusitasi jantung paru dasar</p>
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
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h3>Presenter Terbaik - Simposium Onkologi Nasional</h3>
                <p className="achievement-date">2024 - Perhimpunan Onkologi Radiasi Indonesia (PORI)</p>
                <p>Penghargaan untuk presentasi terbaik tentang inovasi AI dalam radioterapi</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <div className="achievement-content">
                <h3>16 Publikasi Ilmiah dalam Bidang Onkologi Radiasi</h3>
                <p className="achievement-date">2024 - Berbagai Jurnal Nasional dan Internasional</p>
                <p>Kontribusi dalam penelitian radioterapi, kanker, dan inovasi teknologi kesehatan</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">🎓</div>
              <div className="achievement-content">
                <h3>Beasiswa Bidikmisi</h3>
                <p className="achievement-date">2016 - 2022 - Kementerian Pendidikan dan Kebudayaan</p>
                <p>Beasiswa penuh untuk pendidikan kedokteran di Universitas Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
