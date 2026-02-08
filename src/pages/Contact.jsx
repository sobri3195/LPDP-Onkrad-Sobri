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
                  <a href="mailto:muhammadsobrimaulana31@gmail.com">muhammadsobrimaulana31@gmail.com</a>
                  <p className="contact-note">Email utama untuk korespondensi profesional</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/sobri3195" target="_blank" rel="noopener noreferrer">
                    github.com/sobri3195
                  </a>
                  <p className="contact-note">Repositori proyek dan kode sumber</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💰</div>
                <div className="contact-details">
                  <h3>Donasi & Dukungan</h3>
                  <div className="donation-links">
                    <a href="https://lynk.id/muhsobrimaulana" target="_blank" rel="noopener noreferrer">Lynk.id</a> | 
                    <a href="https://trakteer.id/g9mkave5gauns962u07t" target="_blank" rel="noopener noreferrer"> Trakteer</a> | 
                    <a href="https://nyawer.co/MuhammadSobriMaulana" target="_blank" rel="noopener noreferrer"> Nyawer</a>
                  </div>
                  <p className="contact-note">Dukung saya dalam mengembangkan proyek bermanfaat</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Media Sosial</h3>
                  <div className="social-grid">
                    <a href="https://www.youtube.com/@muhammadsobrimaulana6013" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://t.me/winlin_exploit" target="_blank" rel="noopener noreferrer">Telegram</a>
                    <a href="https://www.tiktok.com/@dr.sobri" target="_blank" rel="noopener noreferrer">TikTok</a>
                  </div>
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
