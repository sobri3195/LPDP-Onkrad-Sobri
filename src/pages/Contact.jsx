import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section contact-intro">
        <div className="container">
          <div className="section-title">
            <h1>Hubungi Saya</h1>
            <p>Silakan hubungi saya untuk pertanyaan, kolaborasi, atau informasi lebih lanjut</p>
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
                  <h3>Email</h3>
                  <a href="mailto:sobrimaulana@example.com">sobrimaulana@example.com</a>
                  <p className="contact-note">Email utama untuk korespondensi profesional</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com/in/sobrimaulana" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/sobrimaulana
                  </a>
                  <p className="contact-note">Profil profesional dan networking</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🆔</div>
                <div className="contact-details">
                  <h3>ORCID</h3>
                  <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer">
                    0000-0000-0000-0000
                  </a>
                  <p className="contact-note">Identitas peneliti dan publikasi ilmiah</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Lokasi</h3>
                  <p>[KOTA], [PROVINSI], Indonesia</p>
                  <p className="contact-note">Bersedia untuk relokasi sesuai kebutuhan pendidikan/pekerjaan</p>
                </div>
              </div>

              <div className="availability-box">
                <h3>⏰ Ketersediaan</h3>
                <p>
                  Saya terbuka untuk diskusi, konsultasi, atau kolaborasi terkait onkologi radiasi, 
                  riset kesehatan, dan program LPDP. Respon email biasanya dalam 1-2 hari kerja.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Kirim Pesan</h2>
              <p className="form-description">
                Isi form di bawah ini untuk menghubungi saya. Pesan Anda akan langsung dikirim ke email saya.
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
              Jelajahi dokumen LPDP lengkap dan publikasi saya untuk memahami lebih dalam 
              tentang motivasi, rencana karir, dan kontribusi yang saya tawarkan.
            </p>
            <div className="cta-buttons">
              <a href="/lpdp-package" className="btn btn-primary">
                Lihat LPDP Package
              </a>
              <a href="/documents/CV_Muhammad_Sobri_Maulana.pdf" className="btn btn-outline" download>
                Unduh CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
