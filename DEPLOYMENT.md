# 🚀 Panduan Deploy ke Netlify

## Cara Deploy Website Portofolio LPDP Anda

Ada 3 cara untuk deploy website ini ke Netlify. Pilih yang paling sesuai dengan kebutuhan Anda.

---

## Opsi 1: Netlify CLI (Recommended untuk Developer)

### Prerequisites
- Node.js sudah terinstall
- Terminal/Command Prompt

### Langkah-langkah

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login ke Netlify**
   ```bash
   netlify login
   ```
   Browser akan terbuka, login dengan akun Netlify Anda (bisa sign up gratis).

3. **Deploy dari Folder Project**
   ```bash
   # Pastikan Anda di folder project
   cd /path/to/lpdp-portfolio
   
   # Build project
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

4. **Ikuti Prompt:**
   - "Create & configure a new site" → Yes
   - "Team" → Pilih team Anda
   - "Site name" → Masukkan nama (contoh: sobri-lpdp)
   - "Publish directory" → `dist`

5. **Selesai!**
   Anda akan mendapat URL seperti: `https://sobri-lpdp.netlify.app`

---

## Opsi 2: GitHub Integration (Recommended untuk Auto-Deploy)

### Prerequisites
- Akun GitHub
- Git terinstall

### Langkah-langkah

1. **Push Project ke GitHub**
   ```bash
   # Init git (jika belum)
   git init
   
   # Add files
   git add .
   
   # Commit
   git commit -m "Initial commit: LPDP Portfolio website"
   
   # Create repo di GitHub, lalu:
   git remote add origin https://github.com/username/lpdp-portfolio.git
   git push -u origin main
   ```

2. **Connect ke Netlify**
   - Buka [Netlify](https://app.netlify.com)
   - Klik "Add new site" → "Import an existing project"
   - Pilih "GitHub"
   - Authorize Netlify
   - Pilih repository `lpdp-portfolio`

3. **Configure Build Settings**
   Netlify akan auto-detect Vite settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Klik "Deploy site"

4. **Auto-Deploy**
   Setiap kali Anda push ke GitHub, Netlify akan auto-deploy!

---

## Opsi 3: Drag & Drop (Paling Mudah untuk Non-Developer)

### Langkah-langkah

1. **Build Project**
   ```bash
   npm install
   npm run build
   ```
   Folder `dist` akan dibuat.

2. **Buka Netlify**
   - Pergi ke [Netlify Drop](https://app.netlify.com/drop)
   - Atau klik "Add new site" → "Deploy manually"

3. **Drag & Drop**
   - Drag folder `dist` ke area drop zone
   - Tunggu upload selesai

4. **Selesai!**
   Website langsung live dengan URL random.
   Anda bisa ganti nama di Site settings.

---

## Custom Domain (Opsional)

### Subdomain Netlify (Gratis)

1. Buka Site settings
2. Domain management → Options
3. "Edit site name"
4. Masukkan: `sobri-lpdp` (atau nama lain)
5. Save → URL jadi: `https://sobri-lpdp.netlify.app`

### Custom Domain Sendiri

1. Beli domain (Namecheap, GoDaddy, dll)
2. Netlify → Domain settings → "Add custom domain"
3. Masukkan domain Anda: `sobrionkologi.com`
4. Update DNS settings di registrar domain:
   - Type: CNAME
   - Name: www (atau @)
   - Value: [your-site].netlify.app
5. Tunggu propagasi DNS (1-48 jam)
6. SSL otomatis aktif!

---

## Environment Variables (Jika Diperlukan)

Jika Anda menambahkan API keys atau secrets:

1. Netlify → Site settings → Environment variables
2. Add variable:
   - Key: `VITE_API_KEY`
   - Value: `your-api-key`
3. Redeploy site

Akses di code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

---

## Troubleshooting

### Build Failed

**Error: Command failed**
```bash
# Test build local dulu
npm run build

# Jika error, cek:
# 1. Semua dependencies terinstall
# 2. Tidak ada import error
# 3. Syntax error di code
```

**Error: React Router 404 on refresh**
- Pastikan file `public/_redirects` ada
- Atau file `netlify.toml` dengan redirect rules

### Deploy Success tapi Website Blank

- Cek browser console (F12)
- Pastikan base path benar di `vite.config.js`
- Cek network tab untuk failed requests

### Forms Tidak Berfungsi

- Pastikan form punya atribut `data-netlify="true"`
- Tambahkan input hidden: `<input type="hidden" name="form-name" value="contact" />`
- Honeypot field untuk anti-spam

---

## Update Website

### Via CLI
```bash
# Update code
git add .
git commit -m "Update content"

# Rebuild
npm run build

# Deploy
netlify deploy --prod
```

### Via GitHub (Auto-Deploy)
```bash
git add .
git commit -m "Update content"
git push origin main
# Netlify auto-deploy!
```

### Via Drag & Drop
```bash
npm run build
# Drag folder dist ke Netlify drop zone lagi
```

---

## Monitoring & Analytics

### Netlify Analytics (Opsional, Paid)

1. Site settings → Analytics
2. Enable Netlify Analytics ($9/month)
3. View traffic, pages, referrers

### Google Analytics (Gratis)

1. Buat GA4 property di Google Analytics
2. Get Measurement ID (G-XXXXXXXXXX)
3. Tambahkan di `index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## Checklist Pre-Deploy

- [ ] Build berhasil local (`npm run build`)
- [ ] Semua placeholder sudah diganti
- [ ] PDF files sudah diupload ke `public/documents/`
- [ ] Foto profil sudah diganti (jika ada)
- [ ] Email dan link contact sudah benar
- [ ] Tidak ada data sensitif (NIK, STR, dll)
- [ ] `netlify.toml` sudah ada
- [ ] `public/_redirects` sudah ada

---

## Support

- [Netlify Docs](https://docs.netlify.com)
- [Netlify Support](https://www.netlify.com/support/)
- [Vite Docs](https://vitejs.dev)

Good luck dengan deployment! 🚀
