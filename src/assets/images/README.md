# Images Folder

Letakkan foto profil dan gambar lainnya di sini.

## Foto Profil

**File:** `profile.jpg`

### Spesifikasi:
- Format: JPG atau PNG
- Ukuran: < 500KB (compress jika perlu)
- Dimensi: 400x400px atau 800x800px (square)
- Background: Profesional (polos atau blur)
- Pakaian: Formal (jas + kemeja atau baju dokter)

### Tools untuk Optimasi:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim (Mac)

### Cara Menggunakan:

1. Simpan foto sebagai `profile.jpg` di folder ini

2. Edit `src/pages/Home.jsx`:
   ```jsx
   import profileImg from '../assets/images/profile.jpg'
   
   // Di JSX:
   <img src={profileImg} alt="Muhammad Sobri Maulana" className="profile-image" />
   ```

3. (Opsional) Tambahkan styling di `Home.css`:
   ```css
   .profile-image {
     width: 300px;
     height: 300px;
     border-radius: 50%;
     object-fit: cover;
     border: 4px solid white;
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
   }
   ```

## Gambar Lain (Opsional)

Anda juga bisa menambahkan:
- Sertifikat (thumbnail)
- Logo institusi
- Infographic
- Icon custom

Pastikan semua gambar teroptimasi untuk web!
