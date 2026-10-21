// Shared behaviour for project case-study pages.
// Usage: initProjectPage({ gallery: [{ t: 'Title', c: 'Caption', src: '../assets/...' }, ...] })
window.initProjectPage = function ({ gallery = [] } = {}) {
  renderFooter();
  renderContactDock();
  renderVersionPill('v2b-halftone-bold');
  initReveal();

  // ---------- Lazy YouTube embeds: a thumbnail until clicked ----------
  document.querySelectorAll('.yt').forEach(b => {
    b.insertAdjacentHTML('afterbegin', `<img src="https://i.ytimg.com/vi/${b.dataset.id}/hqdefault.jpg" alt="" loading="lazy"><span class="pl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></span>`);
    b.addEventListener('click', () => {
      if (b.classList.contains('on')) return;
      b.classList.add('on');
      b.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0" title="${b.getAttribute('aria-label')}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    });
  });

  // ---------- Image gallery (arrows, swipe, arrow keys, click to enlarge) ----------
  const stage = document.getElementById('stage');
  if (stage && gallery.length) {
    const shots = gallery;
    shots.forEach(s => { const im = new Image(); im.src = s.src; });   // preload
    const img = stage.querySelector('img');
    const count = stage.querySelector('.count');
    const capT = document.querySelector('.caption b'), capC = document.querySelector('.caption span');
    const bar = document.querySelector('.bar i');
    let cur = -1;
    function go(i) {
      i = (i + shots.length) % shots.length;
      if (i === cur) return;
      const first = cur < 0; cur = i;
      const swap = () => { img.src = shots[i].src; img.alt = shots[i].t; img.classList.remove('leaving'); };
      if (first) swap(); else { img.classList.add('leaving'); setTimeout(swap, 220); }
      count.textContent = `${i + 1} / ${shots.length}`;
      capT.textContent = shots[i].t; capC.textContent = shots[i].c;
      bar.style.width = ((i + 1) / shots.length * 100) + '%';
    }
    stage.querySelector('.prev').addEventListener('click', e => { e.stopPropagation(); go(cur - 1); });
    stage.querySelector('.next').addEventListener('click', e => { e.stopPropagation(); go(cur + 1); });
    let sx = null;
    stage.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    stage.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); sx = null; });
    const lb = document.getElementById('lightbox');
    stage.addEventListener('click', () => { lb.querySelector('img').src = shots[cur].src; lb.classList.add('open'); });
    lb.addEventListener('click', () => lb.classList.remove('open'));
    addEventListener('keydown', e => {
      if (e.key === 'Escape') lb.classList.remove('open');
      const r = stage.getBoundingClientRect();
      if ((r.top < innerHeight && r.bottom > 0) || lb.classList.contains('open')) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          go(cur + (e.key === 'ArrowRight' ? 1 : -1));
          if (lb.classList.contains('open')) lb.querySelector('img').src = shots[cur].src;
        }
      }
    });
    go(0);
  }

  // ---------- Section index highlight ----------
  const links = [...document.querySelectorAll('.toc a')];
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); });
  }, { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });

  // ---------- Hero parallax ----------
  const bg = document.querySelector('.p-hero .bg img');
  if (bg && !reducedMotion) {
    addEventListener('scroll', () => { const y = Math.min(scrollY, innerHeight); bg.style.transform = `scale(1.08) translateY(${y * .25}px)`; }, { passive: true });
  }
};
