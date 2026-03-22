# Website Portofolio LPDP - dr. Muhammad Sobri Maulana

Website portofolio profesional untuk aplikasi beasiswa LPDP Program Spesialis Onkologi Radiasi, kini dilengkapi showcase produk **Gen-Rad Guardian** sebagai karya health-tech preventif berbasis AI.

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
- **Gen-Rad Guardian Demo:** `/projects/gen-rad-guardian`

---

## 🚀 Teknologi

- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Custom CSS dengan design system khusus Gen-Rad Guardian
- **Build Target:** Static deployment friendly (Netlify / Vercel)
- **Product Demo:** Preventive oncology risk management dashboard

## 🧪 Gen-Rad Guardian

Gen-Rad Guardian adalah modern health-tech showcase untuk manajemen risiko kanker preventif dengan halaman berikut:

- Landing page produk.
- Risk Assessment Dashboard.
- Personal Risk Profile.
- Screening Recommendation.
- Trend & Monitoring.
- Education & Prevention.
- Explainability & Audit.
- Admin / Population Insights.

### Safety Disclaimer

Gen-Rad Guardian **bukan** sistem diagnosis, **bukan** pengganti dokter, dan **bukan** mesin rekomendasi terapi definitif. Semua output ditampilkan sebagai dukungan preventif, edukatif, dan prioritisasi skrining yang tetap memerlukan validasi klinis profesional.

### Struktur Tambahan

```bash
src/gen-rad/
├── components/        # App shell, cards, tabs, alerts, skeletons
├── data.ts            # Mock datasets untuk user, risk factors, screening, cohort
├── GenRadRouter.tsx   # Product routes
├── pages.tsx          # Semua halaman utama produk
└── styles.css         # Health-tech design system khusus produk
```

## 📋 Fitur

- ✅ Responsive design (desktop & tablet friendly)
- ✅ Multi-page dengan React Router
- ✅ Download PDF documents
- ✅ Contact form dengan Netlify Forms
- ✅ SEO optimized
- ✅ Accessibility conscious layout
- ✅ Dashboard health-tech product showcase di dalam portfolio

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

```bash
src/
├── assets/            # Gambar dan aset statis
├── components/        # Komponen reusable portfolio
├── data/              # File JSON untuk konten portfolio
├── gen-rad/           # Product demo Gen-Rad Guardian
├── pages/             # Halaman-halaman website
├── App.jsx            # Root component dan route wiring
├── main.jsx           # Entry point
└── index.css          # Global styles

public/
├── documents/         # File PDF untuk download
└── _redirects         # Netlify redirects
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

## 🌐 Deploy

### Vercel

1. Push repository ke GitHub.
2. Import project ke [Vercel](https://vercel.com).
3. Framework preset akan terdeteksi sebagai **Vite**.
4. Gunakan perintah build default `npm run build`.
5. Output directory: `dist`.

### Netlify

1. Push code ke GitHub.
2. Buka [Netlify](https://netlify.com).
3. Import repository.
4. Netlify akan auto-detect Vite settings.
5. Deploy.

## ✅ Checklist Sebelum Deploy

### Konten
- [ ] Nama lengkap dan gelar benar di semua halaman
- [ ] Data pendidikan dan pengalaman akurat
- [ ] Publikasi lengkap dengan DOI
- [ ] Tidak ada placeholder yang terlewat
- [ ] Disclaimer Gen-Rad Guardian tetap tampil jelas

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
- [ ] Custom domain/subdomain di Netlify atau Vercel (opsional)
- [ ] SSL/HTTPS aktif

---

**© 2026 dr. Muhammad Sobri Maulana. All rights reserved.**

Website ini dibuat untuk keperluan aplikasi beasiswa LPDP dan showcase karya produk kesehatan digital.
