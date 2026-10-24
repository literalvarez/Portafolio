// Shared bits for every version: content, nav, theme toggle, scroll reveals.
(function () {
  const root = document.documentElement;
  const assets = root.dataset.assets || 'assets/';
  const home = root.dataset.home || '';   // set on sub-pages so nav links point back to the home page
  const dock = 'dock' in root.dataset;     // pages with the floating contact dock drop LinkedIn/Email from the nav

  const site = {
    name: 'Tomas Alvarez',
    title: 'Game Designer',
    links: {
      resume: 'https://canva.link/gnh4h8pgqpoa1g2',
      linkedin: 'https://www.linkedin.com/in/gdtomasalvarez/',
      email: 'mailto:tomas1alvares@gmail.com',
      itch: 'https://literalvarez.itch.io'
    },
    projects: [
      // Details below come from the project pages on the current Wix site
      { title: 'Atomic Overdrive', genre: '3D Third Person Online Racing Game', role: 'Level Designer & Project Manager', img: 'atomic.jpg', href: '#',
        team: '6 people', duration: '6 months',
        summary: 'Play as a Rollbot racing three laps through the retro-futuristic city of Atomaville. Magnetic spherical wheels let you stick to any surface: jump between walls, drift along ceilings and find your own path regardless of gravity.',
        highlights: ['Built a spline-based track creation pipeline from 2D SVG layouts', 'Designed and balanced the race track and lobby through constant playtesting', 'Led a team of 6 audio collaborators and composed 2 songs'],
        tools: ['Unity', 'FMOD', 'HacknPlan', 'Illustrator', 'Unity VFX & Shader Graph', 'Maya'] },
      { title: 'SAPO', genre: 'Top-Down 3D Bullet Hell Boss Fight', role: 'Combat Designer & Programmer', img: 'sapo.png', href: '#',
        team: '4 people', duration: '4 months',
        summary: 'Play as Jaime the frog and defeat the Yakuza Crane by dodging and attacking with your poisonous tongue. Built around aggressive play: stay close to the boss, stack poison and avoid its attacks.',
        highlights: ['Combat that rewards staying close, flipping the usual bullet hell strategy', 'Boomerang projectile that hits on the way out and back', 'Composed the menu and battle soundtrack and implemented audio'],
        tools: ['FMOD', 'Illustrator', 'Unity VFX & Shader Graph'] },
      { title: 'The Last Beat', genre: '2D Top-Down Rhythm Survivor Shooter', role: 'Solo Developer & Composer', img: 'lastbeat.png', href: '#', contain: true,
        team: 'Solo project', duration: '1 month',
        summary: 'A rhythm shooter where dashing, shooting and reloading only work on the beat. The music speeds up as you survive, new enemies arrive every minute, and upgrades help you keep up.',
        highlights: ['Rhythm-based combat system synced to the music', 'Progressive difficulty tuned through playtesting', 'Composed a 4-to-the-floor soundtrack that rises in BPM'],
        tools: ['Unity'] }
    ],
    // Playground / passion projects. Media, in order of preference: a YouTube id (`yt`), a SoundCloud track/playlist (`sc`), an itch.io `link`, or an MP3 (`audio`, in /assets).
    playground: [
      { id: 'away', home: false, type: 'Music', title: 'Away', from: 'Atomic Overdrive', use: 'Title screen theme', img: 'atomic.jpg', audio: '', yt: 'S2U2jHfkpVc',
        text: 'One of two songs I composed and produced for Atomic Overdrive, written for the title screen.' },
      { id: 'runner', type: 'Music', title: 'Runner', from: 'Atomic Overdrive', use: 'Lobby theme', img: 'atomic.jpg', audio: '', yt: 'FarF1LeNlQE',
        text: 'The second Atomic Overdrive track, playing in the lobby while racers get ready.' },
      { id: 'sapo-menu', type: 'Music', title: 'Menu', from: 'SAPO', use: 'Menu theme', img: 'sapo.png', audio: '', yt: 'eI7mKubUIAI',
        text: 'Part of the musical identity I helped define for SAPO, one of its two core tracks.' },
      { id: 'sapo-battle', home: false, type: 'Music', title: 'Battle', from: 'SAPO', use: 'Boss fight theme', img: 'sapo.png', audio: '', yt: 'Acw1nw_gjHw',
        text: 'The track behind the fight with the Yakuza Crane, composed, mixed and mastered for the boss battle.' },
      { id: 'last-beat', type: 'Music', title: 'The Last Beat OST', from: 'The Last Beat', use: 'Full soundtrack', img: 'lastbeat.png', audio: '',
        sc: 'https://api.soundcloud.com/playlists/1713625641', scLink: 'https://soundcloud.com/literalvarez/sets/beat-down-ost', cover: 'https://i1.sndcdn.com/artworks-aAYozybH5YA75yZz-ULlB0Q-t500x500.jpg',
        text: 'A 4-to-the-floor electronic soundtrack where every track rises in BPM and intensity, driving the rhythm-based combat.' },
      { id: 'last-chance-visualizer', type: 'Visuals', title: 'Last Chance', from: 'TERAL', use: 'Audio-reactive visualizer', img: 'https://i.ytimg.com/vi/tKdTHfgZb6M/maxresdefault.jpg', audio: '', yt: 'tKdTHfgZb6M',
        text: 'Exploration of TouchDesigner and audio-reactive visuals, in a visualizer for Last Chance, a track I released under my artist name TERAL.' },
      { id: 'drum-machine', type: 'Experiments', title: 'Drum Machine + Piano', from: 'Unity · FMOD', use: 'Interactive instrument', img: 'https://i.ytimg.com/vi/L3kxfLVc4HI/maxresdefault.jpg', audio: '', yt: 'L3kxfLVc4HI',
        text: 'An interactive drum machine and piano I built in Unity, with all the sound driven through FMOD.' },
      // Game jam games: shown as itch.io cards (img = still for the home scroller, cover = what the Playground page shows)
      { id: 'moonless-night', type: 'Game jams', title: 'Moonless Night', from: 'AMIX Game Jam 2026', use: '2D top-down survival', img: 'jams/moonless-night.jpg', cover: 'jams/moonless-night.gif', link: 'https://saraqgames.itch.io/moonless-night', role: 'Game Design, Code, VFX & Lighting', team: 'with _saraqg & seuhans',
        text: 'Read the signals that warn where the UFOs are coming from to avoid being abducted, while dodging the snails that never stop following you.' },
      { id: 'my-lover-is-a-storm', type: 'Game jams', title: 'My Lover Is A Storm', from: 'Brackeys Game Jam 2024.2', use: 'Bullet hell · Visual novel', img: 'jams/my-lover-is-a-storm.png', link: 'https://fuann.itch.io/my-lover-is-a-storm', role: 'Game Design, Audio & Programming', team: 'with Fuan & dreimer64', pixel: true,
        text: 'A chaotic bullet hell where you chase after the one who got away, with visual novel scenes between battles where your choices decide the fate of your love.' }
    ],
    skills: [
      { name: 'Design', sub: 'Systems, combat, levels', icon: '<path d="M12 3l2.6 5.6L20 9.3l-4 4 1 5.7-5-2.8-5 2.8 1-5.7-4-4 5.4-.7z"/>' },
      { name: 'Programming', sub: 'Unity, Unreal, C#', icon: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>' },
      { name: 'Art', sub: 'UI, 2D & 3D assets', icon: '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r="1.2"/><circle cx="14.5" cy="9" r="1.2"/><path d="M12 20.5c-1.5 0-2-1.3-1-2.3s.3-2.7-1.2-2.7"/>' },
      { name: 'Production', sub: 'Scope, planning, teams', icon: '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M9 3v4M15 3v4"/>' }
    ]
  };
  window.SITE = site;

  /* ---------- Theme ---------- */
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches;
  window.isDarkTheme = isDark;
  const announce = () => window.dispatchEvent(new CustomEvent('themechange', { detail: { dark: isDark() } }));
  mq.addEventListener?.('change', () => { if (!root.dataset.theme) announce(); });

  /* ---------- Nav ---------- */
  const icons = {
    moon: '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
    sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };
  const nav = document.createElement('header');
  nav.className = 'nav';
  nav.innerHTML = `
    <a class="logo" href="${home}#top"><span class="logo-mark"><img src="${assets}logo-64.png" alt="" width="36" height="36"></span><span>${site.name}</span></a>
    <nav class="nav-links">
      <a href="${home}#work" class="hide-sm">Work</a>
      <a href="${home}#about" class="hide-sm">About</a>
      ${root.dataset.playground ? `<a href="${root.dataset.playground}" class="hide-sm">Playground</a>` : ""}
      <a href="${site.links.resume}" target="_blank" rel="noopener">Resume</a>
      ${dock ? "" : `<a href="${site.links.linkedin}" target="_blank" rel="noopener" class="hide-sm">LinkedIn</a>`}
      ${dock ? "" : `<a href="${site.links.email}">Email</a>`}
      <button class="theme-toggle" aria-label="Toggle light/dark mode">${icons.moon}${icons.sun}</button>
    </nav>`;
  document.body.prepend(nav);
  nav.querySelector('.theme-toggle').addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    announce();
  });
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Standard sections (about + projects + footer) ---------- */
  const skillCard = (s, i) => `
    <div class="skill reveal" data-delay="${i + 1}">
      <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></div>
      <h3>${s.name}</h3><span>${s.sub}</span>
    </div>`;
  const projectCard = (p, i) => `
    <a class="project reveal" href="${p.href}">
      <div class="project-media${p.contain ? ' contain' : ''}">
        <img src="${assets}${p.img}" alt="${p.title} key art" loading="lazy">
        <span class="view">View project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 17L17 7M8 7h9v9"/></svg></span>
      </div>
      <div class="project-info">
        <span class="num">0${i + 1}</span>
        <h3>${p.title}</h3>
        <span class="genre">${p.genre}</span>
        <span class="role">${p.role}</span>
      </div>
    </a>`;
  site.html = { skillCard, projectCard };

  window.renderStandard = function (mount) {
    mount.insertAdjacentHTML('beforeend', `
      <section class="about" id="about">
        <div class="wrap about-grid">
          <div>
            <span class="eyebrow reveal">About</span>
            <h2 class="section-title reveal">Fun, cohesive,<br>memorable.</h2>
            <p class="reveal" style="margin-top:24px">Game Designer based in <strong>Vancouver, Canada</strong>, with a passion for creating experiences that are fun, cohesive, and memorable.</p>
            <p class="reveal">Since 2018 I've been building skills across Design, Programming, Art, and Production, because understanding how a game comes together as a whole makes me a better designer for every part of it.</p>
          </div>
          <div class="skills">${site.skills.map(skillCard).join('')}</div>
        </div>
      </section>
      <section class="projects" id="work">
        <div class="wrap">
          <div class="projects-head">
            <div><span class="eyebrow reveal">Selected work</span><h2 class="section-title reveal">Projects</h2></div>
            <span class="count reveal">${site.projects.length} projects</span>
          </div>
          <div class="project-list">${site.projects.map(projectCard).join('')}</div>
        </div>
      </section>`);
  };

  window.renderFooter = function () {
    document.body.insertAdjacentHTML('beforeend', `
      <footer class="foot"><div class="wrap"><span>© ${new Date().getFullYear()} ${site.name}</span><span>Vancouver, Canada</span></div></footer>`);
  };


  /* ---------- Floating contact dock (email, LinkedIn, itch.io) ---------- */
  window.renderContactDock = function () {
    const ico = {
      email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.6 4.77 6V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4z"/></svg>',
      itch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.1 2.6C2.1 3.2.2 5.4.2 6v1c0 1.2 1.2 2.3 2.2 2.3 1.3 0 2.3-1 2.3-2.2 0 1.2 1 2.2 2.2 2.2 1.3 0 2.2-1 2.2-2.2 0 1.2 1.1 2.2 2.3 2.2h.1c1.3 0 2.3-1 2.3-2.2 0 1.2 1 2.2 2.2 2.2 1.3 0 2.2-1 2.2-2.2 0 1.2 1 2.2 2.3 2.2 1 0 2.2-1.1 2.2-2.3V6c0-.6-1.9-2.8-2.9-3.4C17.4 2.3 6.6 2.3 3.1 2.6zm6.7 7.2a2.6 2.6 0 0 1-.4.5 2.6 2.6 0 0 1-1.9.8c-.7 0-1.4-.3-1.9-.8l-.3-.4-.3.4c-.5.5-1.2.8-1.9.8h-.3c-.2 2.5-.2 4.9.1 6.9.5 3.9 3.1 4.6 8.9 4.6s8.4-.7 8.9-4.6c.3-2 .3-4.4.1-6.9h-.3c-.7 0-1.4-.3-1.9-.8l-.3-.4-.3.4c-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-.8a2.6 2.6 0 0 1-.4-.5 2.6 2.6 0 0 1-.4.5c-.5.5-1.2.8-1.9.8h-.1c-.7 0-1.4-.3-1.9-.8a2.6 2.6 0 0 1-.4-.5zm-1.4 2.8c.9 0 1.6 0 2.5 1l.7-.1.7.1c.9-1 1.6-1 2.5-1 .5 0 2.3 0 3.6 3.6l1.4 5c1 3.7-.3 3.8-2 3.8-2.4-.1-3.8-1.9-3.8-3.7-1.4.2-3.4.3-4.8 0 0 1.8-1.4 3.6-3.8 3.7-1.7 0-3-.1-2-3.8l1.4-5c1.3-3.6 3.1-3.6 3.6-3.6zM12 14.4s-2.3 2.1-2.7 2.8l1.5-.1v1.3h2.4v-1.3l1.5.1c-.4-.7-2.7-2.8-2.7-2.8z"/></svg>'
    };
    const items = [
      ['email', site.links.email, 'Email me'],
      ['linkedin', site.links.linkedin, 'LinkedIn'],
      ['itch', site.links.itch, 'itch.io']
    ];
    document.body.insertAdjacentHTML('beforeend', `<nav class="contact-dock" aria-label="Contact">${items.map(([k, href, label]) =>
      `<a href="${href}" ${k === 'email' ? '' : 'target="_blank" rel="noopener"'} aria-label="${label}" data-tip="${label}">${ico[k]}</a>`).join('')}</nav>`);
  };

  /* ---------- Reveal on scroll ---------- */
  window.initReveal = function () {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  };

  window.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
})();
