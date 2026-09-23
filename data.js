/* ==========================================================================
   data.js  —  SEMUA KONTEN YANG SERING KAMU UPDATE ADA DI SINI
   --------------------------------------------------------------------------
   Kamu nggak perlu buka index.html / script.js untuk update rutin.
   Cukup edit file ini, simpan, commit ke GitHub. Selesai.

   Isi file ini:
   0) SITE.clock                     -> jam digital di pojok kanan atas (navbar)
   1) SITE.instagram / SITE.threads  -> link & handle sosmed (menu KONTAK)
   2) SITE.whatsapp / SITE.email     -> tombol kontak (menu KONTAK)
   3) SITE.heroSlides                -> foto SLIDER di depan (menu HOME)
   4) SITE.collage                   -> 3 foto KOLASE di sisi kanan (menu HOME)
   5) SITE.events                    -> daftar EVENT yang pernah diikuti (menu EVENT)
   6) I18N                           -> semua teks ID / EN (judul, paragraf, dll)

   Tips: kalau ada teks yang mengandung tanda kutip ganda ("), tulis \" atau
   pakai tanda kutip tunggal (') di dalamnya. Jangan hapus koma & kurung.
   ========================================================================== */

const SITE = {

  /* ------------------------------------------------------------------------
     (0) JAM DIGITAL di navbar (pojok kanan atas), jalan per detik.
     enabled  : true = tampil, false = sembunyikan
     label    : nama kota yang ditampilkan
     timeZone : zona waktu kota itu (WIB = "Asia/Jakarta", WITA = "Asia/Makassar",
                WIT = "Asia/Jayapura"). Jam yang tampil selalu jam kota ini,
                bukan jam perangkat pengunjung.
     hour12   : true = 06:58:25 PM, false = 18:58:25
     ---------------------------------------------------------------------- */
  clock: {
    enabled: true,
    label: "Tangerang",
    timeZone: "Asia/Jakarta",
    hour12: true
  },

  /* ------------------------------------------------------------------------
     (1) SOSMED — dipakai di menu KONTAK
     url      : link profil kamu
     handle   : teks yang ditampilkan
     embedUrl : (OPSIONAL) isi kalau mau menampilkan 1 postingan langsung di
                dalam "frame". Kosongkan ("") kalau mau tampilan kartu link.
                Contoh Instagram : "https://www.instagram.com/p/KODE_POST/embed"
                Contoh Threads   : "https://www.threads.com/@akun/post/KODE_POST/embed"
                (Kalau frame-nya kosong/diblok browser, hapus isinya -> kembali ke kartu link.)
     ---------------------------------------------------------------------- */
instagram: {
  handle: "@teenagelowcost_rc",
  url: "https://www.instagram.com/teenagelowcost_rc/",   // pastikan sesuai akun kamu
  embedHtml: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/Ddn1oPZBnYj/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/Ddn1oPZBnYj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/Ddn1oPZBnYj/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by MARCHAND HYPE STATION (@marchand.id)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`
},
threads: {
  handle: "@teenagelowcost_rc",
  url: "https://www.threads.com/@teenagelowcost_rc",
  embedHtml: `<blockquote class="text-post-media" data-text-post-permalink="https://www.threads.com/@teenagelowcost_rc/post/DdWUl8yiXQz" data-text-post-version="0" id="ig-tp-DdWUl8yiXQz" style=" background:#FFF; border-width: 1px; border-style: solid; border-color: #00000026; border-radius: 16px; max-width:650px; margin: 1px; min-width:270px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"> <a href="https://www.threads.com/@teenagelowcost_rc/post/DdWUl8yiXQz" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%; font-family: -apple-system, BlinkMacSystemFont, sans-serif;" target="_blank"> <div style=" padding: 40px; display: flex; flex-direction: column; align-items: center;"><div style=" display:block; height:32px; width:32px; padding-bottom:20px;"> <svg aria-label="Threads" height="32px" role="img" viewBox="0 0 192 192" width="32px" xmlns="http://www.w3.org/2000/svg"> <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" /></svg></div><div style=" font-size: 15px; line-height: 21px; color: #000000; font-weight: 600; "> View on Threads</div></div></a></blockquote>
<script async src="https://www.threads.com/embed.js"></script>`
},

  /* ------------------------------------------------------------------------
     (2) KONTAK LANGSUNG — kosongkan url/address kalau nggak mau ditampilkan
     WhatsApp: format https://wa.me/62812xxxxxxx  (tanpa +, tanpa 0 di depan)
     ---------------------------------------------------------------------- */
  whatsapp: {
    label: "+62 819-9754-7273",                             // GANTI
    url: "https://wa.me/6281997547273"                      // GANTI
  },
  email: {
    address: "runtlcrun51@gmail.com"                             // GANTI
  },

  /* ------------------------------------------------------------------------
     (3) SLIDER DEPAN (menu HOME) — foto besar yang gantian otomatis
     Taruh foto di folder assets/photos/, lalu tulis nama file-nya di "src".
     Tambah / hapus slide bebas (minimal 1). Ukuran ideal: landscape ~1600x1000.
     "alt" = deskripsi foto (untuk screen reader), boleh 2 bahasa.
     ---------------------------------------------------------------------- */
  heroSlides: [
    { src: "assets/photos/slide-1.jpeg", alt: { id: "Anggota klub lari bareng di pagi hari", en: "Club members running together in the morning" } },
    { src: "assets/photos/slide-2.jpeg", alt: { id: "Kumpul sebelum start lari", en: "Gathering before the run" } },
    { src: "assets/photos/slide-3.jpeg", alt: { id: "Foto bareng setelah finish", en: "Group photo after the finish" } }
  ],

  /* ------------------------------------------------------------------------
     (4) KOLASE FOTO (menu HOME, sisi kanan) — PAS 3 foto
     Foto 1 & 2 = baris atas (kotak), foto 3 = baris bawah (lebar).
     "caption" = tulisan kecil di pojok foto (boleh dikosongkan "").
     ---------------------------------------------------------------------- */
  collage: [
    { src: "assets/photos/collage-1.jpeg", alt: { id: "Foto kolase 1", en: "Collage photo 1" }, caption: { id: "satu jersey", en: "one jersey" } },
    { src: "assets/photos/collage-2.svg", alt: { id: "Foto kolase 2", en: "Collage photo 2" }, caption: { id: "lari santai", en: "easy run" } },
    { src: "assets/photos/collage-3.jpg", alt: { id: "Foto kolase 3", en: "Collage photo 3" }, caption: { id: "📍Marchand Hype Station Bintaro", en: "📍Marchand Hype Station Bintaro" } }
  ],

  /* ------------------------------------------------------------------------
     (5) DAFTAR EVENT YANG PERNAH DIIKUTI (menu EVENT)
     Tiap event = 1 kartu. Kartu urut sesuai urutan di sini, 4 kartu per baris
     di layar besar. Klik kartu -> buka halaman event di tab baru.

       name     : nama event                     (wajib)
       url      : link ke halaman event / IG event (wajib supaya bisa diklik)
       location : lokasi / kota                  (opsional)
       distance : jarak yang diikuti, mis. "10K" (opsional)
       date     : bulan / tahun, mis. "Mar 2026" (opsional)
       logo     : path gambar logo event         (opsional)
                  contoh: "assets/events/jakarta-10k.png"
                  kalau dikosongkan, kartu menampilkan nama event sebagai teks.

     Cara tambah event baru: copy 1 blok { ... }, tempel di bawahnya, ganti isinya.
     ⚠️ Semua di bawah ini CONTOH. Ganti dengan event asli kalian.
     ---------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------
     ANGGOTA / MEMBERS — bubble mengambang di section ABOUT
     Tambah member: copy 1 baris, ganti name, ig, photo (kosongkan photo:"" pakai placeholder)
     Taruh foto di assets/members/ ukuran 400x400px WebP/JPG
     ---------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------
     LEADERBOARD — update manual tiap minggu dari Strava Club
     updatedAt : tanggal update terakhir (string bebas)
     data      : array member, urutan bebas (JS yang sort)
       name    : nama athlete
       km      : total distance dalam km (angka)
       runs    : jumlah aktivitas (angka)
       longest : lari terpanjang dalam km (angka)
       pace    : avg pace dalam format "M:SS" (string)
       elev    : elevasi gain dalam meter (angka, 0 kalau "--")
     ---------------------------------------------------------------------- */
  leaderboard: {
    updatedAt: "Sep 2026 · Week 3",
    data: [
      { name: "Aryo Seto",          km: 27.1, runs: 5, longest: 12.0, pace: "5:50", elev: 58  },
      { name: "Raden Mas Goblin",   km: 21.1, runs: 3, longest: 10.4, pace: "5:27", elev: 15  },
      { name: "Ismet Djailani",     km: 20.2, runs: 2, longest: 15.0, pace: "7:49", elev: 31  },
      { name: "Achmad Hafidz",      km: 20.0, runs: 1, longest: 20.0, pace: "5:09", elev: 11  },
      { name: "Kevin Octo Pratama", km: 16.1, runs: 2, longest: 9.1,  pace: "6:29", elev: 124 },
      { name: "Azhar Wijaya",       km: 14.2, runs: 2, longest: 8.2,  pace: "6:42", elev: 15  },
      { name: "Sultan Ucok",        km: 13.1, runs: 2, longest: 6.5,  pace: "6:52", elev: 0   },
      { name: "Dini Safitri",       km: 13.0, runs: 3, longest: 8.0,  pace: "7:19", elev: 11  },
      { name: "Tiahayu Aulia",      km: 11.5, runs: 2, longest: 8.5,  pace: "7:17", elev: 0   },
      { name: "Arief Suryana Putra",km: 10.5, runs: 3, longest: 5.1,  pace: "6:31", elev: 58  },
      { name: "Ajid Asad",          km: 10.5, runs: 2, longest: 5.5,  pace: "9:31", elev: 23  },
      { name: "Herdianto Rosa",     km: 10.4, runs: 2, longest: 5.2,  pace: "7:37", elev: 14  },
      { name: "Nicko Ferdinand",    km: 10.1, runs: 1, longest: 10.1, pace: "6:24", elev: 12  },
      { name: "Naufal Aqshal",      km: 10.0, runs: 2, longest: 5.0,  pace: "8:26", elev: 7   },
      { name: "Agung Tranata",      km: 9.3,  runs: 2, longest: 5.0,  pace: "7:19", elev: 6   },
      { name: "Silvia A.",          km: 7.0,  runs: 1, longest: 7.0,  pace: "8:30", elev: 0   },
      { name: "Ikmal Maulana",      km: 7.0,  runs: 2, longest: 5.0,  pace: "6:47", elev: 60  },
      { name: "Awand Hadiningrat",  km: 6.8,  runs: 2, longest: 5.1,  pace: "6:55", elev: 4   },
      { name: "Seto Makmur",        km: 6.3,  runs: 2, longest: 5.0,  pace: "7:20", elev: 19  },
      { name: "Dicky Cipta Pradana",km: 6.0,  runs: 1, longest: 6.0,  pace: "6:52", elev: 12  },
    ]
  },

  members: [
    { name: "Ridho", ig: "mrastufff",   photo: "assets/members/ridho.jpeg" },
    { name: "Feriras",        ig: "m_feriras",   photo: "" },
    { name: "Aryo",           ig: "aryooo_s",    photo: "" },
    { name: "Nana",           ig: "nanashoerya", photo: "" },
    { name: "Niki",           ig: "acuniky_",    photo: "" },
    { name: "Susiologi",      ig: "susiologi",   photo: "" }
  ],

  events: [
    { name: "Garmin Run Marathon Series 20 September 2026", location: "BSD, Banten", url: "https://jakim.id/eng/", logo: "assets/events/garminrun-logo.webp", members: ["m_feriras"]},
    { name: "Pocari Sweat Bandung 2026",    location: "Bandung, Jawa Barat", url: "https://example.com", logo: "assets/events/pocarilombok.png", members: ["aryooo_s", "nanashoerya", "acuniky_", "susiologi"]},
    { name: "Maybank Marathon",       location: "Gianyar, Bali", url: "https://example.com", logo: "assets/events/maybank.png", members: ["susiologi"] },
    { name: "Tangerang 10K 2026",       location: "Tangerang Kota, Banten", url: "https://jakim.id/eng/", logo: "assets/events/tng102026.jpg" },
    { name: "Jakarta Running Festival",        location: "Jakarta, DKI Jakarta", url: "https://example.com", logo: "assets/events/jrf2025.jpeg" },
    { name: "Coast To Coast",        location: "Kota, Provinsi", url: "https://example.com", logo: "assets/events/ctc.webp" },
    { name: "Contoh City Marathon",    location: "Kota, Provinsi", url: "https://example.com", logo: "assets/events/jrf2025.jpeg" },
    { name: "Contoh Trail Run",        location: "Kota, Provinsi", url: "https://example.com", logo: "" },
    { name: "Contoh Charity Run",      location: "Kota, Provinsi", url: "https://example.com", logo: "" }
  ]
};


/* ==========================================================================
   (6) TEKS DUA BAHASA — id = Indonesia, en = English
   Edit teks di sebelah kanan tanda ":" saja. Nama key (sebelah kiri) jangan diubah.
   ========================================================================== */
const I18N = {
  id: {
    "meta.title": "teenagelowcost — klub lari buat siapa aja",
    "skip": "Lewati ke konten",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.events": "Event",
    "nav.contact": "Kontak",
    "nav.toggle": "Buka menu",
    "nav.lang": "Bahasa",

    /* MENU HOME */
    "hero.carousel": "Foto-foto klub",
    "hero.prev": "Foto sebelumnya",
    "hero.next": "Foto berikutnya",
    "hero.tagline": "Klub lari buat siapa aja. Gear seadanya, pace bebas — yang penting kamu lari.",
    "hero.cta1": "Ikut lari bareng",
    "hero.cta2": "Lihat event",
    "chip1.l": "untuk",  "chip1.v": "siapa aja",
    "chip2.l": "pace",   "chip2.v": "bebas",
    "chip3.l": "gear",   "chip3.v": "seadanya",
    "tag.top": "harga lari:",
    "tag.big": "gratis*",
    "tag.note": "*sepatu mahal nggak wajib",

    /* MENU ABOUT */
    "nav.leaderboard": "Leaderboard",
    "lb.title": "Siapa yang paling rajin minggu ini.",
    "lb.sub": "Data dari Strava Club · diupdate manual tiap minggu.",
    "lb.sortby": "Urutkan:",
    "lb.athlete": "Athlete",
    "lb.km": "Distance",
    "lb.runs": "Runs",
    "lb.longest": "Longest",
    "lb.pace": "Avg. Pace",
    "lb.elev": "Elev. Gain",
    "lb.updated": "Update:",
    "members.label": "anggota kita",
    "about.title": "Lari itu nggak harus mahal.",
    "about.p1": "TeenageLowCost adalah sebuah komunitas lari yang ramah. Komunitas ini dimulai pada bulan Februari 2025 di Tangerang, Indonesia. Pendirinya adalah Muhammad Ridho Alfatih (@mrastufff). ",
    "about.p2": "Komunitas ini percaya bahwa olahraga lari adalah untuk siapa saja, bahkan jika Anda tidak memiliki perlengkapan yang mahal. Siapa pun boleh bergabung—baik pelari pemula maupun yang sudah berpengalaman. TeenageLowCost biasanya berlari di sekitar Tangerang. Beberapa rute favoritnya adalah Alam Sutera Loop, Mozia Loop, Karawaci Loop, dan Benteng Reborn Loop. Para anggota berlatih bersama, berkembang selangkah demi selangkah, dan menjalin pertemanan baru. Mereka juga melakukan latihan trail running (lari lintas alam) di Sentul, Bogor, untuk menjadi lebih kuat dan membangun daya tahan di medan yang berbeda. Hal yang membuat TeenageLowCost spesial adalah semangatnya yang sederhana dan inklusif. Namanya bermakna bahwa Anda tidak membutuhkan anggaran besar untuk berlari—cukup niat dan motivasi untuk memulai. Di komunitas ini, setiap pelari itu berharga, dan setiap kemajuan sekecil apa pun selalu dirayakan.",
    "kit.title": "starter kit",
    "kit.1": "Sepatu yang ada di rumah",
    "kit.2": "Kaos apa aja yang nyaman",
    "kit.3": "Botol minum yang kita punya",
    "kit.4": "Niat buat datang",
    "kit.note": "Sisanya menyusul pelan-pelan.",

    /* MENU EVENT */
    "events.title": "Event yang pernah kita ikutin.",
    "events.sub": "Bukan lemari piala. Cuma daftar hadir — klik kartu buat buka halaman event-nya.",
    "events.empty": "Daftar event segera menyusul.",
    "events.newtab": "(buka di tab baru)",

    /* MENU KONTAK */
    "contact.title": "Ikutan lari bareng.",
    "contact.sub": "Cari kita di sosmed, atau kirim pesan langsung.",
    "social.follow": "Follow",
    "social.open": "Buka profil",
    "contact.wa": "WhatsApp",
    "contact.mail": "Email",

    /* FOOTER */
    "footer.tag": "siapa aja boleh lari. gear murah, semangat jalan terus.",
    "footer.rights": "hak cipta dilindungi"
  },

  en: {
    "meta.title": "teenagelowcost — a running club for anyone",
    "skip": "Skip to content",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.events": "Events",
    "nav.contact": "Contact",
    "nav.toggle": "Open menu",
    "nav.lang": "Language",

    "hero.carousel": "Club photos",
    "hero.prev": "Previous photo",
    "hero.next": "Next photo",
    "hero.tagline": "A running club for anyone. Budget gear, any pace — just show up and run.",
    "hero.cta1": "Join a run",
    "hero.cta2": "See events",
    // "chip1.l": "for",    "chip1.v": "anyone",
    // "chip2.l": "pace",   "chip2.v": "your own",
    // "chip3.l": "gear",   "chip3.v": "budget",
    // "tag.top": "price of running:",
    // "tag.big": "free*",
    // "tag.note": "*fancy shoes not required",

    "nav.leaderboard": "Leaderboard",
    "lb.title": "This week's top runners.",
    "lb.sub": "Data from Strava Club · updated manually every week.",
    "lb.sortby": "Sort by:",
    "lb.athlete": "Athlete",
    "lb.km": "Distance",
    "lb.runs": "Runs",
    "lb.longest": "Longest",
    "lb.pace": "Avg. Pace",
    "lb.elev": "Elev. Gain",
    "lb.updated": "Updated:",
    "members.label": "our members",
    "about.title": "Running doesn't have to be expensive.",
    "about.p1": "TeenageLowCost is a friendly running community. It started in February 2025 in Tangerang, Indonesia. The founder is Muhammad Ridho Alfatih (@mrastufff).",
    "about.p2": "This community believes that running is for everyone, even if you don’t have expensive gear. Anyone can join—beginners or experienced runners. TeenageLowCost usually runs around Tangerang. Some favorite routes are Alam Sutera Loop, Mozia Loop, Karawaci Loop, and Benteng Reborn Loop. Members train together, improve step by step, and make new friends. They also do trail running training in Sentul, Bogor, to get stronger and build endurance on different terrain. What makes TeenageLowCost special is the simple and inclusive spirit. The name means you don’t need a big budget to run—just the motivation to start. In this community, every runner matters, and every progress is celebrated.",
    "kit.title": "starter kit",
    "kit.1": "The shoes you already own",
    "kit.2": "Any comfy t-shirt",
    "kit.3": "A water bottle from your kitchen",
    "kit.4": "The will to show up",
    "kit.note": "The rest can come slowly.",

    "events.title": "Events we've shown up for.",
    "events.sub": "Not a trophy shelf. Just an attendance list — click a card to open the event page.",
    "events.empty": "Event list coming soon.",
    "events.newtab": "(opens in a new tab)",

    "contact.title": "Come run with us.",
    "contact.sub": "Find us on socials, or message us directly.",
    "social.follow": "Follow",
    "social.open": "Open profile",
    "contact.wa": "WhatsApp",
    "contact.mail": "Email",

    "footer.tag": "anyone can run. cheap gear, big spirit.",
    "footer.rights": "all rights reserved"
  }
};
