# Site Admin Console — Guide

**URL:** https://mukeshart.in/api/admin/ (bookmark it; it's unlisted and
never indexed). One shared password.

## What it does

| Tab | Edits |
|---|---|
| **Site Texts** | Hero headline/sub/badge/stats, clients-section heading + paragraph + button label, contact section (address, email, WhatsApp number, response line) |
| **Inventory** | Every category: title, tagline, summary, card text, price teasers, plans/packages, "why" points, unit tables, PDF-ready flag — plus the airport facts row |
| **Photos & Videos** | Browse `images/inventory/updated`, `clients`, `home`, `team`, `gallery`, and `videos`; **Replace** any file in place (goes live automatically) or upload new files |
| **Leads** | Every website enquiry (newest first) with one-click WhatsApp reply + CSV export |

Every save is a **git commit** made by the console via the GitHub API —
the site rebuilds and deploys to both hosts automatically. Changes go
live in **~3–4 minutes**, with full version history (any change can be
rolled back from GitHub).

## One-time setup (repo owner, ~5 minutes)

The console stays a 404 until two GitHub secrets exist. In
`github.com/MihirZalavadia/air-port-media-ops` → Settings → Secrets and
variables → Actions → **New repository secret**:

1. **`ADMIN_PASSWORD_HASH`** — the bcrypt hash of the admin password
   (Claude generated the current password + hash; the hash is the value
   to paste, the password is what you type at login).
2. **`GH_CONTENT_TOKEN`** — a *fine-grained* personal access token:
   GitHub → Settings → Developer settings → Fine-grained tokens →
   Generate new token → Repository access: **Only
   `air-port-media-ops`** → Permissions: **Contents: Read and write**
   (nothing else) → 1-year expiry → copy the `github_pat_…` value.

Then run one deploy (push anything, or Actions → Deploy Website To
Hostinger → Run workflow). The deploy writes the config to
`/domains/mukeshart.in/admin_config.php` — outside the webroot, never
downloadable.

## Security model

- Password bcrypt-checked server-side; 5 wrong attempts = 1-hour lockout
  per IP; session cookies are HTTPS-only.
- All saves require a CSRF token; photo operations are jailed to the
  media folders and allowed file types.
- The GitHub token lives only in the server config outside the webroot
  and is scoped to this one repo's contents — it cannot touch workflows,
  settings, or other repos.
- The admin exists only on Hostinger — the GitHub Pages sample strips
  the whole `/api` folder at build time.
- `noindex` everywhere; the URL is shared, not discoverable.

## Limits (v1)

- **New** photo files upload fine but appear on the site only after
  they're wired into a page — tell Claude the filename and target spot.
- Partners roster (add/remove brands) still goes through Claude — the
  logo pipeline needs trimming/®-removal anyway.
- Upload size is capped by Hostinger's PHP limits (~50 MB) — fine for
  photos and web-encoded videos.
