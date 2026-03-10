import { useState, useEffect } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const applyTheme = (nextIsDark) => {
    document.documentElement.setAttribute('data-theme', nextIsDark ? 'dark' : 'light')

    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', nextIsDark ? '#111827' : '#1e3a8a')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : mediaQuery.matches

    setIsDark(shouldUseDark)
    applyTheme(shouldUseDark)

    const handleThemeChange = (event) => {
      const manualTheme = localStorage.getItem('theme')
      if (manualTheme) {
        return
      }

      setIsDark(event.matches)
      applyTheme(event.matches)
    }

    mediaQuery.addEventListener('change', handleThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    applyTheme(nextIsDark)
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
      aria-pressed={isDark}
      title={isDark ? 'Mode gelap aktif' : 'Mode terang aktif'}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
