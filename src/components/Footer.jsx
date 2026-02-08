import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>dr. Muhammad Sobri Maulana</h4>
            <p>Portofolio LPDP (informasi publik terbatas)</p>
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
              <li>Email profesional belum tersedia</li>
              <li>Afiliasi institusi belum tersedia</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Profil Profesional</h4>
            <ul>
              <li>LinkedIn belum tersedia</li>
              <li>ResearchGate belum tersedia</li>
              <li>ORCID belum tersedia</li>
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
