# Hosting mukeshart.in — Step-by-Step (for the person handling Hostinger)

> Context in one line: the website is already built and auto-hosted on
> Netlify from our GitHub repo — nothing needs uploading. Your job is the
> Hostinger side: buy the domain, set up the 2 email boxes, and add 2 DNS
> records that point the domain at the existing site.

## Before you start

- The site code: github.com/MihirZalavadia/air-port-media-ops (accept the
  collaborator invite if Mihir sent one — only needed if you'll touch code)
- Live site right now: https://<NETLIFY-SITE>.netlify.app
- Full technical details: `DEPLOY.md` in the repo root
- ⚠️ Do NOT change the domain's nameservers, and do NOT buy any Hostinger
  web-hosting plan — the site is hosted free on Netlify. Domain + email
  plan only.

## Step 1 — Buy the domain (5 min)

1. Hostinger → search **mukeshart.in** (spell-check it: m-u-k-e-s-h-a-r-t)
2. Add to cart → 1 year (or more) → checkout
3. In the domain settings turn ON: **auto-renew** and **WHOIS privacy**
4. Skip every upsell (hosting, website builder, SSL — all not needed;
   SSL comes free from Netlify)

## Step 2 — Email plan + 2 mailboxes (10 min)

1. hPanel → **Emails** → pick the plan with 2 mailboxes → attach to
   mukeshart.in
2. Create the two mailboxes (confirm names with Mihir/Mukesh sir first):
   - `info@mukeshart.in` — public contact (goes on the website)
   - `mukesh@mukeshart.in` — internal
3. Hostinger adds the MX/SPF records automatically. Send a test mail both
   ways to confirm each box works.

## Step 3 — Point the domain at the website (5 min)

hPanel → **Domains → mukeshart.in → DNS / Name Servers → DNS Zone**.
Add exactly these two records (delete any conflicting default A/CNAME for
`@` or `www` that Hostinger parked there, but touch nothing else — leave
all MX/TXT records alone or email breaks):

| Type  | Name | Points to                     | TTL     |
|-------|------|-------------------------------|---------|
| A     | @    | 75.2.60.5                     | default |
| CNAME | www  | <NETLIFY-SITE>.netlify.app    | default |

## Step 4 — Tell Mihir (his side, 5 min)

Mihir will then, in Netlify: add mukeshart.in as the custom domain, set it
primary, and enable Force HTTPS. The SSL certificate issues automatically
once DNS propagates (usually 15 min – 2 hours, worst case 24h).

He'll also update the site's internal URLs (sitemap/canonicals) to the new
domain in the code.

## Step 5 — Verify (after propagation)

- https://mukeshart.in → Mukesh Art home page, padlock (HTTPS) present
- https://mukeshart.in/airport/ → airport site
- https://mukeshart.in/publicity/ → outdoor site
- https://www.mukeshart.in → redirects to the non-www address
- Send/receive one email from each mailbox again after the DNS edit

If anything looks off after 24h: dnschecker.org → enter mukeshart.in →
the A record should show 75.2.60.5 worldwide. If it doesn't, re-check
Step 3; if it does but the site errors, ping Mihir (Netlify side).

## What updates look like later

Nobody ever uploads files. Code is pushed to GitHub `main` → Netlify
rebuilds and publishes automatically in ~2 minutes. If you want to make
code changes, clone the repo and read `DEPLOY.md` first.
