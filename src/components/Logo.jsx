import './Logo.css'

function Logo() {
  return (
    <div className="logo">
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        {/* Logo utama yang menunjukkan simbol medis dengan radiasi onkologi */}
        <circle cx="75" cy="75" r="70" fill="#1e3a8a" className="logo-circle" />
        
        {/* Simbol medis yang diperbarui */}
        <line x1="75" y1="50" x2="75" y2="100" stroke="white" strokeWidth="8" strokeLinecap="round" />
        <line x1="50" y1="75" x2="100" y2="75" stroke="white" strokeWidth="8" strokeLinecap="round" />
      
        {/* Simbol atom/radiasi di sekitar batang medis */}
        <circle cx="75" cy="35" r="8" fill="none" stroke="#0891b2" strokeWidth="3" />
        <circle cx="115" cy="75" r="8" fill="none" stroke="#0891b2" strokeWidth="3" />
        <circle cx="75" cy="115" r="8" fill="none" stroke="#0891b2" strokeWidth="3" />
        <circle cx="35" cy="75" r="8" fill="none" stroke="#0891b2" strokeWidth="3" />
      
        {/* Ornamen profesional */}
        <circle cx="75" cy="75" r="55" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
        <circle cx="75" cy="75" r="40" fill="none" stroke="#0891b2" strokeWidth="2" opacity="0.7" />
      </svg>
    </div>
  )
}

export default Logo