import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && 
          toggleRef.current && !toggleRef.current.contains(e.target) && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navLinks = [
    { path: '/', label: 'Home', ariaLabel: 'Halaman utama' },
    { path: '/profile', label: 'Profil', ariaLabel: 'Profil dan riwayat pendidikan' },
    { path: '/lpdp-package', label: 'LPDP Package', ariaLabel: 'Paket LPDP dan rencana karir' },
    { path: '/publications', label: 'Publikasi & Riset', ariaLabel: 'Publikasi ilmiah dan riset' },
    { path: '/projects', label: 'Proyek & Inovasi', ariaLabel: 'Proyek dan inovasi kesehatan' },
    { path: '/documents', label: 'Dokumen', ariaLabel: 'Dokumen dan sertifikat' },
    { path: '/contact', label: 'Kontak', ariaLabel: 'Hubungi saya' },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="container navbar-container">
        <Link 
          to="/" 
          className="navbar-brand animate-fadeInDown"
          aria-label="Muhammad Sobri Maulana - Halaman utama"
        >
          <Logo />
          <div className="brand-text">
            <h3>Muhammad Sobri Maulana</h3>
            <span className="navbar-subtitle">Portofolio LPDP</span>
          </div>
        </Link>

        <button
          ref={toggleRef}
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          ref={menuRef}
          id="navbar-menu"
          className={`navbar-menu ${isMenuOpen ? 'active' : ''} animate-stagger`}
          role="menubar"
        >
          {navLinks.map((link, index) => (
            <li key={link.path} className="animate-fadeInUp" role="none">
              <Link
                to={link.path}
                className={`smooth-transition ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label={link.ariaLabel}
                aria-current={location.pathname === link.path ? 'page' : undefined}
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
