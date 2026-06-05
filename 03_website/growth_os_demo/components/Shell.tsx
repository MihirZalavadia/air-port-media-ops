"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";
import {
  AIRPORT_STATS,
  BRAND_NAMES,
  BrandId,
  FUTURE_MODULES,
  INVENTORY,
  InventoryCategory,
  LOGO_CONCEPTS,
  PALETTES,
  POCS,
  TAGLINES,
  ThemeId,
} from "@/lib/data";

const FILTERS: Array<"All" | InventoryCategory> = [
  "All",
  "Digital Packages",
  "Static Boards",
  "Passenger Journey",
  "Custom Plans",
];

type LeadDraft = {
  name: string;
  company: string;
  phone: string;
  window: string;
  interest: string;
};

const EMPTY_LEAD: LeadDraft = {
  name: "",
  company: "",
  phone: "",
  window: "",
  interest: "",
};

const FEATURED_FOR_GATE = ["PKG-01", "AD-3", "PKG-03", "DIGITAL-FULL"];
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const heroImage = (name: string) => `${BASE_PATH}/img/${name}.png`;

export default function Shell() {
  const [themeId, setThemeId] = useState<ThemeId>("day");
  const [brandId, setBrandId] = useState<BrandId>("classic");
  const [filter, setFilter] = useState<"All" | InventoryCategory>("All");
  const [filterTick, setFilterTick] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [lead, setLead] = useState<LeadDraft>(EMPTY_LEAD);
  const [booting, setBooting] = useState(true);

  // Read saved theme/brand + hide loader after first paint
  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("ram-theme") as ThemeId | null;
      const savedBrand = window.localStorage.getItem("ram-brand") as BrandId | null;
      if (savedTheme === "night" || savedTheme === "day") setThemeId(savedTheme);
      if (savedBrand === "classic" || savedBrand === "saurashtra") setBrandId(savedBrand);
    } catch {}
    const t = window.setTimeout(() => setBooting(false), 1100);
    return () => window.clearTimeout(t);
  }, []);

  // Propagate brand + theme onto <html> so CSS tokens flip everywhere
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = themeId;
    document.documentElement.dataset.brand = brandId;
    try {
      window.localStorage.setItem("ram-theme", themeId);
      window.localStorage.setItem("ram-brand", brandId);
    } catch {}
  }, [themeId, brandId]);

  const paletteId = `${brandId}-${themeId}` as const;

  const visible = useMemo(() => {
    if (filter === "All") return INVENTORY;
    return INVENTORY.filter((item) => item.category === filter);
  }, [filter]);

  const featured = useMemo(
    () => INVENTORY.filter((item) => FEATURED_FOR_GATE.includes(item.code)),
    [],
  );

  function toggleTheme() {
    setThemeId((id) => (id === "night" ? "day" : "night"));
  }

  function changeFilter(next: "All" | InventoryCategory) {
    setFilter(next);
    setFilterTick((v) => v + 1);
  }

  return (
    <>
      {booting && <RouteLoader />}

      <TopNav
        themeId={themeId}
        toggleTheme={toggleTheme}
        brandId={brandId}
        toggleBrand={() =>
          setBrandId((b) => (b === "classic" ? "saurashtra" : "classic"))
        }
      />

      <main>
        <Hero />
        <Manifesto />
        <WhyAirport />
        <Identity paletteId={paletteId} />
        <Portfolio
          filter={filter}
          setFilter={changeFilter}
          filterTick={filterTick}
          visible={visible}
          featured={featured}
          unlocked={unlocked}
          setUnlocked={setUnlocked}
          lead={lead}
          setLead={setLead}
        />
        <RangeBand />
        <Team />
        <FutureLayer />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

/* ---------- Sub-components ---------- */

function RouteLoader() {
  return (
    <div className="loader" aria-label="Loading airport media routes">
      <span>Loading airport media routes</span>
      <div className="loader-bar" />
    </div>
  );
}

function TopNav({
  themeId,
  toggleTheme,
  brandId,
  toggleBrand,
}: {
  themeId: ThemeId;
  toggleTheme: () => void;
  brandId: BrandId;
  toggleBrand: () => void;
}) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Rajkot Airport Marketing">
          <span className="brand-mark">
            <AirportLogoMark />
          </span>
          <span className="brand-text">
            <b>Rajkot Airport Marketing</b>
            <small>Rajkot International — Draft</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#why">Why Airport</a>
          <a href="#identity">Identity</a>
          <a href="#inventory">Inventory</a>
          <a href="#future">CRM Layer</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-end">
          <BrandToggle brandId={brandId} onToggle={toggleBrand} />
          <FlightToggle themeId={themeId} onToggle={toggleTheme} />
          <a href="#inventory" className="btn-primary">
            Unlock Inventory
          </a>
        </div>
      </div>
    </header>
  );
}

function BrandToggle({
  brandId,
  onToggle,
}: {
  brandId: BrandId;
  onToggle: () => void;
}) {
  const isSaurashtra = brandId === "saurashtra";
  return (
    <button
      type="button"
      className={`brand-toggle ${isSaurashtra ? "is-saurashtra" : "is-classic"}`}
      onClick={onToggle}
      aria-label={isSaurashtra ? "Switch to Classic palette" : "Switch to Saurashtra palette"}
      title={isSaurashtra ? "Switch to Classic palette" : "Switch to Saurashtra palette"}
    >
      <span className="brand-toggle-dot" aria-hidden="true" />
      <span className="brand-toggle-label">
        <small>Palette</small>
        <b>{isSaurashtra ? "Saurashtra" : "Classic"}</b>
      </span>
    </button>
  );
}

function FlightToggle({
  themeId,
  onToggle,
}: {
  themeId: ThemeId;
  onToggle: () => void;
}) {
  const isNight = themeId === "night";
  return (
    <button
      type="button"
      onClick={onToggle}
      className="toggle"
      aria-pressed={isNight}
      aria-label={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
      title={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
    >
      <span className="toggle-scene" aria-hidden="true">
        <span className="toggle-sun" />
        <span className="toggle-moon" />
        <span className="toggle-cloud toggle-cloud-a" />
        <span className="toggle-cloud toggle-cloud-b" />
        <span className="toggle-star toggle-star-1" />
        <span className="toggle-star toggle-star-2" />
        <span className="toggle-star toggle-star-3" />
        <span className="toggle-runway" />
        <span className="toggle-plane">
          <Airliner />
        </span>
        <span className="toggle-trail" />
      </span>
      <span className="toggle-label">
        <small>{isNight ? "Night" : "Day"}</small>
        <b>{isNight ? "Runway" : "Takeoff"}</b>
      </span>
    </button>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div
        className="hero-photo day"
        style={{ backgroundImage: `url(${heroImage("hero-day")})` }}
      />
      <div
        className="hero-photo night"
        style={{ backgroundImage: `url(${heroImage("hero-night")})` }}
      />

      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow">Rajkot International · Airport Media</span>
        <h1 className="hero-h1">
          Airport visibility, <em>engineered.</em>
        </h1>
        <p className="hero-sub">
          A premium media network for brands that want Saurashtra&apos;s
          travelling audience and the high-context recall only an airport
          environment delivers. Inventory you can shortlist, plans you can
          actually pitch internally, and a path to a CRM-tracked relationship.
        </p>

        <div className="hero-actions">
          <a href="#inventory" className="btn-primary">
            Preview the Portfolio
          </a>
          <a href="#identity" className="btn-ghost">
            Compare Identity Routes
          </a>
        </div>
      </div>

      <div className="container">
        <div className="hero-stats">
          {AIRPORT_STATS.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container manifesto-inner">
        <p className="manifesto-quote">
          &ldquo;Airport media is one of the last formats where a brand still
          earns time, attention, and a captive audience that is already
          travelling with intent.&rdquo;
        </p>
        <dl className="manifesto-meta">
          <div>
            <dt>Footprint</dt>
            <dd>
              10 – 15 advertising sites and 70 – 80 screen and static surfaces
              across the terminal envelope.
            </dd>
          </div>
          <div>
            <dt>Audience</dt>
            <dd>
              Saurashtra business travellers, NRI corridors, family decision
              makers, and Tier-2 premium households.
            </dd>
          </div>
          <div>
            <dt>Window</dt>
            <dd>
              First-year operating partner: the right moment to lock category
              exclusivity before the airport scales further.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function WhyAirport() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Why this format</span>
            <h2 className="h-section">
              Airport visibility for brands ready <em>to be remembered</em>.
            </h2>
          </div>
          <p className="section-head-right">
            We treat airport media as a portfolio, not a price sheet. Buyers see
            a premium product, a clear inventory shape, and a consultative
            conversation about fit, window, and audience.
          </p>
        </div>

        <div className="why-grid">
          {[
            {
              n: "01",
              t: "Premium context",
              p: "Airport movement gives brands a cleaner environment than cluttered outdoor corridors — and an audience that is already attentive, not scrolling.",
            },
            {
              n: "02",
              t: "Right buyer fit",
              p: "We qualify campaigns by window, format and budget, so every package shown is one a marketing lead can defend internally without rework.",
            },
            {
              n: "03",
              t: "Consultative plans",
              p: "We lead with examples and stories, then guide buyers into the right digital, static, or hybrid plan once the campaign window is confirmed.",
            },
          ].map((c) => (
            <article className="why-card" key={c.n}>
              <span className="why-card-num">{c.n}</span>
              <h3>{c.t}</h3>
              <p>{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Identity({
  paletteId,
}: {
  paletteId: string;
}) {
  return (
    <section className="section" id="identity" style={{ background: "var(--bg-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Identity routes</span>
            <h2 className="h-section">
              Confirm the public name, mark, and palette <em>before the full build</em>.
            </h2>
          </div>
          <p className="section-head-right">
            Four decisions — name, mark, palette, tagline. Use the day/night
            toggle in the header to preview each palette live; the cards below
            are static reference swatches.
          </p>
        </div>

        <div className="identity-grid">
          <div className="logo-stack">
            {LOGO_CONCEPTS.map((c) => (
              <article className="logo-card" key={c.id}>
                <div className="logo-card-mark">
                  <AirportLogoMark />
                </div>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.note}</p>
                  <small className="logo-card-label">{c.label}</small>
                </div>
              </article>
            ))}

            <article className="logo-card" style={{ alignItems: "start" }}>
              <div className="logo-card-mark" aria-hidden="true">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22, color: "#E8C882" }}>Aa</span>
              </div>
              <div>
                <h4 style={{ marginBottom: 10 }}>Name options</h4>
                <div style={{ display: "grid", gap: 10 }}>
                  {BRAND_NAMES.map((b) => (
                    <div key={b.name}>
                      <strong style={{ color: "var(--ink)", fontSize: 14 }}>{b.name}</strong>
                      <p style={{ margin: "4px 0 0", color: "var(--muted)", fontSize: 12.5, lineHeight: 1.5 }}>
                        {b.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div>
            <div className="palette-row">
              {PALETTES.map((p) => (
                <div
                  key={p.id}
                  className={`palette ${paletteId === p.id ? "active" : ""}`}
                  aria-current={paletteId === p.id ? "true" : undefined}
                >
                  <span className="palette-swatches">
                    <b style={{ background: p.swatches.deep }} />
                    <b style={{ background: p.swatches.accent }} />
                    <b style={{ background: p.swatches.surface }} />
                    <b style={{ background: p.swatches.ink }} />
                  </span>
                  <strong>{p.name}</strong>
                  <small>{p.note}</small>
                  {paletteId === p.id && <span className="palette-current">Currently active</span>}
                </div>
              ))}
            </div>

            <div className="confirm-strip">
              <b>Awaiting confirmation</b>
              <span>
                Palette and rate-card share format are draft references. Final
                visual system locks with Mukesh sir before any external send.
              </span>
            </div>

            <div style={{ marginTop: 30 }}>
              <span className="eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>
                Tagline directions
              </span>
              <div style={{ display: "grid", gap: 14, marginTop: 16 }}>
                {TAGLINES.map((t) => (
                  <p
                    key={t}
                    className="serif"
                    style={{
                      margin: 0,
                      paddingLeft: 16,
                      borderLeft: "2px solid var(--accent)",
                      color: "var(--ink)",
                      fontSize: 22,
                      lineHeight: 1.2,
                    }}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio({
  filter,
  setFilter,
  filterTick,
  visible,
  featured,
  unlocked,
  setUnlocked,
  lead,
  setLead,
}: {
  filter: "All" | InventoryCategory;
  setFilter: (f: "All" | InventoryCategory) => void;
  filterTick: number;
  visible: typeof INVENTORY;
  featured: typeof INVENTORY;
  unlocked: boolean;
  setUnlocked: (v: boolean) => void;
  lead: LeadDraft;
  setLead: (l: LeadDraft) => void;
}) {
  function updateLead(k: keyof LeadDraft, v: string) {
    setLead({ ...lead, [k]: v });
  }

  return (
    <section className="section" id="inventory">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Inventory · Portfolio</span>
            <h2 className="h-section">
              Inventory presented like <em>a body of work</em>.
            </h2>
          </div>
          <p className="section-head-right">
            We show range, credibility, and starting level on the public face.
            Full board, references, and commercials unlock once a buyer shares
            their campaign window — a clean lead trail for the owner side.
          </p>
        </div>

        {!unlocked ? (
          <div className="gate-preview">
            <div className="gate-collage" aria-label="Inventory preview">
              {featured.map((item, i) => {
                const nightSrc = item.imageNight ?? item.image;
                return (
                  <article
                    key={item.code}
                    className={i === 0 ? "feature-collage" : undefined}
                  >
                    <div
                      className="gate-layer gate-layer-day"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div
                      className="gate-layer gate-layer-night"
                      style={{ backgroundImage: `url(${nightSrc})` }}
                    />
                    <div className="gate-collage-meta">
                      <span>{item.category}</span>
                      <h4>{item.title}</h4>
                    </div>
                  </article>
                );
              })}
            </div>

            <form
              className="gate-form"
              onSubmit={(e) => {
                e.preventDefault();
                setUnlocked(true);
                const el = document.getElementById("inventory");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="eyebrow">Buyer info first</span>
              <h3>Unlock the full inventory board</h3>
              <p>
                The website behaviour we can pitch: serious buyers share their
                campaign window before seeing full inventory depth, and the
                lead is routed straight to owner-side follow-up.
              </p>

              <label>
                <span>Name</span>
                <input
                  value={lead.name}
                  onChange={(e) => updateLead("name", e.target.value)}
                  placeholder="Marketing lead name"
                />
              </label>
              <label>
                <span>Company</span>
                <input
                  value={lead.company}
                  onChange={(e) => updateLead("company", e.target.value)}
                  placeholder="Brand / agency"
                />
              </label>
              <label>
                <span>Phone / WhatsApp</span>
                <input
                  value={lead.phone}
                  onChange={(e) => updateLead("phone", e.target.value)}
                  placeholder="+91"
                />
              </label>
              <label>
                <span>Campaign window</span>
                <input
                  value={lead.window}
                  onChange={(e) => updateLead("window", e.target.value)}
                  placeholder="Festive · Q3 · launch burst"
                />
              </label>
              <label className="wide">
                <span>Inventory interest</span>
                <input
                  value={lead.interest}
                  onChange={(e) => updateLead("interest", e.target.value)}
                  placeholder="Digital package, front-lit board, full airport plan"
                />
              </label>

              <button type="submit" className="btn-primary">
                Unlock Demo Inventory
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="chips" role="tablist">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`chip ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="portfolio" key={filterTick}>
              {visible.map((item, i) => {
                const span = i === 0 ? "feature" : i % 5 === 4 ? "tall" : "";
                const nightSrc = item.imageNight ?? item.image;
                return (
                  <article
                    key={item.code}
                    className={`work ${span}`.trim()}
                    style={{ animationDelay: `${i * 70}ms` } as CSSProperties}
                  >
                    <div className="work-image-wrap">
                      <div
                        className="work-image work-image-day"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div
                        className="work-image work-image-night"
                        style={{ backgroundImage: `url(${nightSrc})` }}
                      />
                      <div className="work-shade" />
                      <div className="work-veil" />
                      <span className="work-tag">
                        {item.code} · {item.category}
                      </span>
                      <span className="work-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12 L17 12 M12 6 L19 12 L12 18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className="work-image-meta">
                        <span className="work-image-meta-cat">{item.category}</span>
                        <h4>{item.title}</h4>
                      </div>
                    </div>

                    <div className="work-body">
                      <span className="work-code">
                        {item.code} · {item.unitCount}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <p className="work-lead">{item.leadLine}</p>
                      <dl className="work-dl">
                        <div>
                          <dt>Format</dt>
                          <dd>{item.format}</dd>
                        </div>
                        <div>
                          <dt>Units</dt>
                          <dd>{item.unitCount}</dd>
                        </div>
                        <div>
                          <dt>Location</dt>
                          <dd>{item.location}</dd>
                        </div>
                        <div>
                          <dt>References</dt>
                          <dd>{item.unitRefs.slice(0, 6).join(", ")}</dd>
                        </div>
                      </dl>
                      <div className="work-zones">
                        {item.zones.map((z) => (
                          <span key={z}>{z}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function RangeBand() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="range">
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Commercial range
            </span>
            <h2 style={{ marginTop: 16 }}>
              Wide airport media inventory, starting from <em>₹2,00,000 / month</em>.
            </h2>
          </div>
          <p>
            We do not show every package price publicly. The site qualifies
            intent first, then shares the correct media kit, availability, and
            final commercials once the campaign window is understood.
          </p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section" id="team" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Owner-side POCs</span>
            <h2 className="h-section">
              Clear contacts, without a homepage <em>built around faces</em>.
            </h2>
          </div>
          <p className="section-head-right">
            The public brand stays focused on the airport media offer. Serious
            leads route through the form and are matched to the right owner-side
            person for follow-up.
          </p>
        </div>

        <div className="team-grid">
          {POCS.map((p) => (
            <article className="poc" key={p.name}>
              <div className="poc-initials">{getInitials(p.name)}</div>
              <span className="poc-role">{p.role}</span>
              <h3>{p.name}</h3>
              <p>{p.focus}</p>
              <small>Direct contact details TBC after owner approval</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureLayer() {
  return (
    <section className="future" id="future">
      <div className="container">
        <div className="future-inner">
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Future operating layer
            </span>
            <h2 style={{ marginTop: 16 }}>
              Public website now. Selected-user <em>CRM in month 2/3</em>.
            </h2>
            <p className="future-lede">
              The starter website wins trust first. Once the public story is
              approved, the selected-user layer helps maintain inventory,
              qualify the right companies, track serious leads, and reduce
              manual follow-up leakage.
            </p>
          </div>

          <div className="future-modules">
            {FUTURE_MODULES.map((m) => (
              <article key={m}>{m}</article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Request media kit</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Tell us the campaign window. We&apos;ll suggest <em>the right inventory path</em>.
            </h2>
            <p className="lede">
              Draft front-end only. Final form routing, contact numbers, CRM
              connection, and WhatsApp workflow connect after owner approval.
            </p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            {[
              { k: "Full name", w: false },
              { k: "Brand / company", w: false },
              { k: "Phone / WhatsApp", w: false },
              { k: "Email", w: false },
              { k: "Campaign window", w: false },
              { k: "Inventory interest", w: false },
              { k: "Budget range", w: true },
            ].map(({ k, w }) => (
              <label key={k} className={w ? "wide" : ""}>
                <span>{k}</span>
                <input placeholder={k} />
              </label>
            ))}
            <label className="wide">
              <span>Message</span>
              <textarea rows={4} placeholder="Campaign brief, preferred dates, or notes" />
            </label>
            <button type="submit" className="btn-primary">
              Request Media Kit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-inner">
          <div>
            <div className="foot-brand">
              <span className="brand-mark"><AirportLogoMark /></span>
              <h3>Rajkot Airport Marketing</h3>
            </div>
            <p>
              Draft reference website. No final legal, official partnership,
              contact, GST, or campaign claims included until owner approval.
              Inventory and visuals are working drafts for the partner meeting.
            </p>
          </div>

          <div className="foot-col">
            <h6>Sections</h6>
            <ul>
              <li><a href="#why">Why Airport</a></li>
              <li><a href="#identity">Identity Routes</a></li>
              <li><a href="#inventory">Inventory Portfolio</a></li>
              <li><a href="#future">CRM Layer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h6>Reach</h6>
            <ul>
              <li>Rajkot International Airport</li>
              <li>Saurashtra · Gujarat</li>
              <li>Owner-side response within 1 working day</li>
            </ul>
          </div>
        </div>

        <div className="foot-base">
          <span>v0.2 · Draft Reference Site · {new Date().getFullYear()}</span>
          <span>Built for owner review</span>
        </div>
      </div>
    </footer>
  );
}

function Airliner() {
  // Front-view passenger jet, line-art style.
  // Vertical tail fin at top centre, horizontal stabilizer below, circular
  // fuselage in the middle, swept wings extending left + right with twin
  // engines below. Reads as a real airliner head-on.
  return (
    <svg
      viewBox="0 0 60 36"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Vertical tail fin (top centre) */}
      <path d="M29 7 Q30 2.5 30 2.5 Q30 2.5 31 7 L31 13" strokeWidth="1.3" />

      {/* Horizontal tail stabilizer */}
      <path d="M24 14 L36 14" strokeWidth="1.3" />
      <path d="M24 14 L23 13" strokeWidth="1.2" />
      <path d="M36 14 L37 13" strokeWidth="1.2" />

      {/* Fuselage (centre body, slightly elongated oval) */}
      <ellipse cx="30" cy="20" rx="4" ry="6" strokeWidth="1.3" />

      {/* Left wing — swept back */}
      <path d="M6 25 L25 17 L25 20 L9 27 Z" strokeWidth="1.3" />

      {/* Right wing — swept back */}
      <path d="M54 25 L35 17 L35 20 L51 27 Z" strokeWidth="1.3" />

      {/* Engines */}
      <ellipse cx="15" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
      <ellipse cx="45" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />

      {/* Motion / descent lines below engines */}
      <g strokeWidth="0.8" opacity="0.6">
        <path d="M12 30 L12 33" />
        <path d="M15 30 L15 34" />
        <path d="M18 30 L18 33" />
        <path d="M42 30 L42 33" />
        <path d="M45 30 L45 34" />
        <path d="M48 30 L48 33" />
      </g>
    </svg>
  );
}

/* Airport-tower brand mark — arch + control tower + takeoff sweep */
function AirportLogoMark() {
  return (
    <svg
      viewBox="0 0 100 60"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Terminal roof arch */}
      <path d="M6 46 Q14 22 30 22 Q50 22 70 22 Q86 22 94 46" strokeWidth="2.6" />

      {/* Ground / terrace line */}
      <path d="M10 48 L90 48" strokeWidth="1.5" />

      {/* Glass-facade hairlines under roof */}
      <g strokeWidth="0.7" opacity="0.55">
        <path d="M20 48 L34 24" />
        <path d="M44 48 L48 22" />
        <path d="M60 48 L60 22" />
        <path d="M76 48 L72 22" />
      </g>

      {/* Control tower */}
      <path d="M30 22 L30 8" strokeWidth="2" />
      <rect x="27" y="6" width="6" height="3" rx="0.6" fill="currentColor" stroke="none" />
      {/* Antenna */}
      <path d="M30 6 L30 1" strokeWidth="1.4" />

      {/* Takeoff / runway sweep with arrowhead pointing up-right */}
      <path d="M40 50 Q60 42 78 30 Q86 24 91 14" strokeWidth="2.2" />
      <path d="M86 17 L92 12 L89 6" strokeWidth="2.2" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}
