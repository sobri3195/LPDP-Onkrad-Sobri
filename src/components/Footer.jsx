import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>dr. Muhammad Sobri Maulana</h4>
            <p>Dokter | Kandidat Spesialis Onkologi Radiasi</p>
            <p>Portofolio LPDP {currentYear}</p>
          </div>

          <div className="footer-section">
            <h4>Navigasi</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/profile">Profil</a></li>
              <li><a href="/lpdp-package">LPDP Package</a></li>
              <li><a href="/publications">Publikasi & Riset</a></li>
              <li><a href="/projects">Proyek & Inovasi</a></li>
              <li><a href="/documents">Dokumen</a></li>
              <li><a href="/contact">Kontak</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="mailto:muhammadsobrimaulana31@gmail.com">
                  📧 Email
                </a>
              </li>
              <li>
                <a href="https://github.com/sobri3195" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </li>
              <li>
                <a href="https://muhammadsobrimaulana.netlify.app" target="_blank" rel="noopener noreferrer">
                  🌐 Website
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Group
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Media Sosial</h4>
            <ul>
              <li>
                <a href="https://www.youtube.com/@muhammadsobrimaulana6013" target="_blank" rel="noopener noreferrer">
                  📺 YouTube
                </a>
              </li>
              <li>
                <a href="https://t.me/winlin_exploit" target="_blank" rel="noopener noreferrer">
                  ✈️ Telegram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@dr.sobri" target="_blank" rel="noopener noreferrer">
                  🎵 TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Donasi & Dukungan</h4>
            <ul>
              <li>
                <a href="https://lynk.id/muhsobrimaulana" target="_blank" rel="noopener noreferrer">
                  💰 Lynk.id
                </a>
              </li>
              <li>
                <a href="https://trakteer.id/g9mkave5gauns962u07t" target="_blank" rel="noopener noreferrer">
                  ☕ Trakteer
                </a>
              </li>
              <li>
                <a href="https://maulanasobri.gumroad.com/" target="_blank" rel="noopener noreferrer">
                  📚 Gumroad
                </a>
              </li>
              <li>
                <a href="https://karyakarsa.com/muhammadsobrimaulana" target="_blank" rel="noopener noreferrer">
                  🎨 Karyakarsa
                </a>
              </li>
              <li>
                <a href="https://nyawer.co/MuhammadSobriMaulana" target="_blank" rel="noopener noreferrer">
                  💳 Nyawer
                </a>
              </li>
              <li>
                <a href="https://muhammad-sobri-maulana-kvr6a.sevalla.page/" target="_blank" rel="noopener noreferrer">
                  🔗 Sevalla
                </a>
              </li>
              <li>
                <a href="https://pegasus-shop.netlify.app" target="_blank" rel="noopener noreferrer">
                  🛒 Toko Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} dr. Muhammad Sobri Maulana. All rights reserved.</p>
          <p className="footer-note">
            Website ini dibuat untuk keperluan aplikasi beasiswa LPDP
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
