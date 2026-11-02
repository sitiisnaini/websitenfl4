# Nusantara Future Leaders 2026 — Website

Website statis satu halaman (HTML, CSS, JavaScript) untuk informasi dan pendaftaran Nusantara Future Leaders 2026.

## Struktur folder

```text
nfl_site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── header-logos.png
    └── nfl-logo.png
```

## Bagian yang paling mudah diedit

### 1. Mengganti tautan pendaftaran

Buka `script.js`, ubah nilai berikut saja:

```js
const REGISTRATION_URL = "https://tautan-pendaftaran-baru";
```

Tautan tersebut digunakan oleh tombol Daftar di header dan tombol Daftar Sekarang di bagian pendaftaran.

### 2. Mengganti foto carousel

Foto carousel saat ini menggunakan foto ilustrasi sementara dari Unsplash. Untuk menggantinya, buka `index.html` dan cari bagian `gallery-slide`. Ganti nilai `src` dengan alamat foto dokumentasi resmi NFL, lalu perbarui `alt` dan caption yang terlihat di bawah foto.

Carousel mempunyai lima slide, berganti otomatis setiap lima detik, dan dapat dikendalikan dengan tombol panah. Jika ingin mengubah jumlah slide, tambahkan atau hapus elemen `.gallery-slide` di `index.html`.

### 3. Mengganti testimoni

Di `index.html`, cari bagian `testimonials-grid`. Untuk setiap kartu, ganti:
- URL foto pada `img src`;
- nama pada elemen `strong`;
- kutipan pada elemen `quote-text`;
- keterangan peserta bila diperlukan.

Nama, foto, dan kutipan yang ada saat ini hanya contoh/placeholder.

### 4. Mengedit konten lainnya

Semua teks Tentang NFL, isu, benefit, timeline, FAQ, sosial media, dan narahubung bisa diedit langsung di `index.html`. Gaya visual dan responsivitas diatur pada `styles.css`.

### 5. Mengganti tautan website NFL

Di `index.html`, cari `https://nflugm.id` pada kolom Terhubung di footer, lalu ubah bila alamat resmi yang digunakan berbeda.

## Menjalankan di komputer

Cara paling mudah: buka `index.html` dengan browser. Untuk pengalaman pengembangan yang lebih baik, gunakan ekstensi Live Server di Visual Studio Code.

## Mengunggah ke GitHub Pages

1. Buat repository GitHub baru.
2. Unggah seluruh isi folder ini (bukan hanya `index.html`).
3. Buka **Settings → Pages**.
4. Pada bagian Build and deployment, pilih **Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`.
5. Simpan. GitHub Pages akan memberikan alamat website setelah proses deploy selesai.

## Mengunggah ke Hostinger atau hosting statis lain

Unggah seluruh isi folder ini ke folder publik website (umumnya `public_html`). Pastikan `index.html`, `styles.css`, `script.js`, dan folder `assets` berada pada struktur yang sama.

## Catatan

- Website ini tidak membutuhkan framework atau proses build.
- Google Fonts dan foto placeholder memerlukan koneksi internet.
- Foto dokumentasi dan testimoni harus diganti dengan materi resmi sebelum website dipublikasikan.
- Detail beasiswa dan informasi pendaftaran sebaiknya disesuaikan dengan ketentuan resmi panitia sebelum tayang.
