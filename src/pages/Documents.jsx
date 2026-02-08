import './Documents.css'

function Documents() {
  const documentCategories = [
    {
      title: 'Dokumen LPDP',
      documents: [
        {
          name: 'Motivation Letter',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        },
        {
          name: 'Career Plan',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        },
        {
          name: 'Contribution Plan',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        },
        {
          name: 'Full LPDP Package',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        }
      ]
    },
    {
      title: 'CV & Portfolio',
      documents: [
        {
          name: 'Curriculum Vitae',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        },
        {
          name: 'Publication List',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        },
        {
          name: 'Project Portfolio',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        }
      ]
    },
    {
      title: 'Sertifikat (Opsional)',
      documents: [
        {
          name: 'Sertifikat Pelatihan',
          description: 'Dokumen publik belum ditemukan.',
          size: '—',
          available: false
        }
      ]
    }
  ]

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
            <div className="notice-icon">🔒</div>
            <div className="notice-content">
              <h3>Catatan Keamanan Data</h3>
              <p>
                Jika dokumen dipublikasikan, data sensitif seperti NIK, STR, dan alamat lengkap harus 
                disamarkan.
              </p>
            </div>
          </div>

          {documentCategories.map((category, idx) => (
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
          ))}

          <div className="document-instructions">
            <h2>📌 Status Dokumen</h2>
            <div className="instructions-box">
              <p>
                Hingga saat ini belum ditemukan dokumen LPDP atau CV yang dipublikasikan secara resmi. 
                Silakan tambahkan dokumen yang dapat diverifikasi jika tersedia.
              </p>
              <p>
                Pastikan dokumen yang dipublikasikan telah melalui proses penyamaran data sensitif dan 
                berasal dari sumber resmi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documents
