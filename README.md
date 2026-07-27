# airport-media-ops

Digital, brand, and revenue operations for **Mukesh Art** — the airport
advertising concessionaire at **Rajkot International Airport (Hirasar)**,
in partnership with the Airports Authority of India — plus its outdoor
media division **Mukesh Publicity** (hoardings/OOH across Rajkot–Morbi).

This one repo holds two things:

1. **The live website source** → `raamxmukeshart-main/` (deploys to
   [mukeshart.in](https://mukeshart.in) automatically on every push)
2. **The operations workspace** → the numbered folders (strategy, brand,
   media kit, CRM, content, tenders)

> **New here? Read `CLAUDE.md` first** for full context and conventions.
> Hosting/build instructions for the site are in `DEPLOY.md`.

---

## 🌐 The Website — pages & flows

**Live at [mukeshart.in](https://mukeshart.in)** · Next.js static export ·
hosted on Hostinger · source in `raamxmukeshart-main/`

### Pages

| URL | What it is |
|---|---|
| `/` | Mukesh Art group home — umbrella brand, links to both divisions |
| `/airport/` | **Main commercial page.** Rajkot Airport media: hero films (day/night theme swap), inventory showcase, plans with "Enquire" CTAs, clients arch, FAQ (with FAQPage schema) |
| `/inventory/<slug>/` | 4 detail pages: digital-screen-network, landmark-outdoor-boards, in-terminal-backlit-boards, hybrid-journey-plans. Gated by the **unlock modal** (name + phone → lead) |
| `/publicity/` | Mukesh Publicity — outdoor/OOH division, Rajkot & Morbi |
| `/contact/` | Contact form + WhatsApp/email/phone |
| `/partners/` | Client logo wall (~30 brands). **Deliberately noindex** — public but kept out of Google |
| `/api/admin/` | Content admin console (see below). Plays dead (404) unless server secrets are provisioned |

### Lead flow (how an enquiry travels)

```
Visitor fills contact form or inventory unlock modal
  ├─ client-side validation (Indian mobile rules, honeypot anti-spam)
  ├─ POST /api/lead.php  → server re-validates → appends to
  │    /domains/mukeshart.in/leads/leads.jsonl (OUTSIDE webroot)
  │    → emails info@mukeshart.in
  └─ contact form also opens WhatsApp (+91 98253 40818) pre-filled
Leads are readable in the admin console → Leads tab
```

### Admin console flow (non-technical editing)

`mukeshart.in/api/admin/` — password-protected console with tabs for
site texts, inventory facts, photos, and leads. Every save commits to
this repo via the GitHub API → the deploy workflow redeploys the site in
~3–4 min. Nothing is ever lost: every edit is a git commit.
Secrets (password hash + GitHub token) live in **GitHub Actions
secrets**, provisioned to the server outside the webroot on each deploy.

### Deploy flow

```
git push to main
  → GitHub Actions "Deploy Website To Hostinger"
  → npm ci + next build (static export)
  → rsync over SSH to the Hostinger webroot (auto-retries 4× — the
    connection occasionally drops; a red run that says rsync failed
    4 times is real, a single flake self-heals)
```

---

## 📁 Folder map

| Folder | What's in it |
|---|---|
| `raamxmukeshart-main/` | **Website source.** ⚠️ Do not rename — the deploy workflow and the admin console both hard-code this path |
| `01_strategy_and_pitch/` | 90-day plan, target client list, meeting notes (notes are gitignored) |
| `02_brand/` | Logos, design system, Figma export, team photos, brand prompts |
| `03_website/` | Website **docs**: setup guides, SEO keyword reference, content briefs, video prompt library (code lives in `raamxmukeshart-main/`) |
| `04_media_kit/` | B2B sales kit sources + `assets/photography_2026_07/` (raw site photography, gitignored, local only) |
| `05_crm_and_outreach/` | CRM config + outreach templates (real lead data gitignored) |
| `06_inventory_dashboard/` | Inventory tracking schema (real pricing data gitignored) |
| `07_content_and_social/` | Instagram campaigns, LinkedIn content |
| `08_tender_intelligence/` | AAI/GeM tender monitoring, reference RFPs |
| `09_learning_notes/` | Industry study notes + AAI Hirasar traffic data |
| `99_archive/` | Superseded work: old design explorations, stale guides, scratch |
| `tools/` | Gamma deck configs and helper scripts |
| `raw_media_drop/` | Phone-footage intake for the video pipeline. **Gitignored — GB-scale files, never commit** |

---

## 📚 Key guides (start here for any recurring job)

| Task | Guide |
|---|---|
| Deploy / host the site elsewhere | `DEPLOY.md` |
| Google Search Console + Business Profile setup | `03_website/google_setup_guide_2026_07.md` |
| SEO: target keywords — what we rank for & how to add more | `03_website/seo_target_keywords_2026_07.md` |
| Admin console + lead pipeline activation & testing | `03_website/manual_setup_checklist_2026_07.md` (local only — holds credentials, keep out of git) |
| Photo/video production for the site | `03_website/media_production_guide_2026_07.md` |
| Adding/removing partner logos | `logo-onboarding` skill (Claude Code) + `02_brand/` |

---

## 🔍 Google / SEO state (2026-07-27)

- **Search Console:** verified (owner: art.mayurpatel@gmail.com), sitemap
  submitted, indexing requested for all public pages
- **Google Business Profile:** created as service-area business "Mukesh
  Art" (Rajkot, Morbi, Jamnagar) — **video verification pending**
- **On-page:** full client keyword list implemented (see the SEO keyword
  reference above); `/partners/` and `/api/` stay out of Google by design
- Rankings for category terms ("rajkot airport advertising") mature over
  weeks; check **GSC → Performance → Queries** for real data

---

## 👥 Stakeholders

- **Mukesh sir** — senior partner, final decision-maker
- **Ridham Bhuva** — partner, ASCO-certified, day-to-day contact
- **Mihir** — remote Digital & Revenue Architect (this repo's maintainer)

## 🔒 Boundaries

- No outreach sent without human review; no fake testimonials or
  fabricated social proof
- Real lead data, meeting notes, and pricing sheets stay gitignored
- Cost-sensitive: Indian SMB tooling, GST-compliant, ₹-billing preferred
