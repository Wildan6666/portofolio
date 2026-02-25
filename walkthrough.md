# Walkthrough: Portofolio Next.js

Selamat! Website portofolio Next.js premium Anda telah berhasil dibangun. Antarmuka ini dirancang secara khusus untuk developer dengan nuansa eksklusif (*Cyber / Premium Dark Theme*), animasi halus (*Framer Motion*), dan manajemen konten yang sangat mudah.

## 🎯 Apa Saja yang Telah Dikerjakan?
1. **Inisialisasi & Setup**:
   - Next.js 15 (App Router) + Tailwind CSS v4.
   - Pemasangan `lucide-react` untuk ikon dan `framer-motion` untuk interaksi dinamis.
2. **Tema Global (*Premium Dark*)**:
   - Konfigurasi warna `background`, `foreground`, `primary`, hingga `card` di `globals.css` yang memberikan kesan elit dan profesional.
3. **Komponen Reusable (Arsitektur Kokoh)**:
   - Pembuatan `Navbar` yang transparan dan *sticky*, berubah menjadi blur saat halaman di-*scroll*.
   - Pembuatan `Footer` responsif dan `Card` yang *scale up* saat di-hover.
4. **Halaman Utama (*Landing Page*)**:
   - `Hero Section`: Visual yang *catchy*, teks animasi bercahaya (*glow/gradient text*), dan tombol ajakan bertindak (CTA).
   - `About Section`: Tata letak modern untuk deskripsi diri dan keterampilan.
   - `Projects`, `Certificates`, `Gallery`: Daftar dinamis yang desainnya dipisahkan dari logika bisnis sehingga mudah di-maintenance.

## ⚙️ Cara Menambah/Mengubah Konten (Tanpa Ngoding!)

Inti dari portofolio ini adalah **kemudahan di masa depan**. Anda tidak perlu membongkar kode UI yang rumit untuk sekadar menambah 1 foto proyek baru.

Semua data telah diisolasi di dalam folder data `src/data/`:
- **`src/data/projects.json`**:
  Ubah file ini untuk menambah proyek di menu *Featured Projects*. Anda tinggal menyalin salah satu blok data (`id`, `title`, `description`, `imageUrl`, dll) lalu mengganti teksnya.
- **`src/data/certificates.json`**:
  Sama seperti sebelumnya, tambahkan entri baru di file ini dan otomatis kartu sertifikat akan muncul di web Anda.
- **`src/data/gallery.json`**:
  Masukkan URL gambar dan web akan membuat kartu galeri yang indah secara otomatis.

## 🚀 Cara Menjalankan Proyek
Buka terminal di folder `C:\Project\2026\portfolio` dan ketikkan perintah berikut:
```bash
npm run dev
```
Setelah itu, buka `http://localhost:3000` di browser Anda untuk melihat hasilnya. Proyek ini sudah *production-ready* dan telah lulus pengujian *build* tanpa *error* TypeScript/ESLint.
