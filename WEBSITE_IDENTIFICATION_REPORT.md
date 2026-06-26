# Ronin Monk Media LLC — Website Identification Report

**Date:** 2026-06-24

---

## 1. Most Likely Website Folder

```
C:\Users\monte\RoninMonkMedia\archive\ronin-monk-media-website-static\
```

---

## 2. Why This Is the Correct Folder

Multiple strong clues confirm it:

- Contains `netlify.toml` explicitly labeled **"Ronin Monk Media LLC — Netlify configuration"**
- Contains `index.html`, `404.html`, `thanks.html`, `robots.txt`, `sitemap.xml`
- Has a `pages/` folder with `sky-khan-doctrines.html`, `music.html`, `contact.html`, etc. — matching the known site structure
- Has `_redirects` and `_headers` files (Netlify-specific deployment files)
- Has a `DEPLOYMENT.md` and `README.md` describing the site
- The backup in `RoninMonkMedia_Backups\` is named `ronin-monk-media-website_2026-05-28_0844.zip` — this folder is what was zipped

---

## 3. Homepage File Location

```
C:\Users\monte\RoninMonkMedia\archive\ronin-monk-media-website-static\index.html
```

---

## 4. Technology Stack

**Plain HTML / CSS / JavaScript — no framework.**

| File | Purpose |
|---|---|
| `index.html` | Main homepage |
| `css/styles.css` | All styling |
| `js/main.js` | Light JavaScript |

- No `package.json`, no `node_modules`, no React, no Vite
- No build step required
- This is a **static site** — the folder contents are what get deployed

---

## 5. Connected to GitHub?

**No.** There is no `.git` folder inside the website directory. It is not currently tracked by Git locally. It may have been connected to GitHub previously, but that connection is not present on this machine right now.

---

## 6. Connected to Netlify?

**Yes — built for Netlify.** The `netlify.toml` is configured with:

- Publish directory set to root (`.`)
- URL redirects for `/home`, `/doctrines`, `/sagas`, `/music/*`
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Netlify Forms integration (`data-netlify="true"`)

Whether it is **currently live** depends on your Netlify account dashboard.

---

## 7. Local Preview Command

Open directly in browser (no server needed):

```
start "C:\Users\monte\RoninMonkMedia\archive\ronin-monk-media-website-static\index.html"
```

Or use Python for a proper local server (handles links and redirects correctly):

```
cd "C:\Users\monte\RoninMonkMedia\archive\ronin-monk-media-website-static"
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## 8. Build Command

**None required.** This is a static site. The folder itself is the deployable output.

To deploy to Netlify:

- **Option A:** Drag and drop the folder into the Netlify dashboard
- **Option B:** Connect the folder to a GitHub repo, then link that repo in Netlify

---

## Notes

> The word **"archive"** in the folder path may be misleading. This is your **active website**, not a backup. The actual backup is the `.zip` file located at:
>
> `C:\Users\monte\RoninMonkMedia_Backups\ronin-monk-media-website_2026-05-28_0844.zip`
