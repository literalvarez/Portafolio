/* Tools menu: one small button (bottom-left) that opens the prototyping panels (Font lab, Halftone lab).
   Labs register themselves with window.LABS.register(name, { toggle, isOpen, key }).
   Prototype only. Remove the tools.js / font-lab.js / halftone-lab.js script tags from index.html to turn it all off.
   Load this script before the labs. */
(function () {
  const labs = [];
  window.LABS = { register: (name, api) => { labs.push({ name, ...api }); } };

  const css = document.createElement('style');
  css.textContent = `
    .tools-btn { position: fixed; left: 16px; bottom: 16px; z-index: 10000; width: 44px; height: 44px; border-radius: 50%;
      display: grid; place-items: center; cursor: pointer; color: #fff; background: #0B0F24F2;
      border: 1px solid #ffffff2e; box-shadow: 0 12px 30px -12px #000; backdrop-filter: blur(8px); transition: transform .3s, background .2s; }
    .tools-btn:hover, .tools-btn[aria-expanded="true"] { background: #2256F2; }
    .tools-btn[aria-expanded="true"] svg { transform: rotate(45deg); }
    .tools-btn svg { width: 20px; height: 20px; transition: transform .3s; }
    .tools-menu { position: fixed; left: 16px; bottom: 68px; z-index: 10000; min-width: 190px; padding: 6px; border-radius: 12px;
      background: #0B0F24F2; border: 1px solid #ffffff2e; box-shadow: 0 20px 50px -20px #000; backdrop-filter: blur(8px);
      font: 600 13px/1.2 system-ui, sans-serif; color: #fff; }
    .tools-menu[hidden] { display: none; }
    .tools-menu .tm-title { padding: 6px 10px 8px; font-size: 10px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: #ffffff80; }
    .tools-menu button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 9px 10px; border: 0; border-radius: 8px;
      background: none; color: #fff; font: inherit; text-align: left; cursor: pointer; }
    .tools-menu button:hover { background: #ffffff14; }
    .tools-menu i { width: 8px; height: 8px; border-radius: 50%; background: #ffffff33; flex: none; }
    .tools-menu button.on i { background: #5C82F2; box-shadow: 0 0 0 3px #5C82F240; }
    .tools-menu kbd { margin-left: auto; font: 600 11px system-ui, sans-serif; color: #ffffff80; border: 1px solid #ffffff33; border-radius: 5px; padding: 1px 6px; }`;
  document.head.appendChild(css);

  const btn = document.createElement('button');
  btn.className = 'tools-btn';
  btn.setAttribute('aria-label', 'Tools');
  btn.setAttribute('aria-expanded', 'false');
  btn.title = 'Tools';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg>';
  const menu = document.createElement('div');
  menu.className = 'tools-menu';
  menu.hidden = true;
  document.body.append(btn, menu);

  function renderMenu() {
    menu.innerHTML = `<div class="tm-title">Tools</div>` + labs.map((l, i) =>
      `<button data-i="${i}" class="${l.isOpen() ? 'on' : ''}"><i></i>${l.name}${l.key ? `<kbd>${l.key}</kbd>` : ''}</button>`).join('');
  }
  const setOpen = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', open); if (open) renderMenu(); };
  btn.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', e => {
    const b = e.target.closest('button[data-i]'); if (!b) return;
    labs[b.dataset.i].toggle();
    renderMenu();
  });
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.tools-menu, .tools-btn')) setOpen(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setOpen(false);
    else if (!menu.hidden) requestAnimationFrame(renderMenu);   // keep the on/off dots in sync with keyboard shortcuts
  });
})();
