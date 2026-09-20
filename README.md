# teenagelowcost — landing page

Website klub lari **teenagelowcost**: siapa aja bisa lari, gear nggak harus mahal.
Static site (HTML + CSS + JS + Bootstrap 5) — nggak perlu CMS, nggak perlu build, bisa langsung di-host gratis di **GitHub Pages**.

## Isi folder

```
teenagelowcost/
├── index.html        <- struktur halaman + komentar per menu (jarang diedit)
├── style.css         <- warna, font, layout (ganti warna aksen di :root)
├── data.js           <- ⭐ SEMUA konten yang sering diupdate ada di sini
├── script.js         <- logika halaman (nggak perlu diedit)
└── assets/
    ├── logo.svg      <- logo + favicon (ganti dengan logo klub asli)
    ├── photos/       <- foto slider & kolase (placeholder, ganti foto asli)
    └── events/       <- (buat sendiri) taruh logo event di sini
```

## Menu di website

| Menu | ID section | Isinya | Diedit di mana |
|------|-----------|--------|----------------|
| Home | `#home` | Slider foto + kolase 3 foto + tagline + stiker | `data.js` → `SITE.heroSlides`, `SITE.collage`, `I18N` (`hero.*`) |
| About | `#about` | Cerita klub + "starter kit" | `data.js` → `I18N` (`about.*`, `kit.*`) |
| Event | `#event` | Daftar event yang pernah diikuti (kartu, klik → halaman event) | `data.js` → `SITE.events` |
| Kontak | `#kontak` | Frame Instagram & Threads, tombol WhatsApp & Email | `data.js` → `SITE.instagram`, `SITE.threads`, `SITE.whatsapp`, `SITE.email` |
| Jam | — | Jam digital di navbar (pojok kanan atas), jalan per detik, pakai zona waktu kota pilihan | `data.js` → `SITE.clock` |
| ID / EN | — | Tombol ganti bahasa (pilihan diingat browser) | `data.js` → `I18N` |

Klik menu di atas → halaman scroll halus ke section-nya. Menu yang aktif ikut menyala saat di-scroll.

## Update rutin (cukup edit `data.js`)

### Tambah event baru
Copy satu blok di `SITE.events`, tempel di bawahnya, ganti isinya:

```js
{ name: "Nama Event", location: "Kota, Provinsi", distance: "10K", date: "Mar 2026",
  url: "https://link-event.com", logo: "assets/events/nama-event.png" },
```
- `url` = link ke halaman event → dipakai saat kartu diklik.
- `logo` boleh dikosongkan (`""`) → kartu menampilkan nama event sebagai teks.
- Logo paling bagus kalau latar transparan/putih, rasio kira-kira 4:3.

### Ganti foto
1. Taruh foto di `assets/photos/` (JPG/WebP, idealnya < 500 KB per foto biar ringan).
2. Ganti nama file di `SITE.heroSlides` (slider) dan `SITE.collage` (3 foto kolase).
3. Slider boleh 1–10 slide. Kolase pas 3 foto.

### Ganti link sosmed
Edit `SITE.instagram`, `SITE.threads`, `SITE.whatsapp`, `SITE.email`.
Mau menampilkan postingan langsung di dalam "frame"? Isi `embedUrl`, contoh Instagram:
`https://www.instagram.com/p/KODE_POST/embed` (kalau kosong → otomatis tampil kartu link).

### Ganti teks / terjemahan
Semua teks ada di `I18N` (`id` = Indonesia, `en` = English). Ubah teks di sebelah kanan `:` saja.

## Deploy gratis ke GitHub Pages

1. Buat repo baru di GitHub (mis. `teenagelowcost`), set **Public**.
2. Upload semua isi folder ini (**`index.html` harus ada di root repo**).
3. Buka **Settings → Pages**.
4. Di **Build and deployment**, pilih **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
5. Tunggu ±1–2 menit. Website live di `https://USERNAME.github.io/teenagelowcost/`.

Setiap kali kamu commit perubahan (mis. update `data.js`), website otomatis ikut ter-update.

## Catatan

- Bootstrap, Bootstrap Icons, dan font (Google Fonts) di-load dari CDN → pengunjung perlu koneksi internet (normal untuk website).
- Data contoh (event "Contoh …", handle `@teenagelowcost`, nomor WhatsApp `0000…`, email `example.com`) **wajib diganti** sebelum publish.
- Warna aksen kuning ada di `style.css` → `--tlc-accent`.
