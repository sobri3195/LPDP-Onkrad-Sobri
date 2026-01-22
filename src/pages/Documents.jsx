import './Documents.css'

function Documents() {
  const documentCategories = [
    {
      title: 'Dokumen LPDP',
      documents: [
        {
          name: 'Motivation Letter',
          filename: 'Motivation_Letter.pdf',
          description: 'Surat motivasi lengkap untuk aplikasi LPDP',
          size: '~500 KB'
        },
        {
          name: 'Career Plan',
          filename: 'Career_Plan.pdf',
          description: 'Rencana karir 5-10 tahun pasca-pendidikan',
          size: '~400 KB'
        },
        {
          name: 'Contribution Plan',
          filename: 'Contribution_Plan.pdf',
          description: 'Rencana kontribusi untuk Indonesia',
          size: '~450 KB'
        },
        {
          name: 'Full LPDP Package',
          filename: 'LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf',
          description: 'Paket lengkap semua dokumen LPDP',
          size: '~2 MB'
        }
      ]
    },
    {
      title: 'CV & Portfolio',
      documents: [
        {
          name: 'Curriculum Vitae',
          filename: 'CV_Muhammad_Sobri_Maulana.pdf',
          description: 'CV lengkap dengan pengalaman dan pendidikan',
          size: '~300 KB'
        },
        {
          name: 'Publication List',
          filename: 'Publication_List.pdf',
          description: 'Daftar publikasi ilmiah lengkap',
          size: '~250 KB'
        },
        {
          name: 'Project Portfolio',
          filename: 'Project_Portfolio.pdf',
          description: 'Portfolio proyek kesehatan dan inovasi',
          size: '~1 MB'
        }
      ]
    },
    {
      title: 'Sertifikat (Opsional)',
      documents: [
        {
          name: 'ACLS Certificate',
          filename: 'ACLS_Certificate.pdf',
          description: 'Sertifikat ACLS',
          size: '~200 KB'
        },
        {
          name: 'ATLS Certificate',
          filename: 'ATLS_Certificate.pdf',
          description: 'Sertifikat ATLS',
          size: '~200 KB'
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
            <p>Akses dan unduh semua dokumen pendukung aplikasi LPDP</p>
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
                Semua dokumen di halaman ini adalah untuk keperluan reviewer LPDP. 
                Data sensitif seperti NIK, STR, dan alamat lengkap tidak dicantumkan di dokumen publik ini.
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
                    <a 
                      href={`/documents/${doc.filename}`} 
                      className="btn btn-primary"
                      download
                    >
                      Unduh
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="document-instructions">
            <h2>📌 Instruksi untuk Mengisi Dokumen</h2>
            <div className="instructions-box">
              <h3>1. Placeholder Files</h3>
              <p>
                Saat ini, tombol unduh akan mengarah ke file placeholder. Anda perlu membuat dokumen PDF 
                sebenarnya dan menempatkannya di folder <code>public/documents/</code>
              </p>

              <h3>2. Format Penamaan File</h3>
              <ul>
                <li>Gunakan format: <code>[Tipe_Dokumen]_[Nama_Anda].pdf</code></li>
                <li>Contoh: <code>CV_Muhammad_Sobri_Maulana.pdf</code></li>
                <li>Hindari spasi, gunakan underscore (_)</li>
              </ul>

              <h3>3. Optimasi File</h3>
              <ul>
                <li>Compress PDF untuk ukuran maksimal 5MB per file</li>
                <li>Gunakan tools seperti iLovePDF, Smallpdf, atau Adobe Acrobat</li>
                <li>Pastikan teks dapat dicopy (bukan scan gambar)</li>
              </ul>

              <h3>4. Checklist Sebelum Upload</h3>
              <ul>
                <li>✓ Nama dan gelar benar di semua dokumen</li>
                <li>✓ Tidak ada typo atau kesalahan ketik</li>
                <li>✓ Data sensitif sudah dihapus/disamarkan</li>
                <li>✓ Format PDF, bukan Word atau format lain</li>
                <li>✓ File dapat dibuka dan dibaca dengan jelas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documents
