import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>dr. Muhammad Sobri Maulana</h4>
            <p>Portofolio LPDP - Radiation Oncology</p>
            <p>Author: dr. Muhammad Sobri Maulana</p>
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
              <li><a href="mailto:muhammadsobrimaulana31@gmail.com">muhammadsobrimaulana31@gmail.com</a></li>
              <li><a href="https://github.com/sobri3195" target="_blank" rel="noopener noreferrer">GitHub: sobri3195</a></li>
              <li><a href="https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl" target="_blank" rel="noopener noreferrer">Grup WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Media Sosial</h4>
            <ul>
              <li><a href="https://www.youtube.com/@muhammadsobrimaulana6013" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://t.me/winlin_exploit" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://www.tiktok.com/@dr.sobri" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://muhammadsobrimaulana.netlify.app" target="_blank" rel="noopener noreferrer">Website</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Dukungan</h4>
            <ul>
              <li><a href="https://lynk.id/muhsobrimaulana" target="_blank" rel="noopener noreferrer">Lynk.id</a></li>
              <li><a href="https://trakteer.id/g9mkave5gauns962u07t" target="_blank" rel="noopener noreferrer">Trakteer</a></li>
              <li><a href="https://maulanasobri.gumroad.com/" target="_blank" rel="noopener noreferrer">Gumroad</a></li>
              <li><a href="https://karyakarsa.com/muhammadsobrimaulana" target="_blank" rel="noopener noreferrer">KaryaKarsa</a></li>
              <li><a href="https://nyawer.co/MuhammadSobriMaulana" target="_blank" rel="noopener noreferrer">Nyawer</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Kebijakan Privasi</a></li>
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
