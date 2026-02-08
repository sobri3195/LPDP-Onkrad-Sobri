import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section contact-intro">
        <div className="container">
          <div className="section-title">
            <h1>Hubungi Saya</h1>
            <p>Informasi kontak profesional dan media sosial untuk kolaborasi dan korespondensi</p>
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
                  <p><a href="mailto:muhammadsobrimaulana31@gmail.com">muhammadsobrimaulana31@gmail.com</a></p>
                  <p className="contact-note">dr. Muhammad Sobri Maulana</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💻</div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/sobri3195" target="_blank" rel="noopener noreferrer">github.com/sobri3195</a></p>
                  <p className="contact-note">Repository dan proyek open source</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-details">
                  <h3>Website</h3>
                  <p><a href="https://muhammadsobrimaulana.netlify.app" target="_blank" rel="noopener noreferrer">muhammadsobrimaulana.netlify.app</a></p>
                  <p className="contact-note">Portfolio profesional utama</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">▶️</div>
                <div className="contact-details">
                  <h3>YouTube</h3>
                  <p><a href="https://www.youtube.com/@muhammadsobrimaulana6013" target="_blank" rel="noopener noreferrer">@muhammadsobrimaulana6013</a></p>
                  <p className="contact-note">Konten edukasi dan riset</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h3>Telegram</h3>
                  <p><a href="https://t.me/winlin_exploit" target="_blank" rel="noopener noreferrer">t.me/winlin_exploit</a></p>
                  <p className="contact-note">Channel Telegram</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🎵</div>
                <div className="contact-details">
                  <h3>TikTok</h3>
                  <p><a href="https://www.tiktok.com/@dr.sobri" target="_blank" rel="noopener noreferrer">@dr.sobri</a></p>
                  <p className="contact-note">Konten kesehatan edukatif</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h3>Grup WhatsApp</h3>
                  <p><a href="https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl" target="_blank" rel="noopener noreferrer">Join Grup WA</a></p>
                  <p className="contact-note">Komunitas diskusi dan kolaborasi</p>
                </div>
              </div>

              <div className="availability-box">
                <h3>⏰ Ketersediaan</h3>
                <p>
                  Tersedia untuk kolaborasi riset, diskusi akademik, dan konsultasi 
                  terkait radiasi onkologi serta inovasi teknologi kesehatan.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Kirim Pesan</h2>
              <p className="form-description">
                Silakan kirim pesan melalui formulir di bawah ini untuk diskusi, 
                kolaborasi riset, atau pertanyaan lainnya.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section donation-section">
        <div className="container">
          <h2>🤝 Dukungan dan Donasi</h2>
          <p className="section-description">
            Dukungan Anda membantu pengembangan riset, inovasi teknologi kesehatan, 
            dan pembuatan konten edukasi yang bermanfaat.
          </p>
          
          <div className="donation-grid">
            <div className="donation-card">
              <h3>💳 Lynk.id</h3>
              <p>Platform donasi lokal</p>
              <a href="https://lynk.id/muhsobrimaulana" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Dukung via Lynk
              </a>
            </div>

            <div className="donation-card">
              <h3>☕ Trakteer</h3>
              <p>Traktir kopi virtual</p>
              <a href="https://trakteer.id/g9mkave5gauns962u07t" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Traktir Sekarang
              </a>
            </div>

            <div className="donation-card">
              <h3>🛒 Gumroad</h3>
              <p>Produk dan resource digital</p>
              <a href="https://maulanasobri.gumroad.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Kunjungi Store
              </a>
            </div>

            <div className="donation-card">
              <h3>🎨 KaryaKarsa</h3>
              <p>Dukung kreator lokal</p>
              <a href="https://karyakarsa.com/muhammadsobrimaulana" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Dukung di KaryaKarsa
              </a>
            </div>

            <div className="donation-card">
              <h3>💰 Nyawer</h3>
              <p>Saweran online</p>
              <a href="https://nyawer.co/MuhammadSobriMaulana" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Nyawer Sekarang
              </a>
            </div>

            <div className="donation-card">
              <h3>🚀 Sevalla</h3>
              <p>Halaman alternatif</p>
              <a href="https://muhammad-sobri-maulana-kvr6a.sevalla.page/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Kunjungi Halaman
              </a>
            </div>
          </div>

          <div className="shop-section">
            <h3>🛍️ Toko Online</h3>
            <div className="shop-card">
              <h4>Pegasus Shop</h4>
              <p>Temukan produk dan merchandise yang tersedia</p>
              <a href="https://pegasus-shop.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Kunjungi Toko
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ingin Tahu Lebih Banyak?</h2>
            <p>
              Jelajahi halaman lain untuk melihat publikasi, proyek riset, 
              dan dokumen lengkap aplikasi beasiswa LPDP.
            </p>
            <div className="cta-buttons">
              <a href="/lpdp-package" className="btn btn-primary">
                Lihat LPDP Package
              </a>
              <a href="/publications" className="btn btn-outline">
                Lihat Publikasi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
