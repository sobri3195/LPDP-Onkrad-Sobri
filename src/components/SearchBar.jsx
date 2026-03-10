import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './SearchBar.css'

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const navigate = useNavigate()
  const location = useLocation()
  const searchInputRef = useRef(null)

  const pages = [
    { path: '/', label: 'Home', keywords: ['home', 'beranda', 'utama'] },
    { path: '/profile', label: 'Profil', keywords: ['profil', 'profile', 'pendidikan', 'pengalaman'] },
    { path: '/lpdp-package', label: 'LPDP Package', keywords: ['lpdp', 'package', 'motivation', 'career', 'contribution', 'beasiswa'] },
    { path: '/publications', label: 'Publikasi & Riset', keywords: ['publikasi', 'riset', 'research', 'publication', 'jurnal', 'paper'] },
    { path: '/projects', label: 'Proyek & Inovasi', keywords: ['proyek', 'project', 'inovasi', 'innovation', 'kalkulator', 'ai'] },
    { path: '/documents', label: 'Dokumen', keywords: ['dokumen', 'document', 'pdf', 'download', 'cv', 'motivation letter'] },
    { path: '/contact', label: 'Kontak', keywords: ['kontak', 'contact', 'email', 'hubungi'] },
    { path: '/privacy-policy', label: 'Kebijakan Privasi', keywords: ['privacy', 'privasi', 'kebijakan', 'policy', 'perlindungan data'] }
  ]

  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleShortcut)
    return () => document.removeEventListener('keydown', handleShortcut)
  }, [])

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus()
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
    setActiveIndex(-1)
  }

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setActiveIndex(-1)
      return
    }

    const query = searchQuery.toLowerCase()
    const results = pages.filter(page => {
      const labelMatch = page.label.toLowerCase().includes(query)
      const keywordMatch = page.keywords.some(keyword => keyword.includes(query))
      return labelMatch || keywordMatch
    })

    setSearchResults(results)
    setActiveIndex(results.length > 0 ? 0 : -1)
  }, [searchQuery])


  useEffect(() => {
    if (isSearchOpen) {
      closeSearch()
    }
  }, [location.pathname])

  const handleResultClick = (path) => {
    navigate(path)
    setIsSearchOpen(false)
    setSearchQuery('')
    setActiveIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeSearch()
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (searchResults.length > 0) {
        setActiveIndex((prev) => (prev + 1) % searchResults.length)
      }
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (searchResults.length > 0) {
        setActiveIndex((prev) => (prev <= 0 ? searchResults.length - 1 : prev - 1))
      }
      return
    }

    if (e.key === 'Enter' && activeIndex >= 0 && searchResults[activeIndex]) {
      e.preventDefault()
      handleResultClick(searchResults[activeIndex].path)
    }
  }

  const openSearch = () => setIsSearchOpen(true)

  return (
    <div className="search-container">
      <button
        className="search-toggle"
        onClick={openSearch}
        aria-label="Buka pencarian (Ctrl+K)"
        title="Buka pencarian (Ctrl+K)"
      >
        🔍
      </button>

      {isSearchOpen && (
        <div className="search-modal" onClick={closeSearch} role="dialog" aria-modal="true" aria-label="Pencarian portofolio">
          <div className="search-content" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <h3>Cari di Portofolio</h3>
              <button
                className="search-close"
                onClick={closeSearch}
                aria-label="Tutup pencarian"
              >
                ✕
              </button>
            </div>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={searchResults.length > 0}
                aria-controls="search-results-list"
                placeholder="Cari halaman, konten, atau dokumen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={searchInputRef}
                aria-label="Ketik untuk mencari"
              />
              <span className="search-icon">🔍</span>
            </div>

            {searchResults.length > 0 && (
              <ul id="search-results-list" className="search-results" role="listbox">
                {searchResults.map((result, index) => (
                  <li key={result.path} className="search-result-item">
                    <button
                      onClick={() => handleResultClick(result.path)}
                      className={`search-result-button ${index === activeIndex ? 'active' : ''}`}
                      role="option"
                      aria-selected={index === activeIndex}
                    >
                      <span className="result-icon">📄</span>
                      <div className="result-content">
                        <span className="result-label">{result.label}</span>
                        <span className="result-path">{result.path}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div className="search-no-results">
                <span className="no-results-icon">😔</span>
                <p>Tidak ada hasil untuk "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
