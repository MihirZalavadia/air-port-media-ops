# SESSION_STARTERS.md

> Copy-paste prompts for common work sessions in Claude Code. Customize before sending.

---

## 🟢 Every Session — Start With This

```
Read CLAUDE.md and README.md first. Then tell me what you understand
about this project in 3 sentences before we proceed.
```

This forces Claude Code to actually load context instead of guessing.

---

## 🎨 Brand & Visual Identity Sessions

```
We're working on brand foundations today. Based on CLAUDE.md Section 6,
draft 3 directional concepts for the brand voice and visual identity.
For each: a one-line positioning statement, a 3-word voice descriptor,
and a sample tagline. Save to /02_brand/style_guide/concepts_v1.md
when I approve.
```

```
Help me audit the existing brand assets in /02_brand/. Compare what's
there against the visual standards of TIMDAA, Pranaam, and Times OOH
(I'll share screenshots in /02_brand/reference_inspiration/).
Identify the top 5 upgrade priorities. Output as a markdown report.
```

---

## 🌐 Website Build Sessions

```
We're starting the website build today. Stack is Next.js + Tailwind
(per CLAUDE.md). Initialize the project in /03_website/ with:
- App router setup
- Tailwind configured with our brand colors (ask me for them first)
- Pages stubbed out: home, services, for-agencies, for-brands,
  about, contact
- A basic responsive layout component
Don't write any content yet — just the skeleton. Then show me the file tree.
```

```
Write the home page copy for the website. Voice and tone per
CLAUDE.md Section 6. Surface AAI partnership, ASCO certification,
70-80 boards, Saurashtra NRI corridor, and Year 1 timing.
Length: hero + 3 sections + CTA. Save to
/03_website/content/home_page_copy.md for my review BEFORE
writing it into the JSX.
```

---

## 📄 Media Kit Sessions

```
Help me outline the 10-12 page media kit PDF. Reference the structure
from TIMDAA, MyHoardings, and Excellent Publicity's airport
advertising guides. For each page, give me:
- Page title
- Key message
- Visual treatment idea
- Data points needed from Ridham/Mukesh sir
Output to /04_media_kit/outline_v1.md
```

---

## 📧 CRM & Outreach Sessions

```
Draft the 4-touch cold email sequence for the Ad Agencies segment
(see /01_strategy_and_pitch/50_Target_Client_List.xlsx, Tab 1).
- Touch 1: opener (day 0)
- Touch 2: value add (day 4)
- Touch 3: case-study angle (day 9)
- Touch 4: breakup (day 14)
Each under 100 words. Indian B2B tone — direct, no fluff.
Save to /05_crm_and_outreach/email_sequences/ad_agencies_v1.md
```

```
Build the lead research dossier template. When we research a target
company before outreach, we need: decision-maker name, role, LinkedIn,
recent company news, likely budget tier, pitch angle, warm intro path.
Output to /05_crm_and_outreach/lead_research/_TEMPLATE.md
```

---

## 📊 Inventory Dashboard Sessions

```
We're setting up the inventory dashboard. Output target: Airtable.
Design the schema for tracking 70-80 ad boards across 10-15 sites.
Required fields: site name, screen ID, location (e.g., departures
T1 wall A), type (digital/static), dimensions, current advertiser,
contract expiry, monthly rate card, status (sold/blank/booked).
Save the schema spec to /06_inventory_dashboard/airtable_schema.md
plus a starter CSV template to /06_inventory_dashboard/data/inventory_template.csv
```

---

## 📱 Content & Social Sessions

```
Generate this week's LinkedIn content calendar for Ridham's personal
profile. Voice: thoughtful operator, ASCO-certified, building in
public. 3 posts this week:
- 1 industry observation (airport privatization context)
- 1 behind-the-scenes (something concrete about running airport media)
- 1 thought-leadership (NRI corridor + Tier-2 airports insight)
Each post 150-300 words. Save to /07_content_and_social/linkedin_posts/
with date-prefixed filenames.
```

---

## 🏛️ Tender Intelligence Sessions

```
Set up the tender tracking spreadsheet. Sources to monitor:
- AAI portal (aai.aero)
- GeM (gem.gov.in)
- Delhi Airport (CIAL/DIAL)
- Mumbai (MIAL)
- Bangalore (BIAL)
- CHIAL (Chandigarh)
- Cochin (CIAL Kochi)
Columns: Portal, Tender ID, Title, Issue date, Submission deadline,
EMD amount, Eligibility summary, Go/No-Go score (1-10), My notes.
Save to /08_tender_intelligence/tracked_tenders.xlsx
```

---

## 📝 Meeting Prep & Notes Sessions

```
I have a meeting with Mukesh sir and Ridham tomorrow. Help me prep:
1. Review /01_strategy_and_pitch/90_Day_Execution_Plan.docx
2. Generate 10 specific questions I should ask
3. Generate 5 likely objections and my counter-responses
4. Generate the meeting opening (90 seconds)
Save prep doc to /01_strategy_and_pitch/meeting_notes/[DATE]_prep.md
```

```
Help me write up the notes from today's meeting with Mukesh sir.
I'll paste my raw notes — turn them into:
1. Decisions made
2. Action items (who/what/when)
3. Open questions
4. Updates needed to CLAUDE.md Section 8 (open questions)
Save to /01_strategy_and_pitch/meeting_notes/[DATE]_notes.md
```

---

## 🧠 Learning & Research Sessions

```
I'm studying topic X this week. Build me a one-page brief on it:
- Core concepts in plain English (5-7 bullets)
- How it applies to our airport media business
- 3 things I should know that 90% of people in this industry don't
- 2-3 follow-up resources worth my time
Save to /09_learning_notes/[topic].md
```

---

## 🔧 Debugging & Cleanup Sessions

```
Audit the project: what's stale, broken, or inconsistent?
- Scan all top-level folders
- Check for files older than 2 weeks that look like drafts
- Flag any contradictions between CLAUDE.md and actual files
- Suggest cleanup actions
Output an audit report to /99_archive/audit_[DATE].md
```

---

## 💡 Open-Ended Strategy Sessions

```
I want to think out loud about [topic]. Don't generate files yet.
Ask me 3-5 sharp questions to narrow this down, then give me your
honest take based on CLAUDE.md context.
```

---

## 🛑 Anti-Pattern Reminders (Built In)

If Claude Code starts to:
- Generate 14 files when you asked for one → say "stop, scope down to the smallest useful thing"
- Suggest enterprise tools when SMB works → say "re-read CLAUDE.md Section 5 — Indian SMB budget"
- Write copy that overclaims → say "audit against Section 6 brand voice — no fake credibility"
- Drift into long tangents → say "back to the original ask, in fewer words"

You stay in charge. Claude Code helps; it doesn't drive.
