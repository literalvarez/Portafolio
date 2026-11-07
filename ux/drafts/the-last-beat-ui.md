# The Last Beat: UI/UX redesign (draft for the UX portfolio)

Saved from the detailed UI/UX section of `the-last-beat.html` (November 2026), to become a UX case study later.
Not linked from the site yet.

## A new interface, designed by me

In 2023 I implemented a UI designed by a classmate. This time I designed it myself, starting from a small design system that every screen shares.

### One visual language
New fonts (Super Brigade for titles, Michroma for text), one button style with a white rim and a blue-to-navy face, and panels and cards with the same white outline. Everything lives in a reusable kit, so a change to a button updates every screen.

### A HUD with a clear hierarchy
Time, the beat bar and the score sit together at the top centre, and the XP bar spans the top edge. The beat bar's ticks slide in and touch the diamond exactly on the beat.

### Choices you can read at a glance
Level-up cards show the current and new value of each stat (for example, max ammo 4 → 7), with rewritten descriptions, hover and selected states, and your current stats underneath.

### A simpler flow
The main menu is down to Play, Settings, Credits and Quit. How to play moved into the pause menu as Controls, and the run starts with a 1, 2, 3, GO countdown that already shows the HUD.

### Clear feedback and states
One results screen covers both a death and a win, with different title colours and a pulsing Continue after a win. Submitting a score shows its state: Submitted once it's saved, or Failed – retry if the upload fails, with the player's rank on the leaderboard.

### Any screen shape
Every screen is laid out on a 1920×1080 frame that scales to fit, with backgrounds that fill the screen and corner items pinned to the edges, from 4:3 to ultrawide.

### The component library
I built the interface as a library of components in Figma first, then exported the assets and rebuilt each screen in Unity from them.

## Images (in `assets/lastbeat/2026/`)

- `figma-components.jpg`: the component set in Figma (icons, sliders, stat tiles, info and upgrade cards, buttons, XP bar, leaderboard rows, beat visualizer)
- `title-logo.png`: the game logo, exported from Figma (transparent)
- Screens: `menu.jpg`, `settings.jpg`, `controls.jpg`, `countdown.jpg`, `hud.jpg`, `nextsong.jpg`, `levelup.jpg`, `pause.jpg`, `credits.jpg`, `results.jpg`
- 2023 comparison: `../lastbeat.png` (original title), `../hero.jpg` (original gameplay)

## Sources

- Figma file: LAST BEAT - UI, pages "Componenetes" and "Close to Final Screens" (Logo frame 434:441, LB Components section 330:1066)
- Game repo: `Desktop/REPOS/The Last Beat`, commits from 2026-10-30 to 2026-11-06, and `Docs/UI/UI-Rebuild-Notes.md`
