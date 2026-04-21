# Analisa Codebase LPDP-Onkrad-Sobri

Tanggal analisa: **21 April 2026**

## Ruang lingkup
Analisa ini meninjau struktur project, dependensi, build pipeline, konsistensi implementasi halaman, kualitas maintainability, serta gap menuju production-grade.

## Ringkasan eksekutif
Secara umum aplikasi **sudah bisa dibuild** dan website portofolio inti berfungsi. Namun, ada beberapa kekurangan yang signifikan pada aspek kualitas engineering:

1. **Belum ada quality gate** (lint, test, typecheck script) di `package.json`.
2. **Konfigurasi TypeScript tidak sehat** (referensi type Node ada, tetapi paket `@types/node` tidak dipasang).
3. **Arsitektur bercampur** (dua jalur UI: portfolio JSX aktif vs dashboard klinis TSX tidak terintegrasi routing).
4. **Ada broken document reference** (`Sobri_RadOnc_Products_One_Page.pdf` direferensikan, file fisik tidak tersedia).
5. **Tidak ada CI/CD checks otomatis** untuk mencegah regresi.

---

## Temuan detail: apa saja yang kurang

## 1) Engineering Quality & Tooling

### Kurang
- Script `lint`, `test`, dan `typecheck` belum tersedia.
- Validasi kualitas belum menjadi bagian rutin sebelum deploy.

### Dampak
- Bug UI/logic bisa lolos tanpa terdeteksi.
- Sulit menegakkan standar coding dalam tim.

### Rekomendasi
- Tambahkan script minimal:
  - `"lint": "eslint ."`
  - `"typecheck": "tsc --noEmit"`
  - `"test": "vitest run"`
- Integrasikan ke pipeline CI.

## 2) TypeScript Setup

### Kurang
- `tsconfig.json` memanggil type library `node`, tetapi project belum menginstal `@types/node`.
- Saat dijalankan `npx tsc --noEmit`, proses gagal.

### Dampak
- Type checking tidak bisa dijalankan konsisten.
- Error TS berpotensi tersembunyi sampai runtime/build tertentu.

### Rekomendasi
- Install `@types/node` pada devDependencies.
- Tambahkan script `typecheck` dan wajibkan pada PR checks.

## 3) Arsitektur & Konsistensi Implementasi

### Kurang
- App utama (`src/App.tsx`) hanya meroute halaman portfolio JSX.
- Terdapat beberapa halaman TSX (dashboard/admin/analysis/case-comparison/dll) yang tidak terhubung ke route aktif.
- Indikasi adanya dua track produk dalam satu repo tanpa boundary jelas.

### Dampak
- Kebingungan maintainers (mana source of truth).
- Risiko dead code makin besar.
- Onboarding developer baru lebih lama.

### Rekomendasi
- Putuskan strategi:
  1. **Pisah** ke package/app terpisah (portfolio vs clinical dashboard), atau
  2. **Unifikasi** route + navigation + style guide dalam satu app.
- Bersihkan file yang tidak lagi dipakai atau tandai sebagai roadmap eksplisit.

## 4) Integritas Konten Dokumen

### Kurang
- `Documents.jsx` menampilkan file `Sobri_RadOnc_Products_One_Page.pdf` sebagai available.
- File tersebut tidak ditemukan pada `public/documents`.

### Dampak
- User menerima tautan unduh yang gagal.
- Menurunkan trust pada halaman dokumen.

### Rekomendasi
- Upload file yang hilang **atau** set status `available: false` sampai file ada.
- Tambahkan validasi saat build/deploy untuk memastikan semua file yang direferensikan benar-benar ada.

## 5) Testing Strategy

### Kurang
- Belum ada unit test, integration test, atau E2E test.

### Dampak
- Risiko regresi pada form, routing, dan komponen interaktif meningkat.

### Rekomendasi
- Tahap awal:
  - Unit test untuk utilitas (`src/utils/*`),
  - Integration test halaman kunci (Home, Documents, Contact),
  - E2E smoke test (routing utama + unduh dokumen + submit form).

## 6) CI/CD & Governance

### Kurang
- Belum ada workflow CI (mis. GitHub Actions) untuk menjalankan lint/test/build/typecheck otomatis di setiap PR.

### Dampak
- Kualitas bergantung pada pemeriksaan manual.

### Rekomendasi
- Tambahkan pipeline minimum:
  1. install deps,
  2. lint,
  3. typecheck,
  4. test,
  5. build.

## 7) Dokumentasi Teknis

### Kurang
- Banyak dokumen markdown di root, tetapi belum ada satu “source of truth” untuk:
  - arsitektur saat ini,
  - status fitur aktif vs eksperimen,
  - standar kontribusi.

### Dampak
- Informasi tumpang tindih / cepat usang.
- Sulit menentukan prioritas engineering.

### Rekomendasi
- Buat dokumen inti:
  - `ARCHITECTURE.md`
  - `CONTRIBUTING.md`
  - `ROADMAP.md`
- Tetapkan satu dokumen status yang diperbarui per rilis.

---

## Prioritas perbaikan (urut eksekusi)

### Prioritas 1 (segera)
1. Perbaiki TypeScript setup (`@types/node`, script `typecheck`).
2. Tambahkan lint + test baseline.
3. Benahi broken file reference pada dokumen.

### Prioritas 2 (1 sprint)
4. Rapikan arsitektur (putuskan status halaman TSX yang belum aktif).
5. Pasang CI checks wajib di PR.

### Prioritas 3 (bertahap)
6. Konsolidasi dokumentasi teknis menjadi single source of truth.
7. Perluas cakupan test (integration + E2E).

---

## Penilaian akhir
Codebase ini **layak untuk use-case portfolio** dan build saat ini berjalan baik. Namun untuk standar engineering yang lebih kuat (maintainability, reliability, kolaborasi tim), masih ada gap penting pada **tooling, testing, konsistensi arsitektur, dan governance**.
