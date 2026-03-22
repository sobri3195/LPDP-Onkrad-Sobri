import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import RouteMeta from './components/RouteMeta'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import PageTransition from './components/PageTransition'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import LPDPPackage from './pages/LPDPPackage'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Documents from './pages/Documents'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <RouteMeta />
        <ScrollProgress />
        <Navbar />
        <Breadcrumb />
        <main>
          <PageTransition>
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
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
