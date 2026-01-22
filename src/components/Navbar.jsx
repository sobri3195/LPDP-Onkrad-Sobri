import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/profile', label: 'Profil' },
    { path: '/lpdp-package', label: 'LPDP Package' },
    { path: '/publications', label: 'Publikasi & Riset' },
    { path: '/projects', label: 'Proyek & Inovasi' },
    { path: '/documents', label: 'Dokumen' },
    { path: '/contact', label: 'Kontak' },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <h3>Muhammad Sobri Maulana</h3>
          <span className="navbar-subtitle">dr. | Kandidat Sp.Onk.Rad</span>
        </Link>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
