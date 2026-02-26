import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Halaman Tidak Ditemukan</h2>
        <p className="error-message">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <p className="error-suggestion">
          Silakan coba salah satu dari berikut:
        </p>
        <ul className="error-suggestions">
          <li>Periksa kembali URL yang Anda masukkan</li>
          <li>Navigasi kembali ke halaman utama</li>
          <li>Gunakan menu navigasi untuk menemukan konten yang Anda cari</li>
        </ul>
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Kembali ke Beranda
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Hubungi Saya
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
