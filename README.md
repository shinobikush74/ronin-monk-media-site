# Ronin Monk Media LLC — Netlify Site

Static site for **www.roninmonkmediallc.com**, replacing the carrd.co landing page. Built to carry the **Sky Khan Doctrines** visual identity: obsidian + brass palette, Cinzel display type, Afro-futurist sacred-technology register, ceremonial typography.

No build step. No frameworks. Plain HTML / CSS / JS — fast, accessible, edit-anywhere.

## Quick deploy to Netlify

1. **Create a GitHub repo** named `ronin-monk-media-website` and push this folder to it.
2. In Netlify → **Add new site → Import an existing project** → connect the repo.
3. Leave **build command** empty. Set **publish directory** to `.` (already configured in `netlify.toml`).
4. Deploy. The first build takes about 20 seconds.
5. In **Site settings → Domain management**, add `roninmonkmediallc.com` and `www.roninmonkmediallc.com`. Netlify will guide you through the DNS records or you can use Netlify DNS.
6. Force HTTPS (Netlify provisions Let's Encrypt automatically).

## File layout

```
ronin-monk-media-website/
├── index.html              # Home — hero, world overview, gallery, audio, blog teaser, signup, about
├── pages/
│   ├── sky-khan-doctrines.html   # The eight factions, seven eras
│   ├── ronin-monk-sagas.html     # The Ronin novella line
│   ├── music.html                # Static Before Sound · Shinobi Kush listening room
│   ├── codex.html                # Visual Bible / lore overview
│   ├── blog.html                 # Field Notes index
│   ├── shop.html                 # Gumroad / Bandcamp / Patreon hub
│   ├── contact.html              # Contact + direct lines
│   ├── press.html                # Press kit / EPK
│   ├── privacy.html
│   ├── terms.html
│   └── accessibility.html
├── thanks.html             # Form submission landing
├── 404.html                # Themed not-found page
├── css/styles.css          # Sky Khan visual identity
├── js/main.js              # Mobile nav, fade-in, footer year, subtle parallax
├── assets/img/             # Drop favicon, OG cover, faction art, author portrait here
├── netlify.toml            # Build config + security headers + redirects
├── _headers                # Cache-control & security headers
├── _redirects              # Pretty-URL redirects
├── robots.txt
├── sitemap.xml
├── site.webmanifest        # PWA manifest
└── README.md
```

## What to fill in before launch

**Highest priority (required for a polished launch):**

- [ ] `assets/img/og-cover.jpg` — 1200×630 social share image (any hero render from your Sky Khan engine).
- [ ] `assets/img/apple-touch-icon.png` — 180×180.
- [ ] `assets/img/icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — PWA icons.
- [ ] **Bandcamp / Spotify / SoundCloud iframes** — paste into `pages/music.html` (three placeholder blocks marked `<!-- iframe -->`).
- [ ] **Shop links** — replace `https://gumroad.com/` placeholders in `pages/shop.html` with the actual product URLs.
- [ ] **Discord / Patreon URLs** — update in `index.html` (Join the Order side panel) and `pages/contact.html`.
- [ ] **Email** — `shinobikush@gmail.com` is wired as the public contact across the site. Form submission notifications can be routed to any inbox of your choosing inside the Netlify dashboard.

**Medium priority (replace placeholder visuals):**

- [ ] Replace the CSS-only gradient "art tiles" on the homepage gallery with real renders from `outputs/` of your Sky Khan Visual Engine. Drop the JPGs into `assets/img/gallery/` and update the `.tile-art` CSS to use `background-image: url(...)` per faction.
- [ ] Replace the feature-cover gradient block (Tablets of Lutz placeholder) with a real cover image in `index.html` → `.feature-cover`.
- [ ] Replace the about-portrait gradient circle with an actual author photo.

## Netlify-native features you get for free

- **Netlify Forms** — both the signup form (`codex-signup`) and the contact form (`contact`) are wired with `data-netlify="true"`. Submissions appear in the Netlify dashboard. No backend required. Free tier covers 100 submissions/month.
- **Netlify Identity / Gated content** (optional later) — if you ever want to lock the Inner Order codex behind a Patreon-verified login, enable Identity + role-based redirects.
- **Branch deploys & previews** — every PR gets a preview URL. Lets you test lore changes safely.
- **Build hooks** — wire your Sky Khan Visual Engine to trigger a rebuild when you publish new renders.
- **Analytics** — recommend **Plausible** ($9/mo, privacy-respecting, no cookie banner needed) over Netlify Analytics or Google.

## Carrd → Netlify migration checklist

1. **Export your carrd.co content** — copy the existing text into a backup doc so nothing is lost.
2. **Update DNS at your registrar** — point your apex and `www` to Netlify (Netlify will show you the exact A/AAAA/CNAME records).
3. **301 redirect** the carrd subdomain (if you used `roninmonk.carrd.co`) by adding a redirect on the carrd page pointing at `https://www.roninmonkmediallc.com`. This preserves any incoming links.
4. **Re-submit your sitemap** to Google Search Console: `https://www.roninmonkmediallc.com/sitemap.xml`.
5. **Test forms** with the Netlify dashboard before publicizing.

## Local preview

You can preview the site locally without any build tools:

```powershell
# from inside ronin-monk-media-website/
python -m http.server 8000
```

Then open `http://localhost:8000`. Or use VS Code's Live Server extension.

## Visual identity reference

| Token | Hex | Use |
| --- | --- | --- |
| Obsidian field | `#0a0a0f` | page background |
| Obsidian card | `#14141c` | card / section background |
| Brass primary | `#d4af37` | display accents, primary button |
| Brass deep | `#8b6f3c` | borders, secondary text |
| Indigo cloth | `#2d2766` | Ronin cloth gradients |
| Amber forge | `#f0a04b` | Tachyon Forge accents |
| Mist white | `#e8e4d8` | body text |

Type: **Cinzel** (display, ceremonial), **Cormorant Garamond** (italic emphasis), **Inter** (body).

## License

Site code: MIT (do whatever you want with the scaffolding).
Site content (text, lore, faction names, imagery): © Ronin Monk Media LLC, all rights reserved.
