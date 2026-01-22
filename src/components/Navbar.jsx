import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand animate-fadeInDown">
          <Logo />
          <div className="brand-text">
            <h3>Muhammad Sobri Maulana</h3>
            <span className="navbar-subtitle">dr. | Kandidat Sp.Onk.Rad</span>
          </div>
        </Link>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''} animate-stagger`}>
          {navLinks.map((link, index) => (
            <li key={link.path} className="animate-fadeInUp">
              <Link 
                to={link.path}
                className={`smooth-transition ${location.pathname === link.path ? 'active' : ''}`}
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
