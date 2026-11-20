
/* ==========================================================
   AUDINEE — MOBILE FIRST
   Diseño responsive para móvil, tablet y escritorio.
   Tema monocromo blanco y negro.
   ========================================================== */

:root {
  color-scheme: dark;

  --bg: #000;
  --surface: #0c0c0c;
  --surface-2: #171717;
  --surface-3: #222;
  --line: #262626;
  --line-strong: #4a4a4a;

  --text: #fff;
  --muted: #9a9a9a;
  --faint: #5f5f5f;
  --inv: #000;

  --bg-glass: rgba(0, 0, 0, .88);

  --sidebar-w: 232px;
  --player-h: 84px;
  --mobile-player-h: 64px;
  --mobile-nav-h: 62px;

  --radius: 12px;
  --ease: cubic-bezier(.2, .7, .2, 1);

  --font: "Inter Tight", system-ui, -apple-system,
          "Segoe UI", Arial, sans-serif;
}

/* TEMA CLARO */

@media (prefers-color-scheme: light) {
  :root:not([data-theme="dark"]) {
    color-scheme: light;
    --bg: #fff;
    --surface: #f7f7f7;
    --surface-2: #eee;
    --surface-3: #e2e2e2;
    --line: #e0e0e0;
    --line-strong: #a8a8a8;
    --text: #000;
    --muted: #666;
    --faint: #9c9c9c;
    --inv: #fff;
    --bg-glass: rgba(255,255,255,.9);
  }
}

:root[data-theme="light"] {
  color-scheme: light;
  --bg: #fff;
  --surface: #f7f7f7;
  --surface-2: #eee;
  --surface-3: #e2e2e2;
  --line: #e0e0e0;
  --line-strong: #a8a8a8;
  --text: #000;
  --muted: #666;
  --faint: #9c9c9c;
  --inv: #fff;
  --bg-glass: rgba(255,255,255,.9);
}

/* RESET */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  scrollbar-color: var(--line-strong) transparent;
  scrollbar-width: thin;
}

body {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--text);
  font: 400 15px/1.55 var(--font);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--text);
  color: var(--inv);
}

button,
input {
  font: inherit;
  color: inherit;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  flex-shrink: 0;
}

:focus-visible {
  outline: 2px solid var(--text);
  outline-offset: 3px;
  border-radius: 4px;
}

h1 {
  font-weight: 700;
  letter-spacing: -.045em;
  line-height: 1.05;
  font-size: clamp(2rem, 7vw, 4rem);
  text-wrap: balance;
}

h2 {
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: -.02em;
}

/* ==========================================================
   ESTRUCTURA PRINCIPAL
   ========================================================== */

.app-shell {
  display: grid;
  grid-template-columns: var(--sidebar-w) minmax(0, 1fr);
  min-height: 100vh;
  min-height: 100dvh;
}

.sidebar {
  position: fixed;
  inset: 0 auto var(--player-h) 0;
  width: var(--sidebar-w);
  padding: 28px 14px;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: var(--bg);
  z-index: 5;
}

.brand,
.mobile-brand {
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: -.05em;
  padding: 0 12px;
}

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius);
  color: var(--muted);
  text-align: left;
  transition: .2s;
}

.nav-link:hover {
  color: var(--text);
  background: var(--surface);
}

.nav-link.active {
  color: var(--text);
  background: var(--surface-2);
  font-weight: 600;
}

.nav-link.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  bottom: 9px;
  width: 2px;
  border-radius: 2px;
  background: var(--text);
}

.main-content {
  grid-column: 2;
  min-width: 0;
  padding: 0 clamp(20px, 4vw, 56px)
           calc(var(--player-h) + 48px);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  background: var(--bg-glass);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.mobile-brand {
  display: none;
}

.top-arrows {
  display: flex;
  gap: 8px;
  margin-right: auto;
}

.top-arrows button {
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--muted);
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .9rem;
}

.profile-avatar {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--text);
  color: var(--inv);
  font-weight: 700;
}

/* ==========================================================
   PANTALLAS
   ========================================================== */

.view {
  display: none;
  min-width: 0;
}

.view.active-view {
  display: block;
}

.page-intro {
  padding: 30px 0;
}

.page-intro p {
  color: var(--muted);
  margin-top: 12px;
}

/* ==========================================================
   HERO
   ========================================================== */

.hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: 32px;
  padding: 44px 0 60px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 44px;
}

.hero-copy p {
  color: var(--muted);
  max-width: 44ch;
  margin: 20px 0 30px;
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.primary-btn,
.install-btn {
  min-height: 46px;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 600;
}

.primary-btn {
  background: var(--text);
  color: var(--inv);
  border: 1px solid var(--text);
}

.install-btn {
  border: 1px solid var(--line-strong);
}

.primary-btn:active,
.install-btn:active {
  transform: scale(.97);
}

/* DISCO */

.hero-art {
  display: grid;
  place-items: center;
}

.art-disc {
  position: relative;
  width: min(100%, 300px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid var(--text);
  display: grid;
  place-items: center;
  overflow: hidden;

  background:
    conic-gradient(
      from 30deg,
      transparent 0 18%,
      color-mix(in srgb, var(--text) 14%, transparent) 25%,
      transparent 32% 68%,
      color-mix(in srgb, var(--text) 14%, transparent) 75%,
      transparent 82%
    ),
    repeating-radial-gradient(
      circle,
      transparent 0 7px,
      var(--line) 7px 8px
    );

  animation: spin 24s linear infinite;
}

.disc-center {
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--text);
  box-shadow:
    0 0 0 10px var(--bg),
    0 0 0 11px var(--line-strong);
  position: relative;
}

.disc-center::after {
  content: "";
  position: absolute;
  inset: 44%;
  border-radius: 50%;
  background: var(--bg);
}

/* ==========================================================
   SECCIONES Y TARJETAS
   ========================================================== */

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.search-results-heading {
  margin-top: 44px;
}

.text-btn {
  color: var(--muted);
  font-size: .9rem;
}

.result-label {
  margin: 32px 0 16px;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.quick-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  padding: 20px;
  text-align: left;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  transition: .2s;
}

.quick-card:hover {
  border-color: var(--text);
}

.quick-card b {
  font-weight: 600;
}

.quick-card small {
  color: var(--muted);
  font-size: .85rem;
}

.track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px 16px;
  min-width: 0;
}

.genre-card {
  min-height: 100px;
  padding: 24px 18px;
  text-align: left;
  font-weight: 700;
  font-size: 1.1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  transition: .2s;
}

.genre-card:hover {
  background: var(--text);
  color: var(--inv);
  border-color: var(--text);
}

/* ==========================================================
   CANCIONES Y VÍDEOS
   ========================================================== */

.track-card,
.track-item,
.video-card,
.card {
  display: block;
  min-width: 0;
  text-align: left;
  border-radius: var(--radius);
  padding: 8px;
  margin: -8px;
  transition: background .2s;
}

.track-card:hover,
.video-card:hover {
  background: var(--surface);
}

.track-card img,
.video-card img,
.track-thumb,
.thumb {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  border-radius: var(--radius);
  background: var(--surface-2);
}

.video-card img {
  aspect-ratio: 16 / 9;
}

.track-card h3,
.track-title,
.video-card h3 {
  font-size: .95rem;
  font-weight: 600;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.track-card p,
.track-channel,
.video-card p {
  color: var(--muted);
  font-size: .85rem;
  margin-top: 3px;
}

.track-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
  min-width: 0;
}

.track-row,
.track-list > * {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  padding: 12px 8px;
  border-bottom: 1px solid var(--line);
}

.track-row img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.track-info {
  min-width: 0;
  flex: 1;
}

.track-info b,
.track-info small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-state {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 48px 15px;
  color: var(--muted);
  text-align: center;
}

.loader {
  width: 24px;
  height: 24px;
  border: 2px solid var(--line);
  border-top-color: var(--text);
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ==========================================================
   BUSCADOR
   ========================================================== */

.search-form {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 6px 6px 18px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  width: 100%;
  max-width: 640px;
  background: var(--surface);
}

.search-form:focus-within {
  border-color: var(--text);
  background: var(--bg);
}

.search-form svg {
  color: var(--muted);
}

.search-form input {
  flex: 1;
  min-width: 0;
  background: none;
  border: 0;
  outline: 0;
  padding: 10px 0;
}

.search-form input::placeholder {
  color: var(--faint);
}

.search-form button {
  flex-shrink: 0;
  padding: 11px 22px;
  border-radius: 999px;
  background: var(--text);
  color: var(--inv);
  font-weight: 600;
}

/* FILTROS */

.music-filters {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 22px 0;
  flex-wrap: wrap;
  min-width: 0;
}

.filter-chip {
  padding: 8px 17px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  white-space: nowrap;
}

.filter-chip.active {
  background: var(--text);
  color: var(--inv);
  border-color: var(--text);
  font-weight: 600;
}

.shorts-toggle {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-left: auto;
  color: var(--muted);
  font-size: .85rem;
  white-space: nowrap;
}

.shorts-toggle input {
  accent-color: var(--text);
}

/* BIBLIOTECA */

.library-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tab {
  padding: 8px 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  white-space: nowrap;
}

.tab.active {
  background: var(--text);
  color: var(--inv);
  border-color: var(--text);
  font-weight: 600;
}

/* ==========================================================
   REPRODUCTOR DE ESCRITORIO
   ========================================================== */

.player-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--player-h);

  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  align-items: center;
  gap: 16px;

  padding: 0 20px;

  background: var(--bg-glass);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-top: 1px solid var(--line);
  z-index: 10;
}

.now-playing {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.mini-cover {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--muted);
  overflow: hidden;
  border: 1px solid var(--line);
}

.mini-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.now-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.now-text b,
.now-text small {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.now-text b {
  font-weight: 600;
  font-size: .9rem;
}

.now-text small {
  color: var(--muted);
  font-size: .8rem;
}

.heart-btn {
  margin-left: auto;
  font-size: 1.3rem;
  color: var(--muted);
  padding: 7px;
}

.heart-btn.active,
.heart-btn.liked {
  color: var(--text);
}

.player-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 22px;
}

.player-controls button {
  color: var(--muted);
  font-size: .8rem;
}

.play-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--text);
  color: var(--inv) !important;
  display: grid;
  place-items: center;
}

.progress-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 560px;
  font-size: .75rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

.progress-track,
.volume-track {
  flex: 1;
  height: 4px;
  background: var(--surface-3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0;
  background: var(--text);
  border-radius: 2px;
}

.player-extra {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: var(--muted);
}

.volume-track {
  flex: none;
  width: 96px;
}

.volume-track > div {
  width: 70%;
  height: 100%;
  background: var(--text);
}

/* ==========================================================
   REPRODUCTOR A PANTALLA COMPLETA
   ========================================================== */

.player-modal {
  position: fixed;
  inset: 0;
  z-index: 30;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding:
    calc(18px + env(safe-area-inset-top, 0px))
    20px
    calc(25px + env(safe-area-inset-bottom, 0px));

  background: var(--bg);
  overflow-y: auto;

  transform: translateY(100%);
  visibility: hidden;

  transition:
    transform .3s var(--ease),
    visibility 0s .3s;
}

.player-modal.open,
.player-modal.active,
.player-modal.show,
.player-modal[aria-hidden="false"] {
  transform: none;
  visibility: visible;
  transition: transform .3s var(--ease);
}

.modal-top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .85rem;
  color: var(--muted);
}

.modal-top button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.3rem;
}

#youtube-player {
  display: none;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: var(--radius);
  overflow: hidden;
}

#youtube-player iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.modal-cover {
  width: min(100%, 420px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--surface-2);
  overflow: hidden;
}

#modal-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-track,
.modal-hint {
  width: 100%;
  max-width: 900px;
}

.modal-track h2 {
  font-size: 1.5rem;
  letter-spacing: -.03em;
}

.modal-track p,
.modal-hint {
  color: var(--muted);
}

.modal-hint {
  font-size: .8rem;
}

#audio-player {
  display: none;
}

/* ==========================================================
   NOTIFICACIONES
   ========================================================== */

.toast {
  position: fixed;
  left: 50%;
  bottom: calc(var(--player-h) + 16px);
  transform: translate(-50%, 12px);

  padding: 10px 20px;
  border-radius: 999px;

  background: var(--text);
  color: var(--inv);

  font-size: .88rem;
  font-weight: 500;

  opacity: 0;
  pointer-events: none;
  transition: .2s;
  z-index: 40;
}

.toast.show,
.toast.visible,
.toast.active {
  opacity: 1;
  transform: translate(-50%, 0);
}

/* NAVEGACIÓN MÓVIL */

.mobile-nav {
  display: none;
}

/* ==========================================================
   ICONOS Y CONTROLES
   ========================================================== */

button svg,
.cover-play svg {
  display: block;
  flex-shrink: 0;
  transition: transform .2s ease, opacity .2s ease;
}

button:hover svg {
  transform: scale(1.06);
}

button:active {
  transform: scale(.97);
}

button.liked,
#current-favorite.liked,
#modal-favorite.liked {
  color: var(--text);
}

.track-card .cover {
  position: relative;
  overflow: hidden;
}

.track-card .cover-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.4);
  opacity: 0;
  transition: opacity .25s ease;
}

.list-track button {
  border: 0;
  background: transparent;
  padding: 9px;
}

.list-track img {
  object-fit: cover;
  border-radius: 8px;
}

#current-favorite svg,
#modal-favorite svg {
  width: 21px;
  height: 21px;
}

#current-favorite.liked svg,
#modal-favorite.liked svg {
  fill: currentColor;
}

/* ==========================================================
   TABLET
   ========================================================== */

@media (max-width: 1100px) {

  .quick-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .track-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hero {
    gap: 20px;
  }

  .art-disc {
    width: 230px;
  }
}

/* ==========================================================
   MÓVIL — DISEÑO PRINCIPAL
   ========================================================== */

@media (max-width: 860px) {

  :root {
    --player-h: 0px;
    --mobile-player-h: 64px;
    --mobile-nav-h: 62px;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-size: 14px;
  }

  /* ESTRUCTURA */

  .app-shell {
    display: block;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
  }

  .sidebar {
    display: none !important;
  }

  .main-content {
    display: block;
    width: 100%;
    min-width: 0;
    padding:
      0 17px
      calc(
        var(--mobile-player-h) +
        var(--mobile-nav-h) +
        env(safe-area-inset-bottom, 0px) +
        25px
      );
  }

  /* CABECERA */

  .topbar {
    width: 100%;
    min-height: 60px;
    padding:
      calc(10px + env(safe-area-inset-top, 0px))
      0
      12px;

    gap: 10px;
  }

  .mobile-brand {
    display: block;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 800;
  }

  .top-arrows {
    display: none;
  }

  .profile {
    gap: 7px;
    font-size: .8rem;
  }

  .profile-avatar {
    width: 31px;
    height: 31px;
  }

  /* TITULOS */

  h1 {
    font-size: clamp(2.1rem, 10vw, 3.2rem);
    line-height: 1.02;
  }

  h2 {
    font-size: 1.15rem;
  }

  .page-intro {
    padding: 24px 0 22px;
  }

  .page-intro p {
    margin-top: 9px;
    font-size: .9rem;
  }

  /* HERO */

  .hero {
    display: block;
    padding: 34px 0 28px;
    margin-bottom: 32px;
    border-bottom: 1px solid var(--line);
  }

  .hero-copy p {
    font-size: .95rem;
    line-height: 1.6;
    margin: 15px 0 22px;
  }

  .hero-art {
    display: none;
  }

  .hero-actions {
    display: flex;
    flex-direction: row;
    gap: 9px;
  }

  .primary-btn,
  .install-btn {
    min-height: 44px;
    padding: 11px 17px;
    font-size: .85rem;
  }

  /* SECCIONES */

  .section-heading {
    margin-bottom: 15px;
  }

  .search-results-heading {
    margin-top: 35px;
  }

  .text-btn {
    font-size: .8rem;
  }

  /* SELECCIONES */

  .quick-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .quick-card {
    min-height: 100px;
    padding: 14px;
    gap: 5px;
    border-radius: 11px;
  }

  .quick-card b {
    font-size: .95rem;
  }

  .quick-card small {
    font-size: .75rem;
    line-height: 1.4;
  }

  /* CANCIONES */

  .track-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 13px;
    width: 100%;
  }

  .track-card,
  .video-card,
  .card {
    padding: 5px;
    margin: -5px;
    min-width: 0;
  }

  .track-card img,
  .track-thumb,
  .thumb {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 9px;
  }

  .video-card img {
    aspect-ratio: 16 / 9;
  }

  .track-card h3,
  .track-title,
  .video-card h3 {
    font-size: .86rem;
    margin-top: 8px;
    line-height: 1.35;
  }

  .track-card p,
  .track-channel,
  .video-card p {
    font-size: .75rem;
    margin-top: 3px;
  }

  /* GÉNEROS */

  .genre-card {
    min-height: 85px;
    padding: 16px 13px;
    font-size: .95rem;
    border-radius: 10px;
  }

  /* BUSCADOR */

  .search-form {
    max-width: none;
    width: 100%;
    padding: 5px 5px 5px 13px;
    gap: 8px;
    border-radius: 14px;
  }

  .search-form svg {
    width: 18px;
    height: 18px;
  }

  .search-form input {
    font-size: .85rem;
    padding: 11px 0;
  }

  .search-form button {
    padding: 10px 15px;
    font-size: .8rem;
    border-radius: 10px;
  }

  /* FILTROS HORIZONTALES */

  .music-filters {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 8px;

    width: calc(100% + 17px);
    margin: 18px 0;
    padding: 2px 17px 8px 0;

    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .music-filters::-webkit-scrollbar {
    display: none;
  }

  .filter-chip {
    flex-shrink: 0;
    padding: 8px 15px;
    font-size: .8rem;
  }

  .shorts-toggle {
    flex-shrink: 0;
    margin-left: 3px;
    font-size: .78rem;
  }

  .result-label {
    margin: 25px 0 15px;
  }

  /* BIBLIOTECA */

  .library-tabs {
    overflow-x: auto;
    padding-bottom: 5px;
    margin-bottom: 18px;
  }

  .tab {
    padding: 8px 16px;
    font-size: .83rem;
  }

  .track-row,
  .track-list > * {
    gap: 11px;
    padding: 12px 4px;
  }

  .track-row img {
    width: 47px;
    height: 47px;
  }

  /* REPRODUCTOR MINI */

  .player-bar {
    position: fixed;

    left: 8px;
    right: 8px;

    bottom:
      calc(
        var(--mobile-nav-h) +
        env(safe-area-inset-bottom, 0px) +
        5px
      );

    height: var(--mobile-player-h);

    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;

    padding: 6px 10px;

    background: var(--surface-2);
    border: 1px solid var(--line-strong);
    border-radius: 12px;

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    z-index: 20;
  }

  .now-playing {
    gap: 10px;
    min-width: 0;
  }

  .mini-cover {
    width: 45px;
    height: 45px;
    border-radius: 7px;
  }

  .now-text {
    flex: 1;
    min-width: 0;
  }

  .now-text b {
    font-size: .83rem;
    line-height: 1.3;
  }

  .now-text small {
    font-size: .73rem;
  }

  .heart-btn {
    padding: 5px;
    margin-left: 0;
    font-size: 1.2rem;
  }

  .player-center {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0;
  }

  .player-controls {
    gap: 0;
  }

  .player-controls button:not(.play-btn) {
    display: none;
  }

  .play-btn {
    width: 43px;
    height: 43px;
    font-size: .9rem !important;
  }

  .progress-row,
  .player-extra {
    display: none !important;
  }

  /* NAVEGACIÓN INFERIOR */

  .mobile-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    height: calc(
      var(--mobile-nav-h) +
      env(safe-area-inset-bottom, 0px)
    );

    padding:
      5px 12px
      env(safe-area-inset-bottom, 0px);

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    background: var(--bg-glass);
    border-top: 1px solid var(--line);

    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    z-index: 19;
  }

  .mobile-nav button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;

    min-width: 0;
    color: var(--muted);

    font-size: .69rem;
    font-weight: 500;
  }

  .mobile-nav button svg {
    width: 21px;
    height: 21px;
  }

  .mobile-nav button.active {
    color: var(--text);
    font-weight: 700;
  }

  /* TOAST */

  .toast {
    bottom: calc(
      var(--mobile-nav-h) +
      var(--mobile-player-h) +
      env(safe-area-inset-bottom, 0px) +
      18px
    );

    max-width: calc(100% - 35px);
    white-space: nowrap;
    font-size: .8rem;
  }

  /* REPRODUCTOR COMPLETO */

  .player-modal {
    gap: 20px;
    padding:
      calc(14px + env(safe-area-inset-top, 0px))
      22px
      calc(25px + env(safe-area-inset-bottom, 0px));
  }

  .modal-top {
    flex-shrink: 0;
    font-size: .78rem;
  }

  .modal-cover {
    width: min(82vw, 420px);
    max-width: 100%;
    flex-shrink: 0;
    margin: auto 0 5px;
    border-radius: 12px;
  }

  .modal-track {
    width: 100%;
  }

  .modal-track h2 {
    font-size: 1.35rem;
  }

  .modal-track p {
    font-size: .85rem;
  }

  .modal-hint {
    font-size: .76rem;
  }

  #youtube-player {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
    flex-shrink: 0;
  }
}

/* ==========================================================
   MÓVILES PEQUEÑOS
   ========================================================== */

@media (max-width: 380px) {

  .main-content {
    padding-left: 13px;
    padding-right: 13px;
  }

  .mobile-brand {
    font-size: 1.35rem;
  }

  .quick-card {
    padding: 12px;
  }

  .quick-card b {
    font-size: .86rem;
  }

  .quick-card small {
    font-size: .7rem;
  }

  .track-grid {
    gap: 17px 10px;
  }

  .track-card h3,
  .video-card h3 {
    font-size: .8rem;
  }

  .player-bar {
    left: 5px;
    right: 5px;
    padding: 5px 8px;
  }

  .mini-cover {
    width: 41px;
    height: 41px;
  }

  .now-text b {
    font-size: .77rem;
  }

  .play-btn {
    width: 39px;
    height: 39px;
  }
}

/* ==========================================================
   PANTALLAS GRANDES
   ========================================================== */

@media (min-width: 861px) {

  .mobile-nav {
    display: none !important;
  }

  .mobile-brand {
    display: none;
  }

  .player-bar {
    bottom: 0;
  }
}

/* ==========================================================
   ACCESIBILIDAD
   ========================================================== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
    animation: none !important;
  }
}

/* ==========================================================
   YOUTUBE
   ========================================================== */

#youtube-player {
  display: none;
  width: 100%;
  min-height: 220px;
  overflow: hidden;
  border-radius: 14px;
  background: #000;
}

#youtube-player iframe {
  width: 100%;
  height: 100%;
  min-height: 220px;
  border: 0;
  border-radius: 14px;
}
