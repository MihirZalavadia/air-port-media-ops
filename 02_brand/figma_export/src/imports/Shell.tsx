"use client";

import { CSSProperties, useEffect, useMemo, useState } from "react";
import {
  AIRPORT_STATS,
  AIRPORT_CONNECTIONS,
  AIRPORT_NAME,
  BRAND_DISPLAY_NAME,
  CAMPAIGN_TYPES,
  CLIENT_PROOF_LINE,
  FEATURED_CLIENTS,
  FUTURE_MODULES,
  INVENTORY,
  InventoryCategory,
  MAIN_OFFICE_ADDRESS,
  POCS,
  ThemeId,
  WHY_US,
} from "@/lib/data";

const FILTERS: Array<"All" | InventoryCategory> = [
  "All",
  "Digital Packages",
  "Static Boards",
  "Passenger Journey",
  "Custom Plans",
];

type LeadForm = {
  name: string;
  company: string;
  phone: string;
  window: string;
  interest: string;
};

const EMPTY_LEAD: LeadForm = {
  name: "",
  company: "",
  phone: "",
  window: "",
  interest: "",
};

const FEATURED_FOR_GATE = ["PKG-01", "AD-3", "PKG-03", "DIGITAL-FULL"];
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const heroImage = (name: string) => `${BASE_PATH}/img/${name}.png`;
const publicAsset = (file: string) => `${BASE_PATH}/img/${file}`;

export default function Shell() {
  const [themeId, setThemeId] = useState<ThemeId>("day");
  const [filter, setFilter] = useState<"All" | InventoryCategory>("All");
  const [filterTick, setFilterTick] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [lead, setLead] = useState<LeadForm>(EMPTY_LEAD);
  const [booting, setBooting] = useState(true);

  // Read saved theme + hide loader after first paint.
  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("ram-theme") as ThemeId | null;
      if (savedTheme === "night" || savedTheme === "day") setThemeId(savedTheme);
      window.localStorage.removeItem("ram-brand");
    } catch {}
    const t = window.setTimeout(() => setBooting(false), 1700);
    return () => window.clearTimeout(t);
  }, []);

  // Propagate the production Red/Sky brand + selected day/night mode.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = themeId;
    document.documentElement.dataset.brand = "redSky";
    try {
      window.localStorage.setItem("ram-theme", themeId);
      window.localStorage.removeItem("ram-brand");
    } catch {}
  }, [themeId]);

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
      />

      <main>
        <Hero />
        <Manifesto />
        <WhyAirport />
        <Connectivity />
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
        <ClientTrust />
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
      <div className="loader-blueprint">
        <div className="loader-logo-card">
          <AirportLogoMark />
        </div>
        <div className="loader-copy">
          <span>{BRAND_DISPLAY_NAME}</span>
          <strong>Preparing airport media view</strong>
        </div>
        <div className="loader-flight" aria-hidden="true">
          <svg viewBox="0 0 120 36">
            <path
              d="M5 20 L48 18 L82 4 L90 7 L64 20 L108 24 L114 29 L54 27 L30 34 L23 31 L40 24 L5 23 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="loader-bar" />
      </div>
    </div>
  );
}

function TopNav({
  themeId,
  toggleTheme,
}: {
  themeId: ThemeId;
  toggleTheme: () => void;
}) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label={BRAND_DISPLAY_NAME}>
          <span className="brand-mark">
            <AirportLogoMark />
          </span>
          <span className="brand-text">
            <b>{BRAND_DISPLAY_NAME}</b>
            <small>Airport media platform</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#why">Why Airport</a>
          <a href="#connectivity">Connectivity</a>
          <a href="#inventory">Inventory</a>
          <a href="#clients">Clients</a>
          <a href="#future">Growth Layer</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-end">
          <FlightToggle themeId={themeId} onToggle={toggleTheme} />
          <a href="#inventory" className="btn-primary">
            View Inventory
          </a>
        </div>
      </div>
    </header>
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
      aria-label={isNight ? "Switch to day theme" : "Switch to night theme"}
      title={isNight ? "Switch to day theme" : "Switch to night theme"}
    >
      <span className="toggle-scene" aria-hidden="true">
        <span className="toggle-orb">
          <ThemeGlyph isNight={isNight} />
        </span>
        <span className="toggle-track-line" />
      </span>
      <span className="toggle-label">
        <small>Theme</small>
        <b>{isNight ? "Night" : "Day"}</b>
      </span>
    </button>
  );
}

function ThemeGlyph({ isNight }: { isNight: boolean }) {
  if (isNight) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M18.5 15.7A7.5 7.5 0 0 1 8.3 5.5a8 8 0 1 0 10.2 10.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.8v2.5" />
        <path d="M12 18.7v2.5" />
        <path d="m4.5 4.5 1.8 1.8" />
        <path d="m17.7 17.7 1.8 1.8" />
        <path d="M2.8 12h2.5" />
        <path d="M18.7 12h2.5" />
        <path d="m4.5 19.5 1.8-1.8" />
        <path d="m17.7 6.3 1.8-1.8" />
      </g>
    </svg>
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

      <BrandBubbleSky />

      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow">{BRAND_DISPLAY_NAME}</span>
        <h1 className="hero-h1">
          Airport visibility, <em>engineered.</em>
        </h1>
        <p className="hero-sub">
          A premium media network for brands that want Rajkot International
          Airport&apos;s travelling audience and the high-context recall only an
          airport environment delivers. Inventory you can shortlist, plans you
          can pitch internally, and a path to a CRM-tracked relationship.
        </p>

        <div className="hero-actions">
          <a href="#inventory" className="btn-primary">
            View Inventory
          </a>
          <a href="#contact" className="btn-ghost">
            Request Media Kit
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

function BrandBubbleSky() {
  return (
    <aside className="brand-bubble-sky" aria-label={CLIENT_PROOF_LINE}>
      <p>{CLIENT_PROOF_LINE}</p>
      <div className="brand-bubble-track">
        {FEATURED_CLIENTS.map((client, i) => (
          <span
            className="brand-bubble"
            key={client}
            style={{ "--bubble-delay": `${i * 0.16}s` } as CSSProperties}
          >
            {client}
          </span>
        ))}
      </div>
    </aside>
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
              10-15 advertising sites and 70-80 screen and static surfaces
              across the terminal envelope.
            </dd>
          </div>
          <div>
            <dt>Audience</dt>
            <dd>
              Business travellers, NRI corridors, family decision makers, and
              premium households moving through Rajkot&apos;s international gateway.
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
              p: "Airport movement gives brands a cleaner environment than cluttered outdoor corridors and an audience that is already attentive, not scrolling.",
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

function Connectivity() {
  const hub = { x: 245, y: 332, label: "Rajkot Intl", code: "RAJ" };

  const routePath = (city: (typeof AIRPORT_CONNECTIONS)[number]) => {
    const midX = (hub.x + city.x) / 2;
    const midY = Math.min(hub.y, city.y) - 78;
    return `M ${hub.x} ${hub.y} Q ${midX} ${midY} ${city.x} ${city.y}`;
  };

  return (
    <section className="section connectivity" id="connectivity">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Connectivity</span>
            <h2 className="h-section">
              Connected to India&apos;s key <em>metro markets</em>.
            </h2>
          </div>
          <p className="section-head-right">
            {AIRPORT_NAME} links Rajkot&apos;s business corridor with metro
            demand centres, making airport media valuable for regional launches,
            corporate campaigns, and national brand recall.
          </p>
        </div>

        <div className="connectivity-grid">
          <div className="route-frame">
            <svg
              viewBox="0 0 1000 700"
              className="route-svg"
              role="img"
              aria-label="Route map from Rajkot International Airport to Mumbai, Delhi, Bengaluru, Hyderabad and Pune"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g className="route-grid-lines">
                {[110, 220, 330, 440, 550, 660].map((y) => (
                  <line key={`h-${y}`} x1="40" y1={y} x2="960" y2={y} />
                ))}
                {[120, 260, 400, 540, 680, 820].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="40" x2={x} y2="660" />
                ))}
              </g>

              <image
                className="india-map-image"
                href={publicAsset("india-natural-earth.svg")}
                x="0"
                y="0"
                width="1000"
                height="700"
                preserveAspectRatio="xMidYMid meet"
              />

              {AIRPORT_CONNECTIONS.map((city, i) => (
                <path
                  key={city.code}
                  d={routePath(city)}
                  className="route-line"
                  style={{ "--route-delay": `${i * 0.2}s` } as CSSProperties}
                />
              ))}

              {AIRPORT_CONNECTIONS.map((city, i) => (
                <g
                  key={`plane-${city.code}`}
                  className="route-plane"
                  style={{ "--plane-delay": `${i * 0.22}s` } as CSSProperties}
                  transform={`translate(${(hub.x + city.x) / 2} ${(hub.y + city.y) / 2}) rotate(${city.angle})`}
                >
                  <path d="M-13 1 L0 -2 L15 -13 L19 -10 L7 0 L19 8 L15 12 L0 3 L-13 5 Z" />
                </g>
              ))}

              <circle cx={hub.x} cy={hub.y} r="70" fill="url(#hubGlow)" />
              <circle cx={hub.x} cy={hub.y} r="10" className="route-hub" />
              <circle cx={hub.x} cy={hub.y} r="10" className="route-hub-pulse" />
              <text x={hub.x} y={hub.y + 36} className="route-hub-label" textAnchor="middle">
                {hub.label.toUpperCase()}
              </text>
              <text x={hub.x} y={hub.y + 58} className="route-hub-code" textAnchor="middle">
                {hub.code} HUB
              </text>

              {AIRPORT_CONNECTIONS.map((city) => (
                <g key={city.code} className="route-node">
                  <circle cx={city.x} cy={city.y} r="6" className="route-dot" />
                  <text
                    x={city.x + city.labelDx}
                    y={city.y + city.labelDy}
                    textAnchor="middle"
                    className="route-city"
                  >
                    {city.city}
                  </text>
                  <text
                    x={city.x + city.labelDx}
                    y={city.y + city.labelDy + 20}
                    textAnchor="middle"
                    className="route-code"
                  >
                    {city.code}
                  </text>
                </g>
              ))}
            </svg>
            <p className="map-credit">India outline: Natural Earth public domain data.</p>
          </div>

          <div className="connectivity-panel">
            <span className="eyebrow">Route value</span>
            <h3>Metro-linked attention, local execution.</h3>
            <p>
              This section gives buyers a fast business reason for airport media:
              Rajkot is not only a local terminal, it is a connection point into
              national metro travel and premium regional movement.
            </p>
            <div className="metro-list" aria-label="Connected metro cities">
              {AIRPORT_CONNECTIONS.map((city) => (
                <span key={city.code}>
                  <b>{city.code}</b>
                  {city.city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientTrust() {
  const radius = 210;
  const count = FEATURED_CLIENTS.length;

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Clients and campaigns</span>
            <h2 className="h-section">
              Selected brands that show <em>real market trust</em>.
            </h2>
          </div>
          <p className="section-head-right">
            We only show public-facing names here. The full historical client
            depth stays private for owner-side conversations and direct pitches.
          </p>
        </div>

        <div className="client-stage">
          <div className="client-orbit" aria-label="Selected public clients">
            <div className="orbit-ring">
              {FEATURED_CLIENTS.map((client, i) => {
                const angle = (360 / count) * i;
                return (
                  <span
                    key={client}
                    className="orbit-node"
                    style={
                      {
                        "--orbit-transform": `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg) translate(-50%, -50%)`,
                      } as CSSProperties
                    }
                  >
                    <span className="orbit-chip">{client}</span>
                  </span>
                );
              })}
            </div>
            <div className="orbit-core">
              <span>Selected</span>
              <strong>8</strong>
              <small>public clients</small>
            </div>
          </div>

          <div className="client-copy">
            <span className="eyebrow">Campaign formats</span>
            <h3>Built for launches, events, private pushes, and corporate visibility.</h3>
            <p>
              The site should feel like an inventory portal and a trust document:
              it shows enough proof to start a serious enquiry without exposing
              the full client list or sensitive campaign history.
            </p>
            <div className="campaign-types">
              {CAMPAIGN_TYPES.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="operator-grid">
          {WHY_US.map((card) => (
            <article className="operator-card" key={card.n}>
              <span>{card.n}</span>
              <h3>{card.t}</h3>
              <p>{card.p}</p>
            </article>
          ))}
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
  lead: LeadForm;
  setLead: (l: LeadForm) => void;
}) {
  function updateLead(k: keyof LeadForm, v: string) {
    setLead({ ...lead, [k]: v });
  }

  return (
    <section className="section" id="inventory">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Inventory Portfolio</span>
            <h2 className="h-section">
              Inventory presented like <em>a body of work</em>.
            </h2>
          </div>
          <p className="section-head-right">
            We show range, credibility, and starting level on the public face.
            Full board, references, and commercials unlock once a buyer shares
            their campaign window, creating a clean lead trail for the owner side.
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
                    <div className="gate-gallery-dots" aria-hidden="true">
                      {item.gallery.slice(0, 3).map((src, g) => (
                        <span
                          key={`${item.code}-gate-${src}`}
                          style={
                            {
                              backgroundImage: `url(${src})`,
                              "--thumb-delay": `${g * 0.16}s`,
                            } as CSSProperties
                          }
                        />
                      ))}
                    </div>
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
                Serious buyers share their campaign window before seeing full
                inventory depth, and the lead is routed straight to owner-side
                follow-up.
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
                  placeholder="Festive / Q3 / launch burst"
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
                Unlock Inventory
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
                      <div className="work-gallery-stack" aria-hidden="true">
                        {item.gallery.slice(0, 4).map((src, g) => (
                          <span
                            key={`${item.code}-gallery-${src}`}
                            className={`gallery-shot shot-${g + 1}`}
                            style={{ backgroundImage: `url(${src})` }}
                          />
                        ))}
                      </div>
                      <div className="work-shade" />
                      <div className="work-veil" />
                      <span className="work-tag">
                        {item.code} - {item.category}
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
                        {item.code} - {item.unitCount}
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
              Wide airport media inventory, starting from <em>INR 2,00,000 / month</em>.
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
              <small>Owner-side coordination</small>
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
              Growth operating layer
            </span>
            <h2 style={{ marginTop: 16 }}>
              Website, inventory operations, and <em>lead follow-through</em>.
            </h2>
            <p className="future-lede">
              The website builds trust first. The operating layer helps
              maintain inventory, qualify the right companies, track serious
              leads, and reduce manual follow-up leakage.
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
              Share your campaign window, preferred format, and budget range.
              The team will respond with the most relevant airport media path.
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
              <h3>{BRAND_DISPLAY_NAME}</h3>
            </div>
            <p>
              Premium airport media inventory across digital screens, static
              hoardings, and campaign plans at Rajkot International Airport.
            </p>
          </div>

          <div className="foot-col">
            <h6>Sections</h6>
            <ul>
              <li><a href="#why">Why Airport</a></li>
              <li><a href="#connectivity">Connectivity</a></li>
              <li><a href="#inventory">Inventory Portfolio</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#future">Growth Layer</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h6>Reach</h6>
            <ul>
              <li>{AIRPORT_NAME}</li>
              <li>{MAIN_OFFICE_ADDRESS}</li>
              <li>Owner-side response within 1 working day</li>
            </ul>
          </div>
        </div>

        <div className="foot-base">
          <span>{BRAND_DISPLAY_NAME} - {new Date().getFullYear()}</span>
          <span>Built for advertiser enquiries</span>
        </div>
      </div>
    </footer>
  );
}

/* Draft co-brand mark: airport media first, Mukesh Art as operating signature. */
function AirportLogoMark() {
  return (
    <svg
      viewBox="0 0 180 106"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="0" y="0" width="180" height="106" rx="12" fill="#F5FBFF" />
      <path d="M17 76 C48 48 91 40 148 33" fill="none" stroke="#0B74D1" strokeWidth="4" strokeLinecap="round" />
      <path d="M122 30 L150 18 L155 22 L139 35 L166 40 L170 45 L130 43 L113 51 L108 48 L120 39 L96 36 L92 31 Z" fill="#E21D2D" />
      <circle cx="42" cy="72" r="14" fill="none" stroke="#E21D2D" strokeWidth="3" />
      <circle cx="42" cy="72" r="5" fill="#E21D2D" />
      <text
        x="22"
        y="42"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="900"
        letterSpacing="1"
        fill="#111111"
      >
        RAM
      </text>
      <text
        x="22"
        y="58"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1.4"
        fill="#0B74D1"
      >
        AIRPORT MEDIA
      </text>
      <text
        x="116"
        y="82"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="800"
        letterSpacing="1.6"
        fill="#1E2A78"
      >
        MUKESH
      </text>
      <rect x="139" y="72" width="26" height="12" rx="2" fill="#E21D2D" />
      <text
        x="152"
        y="81"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7"
        fontWeight="800"
        letterSpacing="2"
        fill="#FFFFFF"
      >
        ART
      </text>
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
