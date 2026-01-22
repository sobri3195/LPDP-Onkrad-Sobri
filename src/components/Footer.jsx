import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Muhammad Sobri Maulana</h4>
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
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="mailto:sobrimaulana@example.com">
                  📧 sobrimaulana@example.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/sobrimaulana" target="_blank" rel="noopener noreferrer">
                  🔗 LinkedIn
                </a>
              </li>
              <li>
                <a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer">
                  🆔 ORCID
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Muhammad Sobri Maulana. All rights reserved.</p>
          <p className="footer-note">
            Website ini dibuat untuk keperluan aplikasi beasiswa LPDP
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
