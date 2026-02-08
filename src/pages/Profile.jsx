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
            <div className="profile-summary">
              <h2>Tentang Saya</h2>
              <p>
                Saya adalah dr. Muhammad Sobri Maulana, seorang dokter umum yang memiliki dedikasi tinggi 
                untuk mengembangkan layanan kesehatan di Indonesia, khususnya dalam bidang Onkologi Radiasi.
              </p>
              <p>
                Ketertarikan saya pada onkologi radiasi dimulai dari [PENGALAMAN SPESIFIK, misal: pengalaman 
                menangani pasien kanker, rotasi di bagian onkologi, atau kehilangan kerabat karena kanker]. 
                Saya menyadari bahwa Indonesia masih menghadapi kesenjangan besar dalam akses terapi radiasi—hanya 
                [DATA/FAKTA bila ada, misal: beberapa provinsi yang memiliki fasilitas radioterapi]. Hal ini 
                mendorong saya untuk melanjutkan pendidikan spesialis guna berkontribusi nyata dalam meningkatkan 
                kualitas dan ketersediaan layanan onkologi di Indonesia, terutama di daerah yang masih terbatas aksesnya.
              </p>
              <p>
                Saya juga aktif dalam [KEGIATAN TAMBAHAN, misal: kegiatan ilmiah, pelatihan, organisasi profesi, 
                pengabdian masyarakat], yang terus mempertajam kemampuan klinis dan kepemimpinan saya.
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
              <p className="cert-date">[TAHUN SERTIFIKASI]</p>
              <p>Sertifikasi penanganan kegawatdaruratan kardiovaskular tingkat lanjut</p>
            </div>

            <div className="cert-card">
              <h3>ATLS (Advanced Trauma Life Support)</h3>
              <p className="cert-date">[TAHUN SERTIFIKASI]</p>
              <p>Sertifikasi penanganan trauma tingkat lanjut</p>
            </div>

            <div className="cert-card">
              <h3>[NAMA PELATIHAN ONKOLOGI]</h3>
              <p className="cert-date">[TAHUN PELATIHAN]</p>
              <p>[DESKRIPSI PELATIHAN, misal: Workshop manajemen nyeri pada pasien kanker]</p>
            </div>

            <div className="cert-card">
              <h3>[SERTIFIKASI TAMBAHAN]</h3>
              <p className="cert-date">[TAHUN SERTIFIKASI]</p>
              <p>[DESKRIPSI SERTIFIKASI]</p>
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
                <h3>[NAMA PENGHARGAAN]</h3>
                <p className="achievement-date">[TAHUN] - [PEMBERI PENGHARGAAN]</p>
                <p>[DESKRIPSI PENGHARGAAN]</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">⭐</div>
              <div className="achievement-content">
                <h3>[PRESTASI AKADEMIK/PROFESIONAL]</h3>
                <p className="achievement-date">[TAHUN] - [INSTITUSI]</p>
                <p>[DESKRIPSI PRESTASI]</p>
              </div>
            </div>

            <p className="note">
              *Jika tidak ada penghargaan formal, Anda dapat menghapus section ini atau mengisi dengan 
              pencapaian profesional lain (misal: presenter terbaik di konferensi, koordinator program, dll.)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
