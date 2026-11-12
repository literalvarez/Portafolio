// UX portfolio: content and markup. Pages call UX.home(el) or UX.caseStudy(el).
(function () {
  const root = document.documentElement;
  const R = root.dataset.root || '../';            // path back to the site root
  const img = f => `${R}assets/lastcow/${f}`;
  const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';

  const site = {
    name: 'Tomas Alvarez',
    title: 'UX Designer',
    links: {
      resume: 'resume.html',
      resumePdf: `${R}assets/Tomas-Alvarez-Resume.pdf`,
      games: `${R}index.html`,
      linkedin: 'https://www.linkedin.com/in/gdtomasalvarez/',
      email: 'mailto:tomas1alvares@gmail.com'
    },
    skills: [
      ['User research', 'Interviews, findings, personas'],
      ['Wireframing', 'Flows, structure, low-fi'],
      ['UI Design', 'Style guides, components'],
      ['Prototyping', 'Figma, interactive flows']
    ]
  };

  // ---------- Last Cow case study, told with the STAR method (Situation, Task, Action, Result) ----------
  const lc = {
    title: 'LastCow',
    tagline: 'Last tickets. Best prices.',
    summary: 'A mobile app for finding last-minute and discounted tickets to live events.',
    headline: 'Helping people catch live events before they sell out.',
    role: 'I led the UX: research, flows, wireframes, the UI kit, high-fidelity screens and the prototype.',
    meta: [
      ['Role', 'UX/UI Designer'],
      ['Team', '2 designers'],
      ['Time frame', '4 weeks (class project)'],
      ['Methods', 'Survey, interviews, competitor analysis, tree testing, usability testing'],
      ['Discipline', 'UX research, information architecture, UI'],
      ['Platform', 'Mobile, adaptive to tablet']
    ],
    // S
    situation: [
      'People who love live events often hear about them too late, after tickets sell out or the last-minute deals are gone.'
    ],
    // T
    goals: [
      'Spot good deals at a glance',
      'Find events that match your taste',
      'Keep plans in one place'
    ],
    hmw: 'How might we help people catch the events they love, at the right price, before it is too late?',
    // A
    stats: [['25', 'survey responses'], ['5', 'user interviews'], ['3', 'competitor apps']],
    research: 'We started with a survey and one-on-one interviews, and reviewed how Ticketmaster, StubHub and Eventbrite handle discovery and pricing.',
    findings: [
      ['Deals are hard to track', 'There was no easy way to keep an eye on prices and availability.'],
      ['Taste matters', 'People wanted events that fit what they already like, not a long generic list.'],
      ['Timing is everything', 'Many found out about events only after they had sold out.']
    ],
    // the price trend is what sets LastCow apart, so it gets the spotlight
    decision: ['Price trend on every card', 'home.jpg',
      'Without context, people can\'t tell whether a price is good, so they end up checking it again and again.',
      'Each event card shows how the price has moved in the last 24 hours, right next to the starting price.',
      'Good deals stand out while scrolling the feed, and none of the apps we reviewed offered this.'],
    ia: 'Before moving to high fidelity, we ran a tree test in UXtweak to see where people expected to find things. The results led us to reorganize the navigation while changes were still cheap.',
    compare: [['wf-home.jpg', 'home.jpg', 'Home'], ['wf-event.jpg', 'event.jpg', 'Event details'], ['wf-saved.jpg', 'saved.jpg', 'Saved events']],
    atomic: 'The UI was built with Atomic Design. Small atoms like colour, type and icons come together as molecules such as buttons and inputs, which form organisms like event cards and headers, and finally full screens.',
    kitProblem: ['One component had grown so many variants that it became hard to manage.', 'We broke it into smaller modular parts that combine as needed, which made later changes safer.'],
    screens: [
      ['splash.jpg', 'Splash'], ['login.jpg', 'Log in'], ['home.jpg', 'Home'], ['event.jpg', 'Event details'],
      ['saved.jpg', 'Saved events'], ['calendar.jpg', 'Calendar'], ['past.jpg', 'Past events'], ['profile.jpg', 'Profile']
    ],
    // R
    testing: 'Usability testing with five people showed that splitting the calendar into past and upcoming events was confusing. The next step would be replacing it with a dedicated screen for purchased tickets.',
    takeaways: [
      ['Test structure early', 'The tree test reshaped the navigation before any visual work was done.'],
      ['Research is not validation', 'Interviews pointed us in the right direction, but only testing revealed the calendar problem.'],
      ['Keep components small', 'Modular parts made late changes faster and safer.']
    ],
  };

  // ---------- Perfecto Café case study (design file, heuristic evaluation board and class slides) ----------
  const pc = {
    title: 'Perfecto Café',
    tagline: 'Fresh from scratch, easy to find.',
    summary: 'A website redesign for a Vancouver bakery café, focused on a clearer menu.',
    headline: 'Redesigning a café website to improve the customer experience.',
    role: 'Each designer led one page. Mine was the Menu, from heuristic evaluation to high-fidelity design.',
    meta: [
      ['Role', 'UX/UI Designer'],
      ['Team', '3 designers'],
      ['Time frame', '2 weeks (student project)'],
      ['Methods', 'Heuristic evaluation, survey, interviews, competitor analysis, usability testing'],
      ['Discipline', 'UX research, information architecture, UI'],
      ['Platform', 'Desktop website']
    ],
    situation: [
      'Perfecto Café makes great pastries from scratch, but its website didn\'t live up to them. Information was outdated, the navigation was confusing and the menu was hard to browse.'
    ],
    goals: [
      'Make the menu easy to browse',
      'Keep information current',
      'Make key actions clear'
    ],
    research: 'Each of us evaluated the whole website against Nielsen\'s 10 usability heuristics, then we compared our results and backed them up with a survey, interviews and a competitor analysis.',
    findings: [
      ['Little feedback', 'Actions gave no sign that they had worked.'],
      ['Weak error prevention', 'Forms made it easy to make mistakes.'],
      ['Hard to navigate', 'Content was difficult to find.'],
      ['Weak hierarchy', 'The most important actions got lost on the page.']
    ],
    // issues on the Menu page, from the heuristic evaluation notes
    menuIssues: [
      ['Oversized products', 'Very large images meant a lot of scrolling to see only a few items.'],
      ['Broken detail pages', 'Opening a product led to a new tab with broken content.'],
      ['Misleading "View all"', 'The button promised the full list but showed only two sandwiches.'],
      ['Buried actions', 'The custom order button was easy to miss.']
    ],
    decisions: [
      ['A menu you can scan', 'menu.jpg',
        'Huge images and no categories made the menu slow to browse.',
        'Smaller product cards in a grid, grouped by category, each showing the name and price.',
        'Customers can compare items at a glance and find what they want faster.'],
      ['Details in a pop-up', 'popup.jpg',
        'Products opened in a new tab with broken content.',
        'Product details now open in a pop-up on top of the menu.',
        'Customers see the details without losing their place in the menu.'],
      ['Custom orders on the page', 'menu-orders.jpg',
        'Custom requests were hidden behind a small, easy-to-miss button.',
        'A short custom order form now sits at the end of the menu.',
        'Customers can make a request right where they decide what to order.']
    ],
    compare: [['live-menu.jpg', 'Original'], ['wf-menu.jpg', 'Wireframe'], ['menu.jpg', 'Redesign']],
    pages: [['home.jpg', 'Homepage'], ['menu.jpg', 'Menu'], ['location.jpg', 'Location'], ['contact.jpg', 'Contact Us']],
    palette: [
      ['#6B735D', 'Olive', 'Primary'], ['#505646', 'Dark olive', 'Hover'], ['#252821', 'Darker', 'Footer'],
      ['#FBFAF7', 'Cream', 'Background'], ['#F0F1EF', 'Light', 'Surfaces'], ['#1E1E1E', 'Ink', 'Text']
    ],
  };

  // ---------- Re:hab case study (design file and team presentation) ----------
  const rh = {
    title: 'Re:hab',
    tagline: 'Every move matters.',
    summary: 'A rehabilitation app that helps patients keep doing their home exercises until they recover.',
    headline: 'Helping patients stay consistent with home rehabilitation.',
    role: 'I framed the problem through research and ran the usability testing of our prototype.',
    meta: [
      ['Role', 'UX Researcher & Designer'],
      ['Team', '4 designers'],
      ['Time frame', '2-week design sprint'],
      ['Methods', 'User research, design sprint, rapid usability testing'],
      ['Discipline', 'UX research, usability testing, UI'],
      ['Platform', 'Mobile']
    ],
    situation: 'After an injury, patients go home with a recovery plan that often means exercises three times a day for twelve weeks.',
    research: [
      ['The patient', 'Motivation is high in the first week, but the exercises soon start to feel boring and uncomfortable.'],
      ['The physiotherapist', 'They see patients about once a month and can only ask whether the work was done.'],
      ['The tension', 'Nothing visibly changes for weeks, so by week three most people stop.']
    ],
    insight: 'The real problem isn\'t knowing which exercises to do. It\'s staying consistent long enough for recovery to happen.',
    principles: 'So the team designed around three ideas: build a daily routine, make progress visible and keep the physiotherapist in the loop.',
    spotlight: ['Progress you can see', ['progress.jpg', 'congrats.jpg'],
      'Recovery is slow, so patients often feel like nothing is changing.',
      'Weekly progress brings together the streak, session history and adherence rate, and milestones celebrate each step forward.',
      'Every session adds up to something visible, which gives people a reason to come back.'],
    test: 'Rapid usability test in UXtweak · 8 participants · partially connected prototype',
    tasks: [['75%', 'Do or skip an exercise'], ['50%', 'Check-in to progress'], ['100%', 'Find the doctor\'s advice']],
    learned: [
      ['Doctor\'s advice worked', 'Every participant found it, with a median time of 14 seconds.'],
      ['The check-in needs a clearer path', 'Only half of participants made it from the check-in to their progress.']
    ],
    next: 'For the next iteration, we would make the check-in entry point and the hand-off to weekly progress more explicit.',
    screens: [
      ['home.jpg', 'Home'], ['start.jpg', 'Start exercise'], ['steps.jpg', 'Follow the steps'], ['timer.jpg', 'Workout timer'],
      ['checkin-feeling.jpg', 'Daily check-in'], ['checkin-barriers.jpg', 'What got in the way'], ['progress.jpg', 'Weekly progress'],
      ['congrats.jpg', 'Milestone'], ['doctor.jpg', 'Doctor\'s advice']
    ],
    palette: [['#C8F57A', 'Electric lime', 'Actions, progress'], ['#1B1B1B', 'Near black', 'Text, structure'], ['#FFFFFF', 'White', 'Cards'], ['#F4F4F0', 'Off-white', 'Background'], ['#E9F8CF', 'Pale green', 'Fills']],
    takeaways: [
      ['Name the real problem', 'Focusing on consistency rather than knowledge shaped every feature.'],
      ['Test early, even if rough', 'A partially connected prototype was enough to show where the flow broke.'],
      ['Let the numbers guide you', 'Task success pointed straight at the check-in as the next thing to fix.']
    ]
  };

  // ---------- The Last Beat case study (2026 UI/UX redesign of a 2023 game, from the game design site's page) ----------
  const tlb = {
    title: 'The Last Beat',
    tagline: 'Every move on the beat.',
    headline: 'Redesigning the interface of my rhythm shooter, from Figma to Unity.',
    role: 'I made the game in 2023 with a UI designed by a classmate. In 2026 I went back and redesigned the whole interface myself, then built it in Unity.',
    meta: [
      ['Role', 'UI/UX Designer & Developer'],
      ['Team', 'Solo project'],
      ['Time frame', '2023 original, 2026 redesign'],
      ['Methods', 'UI audit, Figma component library, playtesting'],
      ['Discipline', 'Game UI/UX, visual design, motion'],
      ['Tools', 'Figma, Unity 6, DOTween, FMOD']
    ],
    situation: 'The Last Beat is a 2D top-down rhythm shooter where dashing, shooting and reloading only work on the beat. Runs last five minutes and get faster as the music speeds up, so players have only a split second to read the screen.',
    problems: [
      ['A HUD that was hard to read', 'Time, the beat and the score were spread around the screen, far from where the action happens.'],
      ['An inconsistent look', 'Screens used different fonts, buttons and panels, so the game didn\'t feel like one product.'],
      ['A confusing flow', 'How to play, the death screen and the win screen were scattered across separate places.']
    ],
    stats: [['10', 'screens redesigned'], ['5 min', 'per run'], ['2023 → 2026', 'original to redesign']],
    process: [
      ['Design in Figma', 'Every screen was designed first, on top of a component library with one button style and shared panel outlines.'],
      ['Build in Unity', 'The library was rebuilt as a reusable UI kit, and every screen was assembled from it, with layouts that adapt to any screen shape.'],
      ['Tune through playtests', 'Motion, timing and balance were tuned in-game through rounds of playtesting, with an in-game UI Lab to adjust motion and colours live.']
    ],
    decisions: [
      ['A HUD read at a glance', 'hud', 'Players had to look away from the action to check the time, the beat and their score.',
        'Time, the beat bar and the score sit together at the top centre, with the XP bar along the top edge.',
        'Everything the player needs is in one line of sight, even when the music speeds up.'],
      ['Level-up choices you can compare', 'levelup', 'Players pick an upgrade mid-run, with only seconds before the action starts again.',
        'Each card shows the stat\'s current and new value, with the player\'s stats underneath.',
        'Players can make a quick, informed choice mid-run and get back to the beat.'],
      ['One results screen', 'results', 'Wins and deaths ended on different screens.',
        'One results screen for both, with run stats, name entry, the online leaderboard and clear states while a score is submitted.',
        'Every run ends the same way, so players always know what happened and what to do next.']
    ],
    flow: 'The main menu got simpler too: How to play moved into the pause menu as Controls, so the menu is just Play, Settings, Credits and Quit.',
    feel: [
      ['Motion on the beat', 'Buttons react to hover, press and click, screens animate in and out, and elements pulse with the music.'],
      ['Audio-driven UI', 'Moving the audio to FMOD let the beat clock, the countdown and the UI\'s pulse follow the music exactly.'],
      ['Screen effects', 'A subtle CRT effect and shaders that pulse on the beat tie the interface to the game world.']
    ],
    screens: [['menu', 'Main menu'], ['settings', 'Settings'], ['controls', 'Controls'], ['countdown', 'Countdown'], ['hud', 'HUD'],
      ['nextsong', 'Next song'], ['levelup', 'Level up'], ['pause', 'Pause'], ['credits', 'Credits'], ['results', 'Results']],
    takeaways: [
      ['Small details, big polish', 'Transitions and screen effects make a game feel much more finished.'],
      ['Design the system first', 'A shared component library made ten screens feel like one game.'],
      ['Test it in motion', 'A HUD that works in a mockup still has to work at full speed, on the beat.']
    ],
    play: 'https://literalvarez.itch.io/the-last-beat?secret=Md1Lwz51F91PobHEQXHW7sTA2Y'
  };

  // ---------- Shared pieces ----------
  function nav(here) {
    const home = here === 'home' ? '' : 'index.html';
    document.body.insertAdjacentHTML('afterbegin', `
      <header class="nav">
        <a class="brand" href="${home}#top"><img src="${R}assets/logo-64.png" alt="" width="32" height="32"><span>${site.name}</span></a>
        <nav class="nav-links">
          <a href="${home}#work">Work</a>
          <a href="${home}#about" class="hide-sm">About</a>
          <a href="${site.links.resume}">Resume</a>
        </nav>
      </header>`);
    const n = document.querySelector('.nav');
    const f = () => n.classList.toggle('scrolled', scrollY > 10);
    addEventListener('scroll', f, { passive: true }); f();
  }

  function footer() {
    document.body.insertAdjacentHTML('beforeend', `
      <footer class="foot" id="contact">
        <div class="wrap foot-in">
          <div>
            <h2 class="foot-title">Let's work together</h2>
            <p>Open to UX and UI roles in Vancouver and remote.</p>
          </div>
          <div class="foot-links">
            <a class="btn" href="${site.links.email}">Email me ${arrow}</a>
            <a class="btn ghost" href="${site.links.linkedin}" target="_blank" rel="noopener">LinkedIn ${arrow}</a>
          </div>
        </div>
        <div class="wrap foot-base"><span>© ${new Date().getFullYear()} ${site.name}</span><span>Vancouver, Canada</span></div>
      </footer>`);
  }

  function reveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(e => io.observe(e));
  }

  // screen strips scroll by dragging with the mouse, even when the drag starts on a picture
  function dragScroll() {
    document.querySelectorAll('.screens').forEach(s => {
      let x0 = 0, left0 = 0, down = false, moved = false;
      s.addEventListener('dragstart', e => e.preventDefault());
      s.addEventListener('pointerdown', e => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        down = true; moved = false; x0 = e.clientX; left0 = s.scrollLeft;
      });
      addEventListener('pointermove', e => {
        if (!down) return;
        const dx = e.clientX - x0;
        if (!moved && Math.abs(dx) > 5) { moved = true; s.classList.add('dragging'); }
        if (moved) s.scrollLeft = left0 - dx;
      });
      addEventListener('pointerup', () => { if (down) { down = false; s.classList.remove('dragging'); } });
      // a drag should not also open the lightbox
      s.addEventListener('click', e => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    });
  }

  // click any screen to see it larger
  function lightbox() {
    dragScroll();
    const box = document.createElement('div');
    box.className = 'lb'; box.innerHTML = '<img alt=""><button aria-label="Close">×</button>';
    document.body.appendChild(box);
    const im = box.querySelector('img');
    const close = () => box.classList.remove('open');
    box.addEventListener('click', close);
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    // tall website pages scroll inside the lightbox instead of shrinking to fit
    im.addEventListener('load', () => box.classList.toggle('tall', im.naturalHeight > im.naturalWidth * 1.6));
    document.querySelectorAll('[data-zoom]').forEach(el => el.addEventListener('click', () => {
      im.src = el.dataset.zoom; im.alt = el.getAttribute('alt') || ''; box.scrollTop = 0; box.classList.add('open');
    }));
  }

  const phone = (f, alt, cls = '') => `<img class="phone ${cls}" src="${img(f)}" alt="${alt}" loading="lazy" data-zoom="${img(f)}">`;
  const label = (n, t) => `<span class="label reveal">${n ? `<b>${n}</b>` : ''}${t}</span>`;

  // ---------- Home ----------
  // home cards: what Tomas did on each project
  const cards = [
    { id: 'tlb', href: 'the-last-beat.html', title: tlb.title, tags: ['Game UI', 'UI/UX Redesign', 'Figma to Unity'],
      shots: ['lastbeat/2026/menu-full.jpg', 'lastbeat/2026/hud-full.jpg', 'lastbeat/2026/levelup-full.jpg'],
      did: 'I redesigned the whole interface of my rhythm shooter, from a Figma component library to a Unity UI kit, and tuned it through playtesting.'
    },
    { id: 'lc', href: 'last-cow.html', title: lc.title, tags: ['Mobile app', 'UX research', 'UI Design'],
      shots: ['lastcow/login.jpg', 'lastcow/home.jpg', 'lastcow/event.jpg'],
      did: 'I led research and design for a last-minute ticket app, from surveys and a tree test to an Atomic Design UI kit and a tested prototype.'
    },
    { id: 'pc', href: 'perfecto-cafe.html', title: pc.title, tags: ['Website', 'Heuristic evaluation', 'UI Design'],
      shots: ['perfecto/home.jpg', 'perfecto/menu.jpg', 'perfecto/contact.jpg'],
      did: 'I audited a bakery café\'s website against usability heuristics and redesigned its menu into a grid that\'s quick to scan.'
    },
    { id: 'rh', href: 'rehab.html', title: rh.title, tags: ['Mobile app', 'UX research', 'Usability testing'],
      shots: ['rehab/home.jpg', 'rehab/progress.jpg', 'rehab/congrats.jpg'],
      did: 'I framed the problem through research and ran usability testing for an app that helps patients stick with home rehab.'
    }
  ];

  function home(el) {
    nav('home');
    el.innerHTML = `
      <section class="hero" id="top">
        <div class="wrap hero-in">
          <div class="hero-text">
            <h1 class="reveal">Tomas<br>Alvarez</h1>
            <p class="role reveal">${site.title}</p>
            <p class="statement reveal">I design apps the way good games are made: around <b>motivation, feedback and flow</b>.</p>
            <p class="lede reveal">With a background in engineering and game design, I turn research and testing into products people stick with.</p>            <div class="hero-cta reveal"><a class="btn" href="#work">See my work ${arrow}</a><a class="btn ghost" href="#about">About me</a></div>
          </div>
        </div>
      </section>

      <section class="work" id="work">
        <div class="wrap">
          ${label('', 'Selected work')}
          <h2 class="title reveal">Case studies</h2>
          ${cards.map(c => `
          <a class="case-card reveal" href="${c.href}">
            <div class="case-media scene scene-${c.id}"><div class="shots">${c.shots.map(s => `<img src="${R}assets/${s}" alt="" loading="lazy">`).join('')}</div></div>
            <div class="case-info">
              <span class="tags">${c.tags.map(t => `<span>${t}</span>`).join('')}</span>
              <h3>${c.title}</h3>
              <p>${c.did}</p>              <span class="more">Read case study ${arrow}</span>
            </div>
          </a>`).join('')}
        </div>
      </section>

      <section class="about" id="about">
        <div class="wrap about-in">
          <figure class="about-photo reveal"><img src="${R}assets/me.webp" alt="Portrait of Tomas Alvarez outdoors in Vancouver" loading="lazy"></figure>
          <div>
            ${label('', 'About')}
            <h2 class="title reveal">Hi, I'm Tomas</h2>
            <p class="reveal">A UX Designer from Medellín, Colombia, now based in Vancouver, Canada, with a passion for creating experiences that are clear, useful and memorable.</p>
            <p class="reveal">I studied Game Design, UI/UX Design and Digital Entertainment Design Engineering. Designing games taught me to think about how people feel from the very first second: what they notice, where they get stuck, and what keeps them coming back.</p>
            <p class="reveal">I bring that to every product I work on: research to understand people, simple flows and wireframes to test ideas early, and polished UI and prototypes to bring them to life.</p>
            <p class="skills-line reveal">${site.skills.map(([n]) => `<span>${n}</span>`).join('')}</p>
            <p class="reveal">Feel free to reach out! I'd love to talk about design, research, or any project you have in mind.</p>
            <div class="hero-cta reveal"><a class="btn" href="${site.links.linkedin}" target="_blank" rel="noopener">LinkedIn ${arrow}</a><a class="btn ghost" href="${site.links.resume}">Resume ${arrow}</a><a class="btn ghost" href="${site.links.games}">Game Design ${arrow}</a></div>
          </div>
        </div>
      </section>`;
    footer(); reveal(); lightbox();
  }

  // ---------- Case study ----------
  function caseStudy(el) {
    nav('case');
    const stats = list => `<div class="stats">${list.map(([n, t], i) => `<div class="stat reveal" style="--d:${i}"><b>${n}</b><span>${t}</span></div>`).join('')}</div>`;
    el.innerHTML = `
      <section class="cs-hero" id="top">
        <div class="wrap">
          <a class="back" href="index.html"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>All work</a>
          <div class="cs-hero-in">
            <div>
              <span class="eyebrow reveal">Case study · Mobile app</span>
              <h1 class="reveal">${lc.title}</h1>
              <p class="tagline reveal">${lc.tagline}</p>
              <p class="lede reveal">${lc.headline}</p>
            </div>
            <div class="cs-hero-art reveal">${phone('splash.jpg', 'LastCow splash screen', 'p1')}${phone('home.jpg', 'LastCow home screen', 'p2')}</div>
          </div>
          <div class="my-role reveal"><h2>My role</h2><p>${lc.role}</p></div>
          <dl class="meta reveal">${lc.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap narrow">
          ${label('', 'Project overview')}
          <h2 class="title reveal">Why do people miss the events they would love?</h2>
          ${lc.situation.map(p => `<p class="big reveal">${p}</p>`).join('')}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Goals')}
          <h2 class="title reveal">The main goals</h2>
          <div class="findings">${lc.goals.map((g, i) => `<div class="finding reveal" style="--d:${i}"><span class="n">0${i + 1}</span><p class="goal">${g}</p></div>`).join('')}</div>
          <div class="hmw reveal"><span>Design question</span><p>${lc.hmw}</p></div>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Research')}
          <h2 class="title reveal">Understanding how people find events</h2>
          <p class="reveal intro">${lc.research}</p>
          ${stats(lc.stats)}
          <h3 class="sub reveal">What we found</h3>
          <div class="findings">${lc.findings.map(([h, p], i) => `<div class="finding reveal" style="--d:${i}"><span class="n">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
          <h3 class="sub reveal">Who we designed for</h3>
          <img class="persona reveal" src="${img('persona.jpg')}" alt="Persona: Steven, 32, a Vancouver graphic designer who finds events too late" loading="lazy" data-zoom="${img('persona.jpg')}">
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Design decisions')}
          <h2 class="title reveal">Making a good deal visible</h2>
          ${(([h, f, prob, how, why]) => `
            <article class="decision reveal">
              ${phone(f, h)}
              <div>
                <h3>${h}</h3>
                <div class="why"><b>The problem</b><p>${prob}</p></div>
                <div class="why"><b>The rationale</b><p>${how}</p></div>
                <div class="why"><b>Why it works</b><p>${why}</p></div>
              </div>
            </article>`)(lc.decision)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap narrow">
          ${label('', 'Information architecture')}
          <h2 class="title reveal">Testing the structure before the style</h2>
          <p class="big reveal">${lc.ia}</p>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Wireframes to high fidelity')}
          <h2 class="title reveal">Structure first, then style</h2>
          <p class="reveal intro">The layout stayed the same while real content came in: photos, the violet accent and price trends.</p>
          <div class="compare">${lc.compare.map(([w, h, n]) => `
            <figure class="pair reveal">
              <div class="pair-imgs">${phone(w, n + ' wireframe', 'wf')}${phone(h, n + ' high fidelity')}</div>
              <figcaption>${n}</figcaption>
            </figure>`).join('')}</div>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Atomic design')}
          <h2 class="title reveal">Built from small parts</h2>
          <p class="reveal intro">${lc.atomic}</p>
          <div class="atomic">${[['atoms.jpg', 'Atoms'], ['molecules.jpg', 'Molecules'], ['organisms.jpg', 'Organisms'], ['template.jpg', 'Template']].map(([f, n], i) => `
            <figure class="reveal" style="--d:${i}"><img src="${img(f)}" alt="LastCow ${n.toLowerCase()}" loading="lazy" data-zoom="${img(f)}"><figcaption>${n}</figcaption></figure>`).join('')}</div>
          <div class="challenge reveal">
            <h3>Problem</h3><p>${lc.kitProblem[0]}</p>
            <h3>Solution</h3><p>${lc.kitProblem[1]}</p>
          </div>
        </div>
      </section>

      <section class="cs-sec screens-sec">
        <div class="wrap">
          ${label('', 'Final screens')}
          <h2 class="title reveal">The app</h2>
        </div>
        <div class="screens">${lc.screens.map(([f, n]) => `<figure>${phone(f, n)}<figcaption>${n}</figcaption></figure>`).join('')}</div>
      </section>

      <section class="cs-sec">
        <div class="wrap adaptive">
          <div>
            ${label('', 'Adaptive')}
            <h2 class="title reveal">Same system, bigger screen</h2>
            <p class="reveal">The same components, spread into two columns on tablet.</p>
          </div>
          <img class="tablet reveal" src="${img('ipad-event.jpg')}" alt="LastCow event details on iPad" loading="lazy" data-zoom="${img('ipad-event.jpg')}">
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Result')}
          <h2 class="title reveal">What testing showed</h2>
          <div class="hmw reveal"><span>Biggest finding</span><p>${lc.testing}</p></div>
          <h3 class="sub reveal">What we learned</h3>
          <div class="findings">${lc.takeaways.map(([h, p], i) => `<div class="finding reveal" style="--d:${i}"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
        </div>
      </section>`;
    footer(); reveal(); lightbox();
  }

  // ---------- Perfecto Café page ----------
  // website screenshots sit in a browser frame; tall pages show their top and open in full on click
  const web = f => `${R}assets/perfecto/${f}`;
  const shot = (f, alt, cls = '') => `<figure class="shot ${cls}"><i></i><img src="${web(f)}" alt="${alt}" loading="lazy" data-zoom="${web(f)}"></figure>`;

  function perfecto(el) {
    nav('case');
    const cards = list => `<div class="findings${list.length === 4 ? ' four' : ''}">${list.map(([h, p], i) => `<div class="finding reveal" style="--d:${i}"><span class="n">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
    el.innerHTML = `
      <section class="cs-hero" id="top">
        <div class="wrap">
          <a class="back" href="index.html"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>All work</a>
          <div class="cs-hero-in">
            <div>
              <span class="eyebrow reveal">Case study · Website redesign</span>
              <h1 class="reveal">${pc.title}</h1>
              <p class="tagline reveal">${pc.tagline}</p>
              <p class="lede reveal">${pc.headline}</p>
            </div>
            <div class="web-hero reveal">${shot('home.jpg', 'Perfecto Café redesigned homepage', 'w1')}${shot('menu.jpg', 'Perfecto Café redesigned menu', 'w2')}</div>
          </div>
          <div class="my-role reveal"><h2>My role</h2><p>${pc.role}</p></div>
          <dl class="meta reveal">${pc.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap narrow">
          ${label('', 'Project overview')}
          <h2 class="title reveal">Great pastries, a hard to use website</h2>
          ${pc.situation.map(p => `<p class="big reveal">${p}</p>`).join('')}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Heuristic evaluation')}
          <h2 class="title reveal">Auditing the live site</h2>
          <p class="reveal intro">${pc.research}</p>
          ${cards(pc.findings)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Focus: the Menu')}
          <h2 class="title reveal">Before and after</h2>
          <div class="compare web-compare">${pc.compare.map(([f, n]) => `
            <figure class="pair reveal">${shot(f, 'Menu ' + n.toLowerCase(), 'tall')}<figcaption>${n}</figcaption></figure>`).join('')}</div>
          <h3 class="sub reveal">What the audit found</h3>
          ${cards(pc.menuIssues)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Design decisions')}
          <h2 class="title reveal">Redesigning the menu</h2>
          <div class="decisions">${pc.decisions.map(([h, f, prob, how, why]) => `
            <article class="decision web-decision reveal">
              ${shot(f, h, f === 'menu.jpg' ? 'tall' : '')}
              <div>
                <h3>${h}</h3>
                <div class="why"><b>The problem</b><p>${prob}</p></div>
                <div class="why"><b>The rationale</b><p>${how}</p></div>
                <div class="why"><b>Why it works</b><p>${why}</p></div>
              </div>
            </article>`).join('')}</div>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Design system')}
          <h2 class="title reveal">One system for four pages</h2>
          <p class="reveal intro">Warm neutrals and an olive accent, paired with DM Serif Display and Montserrat.</p>
          <div class="swatches">${pc.palette.map(([hex, n, u], i) => `<div class="sw reveal" style="--c:${hex};--d:${i}"><i></i><b>${n}</b><span>${hex} · ${u}</span></div>`).join('')}</div>
          <div class="type-row">
            <div class="type reveal"><span>Titles</span><b style="font-family:'DM Serif Display',serif;font-weight:400">DM Serif Display</b><em style="font-family:'DM Serif Display',serif">Aa Bb Cc 123</em></div>
            <div class="type reveal"><span>Body</span><b style="font-family:'Montserrat',sans-serif">Montserrat</b><em style="font-family:'Montserrat',sans-serif">Aa Bb Cc 123</em></div>
          </div>
          <img class="wide reveal" src="${web('ui-kit.jpg')}" alt="Perfecto Café UI kit" loading="lazy" data-zoom="${web('ui-kit.jpg')}">
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Final design')}
          <h2 class="title reveal">The redesigned website</h2>
          <p class="reveal intro">Four pages, one system. Click a page to see it in full.</p>
          <div class="pages">${pc.pages.map(([f, n], i) => `<figure class="reveal" style="--d:${i}">${shot(f, n, 'tall')}<figcaption>${n}</figcaption></figure>`).join('')}</div>
        </div>
      </section>`;
    footer(); reveal(); lightbox();
  }

  // ---------- Re:hab page: research-led, opens with the mockup and leans on the test numbers ----------
  const rimg = f => `${R}assets/rehab/${f}`;
  const rphone = (f, alt, cls = '') => `<img class="phone ${cls}" src="${rimg(f)}" alt="${alt}" loading="lazy" data-zoom="${rimg(f)}">`;

  function rehab(el) {
    nav('case');
    const points = list => `<div class="findings${list.length === 2 ? ' two' : ''}">${list.map(([h, p], i) => `<div class="finding reveal" style="--d:${i}"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
    const [sh, sf, prob, how, why] = rh.spotlight;
    el.innerHTML = `
      <section class="cs-hero" id="top">
        <div class="wrap">
          <a class="back" href="index.html"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>All work</a>
          <span class="eyebrow reveal">Case study · Mobile app</span>
          <h1 class="reveal">${rh.title}</h1>
          <p class="tagline reveal">${rh.tagline}</p>
          <p class="lede reveal">${rh.headline}</p>
          <img class="banner reveal" src="${rimg('mockup.jpg')}" alt="Re:hab home screen on a phone" data-zoom="${rimg('mockup.jpg')}">
          <div class="my-role reveal"><h2>My role</h2><p>${rh.role}</p></div>
          <dl class="meta reveal">${rh.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Research')}
          <h2 class="title reveal">Recovery doesn't stop at the clinic</h2>
          <p class="big reveal narrow-text">${rh.situation}</p>
          ${points(rh.research)}
          <blockquote class="insight reveal"><span>Key insight</span><p>${rh.insight}</p></blockquote>
          <p class="big reveal narrow-text principles">${rh.principles}</p>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Spotlight')}
          <article class="decision two-phones reveal">
            <div class="pair-phones">${sf.map(f => rphone(f, sh)).join('')}</div>
            <div>
              <h2 class="title">${sh}</h2>
              <div class="why"><b>The problem</b><p>${prob}</p></div>
              <div class="why"><b>The design</b><p>${how}</p></div>
              <div class="why"><b>Why it works</b><p>${why}</p></div>
            </div>
          </article>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Usability testing')}
          <h2 class="title reveal">What 8 people showed us</h2>
          <p class="reveal intro">${rh.test}</p>
          <div class="bars">${rh.tasks.map(([n, t], i) => `<div class="bar reveal" style="--d:${i};--v:${n}"><b>${n}</b><span>${t}</span><i></i></div>`).join('')}</div>
          ${points(rh.learned)}
          <p class="next-step reveal">${rh.next}</p>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Wireframes')}
          <h2 class="title reveal">From problem to structure</h2>
          <img class="wide reveal" src="${rimg('wireframes.jpg')}" alt="Re:hab wireframes" loading="lazy" data-zoom="${rimg('wireframes.jpg')}">
        </div>
      </section>

      <section class="cs-sec screens-sec">
        <div class="wrap">
          ${label('', 'Final screens')}
          <h2 class="title reveal">Small steps, visible progress</h2>
        </div>
        <div class="screens">${rh.screens.map(([f, n]) => `<figure>${rphone(f, n)}<figcaption>${n}</figcaption></figure>`).join('')}</div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Brand')}
          <h2 class="title reveal">Bold, clear, easy to follow</h2>
          <div class="swatches five">${rh.palette.map(([hex, n, u], i) => `<div class="sw reveal" style="--c:${hex};--d:${i}"><i></i><b>${n}</b><span>${hex} · ${u}</span></div>`).join('')}</div>
          <img class="wide reveal" src="${rimg('mockup-2.jpg')}" alt="Re:hab daily check-in on a phone" loading="lazy" data-zoom="${rimg('mockup-2.jpg')}">
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Result')}
          <h2 class="title reveal">What we learned</h2>
          ${points(rh.takeaways)}
        </div>
      </section>`;
    footer(); reveal(); lightbox();
  }

  // ---------- The Last Beat page: then & now first, then the process, decisions, kit and feel ----------
  const gimg = f => `${R}assets/lastbeat/${f}`;
  const gshot = (f, alt) => `<figure class="game-shot"><img src="${gimg(f)}" alt="${alt}" loading="lazy" data-zoom="${gimg(f)}"></figure>`;

  function lastBeat(el) {
    nav('case');
    const points = list => `<div class="findings">${list.map(([h, p], i) => `<div class="finding reveal" style="--d:${i}"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
    const stats = list => `<div class="stats">${list.map(([n, t], i) => `<div class="stat reveal" style="--d:${i}"><b>${n}</b><span>${t}</span></div>`).join('')}</div>`;
    el.innerHTML = `
      <section class="cs-hero" id="top">
        <div class="wrap">
          <a class="back" href="index.html"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>All work</a>
          <span class="eyebrow reveal">Case study · Game UI/UX</span>
          <h1 class="reveal">${tlb.title}</h1>
          <p class="tagline reveal">${tlb.tagline}</p>
          <p class="lede reveal">${tlb.headline}</p>
          <div class="reveal">${gshot('2026/menu-full.jpg', 'The Last Beat redesigned main menu')}</div>
          <div class="my-role reveal"><h2>My role</h2><p>${tlb.role}</p></div>
          <dl class="meta reveal">${tlb.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Overview')}
          <h2 class="title reveal">A screen that moves to the music</h2>
          <p class="big reveal narrow-text">${tlb.situation}</p>
          ${stats(tlb.stats)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Then & now')}
          <h2 class="title reveal">What the 2023 interface got wrong</h2>
          <div class="then-now">
            <figure class="reveal">${gshot('2023/hud.webp', 'The Last Beat 2023 HUD')}<figcaption>2023</figcaption></figure>
            <figure class="reveal now">${gshot('2026/hud-full.jpg', 'The Last Beat 2026 HUD')}<figcaption>2026</figcaption></figure>
          </div>
          ${points(tlb.problems)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Process')}
          <h2 class="title reveal">Design first, then build and tune</h2>
          ${points(tlb.process)}
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Design decisions')}
          <h2 class="title reveal">Built for split-second reading</h2>
          <div class="decisions">${tlb.decisions.map(([h, f, prob, how, why]) => `
            <article class="decision web-decision reveal">
              ${gshot(`2026/${f}-full.jpg`, h)}
              <div>
                <h3>${h}</h3>
                <div class="why"><b>The problem</b><p>${prob}</p></div>
                <div class="why"><b>The rationale</b><p>${how}</p></div>
                <div class="why"><b>Why it works</b><p>${why}</p></div>
              </div>
            </article>`).join('')}</div>
          <p class="big reveal narrow-text flow-note">${tlb.flow}</p>
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Component library')}
          <h2 class="title reveal">One kit for every screen</h2>
          <p class="reveal intro">Built in Figma first, then rebuilt in Unity and used for all ten screens: icons, sliders, buttons, cards, the XP bar and leaderboard rows.</p>
          <img class="wide reveal" src="${gimg('2026/figma-components.jpg')}" alt="The Last Beat Figma component library" loading="lazy" data-zoom="${gimg('2026/figma-components.jpg')}">
        </div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Motion & feel')}
          <h2 class="title reveal">An interface that moves with the music</h2>
          ${points(tlb.feel)}
        </div>
      </section>

      <section class="cs-sec screens-sec">
        <div class="wrap">
          ${label('', 'Final screens')}
          <h2 class="title reveal">The new interface</h2>
        </div>
        <div class="screens game-screens">${tlb.screens.map(([f, n]) => `<figure><img src="${gimg(`2026/${f}-full.jpg`)}" alt="${n}" loading="lazy" data-zoom="${gimg(`2026/${f}-full.jpg`)}"><figcaption>${n}</figcaption></figure>`).join('')}</div>
      </section>

      <section class="cs-sec">
        <div class="wrap">
          ${label('', 'Result')}
          <h2 class="title reveal">What going back taught me</h2>
          ${points(tlb.takeaways)}
          <div class="hero-cta reveal"><a class="btn" href="${tlb.play}" target="_blank" rel="noopener">Play the 2026 version ${arrow}</a></div>
        </div>
      </section>`;
    footer(); reveal(); lightbox();
  }

  // ---------- Resume page: the PDF drawn page by page (pdf.js), with its links laid on top ----------
  function resume(el) {
    nav('resume');
    const pdfUrl = site.links.resumePdf;
    el.innerHTML = `
      <section class="cs-hero r-hero" id="top">
        <div class="wrap">
          <a class="back" href="index.html"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>All work</a>
          <span class="eyebrow reveal">Resume</span>
          <h1 class="reveal">${site.name}</h1>
          <div class="r-bar reveal">
            <p>${site.title} · Vancouver, Canada</p>
            <div class="hero-cta">
              <a class="btn" href="${pdfUrl}" download>Download PDF <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg></a>
              <a class="btn ghost" href="${pdfUrl}" target="_blank" rel="noopener">Open full screen ${arrow}</a>
            </div>
          </div>
        </div>
      </section>
      <section class="wrap"><div class="r-pages" id="pages"><div class="r-loading">Loading resume…</div></div></section>`;
    footer(); reveal();

    const box = el.querySelector('#pages');
    const fallback = () => { box.innerHTML = `<iframe class="r-fallback" src="${pdfUrl}" title="${site.name} resume"></iframe>`; };
    if (!window.pdfjsLib) return fallback();
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    (async () => {
      let pdf;
      try { pdf = await pdfjsLib.getDocument(pdfUrl).promise; } catch (e) { return fallback(); }
      async function render() {
        const width = Math.min(box.clientWidth, 860);
        const dpr = Math.min(devicePixelRatio || 1, 2.5);
        const frag = document.createDocumentFragment();
        for (let n = 1; n <= pdf.numPages; n++) {
          const page = await pdf.getPage(n);
          const vp = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });
          const wrap = document.createElement('div'); wrap.className = 'r-page';
          wrap.setAttribute('aria-label', `Resume page ${n} of ${pdf.numPages}`);
          const canvas = document.createElement('canvas');
          canvas.width = Math.floor(vp.width * dpr); canvas.height = Math.floor(vp.height * dpr);
          wrap.appendChild(canvas);
          await page.render({ canvasContext: canvas.getContext('2d'), viewport: page.getViewport({ scale: vp.scale * dpr }) }).promise;
          // links (Portfolio, LinkedIn, project names) placed as percentages so they scale with the page
          for (const a of await page.getAnnotations()) {
            if (a.subtype !== 'Link' || !a.url) continue;
            const [x1, y1, x2, y2] = vp.convertToViewportRectangle(a.rect);
            const link = document.createElement('a');
            link.href = a.url; link.target = '_blank'; link.rel = 'noopener'; link.setAttribute('aria-label', a.url);
            Object.assign(link.style, {
              left: Math.min(x1, x2) / vp.width * 100 + '%', top: Math.min(y1, y2) / vp.height * 100 + '%',
              width: Math.abs(x2 - x1) / vp.width * 100 + '%', height: Math.abs(y2 - y1) / vp.height * 100 + '%'
            });
            wrap.appendChild(link);
          }
          frag.appendChild(wrap);
        }
        box.replaceChildren(frag);
      }
      await render();
      // redraw sharply after a big resize (e.g. rotating a phone)
      let lastW = box.clientWidth, t;
      addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { if (Math.abs(box.clientWidth - lastW) > 80) { lastW = box.clientWidth; render(); } }, 250); });
    })();
  }

  window.UX = { site, lastcow: lc, perfecto: pc, rehab: rh, home, caseStudy, perfectoStudy: perfecto, rehabStudy: rehab, lastBeatStudy: lastBeat, resume };
})();
