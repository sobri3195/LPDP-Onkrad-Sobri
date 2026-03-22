import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import Breadcrumb from './components/Breadcrumb'
import RouteMeta from './components/RouteMeta'
import Home from './pages/Home'
import Profile from './pages/Profile'
import LPDPPackage from './pages/LPDPPackage'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Documents from './pages/Documents'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import GenRadRouter from './gen-rad/GenRadRouter'
import './gen-rad/styles.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppLayout() {
  const location = useLocation()
  const isGenRad = location.pathname.startsWith('/projects/gen-rad-guardian')

  return (
    <ErrorBoundary>
      <div className={`app ${isGenRad ? 'gr-theme' : ''}`}>
        <ScrollProgress />
        <a href="#main-content" className="skip-to-content">
          Lewati ke konten utama
        </a>
        {!isGenRad && <Navbar />}
        <main id="main-content" className={`main-content ${isGenRad ? 'main-content-product' : ''}`}>
          <ScrollToTop />
          <RouteMeta />
          {!isGenRad && <Breadcrumb />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lpdp-package" element={<LPDPPackage />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/gen-rad-guardian/*" element={<GenRadRouter />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {!isGenRad && <Footer />}
        {!isGenRad && <BackToTop />}
      </div>
    </ErrorBoundary>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
