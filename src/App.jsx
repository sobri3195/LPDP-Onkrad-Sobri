import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import LPDPPackage from './pages/LPDPPackage'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Documents from './pages/Documents'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lpdp-package" element={<LPDPPackage />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
