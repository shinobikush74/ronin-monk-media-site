# Deployment Playbook — Ronin Monk Media LLC

A concrete, step-by-step playbook from your current carrd.co setup to a live Netlify deployment on `www.roninmonkmediallc.com`.

## 0. Decide on the cutover window

Pick a 2-hour window when you can watch the DNS change. The site itself stays up the whole time — only the underlying host swaps.

## 1. Get the code on GitHub

```powershell
# from inside ronin-monk-media-website/
git init
git add .
git commit -m "Initial commit — Ronin Monk Media LLC site, Sky Khan visual identity"
# create a new repo on github.com called ronin-monk-media-website (private is fine)
git remote add origin https://github.com/<your-username>/ronin-monk-media-website.git
git branch -M main
git push -u origin main
```

## 2. Connect to Netlify

1. Go to https://app.netlify.com → **Add new site → Import an existing project**.
2. Choose GitHub, authorize, pick `ronin-monk-media-website`.
3. Build settings:
   - **Build command:** *(leave blank)*
   - **Publish directory:** `.`
4. Click **Deploy site**. First build ~20 seconds. You'll get a temporary URL like `dreamy-ronin-x9k2.netlify.app`.

## 3. Verify the temporary deploy

Open the temporary URL. Check:
- Home page loads
- Mobile nav opens (hamburger)
- All footer links resolve
- `/thanks.html` opens directly (used by form submit)
- `/404.html` shows when you visit a bad path

## 4. Move the domain

You have two options:

### Option A — Keep your current registrar (recommended for first move)

In Netlify → **Domain management → Add custom domain** → type `roninmonkmediallc.com`. Netlify will show you DNS records like:

```
A     @     75.2.60.5
CNAME www   <your-site>.netlify.app.
```

Go to your registrar (where you bought the domain) and update those records. Propagation takes 5 min – 24 hr.

### Option B — Switch to Netlify DNS

Move the entire DNS zone to Netlify. Easier long-term, slightly bigger up-front step. Netlify will give you 4 nameservers to set at your registrar.

## 5. Force HTTPS

In Netlify → **Domain management → HTTPS** → **Provision certificate**. Then enable **Force HTTPS**. Done. SSL is now automatic via Let's Encrypt and renews on its own.

## 6. Redirect carrd traffic

If your carrd page is at e.g. `roninmonk.carrd.co`, edit it one last time:
- Add a single redirect element pointing to `https://www.roninmonkmediallc.com`.
- Or delete the carrd page entirely if you've already moved the domain — DNS will route everything.

## 7. Verify Netlify Forms

1. In the live site, submit a test entry on the homepage signup form.
2. Go to Netlify → **Forms** → you should see a new submission under `codex-signup`.
3. Set up an email notification (Forms → Settings → Form notifications → Outgoing email → `shinobikush@gmail.com`, or any inbox you prefer to route fan signups to).
4. Optional: connect Zapier/Make to forward submissions to ConvertKit, Mailchimp, or Buttondown if you want a proper newsletter platform later.

## 8. Submit to search engines

1. **Google Search Console** — verify the domain (Netlify DNS makes this one-click). Submit `https://www.roninmonkmediallc.com/sitemap.xml`.
2. **Bing Webmaster Tools** — same drill.
3. Wait 1–2 weeks for first indexing.

## 9. Add analytics (optional but recommended)

**Plausible** (preferred — privacy-respecting, no cookie banner, $9/mo):
1. Sign up at plausible.io, add your domain.
2. They give you one `<script>` tag. Paste it before `</head>` in each HTML file (or just `index.html` if you only want home-page tracking).

**Google Analytics** (free but heavier, cookie-banner required in EU):
1. GA4 property → site tag → same drill.

## 10. Mailing list (next-level)

The Netlify Forms submission gives you a CSV of emails. To upgrade to a real newsletter:

- **Buttondown** ($9/mo) — markdown-native, indie-friendly, great for a Field Notes-style author newsletter.
- **ConvertKit / Kit** (free up to 1k subs) — sequences, automations, broadcast.
- **Mailchimp** — has a free tier but the UI is heavy.

Zapier path: *New Netlify form submission → Add subscriber to Buttondown.*

## 11. Post-launch enrichment (the fan-engagement layer)

Once the site is live, layer these in order of impact:

1. **Free lead-magnet PDF** — generate a 20–24 page "Sky Khan Codex Primer" from your Visual Engine outputs. Host on Netlify under `/assets/codex-primer.pdf` and link in the Netlify Forms email notification.
2. **Discord** — spin up a server with channels: `#listening-post`, `#field-notes`, `#fan-art`, `#lore-questions`. Add the invite link to the homepage and contact page.
3. **Patreon "Inner Order"** — three tiers:
   - *Pilgrim* ($3): early field notes
   - *Acolyte* ($7): monthly novella excerpt + stem download
   - *Inner Order* ($20): full novellas, codex print mailings, video commentary
4. **Spotify + Bandcamp embeds** — replace the music.html placeholders with real iframes.
5. **Gallery of real renders** — replace the CSS-gradient gallery tiles with actual Midjourney outputs from your Sky Khan Visual Engine.
6. **Field Notes blog cadence** — one essay per month, paired with a song release. Keep RSS alive.

## 12. Backup & rollback

- Every commit on GitHub is a snapshot. To roll back: `git revert` the bad commit, push, Netlify redeploys.
- Netlify also keeps **deploy history** — one-click rollback to any previous deploy from the dashboard.
- The carrd page: keep a screenshot archive in `/00_DATABASE/carrd-backup/` so you have a record of what was there.

## Cost summary (annual)

- Domain (existing): ~$15/yr
- Netlify Starter: **$0** (sufficient — 100 GB bandwidth, 100 form submissions/mo)
- Plausible Analytics: **$108/yr** (optional)
- Buttondown newsletter: **$108/yr** (optional, free tier exists)
- Patreon: 8% revenue share (no flat cost)

**Floor: ~$15/yr to keep the lights on.** Same as carrd. The capability ceiling is massively higher.
