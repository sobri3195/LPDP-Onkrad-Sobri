import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Profile from './pages/Profile'
import LPDPPackage from './pages/LPDPPackage'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Documents from './pages/Documents'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <Router>
      <ErrorBoundary>
        <div className="app">
          <a href="#main-content" className="skip-to-content">
            Lewati ke konten utama
          </a>
          <Navbar />
          <main id="main-content" className="main-content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/lpdp-package" element={<LPDPPackage />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
