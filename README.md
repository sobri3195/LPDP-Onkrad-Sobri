# Website Portofolio LPDP - dr. Muhammad Sobri Maulana

Website portofolio profesional untuk aplikasi beasiswa LPDP Program Spesialis Onkologi Radiasi.

## 👤 Author

**dr. Muhammad Sobri Maulana**
- **GitHub:** [sobri3195](https://github.com/sobri3195)
- **Email:** [muhammadsobrimaulana31@gmail.com](mailto:muhammadsobrimaulana31@gmail.com)
- **Website Utama:** [muhammadsobrimaulana.netlify.app](https://muhammadsobrimaulana.netlify.app)
- **Website Alternatif:** [muhammad-sobri-maulana-kvr6a.sevalla.page](https://muhammad-sobri-maulana-kvr6a.sevalla.page/)

## 🔗 Sosial Media & Komunitas

- **YouTube:** [@muhammadsobrimaulana6013](https://www.youtube.com/@muhammadsobrimaulana6013)
- **Telegram:** [@winlin_exploit](https://t.me/winlin_exploit)
- **TikTok:** [@dr.sobri](https://www.tiktok.com/@dr.sobri)
- **Grup WhatsApp:** [Join Group](https://chat.whatsapp.com/B8nwRZOBMo64GjTwdXV8Bl)

## 💰 Dukung Saya (Donasi)

Jika Anda merasa terbantu dengan proyek ini, Anda dapat memberikan dukungan melalui:
- **Lynk.id:** [lynk.id/muhsobrimaulana](https://lynk.id/muhsobrimaulana)
- **Trakteer:** [trakteer.id/g9mkave5gauns962u07t](https://trakteer.id/g9mkave5gauns962u07t)
- **Nyawer:** [nyawer.co/MuhammadSobriMaulana](https://nyawer.co/MuhammadSobriMaulana)
- **Karyakarsa:** [karyakarsa.com/muhammadsobrimaulana](https://karyakarsa.com/muhammadsobrimaulana)

## 🛒 Produk & Lainnya

- **Gumroad:** [maulanasobri.gumroad.com](https://maulanasobri.gumroad.com/)
- **Toko Online Sobri:** [pegasus-shop.netlify.app](https://pegasus-shop.netlify.app)

---

## 🚀 Teknologi

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v7
- **Styling:** CSS (Custom)
- **Deployment:** Vercel (recommended), Netlify (optional)

## 📋 Fitur

- ✅ Responsive design (mobile-first)
- ✅ Multi-page dengan React Router
- ✅ Download PDF documents
- ✅ Contact form via `mailto:` (kompatibel static hosting seperti Vercel)
- ✅ SEO optimized
- ✅ Accessibility compliant

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Folder

```text
src/
├── assets/          # Gambar dan aset statis
├── components/      # Komponen reusable
├── data/            # File JSON untuk konten
├── pages/           # Halaman-halaman website
├── App.jsx          # Root component
├── main.jsx         # Entry point
└── index.css        # Global styles

public/
├── documents/       # File PDF untuk download
└── _redirects       # Netlify redirects

vercel.json          # Rewrite SPA untuk Vercel
```

## 📝 Cara Mengisi Konten

### 1. Data JSON

Edit file di folder `src/data/`:
- `education.json` - Data pendidikan
- `experience.json` - Pengalaman kerja
- `publications.json` - Publikasi ilmiah
- `projects.json` - Proyek dan inovasi

### 2. Dokumen PDF

Letakkan file PDF di folder `public/documents/`:
- `CV_Muhammad_Sobri_Maulana.pdf`
- `Motivation_Letter.pdf`
- `Career_Plan.pdf`
- `Contribution_Plan.pdf`
- `LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf`
- dll.

### 3. Foto Profil

Ganti placeholder dengan foto profesional Anda:
- Letakkan foto di `src/assets/images/profile.jpg`
- Edit komponen Hero di `src/pages/Home.jsx`

### 4. Informasi Kontak

Edit di:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/ContactForm.jsx` (alamat email tujuan form)

## 🌐 Deploy ke Vercel (Recommended)

### Opsi 1: Vercel Dashboard + GitHub

1. Push code ke GitHub.
2. Buka [Vercel](https://vercel.com).
3. Import repository.
4. Framework akan terdeteksi sebagai **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

> File `vercel.json` sudah disiapkan untuk rewrite semua route ke `index.html`, sehingga React Router tetap berjalan saat refresh halaman.

### Opsi 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## ✅ Checklist Sebelum Deploy

### Konten
- [ ] Nama lengkap dan gelar benar di semua halaman
- [ ] Data pendidikan dan pengalaman akurat
- [ ] Publikasi lengkap dengan DOI
- [ ] Tidak ada placeholder yang terlewat

### Data Sensitif
- [ ] Hapus/samarkan NIK, STR, nomor identitas
- [ ] Alamat lengkap tidak ditampilkan
- [ ] Nomor telepon pribadi tidak di-public

### Performa
- [ ] Gambar teroptimasi (WebP, < 500KB)
- [ ] PDF terkompresi (< 5MB per file)
- [ ] Lighthouse score > 90

### SEO
- [ ] Meta title di setiap halaman
- [ ] Meta description relevan
- [ ] Alt text untuk gambar

### Dokumen PDF
- [ ] Semua file PDF tersedia di `public/documents/`
- [ ] Nama file konsisten dan deskriptif
- [ ] File dapat dibuka dan dibaca

### Domain
- [ ] Custom domain/subdomain di Vercel (opsional)
- [ ] SSL/HTTPS aktif

---

**© 2025 dr. Muhammad Sobri Maulana. All rights reserved.**

Website ini dibuat untuk keperluan aplikasi beasiswa LPDP.
