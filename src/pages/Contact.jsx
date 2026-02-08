import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section contact-intro">
        <div className="container">
          <div className="section-title">
            <h1>Hubungi Saya</h1>
            <p>Informasi kontak profesional akan ditampilkan ketika tersedia secara publik</p>
          </div>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informasi Kontak</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email Profesional</h3>
                  <p>Belum ditemukan alamat email profesional yang dapat diverifikasi.</p>
                  <p className="contact-note">Silakan cantumkan email institusi atau email kerja resmi.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🏥</div>
                <div className="contact-details">
                  <h3>Afiliasi Institusi</h3>
                  <p>Belum tersedia informasi afiliasi institusi yang terverifikasi.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <p>Belum ditemukan tautan LinkedIn yang dapat diverifikasi.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🧪</div>
                <div className="contact-details">
                  <h3>ResearchGate</h3>
                  <p>Belum ditemukan profil ResearchGate yang dapat diverifikasi.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🆔</div>
                <div className="contact-details">
                  <h3>ORCID</h3>
                  <p>Belum ditemukan ORCID yang dapat diverifikasi.</p>
                </div>
              </div>

              <div className="availability-box">
                <h3>⏰ Ketersediaan</h3>
                <p>
                  Informasi ketersediaan untuk kolaborasi atau korespondensi akan ditambahkan setelah 
                  terdapat kontak profesional yang terverifikasi.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Kirim Pesan</h2>
              <p className="form-description">
                Formulir ini tetap tersedia untuk kebutuhan internal. Pastikan data kontak yang sah 
                ditambahkan agar komunikasi dapat berlangsung.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ingin Tahu Lebih Banyak?</h2>
            <p>
              Silakan lihat halaman dokumen untuk mengetahui bagian yang sudah tersedia dan informasi yang 
              masih perlu dilengkapi dengan sumber resmi.
            </p>
            <div className="cta-buttons">
              <a href="/lpdp-package" className="btn btn-primary">
                Lihat LPDP Package
              </a>
              <a href="/documents" className="btn btn-outline">
                Lihat Dokumen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
