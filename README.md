# Website CV & Portofolio Profesional — Pramudita Andhika Pratama, S.Sos

Website resume/CV profesional modern, minimalis, dan elegan yang dirancang khusus untuk **Pramudita Andhika Pratama, S.Sos**. Website ini siap di-host langsung di GitHub Pages secara gratis tanpa konfigurasi backend atau database tambahan.

## Keunggulan Utama
- **Desain Premium Modern**: Menggunakan prinsip Glassmorphic yang anggun, responsif mobile-first, dan animasi transisi halus.
- **Dukungan Dark Mode**: Fitur pergantian mode gelap/terang otomatis yang ramah bagi mata pengguna.
- **Kinerja Lighthouse Sempurna**: Menggunakan HTML5 semantik, CSS3 murni, dan Vanilla JS yang sangat teroptimasi untuk menjamin performa (skor Lighthouse 95+), aksesibilitas (WCAG), serta SEO-friendly.
- **Aksesibilitas (WCAG Compliant)**: Dilengkapi dengan tautan pintasan navigasi (Skip Link), kontras teks yang ramah aksesibilitas, label ARIA lengkap, serta kompatibel dengan navigasi keyboard.
- **Pratinjau PDF Interaktif**: Fitur pratinjau dokumen CV dan sertifikat secara langsung di dalam website menggunakan modal pratinjau modern.

---

## Struktur File
```
/
│── index.html          # Struktur utama dokumen HTML & SEO & JSON-LD
│── style.css           # Desain visual lengkap, layout Grid/Flexbox, & Dark Mode
│── script.js           # Logika interaktif, ScrollSpy, Pratinjau PDF, & Animasi
│── assets/
│     ├── img/
│     │     ├── profile.jpg          # Foto profil Anda
│     │     └── avatar-placeholder.svg # Fallback jika foto profil kosong
│     ├── pdf/
│     │     ├── cv.pdf               # File CV lengkap Anda
│     │     ├── skck_2026.pdf        # Sertifikat SKCK yang valid
│     │     ├── sertifikat1.pdf      # Sertifikat kompetensi pendukung
│     │     └── ...
│     └── icons/
│           └── favicon.svg          # Ikon website resmi
```

---

## Cara Menjalankan Project Secara Lokal
1. Pastikan Anda telah mengunduh semua file di atas dalam satu folder.
2. Cukup klik ganda file `index.html` untuk membukanya secara langsung di browser web favorit Anda (Chrome, Edge, Firefox, atau Safari).
3. Anda juga dapat menggunakan ekstensi seperti **Live Server** di VS Code untuk pengalaman pengembangan yang lebih lancar.

---

## Panduan Upload ke GitHub & Mengaktifkan GitHub Pages

### Langkah 1: Buat Repositori Baru di GitHub
1. Masuk ke akun [GitHub](https://github.com/) Anda.
2. Klik tombol **New** di halaman beranda atau masuk ke `https://github.com/new`.
3. Beri nama repositori Anda sesuai keinginan, misalnya: `pramuditaandhika` atau `portofolio`.
4. Pilih opsi **Public** agar website dapat diakses oleh publik.
5. Jangan centang "Add a README file" karena project ini sudah menyediakannya. Klik **Create repository**.

### Langkah 2: Unggah File Project Anda
**Opsi A: Menggunakan GitHub Web (Tanpa Install Git)**
1. Pada halaman repositori baru yang kosong, klik tautan **uploading an existing file**.
2. Tarik dan lepas (*drag and drop*) semua file (`index.html`, `style.css`, `script.js`, `README.md`, beserta seluruh folder `assets/` dengan lengkap) ke dalam kotak unggahan.
3. Tunggu hingga proses unggah selesai, lalu klik tombol **Commit changes**.

**Opsi B: Menggunakan Git CLI (Direkomendasikan)**
Buka terminal Anda di folder project, lalu jalankan perintah berikut:
```bash
git init
git add .
git commit -m "Initial commit - Portofolio Andhika"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPOSITORI.git
git push -u origin main
```
*(Ganti USERNAME-ANDA dan NAMA-REPOSITORI sesuai akun Anda)*

### Langkah 3: Aktifkan GitHub Pages
1. Di halaman repositori GitHub Anda, masuk ke menu **Settings** (ikon gerigi di bagian atas).
2. Di sidebar kiri, cari bagian **Code and automation**, lalu klik **Pages**.
3. Pada bagian **Build and deployment**:
   - Sumber (*Source*): Pilih **Deploy from a branch**.
   - Cabang (*Branch*): Pilih **main** (atau cabang utama Anda), dan folder pilih **/(root)**.
4. Klik tombol **Save**.
5. Tunggu sekitar 1-2 menit. Segarkan halaman, dan tautan website resmi Anda akan muncul di bagian atas halaman Settings Pages tersebut (biasanya berformat `https://username-anda.github.io/nama-repositori/`).

---

## Panduan Kustomisasi & Edit di Kemudian Hari

### 1. Cara Mengganti Foto Profil
1. Siapkan foto formal/semi-formal terbaik Anda dengan format persegi (rekomendasi ukuran `500x500` piksel).
2. Simpan foto tersebut ke dalam folder `assets/img/` dengan nama file `profile.jpg`.
3. Pastikan format dan nama file sama persis agar otomatis diperbarui di website tanpa perlu mengedit file kode.

### 2. Cara Mengganti CV PDF Anda
1. Ekspor CV terbaru Anda dari Canva, Word, atau aplikasi lainnya ke dalam format PDF.
2. Beri nama file tersebut `cv.pdf`.
3. Simpan dan gantikan file lama di dalam folder `assets/pdf/cv.pdf`.

### 3. Cara Menambah / Mengubah Sertifikat PDF
1. Simpan file PDF sertifikat baru Anda di folder `assets/pdf/` (misalnya: `sertifikat_baru.pdf`).
2. Buka file `script.js` menggunakan text editor (seperti Notepad, VS Code, atau Notepad++).
3. Cari konstanta `CERTIFICATES_DATA` di bagian atas file:
   ```javascript
   const CERTIFICATES_DATA = [
     {
       id: "skck-2026",
       name: "Surat Keterangan Catatan Kepolisian (SKCK)",
       file: "skck_2026.pdf",
       issuer: "Kepolisian Negara Republik Indonesia",
       date: "04 Februari 2026",
       tags: ["Legalitas", "SKCK"]
     },
     // ... TAMBAHKAN ENTRI BARU DI SINI:
     {
       id: "sertifikat-baru",
       name: "Nama Sertifikat Baru Anda",
       file: "sertifikat_baru.pdf",
       issuer: "Nama Instansi Penerbit",
       date: "Tanggal/Tahun Terbit",
       tags: ["Tag1", "Tag2"]
     }
   ];
   ```
4. Simpan file `script.js`. Website secara otomatis akan merender kartu sertifikat baru tersebut secara lengkap dengan fitur pratinjau dan unduhan interaktif.

### 4. Cara Mengubah Warna Tema Utama
Warna website ini menggunakan CSS Custom Properties di bagian atas file `style.css` agar sangat mudah diubah di satu tempat:
1. Buka file `style.css`.
2. Cari bagian `:root` di baris teratas:
   ```css
   :root {
     --bg-primary:    #F8FAFC;  /* Warna latar belakang utama */
     --color-primary: #3B82F6;  /* Warna biru aksen utama */
     --color-success: #22C55E;  /* Warna sukses (hijau) */
     /* ... ubah kode hex warna di sini sesuai preferensi Anda ... */
   }
   ```
3. Ubah kode hex warna sesuai selera Anda, maka seluruh warna di website akan ikut berubah secara harmonis.

### 5. Cara Mengubah Informasi Profil & Biodata
Seluruh teks informasi statis berada di file `index.html`. Anda cukup membuka file tersebut dan mengganti teks di dalam tag HTML yang sesuai (seperti alamat, nomor HP, email, deskripsi bio, dan riwayat pekerjaan). Teks sudah dikelompokkan dengan komentar yang sangat rapi dan mudah dipelajari.

---

## Hubungi Pengembang
Jika Anda membutuhkan bantuan teknis lebih lanjut mengenai kustomisasi website ini, hubungi tim pengembang web Anda. Semoga portofolio profesional ini sukses membantu Anda meraih peluang karier terbaik!
