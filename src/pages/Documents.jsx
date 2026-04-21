import { useState } from 'react'
import { downloadPdfByFilename } from '../utils/pdfDownload'
import './Documents.css'

function Documents() {
  const [searchQuery, setSearchQuery] = useState('')

  const documentCategories = [
    {
      title: 'Dokumen LPDP',
      documents: [
        {
          name: 'Motivation Letter',
          description: 'Surat motivasi untuk програм spesialis Onkologi Radiasi LPDP.',
          size: '725 B',
          available: true,
          filename: 'Motivation_Letter.pdf'
        },
        {
          name: 'Career Plan',
          description: 'Rencana karir 5-10 tahun setelah lulus spesialis.',
          size: '713 B',
          available: true,
          filename: 'Career_Plan.pdf'
        },
        {
          name: 'Contribution Plan',
          description: 'Rencana kontribusi untuk Indonesia pasca studi.',
          size: '725 B',
          available: true,
          filename: 'Contribution_Plan.pdf'
        },
        {
          name: 'Full LPDP Package',
          description: 'Paket lengkap dokumen aplikasi beasiswa LPDP.',
          size: '1.8 KB',
          available: true,
          filename: 'LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf'
        }
      ]
    },
    {
      title: 'CV & Portfolio',
      documents: [
        {
          name: 'Curriculum Vitae',
          description: 'CV lengkap dengan pengalaman pendidikan dan klinis.',
          size: '741 B',
          available: true,
          filename: 'CV_Muhammad_Sobri_Maulana.pdf'
        },
        {
          name: 'Publication List',
          description: 'Daftar publikasi ilmiah dan penelitian.',
          size: '723 B',
          available: true,
          filename: 'Publication_List.pdf'
        },
        {
          name: 'Project Portfolio',
          description: 'Portfolio proyek inovasi dan penelitian.',
          size: '725 B',
          available: true,
          filename: 'Project_Portfolio.pdf'
        }
      ]
    },

    {
      title: 'Produk Sobri RadOnc',
      documents: [
        {
          name: 'Sobri RadOnc Products (1 Halaman)',
          description: 'Ringkasan 8 produk Sobri RadOnc dalam satu halaman PDF.',
          size: '1 Page',
          available: false,
          filename: 'Sobri_RadOnc_Products_One_Page.pdf'
        }
      ]
    },

    {
      title: 'Sertifikat (Opsional)',
      documents: [
        {
          name: 'ACLS Certificate',
          description: 'Sertifikat Advanced Cardiac Life Support.',
          size: '723 B',
          available: true,
          filename: 'ACLS_Certificate.pdf'
        },
        {
          name: 'ATLS Certificate',
          description: 'Sertifikat Advanced Trauma Life Support.',
          size: '723 B',
          available: true,
          filename: 'ATLS_Certificate.pdf'
        }
      ]
    }
  ]

  const filteredCategories = (() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) {
      return documentCategories
    }

    return documentCategories
      .map((category) => ({
        ...category,
        documents: category.documents.filter((doc) => {
          const haystack = `${doc.name} ${doc.description} ${doc.filename}`.toLowerCase()
          return haystack.includes(query)
        })
      }))
      .filter((category) => category.documents.length > 0)
  })()

  const handleDocumentDownload = (event, filename) => {
    const handled = downloadPdfByFilename(filename)
    if (handled) {
      event.preventDefault()
    }
  }

  return (
    <div className="documents-page">
      <section className="section documents-intro">
        <div className="container">
          <div className="section-title">
            <h1>Dokumen</h1>
            <p>Akses dokumen pendukung aplikasi LPDP (jika tersedia)</p>
          </div>
        </div>
      </section>

      <section className="section documents-content">
        <div className="container">
          <div className="security-notice">
            <div className="notice-icon">✅</div>
            <div className="notice-content">
              <h3>Dokumen Tersedia untuk Unduh</h3>
              <p>
                Semua dokumen telah melalui proses penyamaran data sensitif (NIK, STR, alamat) sebelum dipublikasikan. 
                Klik tombol "Unduh" untuk mendownload dokumen yang diperlukan.
              </p>
            </div>
          </div>

          <div className="documents-search">
            <label htmlFor="document-search">Cari dokumen</label>
            <input
              id="document-search"
              type="search"
              placeholder="Contoh: CV, motivation, sertifikat..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>

          {filteredCategories.length > 0 ? filteredCategories.map((category, idx) => (
            <div key={idx} className="document-category">
              <h2>{category.title}</h2>
              <div className="documents-grid">
                {category.documents.map((doc, index) => (
                  <div key={index} className="document-card">
                    <div className="document-icon">📄</div>
                    <div className="document-info">
                      <h3>{doc.name}</h3>
                      <p className="document-description">{doc.description}</p>
                      <p className="document-meta">
                        <span className="document-format">PDF</span>
                        <span className="document-size">{doc.size}</span>
                      </p>
                    </div>
                    {doc.available ? (
                      <a 
                        href={`/documents/${doc.filename}`} 
                        className="btn btn-primary"
                        download
                        onClick={(event) => handleDocumentDownload(event, doc.filename)}
                      >
                        Unduh
                      </a>
                    ) : (
                      <span className="btn btn-outline">Tidak tersedia</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )) : (
            <div className="document-empty-state">
              <p>Tidak ada dokumen yang cocok dengan pencarian "{searchQuery}".</p>
            </div>
          )}


          <div className="document-instructions products-one-page-section">
            <h2>🧩 Produk Sobri RadOnc (1 Halaman)</h2>
            <div className="instructions-box">
              <p>Ringkasan produk yang disertakan dalam PDF:</p>
              <ul>
                <li>Sobri RadOnc Calc</li>
                <li>Sobri RadOnc Quiz</li>
                <li>Sobri RadOnc Cards</li>
                <li>Sobri RadOnc Atlas</li>
                <li>Sobri RadOnc Terms</li>
                <li>Sobri RadOnc Notes</li>
                <li>Sobri RadOnc Guide</li>
                <li>Sobri RadOnc OAR</li>
              </ul>
              <span className="btn btn-outline" aria-disabled="true">
                PDF 1 Halaman belum tersedia
              </span>
            </div>
          </div>

          <div className="document-instructions">
            <h2>📌 Status Dokumen</h2>
            <div className="instructions-box">
              <p>
                Semua dokumen LPDP dan CV telah tersedia untuk diunduh. Dokumen-dokumen ini telah 
                diverifikasi dan disamarkan untuk keamanan data pribadi.
              </p>
              <p>
                Jika Anda memerlukan dokumen tambahan atau memiliki pertanyaan spesifik, silakan 
                hubungi melalui halaman kontak yang tersedia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documents
