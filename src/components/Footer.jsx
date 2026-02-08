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
              <li><a href="/contact">Kontak</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak & Donasi</h4>
            <ul>
              <li>
                <a href="mailto:muhammadsobrimaulana31@gmail.com">
                  📧 muhammadsobrimaulana31@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/sobri3195" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </li>
              <li>
                <a href="https://lynk.id/muhsobrimaulana" target="_blank" rel="noopener noreferrer">
                  💰 Donasi
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
