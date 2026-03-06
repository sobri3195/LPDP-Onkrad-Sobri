import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()
  const searchInputRef = useRef(null)

  const pages = [
    { path: '/', label: 'Home', keywords: ['home', 'beranda', 'utama'] },
    { path: '/profile', label: 'Profil', keywords: ['profil', 'profile', 'pendidikan', 'pengalaman'] },
    { path: '/lpdp-package', label: 'LPDP Package', keywords: ['lpdp', 'package', 'motivation', 'career', 'contribution', 'beasiswa'] },
    { path: '/publications', label: 'Publikasi & Riset', keywords: ['publikasi', 'riset', 'research', 'publication', 'jurnal', 'paper'] },
    { path: '/projects', label: 'Proyek & Inovasi', keywords: ['proyek', 'project', 'inovasi', 'innovation', 'kalkulator', 'ai'] },
    { path: '/documents', label: 'Dokumen', keywords: ['dokumen', 'document', 'pdf', 'download', 'cv', 'motivation letter'] },
    { path: '/contact', label: 'Kontak', keywords: ['kontak', 'contact', 'email', 'hubungi'] }
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
  }, [isSearchOpen])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = pages.filter(page => {
      const labelMatch = page.label.toLowerCase().includes(query)
      const keywordMatch = page.keywords.some(keyword => keyword.includes(query))
      return labelMatch || keywordMatch
    })

    setSearchResults(results)
  }, [searchQuery])

  const handleResultClick = (path) => {
    navigate(path)
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const openSearch = () => setIsSearchOpen(true)

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

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
        <div className="search-modal" onClick={closeSearch}>
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
              <ul className="search-results">
                {searchResults.map((result) => (
                  <li key={result.path} className="search-result-item">
                    <button
                      onClick={() => handleResultClick(result.path)}
                      className="search-result-button"
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
