/* Halftone lab: a floating panel for tuning the hero's dot field live (edits window.HALFTONE).
   Prototype only. Remove the <script src="halftone-lab.js"> tag from index.html to turn it off.
   Shortcut: H toggles the panel. Settings are remembered in this browser; "Copy settings" gives
   the values to paste into the defaults in index.html. */
(function () {
  const S = window.HALFTONE;
  if (!S) return;   // only the home page has the dot field
  const DEFAULTS = { ...S };
  const KEY = 'halftone-lab';

  // [key, label, min, max, step, format]
  const SLIDERS = [
    ['gap', 'Dot spacing', 6, 40, 1, v => v + 'px'],
    ['size', 'Dot size', .1, .9, .01, v => Math.round(v * 100) + '%'],
    ['freq', 'Wave frequency', .2, 4, .05, v => v.toFixed(2) + '×'],
    ['speed', 'Wave speed', 0, 4, .05, v => v.toFixed(2) + '×'],
    ['contrast', 'Contrast', .5, 5, .05, v => v.toFixed(2)],
    ['calm', 'Calm behind text', 0, 1, .01, v => Math.round(v * 100) + '%'],
    ['lens', 'Cursor lens size', 0, 300, 5, v => v + 'px'],
    ['lensStrength', 'Cursor lens strength', 0, 2, .05, v => v.toFixed(2)],
    ['rippleSpeed', 'Ripple speed', 100, 1200, 10, v => v + 'px/s']
  ];

  let state = { open: false };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY)) || {};
    state.open = !!saved.open;
    if (saved.settings) Object.assign(S, saved.settings);
  } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ open: state.open, settings: S })); } catch (e) {} };

  const css = document.createElement('style');
  css.textContent = `
    .ht-lab { position: fixed; left: 16px; bottom: 72px; z-index: 9999; width: 300px; max-width: calc(100vw - 32px);
      max-height: calc(100vh - 100px); overflow-y: auto; padding: 14px; border-radius: 14px;
      background: #0B0F24F2; color: #fff; border: 1px solid #ffffff2e;
      font: 500 13px/1.3 system-ui, sans-serif; box-shadow: 0 20px 50px -20px #000; backdrop-filter: blur(8px); }
    .ht-lab * { font-family: system-ui, sans-serif; }
    .ht-lab.closed { display: none; }
    .ht-lab .ht-head { display: flex; justify-content: space-between; align-items: center; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; font-size: 11px; }
    .ht-lab .ht-field { margin-top: 11px; }
    .ht-lab .ht-label { display: flex; justify-content: space-between; font-size: 11px; color: #ffffffa8; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; }
    .ht-lab .ht-label b { color: #fff; font-weight: 700; letter-spacing: 0; text-transform: none; }
    .ht-lab input[type=range] { width: 100%; accent-color: #5C82F2; }
    .ht-lab .ht-row { display: flex; gap: 6px; align-items: center; margin-top: 11px; flex-wrap: wrap; }
    .ht-lab .ht-row span { font-size: 11px; color: #ffffffa8; text-transform: uppercase; letter-spacing: .06em; margin-right: auto; }
    .ht-lab button { padding: 6px 10px; border-radius: 8px; border: 1px solid #ffffff33; background: #ffffff14; color: #fff; cursor: pointer; font-size: 13px; }
    .ht-lab button:hover { background: #ffffff2a; }
    .ht-lab button.on { background: #2256F2; border-color: #2256F2; }
    .ht-lab input[type=color] { width: 34px; height: 28px; padding: 0; border: 1px solid #ffffff33; border-radius: 6px; background: none; cursor: pointer; }
    .ht-lab .ht-foot { margin-top: 14px; display: flex; gap: 6px; flex-wrap: wrap; }
    .ht-lab .ht-hint { margin-top: 10px; font-size: 11px; color: #ffffff80; }`;
  document.head.appendChild(css);

  const panel = document.createElement('div');
  panel.className = 'ht-lab';
  panel.innerHTML = `
    <div class="ht-head"><span>Halftone lab</span><button data-a="close" title="H">×</button></div>
    ${SLIDERS.map(([k, label, min, max, step]) => `
      <div class="ht-field">
        <div class="ht-label">${label}<b data-out="${k}"></b></div>
        <input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}">
      </div>`).join('')}
    <div class="ht-row"><span>Grid</span><button data-grid="hex">Hexagon</button><button data-grid="square">Square</button></div>
    <div class="ht-row"><span>Ripples</span><button data-a="ripples"></button></div>
    <div class="ht-row"><span>Colour</span><button data-a="theme-color">Theme</button><input type="color" data-a="color" title="Custom colour"></div>
    <div class="ht-foot"><button data-a="random">Randomize</button><button data-a="copy">Copy settings</button><button data-a="reset">Reset</button></div>
    <div class="ht-hint">Move and click over the hero to try the lens and ripples. Key: H hide.</div>`;
  document.body.appendChild(panel);

  const fmt = Object.fromEntries(SLIDERS.map(s => [s[0], s[5]]));
  function render() {
    panel.querySelectorAll('[data-k]').forEach(i => { i.value = S[i.dataset.k]; });
    panel.querySelectorAll('[data-out]').forEach(o => { o.textContent = fmt[o.dataset.out](S[o.dataset.out]); });
    panel.querySelectorAll('[data-grid]').forEach(b => b.classList.toggle('on', S.grid === b.dataset.grid));
    const rip = panel.querySelector('[data-a="ripples"]');
    rip.textContent = S.ripples ? 'On' : 'Off'; rip.classList.toggle('on', S.ripples);
    panel.querySelector('[data-a="theme-color"]').classList.toggle('on', !S.color);
    panel.querySelector('[data-a="color"]').value = S.color && /^#[0-9a-f]{6}$/i.test(S.color) ? S.color : '#5c82f2';
    panel.classList.toggle('closed', !state.open);
    save();
  }

  panel.addEventListener('input', e => {
    const k = e.target.dataset.k;
    if (k) { S[k] = parseFloat(e.target.value); render(); }
    if (e.target.dataset.a === 'color') { S.color = e.target.value; render(); }
  });
  panel.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.grid) { S.grid = b.dataset.grid; }
    const a = b.dataset.a;
    if (a === 'close') state.open = false;
    if (a === 'ripples') S.ripples = !S.ripples;
    if (a === 'theme-color') S.color = '';
    if (a === 'reset') Object.assign(S, DEFAULTS);
    if (a === 'random') {
      SLIDERS.forEach(([k, , min, max, step]) => {
        if (k === 'calm') return;   // keep the text readable
        S[k] = Math.round((min + Math.random() * (max - min)) / step) * step;
      });
      S.size = Math.min(S.size, .6); S.gap = Math.max(S.gap, 10);
    }
    if (a === 'copy') {
      const pick = Object.fromEntries(Object.keys(DEFAULTS).map(k => [k, typeof S[k] === 'number' ? +S[k].toFixed(2) : S[k]]));
      navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(pick, null, 2));
      b.textContent = 'Copied!'; setTimeout(() => b.textContent = 'Copy settings', 1200);
    }
    render();
  });
  document.addEventListener('keydown', e => {
    if (e.target.closest && e.target.closest('input, textarea')) return;
    if (e.key === 'h' || e.key === 'H') { state.open = !state.open; render(); }
  });

  window.LABS && window.LABS.register('Halftone lab', {
    toggle: () => { state.open = !state.open; render(); },
    isOpen: () => state.open,
    key: 'H'
  });
  render();
})();
