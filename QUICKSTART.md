# ⚡ Quick Start Guide

Panduan cepat untuk mulai menggunakan website portofolio LPDP Anda.

---

## 🚀 Setup (5 Menit)

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Buka browser: http://localhost:5173

---

## ✏️ Isi Konten (30-60 Menit)

### Step 1: Edit Informasi Dasar

**File: `src/components/Footer.jsx`**
- Ganti email placeholder
- Update LinkedIn URL
- Update ORCID ID

**File: `src/pages/Contact.jsx`**
- Ganti email
- Update LinkedIn
- Update ORCID
- Update lokasi

### Step 2: Edit Data JSON

**File: `src/data/education.json`**
```json
[
  {
    "year": "2020",
    "title": "Profesi Dokter",
    "subtitle": "Universitas Indonesia, Jakarta",
    "description": "...",
    "highlights": [...]
  }
]
```

**File: `src/data/experience.json`**
```json
[
  {
    "year": "2020 - Present",
    "title": "Dokter Umum",
    "subtitle": "RSUD XYZ, Jakarta",
    ...
  }
]
```

**File: `src/data/publications.json`**
```json
[
  {
    "title": "Judul Publikasi",
    "journal": "Nama Jurnal",
    "year": "2024",
    "description": "...",
    "tags": ["Onkologi", "Radiasi"],
    "doi": "https://doi.org/xxx"
  }
]
```

**File: `src/data/projects.json`**
```json
[
  {
    "title": "Program Skrining Kanker",
    "category": "health",
    "period": "2023",
    "description": "...",
    "tags": ["Kesehatan", "Skrining"],
    "icon": "🏥"
  }
]
```

### Step 3: Edit Halaman Utama

**File: `src/pages/Home.jsx`**
- Cari placeholder `[X TAHUN]`, `[NAMA RUMAH SAKIT]`, dll
- Ganti dengan data Anda yang sebenarnya

**File: `src/pages/Profile.jsx`**
- Edit section "Tentang Saya"
- Update sertifikasi dan penghargaan

**File: `src/pages/LPDPPackage.jsx`**
- Edit motivation letter summary
- Update career plan timeline
- Edit contribution plan
- Update study plan details

### Step 4: Upload Dokumen PDF

1. Buat folder (jika belum ada):
   ```bash
   mkdir -p public/documents
   ```

2. Copy semua PDF Anda ke `public/documents/`:
   - CV_Muhammad_Sobri_Maulana.pdf
   - Motivation_Letter.pdf
   - Career_Plan.pdf
   - Contribution_Plan.pdf
   - LPDP_Full_Package_Muhammad_Sobri_Maulana.pdf

3. Pastikan nama file EXACT sama dengan yang di-link di code

### Step 5: (Opsional) Ganti Foto Profil

1. Siapkan foto profesional Anda (format JPG/PNG)
2. Optimasi ukuran < 500KB
3. Simpan di `src/assets/images/profile.jpg`
4. Edit `src/pages/Home.jsx` untuk menggunakan foto:
   ```jsx
   import profileImg from '../assets/images/profile.jpg'
   
   // Di component:
   <img src={profileImg} alt="Muhammad Sobri Maulana" />
   ```

---

## 🧪 Test Local (5 Menit)

### Test Development
```bash
npm run dev
```
- Cek semua halaman
- Klik semua link
- Test download PDF (akan error jika PDF belum ada)
- Test contact form

### Test Production Build
```bash
npm run build
npm run preview
```
Buka http://localhost:4173

---

## 📦 Deploy (10 Menit)

### Opsi Termudah: Netlify Drag & Drop

1. Build:
   ```bash
   npm run build
   ```

2. Buka: https://app.netlify.com/drop

3. Drag folder `dist` ke drop zone

4. Tunggu deploy selesai

5. Copy URL yang diberikan

### Opsi Terbaik: GitHub + Netlify

1. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Connect di Netlify:
   - Import from GitHub
   - Select repository
   - Deploy!

3. Auto-deploy on push:
   - Setiap `git push` = auto deploy

---

## 🎨 Kustomisasi (Opsional)

### Ganti Warna

**File: `src/index.css`**
```css
:root {
  --primary-color: #1e3a8a;    /* Navy Blue */
  --secondary-color: #0891b2;   /* Teal */
  /* Ganti dengan warna pilihan Anda */
}
```

### Ganti Font

**File: `src/index.css`**
```css
body {
  font-family: 'Poppins', sans-serif;
  /* Atau font lain dari Google Fonts */
}
```

Tambahkan di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Edit Section

Semua halaman ada di `src/pages/`:
- `Home.jsx` → Halaman utama
- `Profile.jsx` → Halaman profil
- `LPDPPackage.jsx` → LPDP package
- dll.

Edit langsung di file tersebut.

---

## 📋 Checklist Cepat

Sebelum deploy, pastikan:

- [ ] Semua placeholder diganti
- [ ] PDF files uploaded
- [ ] Email dan link contact benar
- [ ] Build berhasil: `npm run build`
- [ ] Test di browser: Chrome, Firefox
- [ ] Test responsive: Desktop, Tablet, Mobile
- [ ] No console errors (F12)
- [ ] Tidak ada data sensitif (NIK, STR)

---

## 🆘 Troubleshooting Cepat

### Error: "Cannot find module..."
```bash
npm install
```

### Error: Port 5173 already in use
```bash
# Kill process atau gunakan port lain
npm run dev -- --port 3000
```

### PDF tidak bisa didownload
- Pastikan file ada di `public/documents/`
- Cek nama file exact match dengan link
- Rebuild: `npm run build`

### Website blank setelah deploy
- Cek browser console (F12)
- Pastikan `public/_redirects` ada
- Pastikan build command di Netlify benar

### Contact form tidak berfungsi
- Pastikan attribute `data-netlify="true"` ada
- Deploy di Netlify (form hanya jalan di Netlify, tidak di local)

---

## 📚 Dokumentasi Lengkap

- **GUIDE.md** → Panduan lengkap dan detail
- **DEPLOYMENT.md** → Cara deploy step-by-step
- **CHECKLIST.md** → Checklist lengkap sebelum submit
- **README.md** → Overview project

---

## 🎯 Next Steps

1. ✅ Setup project
2. ✅ Isi konten
3. ✅ Test local
4. ✅ Deploy ke Netlify
5. ✅ Test production
6. ✅ Submit ke LPDP!

---

**Good luck! 🚀🎓**

Jika ada pertanyaan, baca dokumentasi lengkap di file-file markdown lainnya.
