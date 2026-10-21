/* Font lab: a floating panel for trying Google Fonts on titles (--display) and body text (--font).
   Prototype only. Remove the <script src="font-lab.js"> tag from index.html to turn it off.
   Shortcuts: [ / ] cycle title font, { / } (shift) cycle body font, F toggles the panel. */
(function () {
  const TITLE_FONTS = [
    'Archivo', 'Archivo Black', 'Anton', 'Bebas Neue', 'Oswald', 'Space Grotesk', 'Syne', 'Unbounded',
    'Bricolage Grotesque', 'Big Shoulders Display', 'Familjen Grotesk', 'Instrument Sans',
    'Inter Tight', 'Manrope', 'Montserrat', 'Outfit', 'Sora', 'Lexend', 'Rubik', 'Darker Grotesque',
    'Archivo Narrow', 'Barlow Condensed', 'Fjalla One', 'League Spartan', 'Chakra Petch', 'Orbitron',
    'Press Start 2P', 'Silkscreen', 'Rubik Mono One', 'Bungee', 'Monoton', 'Righteous', 'Russo One',
    'DM Serif Display', 'Playfair Display', 'Fraunces', 'Instrument Serif', 'Space Mono', 'JetBrains Mono'
  ];
  const BODY_FONTS = [
    'Archivo', 'Inter', 'DM Sans', 'Manrope', 'Plus Jakarta Sans', 'Outfit', 'Sora', 'Lexend', 'Figtree',
    'Work Sans', 'IBM Plex Sans', 'Space Grotesk', 'Instrument Sans', 'Nunito Sans', 'Rubik', 'Karla',
    'Public Sans', 'Albert Sans', 'Onest', 'Geist', 'Barlow', 'Source Sans 3', 'Poppins', 'Montserrat',
    'Atkinson Hyperlegible', 'Space Mono', 'IBM Plex Mono', 'JetBrains Mono', 'Fraunces', 'Literata'
  ];
  const KEY = 'font-lab';
  const root = document.documentElement;
  const loaded = new Set(['Archivo']);

  function load(name) {
    if (loaded.has(name)) return;
    loaded.add(name);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=' + name.trim().replace(/ /g, '+') +
      ':wght@400;500;600;700;800;900&display=swap';
    // Fonts without the full weight range 404 on that URL, so retry with just the default weight
    link.onerror = () => { link.href = 'https://fonts.googleapis.com/css2?family=' + name.trim().replace(/ /g, '+') + '&display=swap'; };
    document.head.appendChild(link);
  }

  let state = { title: 'Archivo', body: 'Archivo', open: true };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) {}

  function apply() {
    load(state.title); load(state.body);
    root.style.setProperty('--display', `'${state.title}', system-ui, sans-serif`);
    root.style.setProperty('--font', `'${state.body}', system-ui, sans-serif`);
    titleIn.value = state.title; bodyIn.value = state.body;
    panel.classList.toggle('closed', !state.open);
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function step(which, dir) {
    const list = which === 'title' ? TITLE_FONTS : BODY_FONTS;
    const i = list.indexOf(state[which]);
    state[which] = list[(i + dir + list.length) % list.length];
    apply();
  }

  const css = document.createElement('style');
  css.textContent = `
    .font-lab { position: fixed; right: 16px; bottom: 16px; z-index: 9999; width: 300px; max-width: calc(100vw - 32px);
      padding: 14px; border-radius: 14px; background: #0B0F24F2; color: #fff; border: 1px solid #ffffff2e;
      font: 500 13px/1.3 system-ui, sans-serif; box-shadow: 0 20px 50px -20px #000; backdrop-filter: blur(8px); }
    .font-lab * { font-family: system-ui, sans-serif; }
    .font-lab.closed > :not(.fl-head) { display: none; }
    .font-lab .fl-head { display: flex; justify-content: space-between; align-items: center; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; font-size: 11px; }
    .font-lab label { display: block; margin: 12px 0 4px; font-size: 11px; color: #ffffffa8; text-transform: uppercase; letter-spacing: .06em; }
    .font-lab .fl-row { display: flex; gap: 6px; }
    .font-lab input { flex: 1; min-width: 0; padding: 7px 9px; border-radius: 8px; border: 1px solid #ffffff33; background: #ffffff12; color: #fff; font-size: 13px; }
    .font-lab button { padding: 6px 10px; border-radius: 8px; border: 1px solid #ffffff33; background: #ffffff14; color: #fff; cursor: pointer; font-size: 13px; }
    .font-lab button:hover { background: #ffffff2a; }
    .font-lab .fl-foot { margin-top: 12px; display: flex; gap: 6px; flex-wrap: wrap; }
    .font-lab .fl-hint { margin-top: 10px; font-size: 11px; color: #ffffff80; }`;
  document.head.appendChild(css);

  const panel = document.createElement('div');
  panel.className = 'font-lab';
  panel.innerHTML = `
    <div class="fl-head"><span>Font lab</span><button data-a="toggle" title="F">–</button></div>
    <label>Titles</label>
    <div class="fl-row"><button data-a="t-prev">‹</button><input data-f="title" list="fl-title"><button data-a="t-next">›</button></div>
    <label>Descriptions</label>
    <div class="fl-row"><button data-a="b-prev">‹</button><input data-f="body" list="fl-body"><button data-a="b-next">›</button></div>
    <div class="fl-foot"><button data-a="same">Body = title</button><button data-a="copy">Copy CSS</button><button data-a="reset">Reset</button></div>
    <div class="fl-hint">Type any Google Font name + Enter. Keys: [ ] titles, { } descriptions, F hide.</div>
    <datalist id="fl-title">${TITLE_FONTS.map(f => `<option value="${f}">`).join('')}</datalist>
    <datalist id="fl-body">${BODY_FONTS.map(f => `<option value="${f}">`).join('')}</datalist>`;
  document.body.appendChild(panel);
  const titleIn = panel.querySelector('[data-f="title"]');
  const bodyIn = panel.querySelector('[data-f="body"]');

  panel.addEventListener('click', e => {
    const a = e.target.dataset.a;
    if (a === 'toggle') { state.open = !state.open; apply(); }
    if (a === 't-prev') step('title', -1);
    if (a === 't-next') step('title', 1);
    if (a === 'b-prev') step('body', -1);
    if (a === 'b-next') step('body', 1);
    if (a === 'same') { state.body = state.title; apply(); }
    if (a === 'reset') { state.title = state.body = 'Archivo'; apply(); }
    if (a === 'copy') {
      const text = `--font: '${state.body}', system-ui, sans-serif;\n--display: '${state.title}', system-ui, sans-serif;`;
      navigator.clipboard && navigator.clipboard.writeText(text);
      e.target.textContent = 'Copied!'; setTimeout(() => e.target.textContent = 'Copy CSS', 1200);
    }
  });
  panel.addEventListener('change', e => {
    const f = e.target.dataset.f;
    if (f && e.target.value.trim()) { state[f] = e.target.value.trim(); apply(); }
  });

  document.addEventListener('keydown', e => {
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (e.key === '[') step('title', -1);
    else if (e.key === ']') step('title', 1);
    else if (e.key === '{') step('body', -1);
    else if (e.key === '}') step('body', 1);
    else if (e.key === 'f' || e.key === 'F') { state.open = !state.open; apply(); }
  });

  apply();
})();
