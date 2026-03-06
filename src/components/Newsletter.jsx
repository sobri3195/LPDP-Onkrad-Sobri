import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-icon">📧</div>
        <h3>Berlangganan Newsletter</h3>
        <p>Dapatkan update terbaru tentang perjalanan LPDP dan pengembangan karir saya</p>

        {isSubscribed ? (
          <div className="newsletter-success animate-fadeInUp">
            <span className="success-icon">✅</span>
            <p>Terima kasih! Anda telah berlangganan newsletter.</p>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
              aria-label="Email untuk newsletter"
            />
            <button type="submit" className="newsletter-btn">
              <span>Berlangganan</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </form>
        )}

        <p className="newsletter-note">
          📌 Kami tidak akan mengirim spam. Hanya update penting saja.
        </p>
      </div>
    </div>
  )
}

export default Newsletter
