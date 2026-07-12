# Deploying the Mukesh Art Website

> For anyone hosting this site. The website source lives in **`raamxmukeshart-main/`**.
> It is a **static site** (Next.js static export) — after building, it's plain
> HTML/CSS/JS files. No server, no database, no environment variables.

## Get the code (don't use a zip)

```bash
git clone https://github.com/MihirZalavadia/air-port-media-ops.git
cd air-port-media-ops/raamxmukeshart-main
```

## Build

Requirements: **Node.js 20+** and npm.

```bash
npm ci        # install exact locked dependencies
npm run build # outputs the finished site into ./out/
```

Everything inside **`out/`** is the deployable website. That's it.

## Option A (current setup, recommended): Netlify + Hostinger for domain/email

The site already auto-deploys: **every push to `main` on GitHub rebuilds and
publishes on Netlify** (config in `/netlify.toml`). Nobody uploads anything
manually.

To serve it on the Hostinger domain (mukeshart.in) while keeping Hostinger
email working:

1. Keep the domain's **nameservers at Hostinger** (don't move DNS).
2. In Hostinger hPanel → DNS zone for mukeshart.in, add:
   - `A` record: name `@`, value `75.2.60.5`
   - `CNAME` record: name `www`, value `<site-name>.netlify.app`
3. In Netlify → Domain management → Add domain `mukeshart.in`, set primary,
   enable Force HTTPS (certificate auto-issues after DNS propagates).

Email (MX/SPF) records stay untouched at Hostinger, so mail keeps working.

## Option B: host the files on Hostinger web hosting

Hostinger shared hosting can serve the static files but **cannot run the
build**. So build first (locally or via GitHub Actions), then publish only
`out/`:

- **Manual:** run the build, upload the *contents* of `out/` into
  `public_html/` (hPanel File Manager or FTP). Repeat on every update.
- **Git-based:** hPanel → Advanced → GIT can pull a repo/branch into
  `public_html`, but it does NOT run npm. To use it, we'd commit the built
  `out/` to a dedicated `deploy` branch and point hPanel at that branch.
  Ask Mihir — a GitHub Action can automate this on every push.

Note: with Option B the URL structure and everything else works identically —
`out/` contains `index.html`, `airport/index.html`, `publicity/index.html`,
`inventory/<slug>/index.html`.

## What NOT to do

- Don't edit files inside `out/` — they're build artifacts, regenerated
  every build.
- Don't deploy the repo root or `raamxmukeshart-main/` source folder to a
  web server — deploy `out/` only (Option B) or let Netlify build (Option A).
- Don't set the `GITHUB_PAGES` env var anywhere — it adds a URL prefix that
  is only correct for GitHub Pages.

## Contact

Repo owner: Mihir Zalavadiya (mihir1811patel@gmail.com).
