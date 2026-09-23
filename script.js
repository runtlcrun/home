/* ==========================================================================
   script.js — logika halaman. Biasanya NGGAK perlu diedit.
   Yang dilakukan file ini:
   - membuat slider, kolase, kartu event, frame sosmed dari data.js
   - ganti bahasa ID / EN (pilihan disimpan di browser pengunjung)
   - menandai menu yang sedang aktif saat scroll
   - menutup menu HP setelah link diklik
   ========================================================================== */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Bahasa ---------- */
  let lang = "id";
  try {
    const saved = localStorage.getItem("tlc-lang");
    if (saved === "id" || saved === "en") lang = saved;
  } catch (e) { /* localStorage bisa diblokir; abaikan */ }

  const esc = (v) =>
    String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Nilai bisa berupa teks biasa atau { id: "...", en: "..." }
  const pick = (val) => (val && typeof val === "object" ? val[lang] || val.id || "" : val || "");
  const t = (key) => (I18N[lang] && I18N[lang][key] != null ? I18N[lang][key] : (I18N.id[key] != null ? I18N.id[key] : key));

  /* ---------- HOME: slider ---------- */
  let carousel = null;

  function buildHero() {
    const slides = SITE.heroSlides || [];
    const inner = $("#heroSlides");
    const dots = $("#heroIndicators");

    inner.innerHTML = slides.map((s, i) =>
      `<div class="carousel-item${i === 0 ? " active" : ""}">` +
        `<img class="hero-slide-img" data-slide="${i}" src="${esc(s.src)}" alt="" decoding="async"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>` +
      `</div>`
    ).join("");

    dots.innerHTML = slides.map((s, i) =>
      `<button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}"` +
      `${i === 0 ? ' class="active" aria-current="true"' : ""} aria-label="${i + 1} / ${slides.length}"></button>`
    ).join("");

    if (slides.length < 2) {
      dots.hidden = true;
      $("#heroArrows").hidden = true;
    } else if (window.bootstrap) {
      carousel = new bootstrap.Carousel($("#heroCarousel"), {
        interval: 5500,
        ride: reducedMotion ? false : "carousel",
        pause: "hover",
        touch: true
      });
    }
  }

  function updateHeroAlts() {
    (SITE.heroSlides || []).forEach((s, i) => {
      const img = $(`.hero-slide-img[data-slide="${i}"]`);
      if (img) img.alt = pick(s.alt);
    });
  }

  /* ---------- HOME: kolase 3 foto ---------- */
  function renderCollage() {
    const photos = (SITE.collage || []).slice(0, 3);
    $("#heroCollage").innerHTML = photos.map((p) =>
      `<figure class="collage-tile">` +
        `<img src="${esc(p.src)}" alt="${esc(pick(p.alt))}" decoding="async">` +
        (pick(p.caption) ? `<figcaption>${esc(pick(p.caption))}</figcaption>` : "") +
      `</figure>`
    ).join("");
  }

  /* ---------- EVENT: kartu ---------- */
  function renderEvents() {
    const grid = $("#eventGrid");
    const list = SITE.events || [];

    if (!list.length) {
      grid.innerHTML = `<div class="col-12"><p class="section-lead mb-0">${esc(t("events.empty"))}</p></div>`;
      return;
    }

    grid.innerHTML = list.map((ev) => {
      const logo = ev.logo
        ? `<img src="${esc(ev.logo)}" alt="${esc(ev.name)}" loading="lazy" decoding="async" data-fallback="${esc(ev.name)}">`
        : `<span class="event-initials">${esc(ev.name)}</span>`;
      const memberHtml = (ev.members && ev.members.length)
        ? `<div class="event-members">${ev.members.map(ig =>
            `<a href="https://instagram.com/${esc(ig)}" target="_blank" rel="noopener" class="event-member-handle">@${esc(ig)}</a>`
          ).join("")}</div>`
        : "";

      const inner =
        `<div class="event-logo">${logo}</div>` +
        `<div class="event-body">` +
          `<h3>${esc(ev.name)}</h3>` +
          (ev.location ? `<p class="event-meta">${esc(ev.location)}</p>` : "") +
          memberHtml +
        `</div>`;

      return `<div class="col"><div class="event-card">${inner}</div></div>`;
    }).join("");
  }

  // Kalau logo event gagal dimuat -> ganti dengan nama event (teks)
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!img || img.tagName !== "IMG" || !img.closest(".event-logo")) return;
    const span = document.createElement("span");
    span.className = "event-initials";
    span.textContent = img.dataset.fallback || "";
    img.replaceWith(span);
  }, true);

  /* ---------- KONTAK: frame sosmed + tombol kontak ---------- */

  // Script embed resmi hanya boleh dari domain Meta (keamanan)
  const EMBED_HOSTS = ["instagram.com", "threads.com", "threads.net", "facebook.com", "facebook.net"];
  function safeScriptSrc(src) {
    try {
      const u = new URL(src.indexOf("//") === 0 ? "https:" + src : src);
      const ok = u.protocol === "https:" && EMBED_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith("." + h));
      return ok ? u.href : null;
    } catch (e) { return null; }
  }

  // Tempel kode embed resmi (blockquote + script) dari Instagram / Threads ke dalam frame
  function mountEmbed(host, html) {
    const srcs = [];
    const clean = String(html).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) => {
      const s = m.match(/\bsrc=["']([^"']+)["']/i);
      if (s) srcs.push(s[1]);
      return "";
    });
    host.innerHTML = clean;

    const process = () => { if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); };
    srcs.forEach((src) => {
      const url = safeScriptSrc(src);
      if (!url) return;
      if ($$("script[data-embed-src]").some((s) => s.dataset.embedSrc === url)) { process(); return; }
      const s = document.createElement("script");
      s.async = true; s.src = url; s.dataset.embedSrc = url; s.onload = process;
      document.body.appendChild(s);
    });
  }

  function socialFrame(key, icon, title) {
    const s = SITE[key];
    if (!s || !s.url) return "";
    const body = s.embedHtml && String(s.embedHtml).trim()
      ? `<div class="social-embed" data-embed="${key}"></div>`
      : `<a class="social-fallback" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">` +
          `<span class="social-handle">${esc(s.handle)}</span>` +
          `<span class="social-hint"><span data-i18n="social.open">${esc(t("social.open"))}</span> <i class="bi bi-arrow-up-right" aria-hidden="true"></i></span>` +
        `</a>`;
    return `<div class="col-md-6"><article class="social-frame">` +
      `<header class="social-head">` +
        `<span class="social-icon" aria-hidden="true"><i class="bi ${icon}"></i></span>` +
        `<div class="social-who"><strong>${esc(title)}</strong><span>${esc(s.handle)}</span></div>` +
        `<a class="btn btn-tlc btn-sm" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" data-i18n="social.follow">${esc(t("social.follow"))}</a>` +
      `</header>` +
      `<div class="social-body">${body}</div>` +
    `</article></div>`;
  }

  // Dipanggil SEKALI saat halaman dibuka (supaya embed nggak ke-reset saat ganti bahasa).
  // Label yang berubah bahasa memakai atribut data-i18n.
  function renderSocials() {
    $("#socialFrames").innerHTML =
      socialFrame("instagram", "bi-instagram", "Instagram") +
      socialFrame("threads", "bi-threads", "Threads");

    ["instagram", "threads"].forEach((key) => {
      const s = SITE[key];
      const host = $(`[data-embed="${key}"]`);
      if (s && host && s.embedHtml) mountEmbed(host, s.embedHtml);
    });

    const wa = SITE.whatsapp, mail = SITE.email;
    const links = [];
    if (wa && wa.url) {
      links.push(`<a class="contact-link" href="${esc(wa.url)}" target="_blank" rel="noopener noreferrer">` +
        `<i class="bi bi-whatsapp" aria-hidden="true"></i><span><small data-i18n="contact.wa">${esc(t("contact.wa"))}</small><strong>${esc(wa.label || wa.url)}</strong></span></a>`);
    }
    if (mail && mail.address) {
      links.push(`<a class="contact-link" href="mailto:${esc(mail.address)}">` +
        `<i class="bi bi-envelope" aria-hidden="true"></i><span><small data-i18n="contact.mail">${esc(t("contact.mail"))}</small><strong>${esc(mail.address)}</strong></span></a>`);
    }
    $("#contactRow").innerHTML = links.join("");
  }

  /* ---------- FOOTER: link sosmed ---------- */
  function renderFooterSocials() {
    const ul = $("#footerLinks");
    $$("li[data-social]", ul).forEach((li) => li.remove());
    [["instagram", "Instagram"], ["threads", "Threads"]].forEach(([key, label]) => {
      const s = SITE[key];
      if (!s || !s.url) return;
      const li = document.createElement("li");
      li.dataset.social = key;
      li.innerHTML = `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${label} <i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>`;
      ul.appendChild(li);
    });
  }

  /* ---------- Terapkan bahasa ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    updateHeroAlts();
    renderCollage();
    renderEvents();
  }

  $$(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      try { localStorage.setItem("tlc-lang", lang); } catch (e) { /* abaikan */ }
      applyLang();
    });
  });

  /* ---------- Menu aktif saat scroll ---------- */
  function setupScrollSpy() {
    const links = $$('#navMenu .nav-link[href^="#"]');
    const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((s) => io.observe(s));
  }

  /* ---------- Tutup menu HP setelah klik ---------- */
  function setupMobileMenu() {
    const menu = $("#navMenu");
    if (!menu || !window.bootstrap) return;
    $$(".nav-link", menu).forEach((a) => {
      a.addEventListener("click", () => {
        const inst = bootstrap.Collapse.getInstance(menu);
        if (inst && menu.classList.contains("show")) inst.hide();
      });
    });
  }

  /* ---------- Jam digital (pojok kanan atas) ---------- */
  function setupClock() {
    const cfg = SITE.clock;
    const item = $("#navClockItem");
    if (!item) return;
    if (!cfg || cfg.enabled === false) { item.hidden = true; return; }

    $("#navClockCity").textContent = cfg.label || "";

    const opts = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    if (cfg.hour12 === false) opts.hourCycle = "h23"; else opts.hour12 = true;
    let fmt;
    try {
      fmt = new Intl.DateTimeFormat("en-US", Object.assign({ timeZone: cfg.timeZone || "Asia/Jakarta" }, opts));
    } catch (e) {
      fmt = new Intl.DateTimeFormat("en-US", opts); // zona waktu salah tulis -> pakai jam perangkat
    }

    const timeEl = $("#navClockTime");
    const tick = () => {
      const now = new Date();
      timeEl.textContent = fmt.format(now);
      timeEl.setAttribute("datetime", now.toISOString());
    };
    tick();
    setInterval(tick, 1000);
  }


  /* ---------- LEADERBOARD ---------- */
  function renderLeaderboard(sortKey) {
    const lb = SITE.leaderboard;
    if (!lb || !lb.data) return;

    const updatedEl = document.getElementById("lbUpdated");
    if (updatedEl) updatedEl.textContent = (t("lb.updated") || "Updated:") + " " + lb.updatedAt;

    const data = [...lb.data].sort((a, b) => {
      if (sortKey === "runs")    return b.runs - a.runs;
      if (sortKey === "pace") {
        const toSec = (p) => { const [m,s] = p.split(":").map(Number); return m * 60 + s; };
        return toSec(a.pace) - toSec(b.pace); // lower pace = faster = better
      }
      return b.km - a.km; // default: distance
    });

    const medal = ["🥇","🥈","🥉"];
    const tbody = document.getElementById("lbBody");
    if (!tbody) return;

    tbody.innerHTML = data.map((m, i) => {
      const rank = i + 1;
      const isTop = rank <= 3;
      return `<tr>
        <td class="lb-rank${isTop ? " top" : ""}">${medal[i] || rank}</td>
        <td class="lb-name">${esc(m.name)}</td>
        <td class="lb-val${sortKey === "km" || !sortKey ? " highlight" : ""}">${m.km} km</td>
        <td class="lb-val${sortKey === "runs" ? " highlight" : ""}">${m.runs}</td>
        <td class="lb-val">${m.longest} km</td>
        <td class="lb-val${sortKey === "pace" ? " highlight" : ""}">${esc(m.pace)} /km</td>
        <td class="lb-val${m.elev ? "" : " lb-muted"}">${m.elev ? m.elev + " m" : "--"}</td>
      </tr>`;
    }).join("");

    // Sort buttons
    document.querySelectorAll(".lb-sort").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.sort === (sortKey || "km"));
      btn.onclick = () => renderLeaderboard(btn.dataset.sort);
    });
  }

  /* ---------- ABOUT: Member Floating Bubbles ---------- */
  function renderMemberBubbles() {
    const stage = $("#memberBubbleStage");
    if (!stage) return;
    const members = SITE.members || [];
    if (!members.length) return;

    const MIN = 48, MAX = 90;
    const bubbles = members.map((m) => {
      const size = MIN + Math.floor(Math.random() * (MAX - MIN + 1));
      const el = document.createElement("div");
      el.className = "mbubble";
      el.style.width = el.style.height = size + "px";
      el.style.fontSize = (size * 0.4) + "px";
      el.style.zIndex = Math.floor(Math.random() * 5) + 1;

      const inner = m.photo
        ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy">`
        : `<div class="mbubble-placeholder"><i class="bi bi-person-fill"></i></div>`;

      el.innerHTML = inner;

      const tip = document.createElement("div");
      tip.className = "mbubble-tip";
      tip.innerHTML = `${esc(m.name)}<span>@${esc(m.ig)}</span>`;
      el.appendChild(tip);

      el.addEventListener("click", () => {
        window.open("https://instagram.com/" + encodeURIComponent(m.ig), "_blank", "noopener");
      });

      stage.appendChild(el);

      const w = stage.clientWidth || 380;
      const h = stage.clientHeight || 380;
      return {
        el, size,
        x: size / 2 + Math.random() * (w - size),
        y: size / 2 + Math.random() * (h - size),
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      };
    });

    function tick() {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        const r = b.size / 2;
        if (b.x - r < 0)   { b.x = r;   b.vx = Math.abs(b.vx); }
        if (b.x + r > w)   { b.x = w-r; b.vx = -Math.abs(b.vx); }
        if (b.y - r < 0)   { b.y = r;   b.vy = Math.abs(b.vy); }
        if (b.y + r > h)   { b.y = h-r; b.vy = -Math.abs(b.vy); }
        b.el.style.left = (b.x - b.size / 2) + "px";
        b.el.style.top  = (b.y - b.size / 2) + "px";
      });
      requestAnimationFrame(tick);
    }
    if (!reducedMotion) tick();
    else {
      // Posisi static kalau prefer-reduced-motion
      bubbles.forEach((b) => {
        b.el.style.left = (b.x - b.size / 2) + "px";
        b.el.style.top  = (b.y - b.size / 2) + "px";
      });
    }
  }

  /* ---------- Mulai ---------- */
  $("#year").textContent = new Date().getFullYear();
  buildHero();
  renderLeaderboard();
  renderMemberBubbles();
  renderFooterSocials();
  renderSocials();
  applyLang();
  setupScrollSpy();
  setupMobileMenu();
  setupClock();
})();