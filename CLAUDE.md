# CLAUDE.md — Project Context & Working Instructions

> **Read this file in full before doing anything in this project.** It contains the entire context, current state, conventions, and priorities. Do not assume — if anything below is unclear or seems stale, ask before acting.

---

## 1. Project Identity

**Project Codename:** `airport-media-ops` (rename as the brand finalizes)

**Real-World Context:**
A side-engagement to build the digital, brand, and revenue operations layer for a private company that holds the **Airport Marketing & Visitor Management System tender at Rajkot International Airport (India)**, in partnership with the Airports Authority of India (AAI).

The company manages:
- **10–15 advertising sites** across the airport
- **70–80 advertising boards** (mix of digital screens and static)
- **Trolley advertising** (luggage trolleys as branded media)
- **Visitor management services** (potential meet-and-greet expansion)
- **Revenue share with AAI:** 50% in Year 1, 100% from Year 2, +5% annual increment thereafter
- Currently ~10–12 local 1-year partners; multiple screens still blank = active revenue leak

**Stakeholders (real people I work with):**
- **Mukesh sir** — Senior partner, runs the company. Old-school operator with deep relationships. No digital background. Treat all references to him with respect; he's the final decision-maker.
- **Ridham Bhuva** — My best friend. Partner in the company. Recently certified ASCO (Airport Security Compliance Officer). Digital-native, the bridge between Mukesh sir and me.
- **Me (the user)** — Working remote-first on this. I have a hip disability; site visits are minimized and scheduled, not casual. I work full-time at Accenture (~₹48k in-hand) and this is a paid side-engagement (₹25k setup + ₹15k/month retainer, 90-day trial).

**My Role (how to think about my output):**
NOT "marketing guy" or "errand runner." I am positioned as the **remote Digital & Revenue Architect**:
- Builds and owns the website, CRM, media kit, outreach engine
- Runs the B2B sales funnel; Ridham/Mukesh sir close on calls
- Designs systems that compound: tender intelligence, content engine, brand assets
- Remote-first, async-first

When generating output, always assume this positioning. I am a strategic partner, not a cost center.

---

## 2. The Business Opportunity (Why This Matters)

**Macro:** India is in the middle of the largest airport privatization wave in its history. 11 more airports (Varanasi, Bhubaneswar, Amritsar, Trichy, Indore, Raipur, Hubli, Tirupati, Kangra, Kushinagar, Jabalpur) are coming up for privatization. Adani is investing ₹1 lakh crore by 2030. AAI is investing ₹15-25k crore in infrastructure.

**Micro:** Rajkot is in **Year 1** — the highest-margin year (50% revenue share vs AAI). Every blank screen and unsold trolley today is permanent margin loss. The window to maximize Year 1 revenue is closing daily.

**Strategic angle:** The company can become the **first multi-airport private marketing operator** if it builds operational infrastructure now. The 90-day work in this project is the foundation for that scaling story.

---

## 3. Current State of Work (As of Project Start)

Already completed (lives in `/01_strategy_and_pitch/`):
- ✅ 90-Day Execution Plan (.docx) — full strategic document for the pitch meeting
- ✅ 50 Target Client List (.xlsx) — segmented B2B prospect database with pipeline tracking

Pending (to be built in this project):
- ⏳ Pitch meeting with Mukesh sir + Ridham (within 2 weeks of project start)
- ⏳ Brand audit + visual identity refresh
- ⏳ Company website (landing + service pages)
- ⏳ Media kit PDF (10-12 pages, pitch-grade)
- ⏳ CRM setup (Zoho recommended) with pipelines and automations
- ⏳ Inventory dashboard (Airtable or Notion-based)
- ⏳ Outreach sequences (email + WhatsApp + LinkedIn DM templates)
- ⏳ Social presence setup (LinkedIn company page, Instagram, Google Business Profile)
- ⏳ Tender intelligence pipeline (AAI/GeM/MIAL/CHIAL monitoring)
- ⏳ Weekly content engine for Ridham's LinkedIn voice

---

## 4. Folder Structure (Maintain This)

```
airport-media-ops/                     # (structure as of 2026-07-27 cleanup)
├── CLAUDE.md                          # This file — always read first
├── README.md                          # Handover doc: pages, flows, folder map
├── DEPLOY.md                          # How to build/host the website
├── SESSION_STARTERS.md
│
├── raamxmukeshart-main/               # LIVE WEBSITE SOURCE (Next.js static export)
│                                      # ⚠️ never rename: deploy workflow +
│                                      # admin console hard-code this path
├── .github/workflows/                 # deploy-hostinger.yml (rsync, 4x retry)
│                                      # + ssh-diagnose.yml (manual only)
│
├── 01_strategy_and_pitch/             # 90-day plan, client list, meeting notes
├── 02_brand/                          # + design_system/, figma_export/, team_photos/
├── 03_website/                        # Website DOCS & guides (code is in raamxmukeshart-main)
├── 04_media_kit/                      # + assets/photography_2026_07/ (gitignored masters)
├── 05_crm_and_outreach/
├── 06_inventory_dashboard/
├── 07_content_and_social/             # Instagram campaign folders v1–v3
├── 08_tender_intelligence/
├── 09_learning_notes/                 # + hirasar_aai_traffic_july_2023.pdf
├── 99_archive/                        # Superseded: old design uploads, stale
│                                      # guides, tmp_pdf_images, old zips
├── tools/                             # Gamma deck configs, helper scripts
└── raw_media_drop/                    # Phone-footage intake — GITIGNORED,
                                       # GB-scale files, never commit
```

---

## 5. How to Work With Me — Conventions & Preferences

### Communication style
- I respond well to **direct, kind, occasionally humorous** answers. Not corporate, not overly formal.
- A little motivational/friendly tone when relevant, but don't force it.
- Push back if I'm wrong about something — don't sycophantically agree.
- Acknowledge my constraints (Accenture full-time, hip disability, ~2-4 hrs/day max for this project).

### Decision-making
- **Always ask clarifying questions** if a request is ambiguous, instead of making assumptions that lead to wasted work.
- When proposing approaches, **give me 2-3 options with trade-offs**, not a single answer — unless the choice is obvious.
- Prefer **simple, sustainable solutions** over clever complex ones. I will maintain this alone.

### Code & technical choices
- Default stack assumptions (override if there's a reason):
  - **Website:** Next.js + Tailwind on Vercel (free tier hosting)
  - **CRM:** Zoho CRM Standard (Indian SMB friendly, GST invoicing)
  - **Email sequences:** Zoho Campaigns or Instantly.ai
  - **WhatsApp:** AiSensy or Interakt for Business API
  - **Inventory dashboard:** Airtable (free tier first), then Notion fallback
  - **Design files:** Figma (free)
  - **Doc creation:** Markdown first, .docx/.pdf only when output requires it
- **Cost is sensitive.** Total monthly tooling budget for the company should stay under ₹8,000/month. If suggesting paid tools, justify why free alternatives won't work.
- **Indian context matters.** Use ₹ not $. Account for GST. Tool suggestions should be India-available with rupee billing where possible.

### File naming
- Use `snake_case_for_files.ext`
- Prefix versioned files with date: `2026_05_17_proposal_v1.docx`
- Keep `_DRAFT` or `_FINAL` suffix when relevant
- Never overwrite a file the user is iterating on; version it

### Output format
- For strategic/long content → save as files in the appropriate folder, don't dump giant walls of text in chat
- For quick answers, code snippets, or decisions → answer inline in chat
- For deliverables shown to Mukesh sir or Ridham → polished, branded, pitch-grade. No half-finished outputs in their hands.

### What NOT to do
- ❌ Don't write content directly impersonating Mukesh sir or other real individuals without my review
- ❌ Don't generate fake client testimonials, case studies, or social proof
- ❌ Don't send anything externally on my behalf — all outreach gets reviewed before going out
- ❌ Don't add unnecessary dependencies to code projects (Next.js + Tailwind is enough for the website; don't pull in 14 libraries)
- ❌ Don't suggest enterprise tools (Salesforce, HubSpot Enterprise) when SMB equivalents work
- ❌ Don't ignore the disability/remote-first constraint when designing workflows

---

## 6. Brand Voice & Tone Guidelines

When writing copy for the company (website, emails, LinkedIn, media kit):

### Voice attributes
- **Authoritative but not arrogant** — we partner with AAI; lean on credibility, don't oversell
- **Local pride, national ambition** — Saurashtra/Gujarat roots, eyes on multi-airport expansion
- **Practical over poetic** — buyers are media planners, marketing managers; they want ROI, not adjectives
- **Visual-first** — describe inventory in terms a marketer can see in their head

### Things to surface in every key piece
- AAI partnership (credibility moat)
- Ridham's ASCO certification (compliance trust signal)
- 70-80 boards, 10-15 sites scale
- Saurashtra NRI corridor (unique audience)
- Year 1 timing urgency (when relevant for sales)

### Things to NEVER do in copy
- Don't claim partnerships or clients that don't exist
- Don't use generic "we are the best" claims without specifics
- Don't pretend to be larger than we are; "boutique airport media operator" > "India's leading"

---

## 7. Decision Log (Append to This As We Go)

Every meaningful decision — stack choice, brand direction, pricing model, partner approach — gets logged here with date and reasoning. This prevents re-litigating decisions later.

| Date | Decision | Reasoning |
|------|----------|-----------|
| 2026-05-17 | Project initialized in Claude Code | Moving from chat-only strategy to executable project workspace |
| 2026-05-24 | Airport-first website scope reset | Airport media operation is the main commercial project; Mukesh Arts gets a simple credibility website only. |
| 2026-07-17 | Full public client roster at /partners/ (29 logos) | Mukesh sir/Ridham want every client visible. Logos identified from their zip + official web sources; displayed on fixed light plates so they stay identifiable in the night theme. Inox Casting excluded — company name unverifiable online. |
| 2026-07-27 | Repo cleanup for handover; GitHub Pages workflow removed | Stray root folders sorted into the numbered structure (design work → 02_brand, photography → 04_media_kit, scratch → 99_archive). Pages deploy deleted: Hostinger is the only host; the Pages copy was a public duplicate of the site. |
| 2026-07-27 | Repo must go PRIVATE (pending Mihir's click) | Discovered public during cleanup. Contains client list, pricing, meeting context, personal details in CLAUDE.md. Nothing in the toolchain needs public: Hostinger deploys via SSH, admin console uses a PAT. |
| | | |

---

## 8. Open Questions Awaiting Answers

Things I still need from Mukesh sir / Ridham — Claude should ask me about these whenever relevant, and remind me to follow up:

- [ ] **Exact pricing structure** they currently charge per screen/site/package
- [ ] **Full inventory map** — every screen location, dimensions, type, current advertiser
- [ ] **Existing partner contracts** — terms, expiry dates, renewal status
- [ ] **AAI contract specifics** — full revenue share schedule, exclusivity scope, term length
- [ ] **Company legal name + GST** for branding and invoices
- [ ] **Existing brand assets** — logo files, prior PPTs, photos of sites
- [ ] **Approved budget** for tools (Zoho, hosting, WhatsApp API, etc.)
- [ ] **Bank account / payment terms** for my retainer
- [x] **"Inox Casting" exact company name** — resolved 2026-07-18: it's **Innox Precision (I) Pvt Ltd** (innoxprecision.com); logo added to /partners/

---

## 9. My Personal Constraints (Plan Around These)

- **Day job:** Accenture, ~9-6, light workload but unpredictable spikes
- **Hours available for this project:** 2-4 hrs/day weekdays + weekend blocks (~20-25 hrs/week)
- **Mobility:** Hip disability — minimize site visits, prefer batched quarterly trips
- **Financial:** ₹15k personal loan to clear (top priority), ₹8k/mo AI tools, ₹5k/mo SIPs
- **Other side-projects:** Free landing catalogue automation project (active), gym routine (non-negotiable)

When suggesting timelines or work blocks, respect these. Don't propose anything that requires 8 hours of focused work on a Tuesday afternoon.

---

## 10. The Long Game

This project isn't a one-off gig. It's a wedge into the airport-media-operations industry as it privatizes. The 90-day trial leads to a longer engagement; the longer engagement positions me as a multi-airport digital operator as the company scales.

**3-month goal:** Prove value via the 90-day plan. Lock the retainer.
**12-month goal:** Move to retainer + commission. Help win 1 additional airport tender bid.
**3-year goal:** Be the digital/operations backbone of a multi-airport media group. Equity discussion.

Every piece of work in this project — every email template, every page on the website, every dashboard — should ideally be **reusable across airports**, not Rajkot-specific. Build for the multi-airport future.

---

## 11. First Things First

When this project is opened fresh, the typical next-action priorities are:

1. **Verify open questions in Section 8** — what data do I have, what's still missing
2. **Read the 90-Day Execution Plan** in `/01_strategy_and_pitch/` for full context
3. **Check the most recent file in `/01_strategy_and_pitch/meeting_notes/`** — what's the latest from Mukesh sir / Ridham
4. **Confirm current week's focus** from the 90-day plan, work only on that week's deliverables

If unclear, ask me: *"What are we working on this session?"*

---

*End of CLAUDE.md. This file evolves with the project — update it whenever assumptions change.*
