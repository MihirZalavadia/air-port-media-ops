"use client";

import {
  CSSProperties,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AIRPORT_CONNECTIONS,
  AIRPORT_HUB,
  AIRPORT_NAME,
  AIRPORT_STATS,
  BRAND_DISPLAY_NAME,
  CAMPAIGN_TYPES,
  FEATURED_CLIENTS,
  FUTURE_MODULES,
  INVENTORY,
  InventoryCategory,
  InventoryItem,
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

const COUNTRY_CODES = ["+91", "+1", "+44", "+971", "+61"];
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const heroImage = (name: string) => `${BASE_PATH}/img/${name}.png`;
const publicAsset = (file: string) => `${BASE_PATH}/img/${file}`;
const PENDING_LEADS_KEY = "ram-pending-leads";

type LeadEventType =
  | "inventory_viewed"
  | "inventory_download_requested"
  | "contact_request";

type LeadForm = {
  name: string;
  countryCode: string;
  phone: string;
  company: string;
  designation: string;
  window: string;
  interest: string;
  email: string;
  message: string;
};

type LeadErrors = Partial<Record<keyof LeadForm, string>>;

const EMPTY_LEAD: LeadForm = {
  name: "",
  countryCode: "+91",
  phone: "",
  company: "",
  designation: "",
  window: "",
  interest: "",
  email: "",
  message: "",
};

export default function Shell() {
  const [themeId, setThemeId] = useState<ThemeId>("day");
  const [filter, setFilter] = useState<"All" | InventoryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [unlockedCodes, setUnlockedCodes] = useState<string[]>([]);
  const [leadByCode, setLeadByCode] = useState<Record<string, LeadForm>>({});
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("ram-theme") as ThemeId | null;
      if (savedTheme === "night" || savedTheme === "day") setThemeId(savedTheme);
      window.localStorage.removeItem("ram-brand");
    } catch {}

    const t = window.setTimeout(() => setBooting(false), 1420);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
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

  function unlockInventory(code: string, lead: LeadForm) {
    setUnlockedCodes((current) => (current.includes(code) ? current : [...current, code]));
    setLeadByCode((current) => ({ ...current, [code]: lead }));
  }

  return (
    <>
      {booting && <RouteLoader />}

      <TopNav
        themeId={themeId}
        toggleTheme={() => setThemeId((id) => (id === "night" ? "day" : "night"))}
      />

      <main>
        <Hero />
        <Manifesto />
        <WhyAirport />
        <Connectivity />
        <Portfolio
          filter={filter}
          setFilter={setFilter}
          visible={visible}
          onOpen={setSelectedItem}
        />
        <RangeBand />
        <ClientTrust />
        <Team />
        <FutureLayer />
        <Contact />
      </main>

      <Footer />

      {selectedItem && (
        <InventoryModal
          item={selectedItem}
          initialLead={leadByCode[selectedItem.code]}
          unlocked={unlockedCodes.includes(selectedItem.code)}
          onClose={() => setSelectedItem(null)}
          onUnlock={unlockInventory}
        />
      )}
    </>
  );
}

function RouteLoader() {
  return (
    <div className="loader" aria-label="Loading airport media routes">
      <div className="loader-blueprint">
        <div className="loader-logo-card">
          <MukeshArtsLogoMark />
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
            <MukeshArtsLogoMark />
          </span>
          <span className="brand-text">
            <b>{BRAND_DISPLAY_NAME}</b>
            <small>Airport media platform</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#why">Why Rajkot Int Airport</a>
          <a href="#connectivity">Connectivity</a>
          <a href="#inventory">Inventory</a>
          <a href="#clients">Clients</a>
          <a href="#future">Growth Layer</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-end">
          <IconThemeToggle themeId={themeId} onToggle={toggleTheme} />
          <a href="#inventory" className="btn-primary">
            View Inventory
          </a>
        </div>
      </div>
    </header>
  );
}

function IconThemeToggle({
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
      className="icon-toggle"
      aria-pressed={isNight}
      aria-label={isNight ? "Switch to day theme" : "Switch to night theme"}
      title={isNight ? "Switch to day theme" : "Switch to night theme"}
    >
      <svg className="ico-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M12 2.8v2.4" />
          <path d="M12 18.8v2.4" />
          <path d="M4.5 4.5l1.7 1.7" />
          <path d="M17.8 17.8l1.7 1.7" />
          <path d="M2.8 12h2.4" />
          <path d="M18.8 12h2.4" />
          <path d="M4.5 19.5l1.7-1.7" />
          <path d="M17.8 6.2l1.7-1.7" />
        </g>
      </svg>
      <svg className="ico-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M18.7 15.8A7.8 7.8 0 0 1 8.2 5.3a8.4 8.4 0 1 0 10.5 10.5Z"
          fill="currentColor"
        />
        <circle cx="7" cy="7" r="1" fill="currentColor" opacity="0.55" />
        <circle cx="17" cy="5" r="0.8" fill="currentColor" opacity="0.55" />
      </svg>
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
        <span className="eyebrow hero-eyebrow">{BRAND_DISPLAY_NAME}</span>
        <h1 className="hero-h1">
          Airport media, <em>managed from the ground up.</em>
        </h1>
        <p className="hero-sub">
          One accountable team for airport inventory, protocol, site visits,
          hospitality, and brand follow-through at Rajkot International Airport.
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

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container manifesto-inner">
        <p className="manifesto-quote">
          &ldquo;We are not only selling airport media. We understand the ground,
          the airport process, and the business relationship behind every deal.&rdquo;
        </p>
        <dl className="manifesto-meta">
          <div>
            <dt>Operations</dt>
            <dd>
              Inventory, site access, checks, production, and campaign movement
              stay with one accountable operating team.
            </dd>
          </div>
          <div>
            <dt>Airport Handling</dt>
            <dd>
              ASCO-led visit coordination, airport protocol support, and ground
              readiness make serious buyer visits smoother.
            </dd>
          </div>
          <div>
            <dt>Partnership</dt>
            <dd>
              We build trust through hospitality, direct follow-through, and
              long-term interpersonal business relationships.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function WhyAirport() {
  const cards = [
    {
      n: "01",
      t: "Premium Gujarat audience",
      p: "Business families, NRI movement, industrial corridors, and premium regional buyers pass through one controlled airport environment.",
    },
    {
      n: "02",
      t: "Cleaner brand attention",
      p: "Airport dwell time gives brands a calmer, higher-recall environment than crowded outdoor corridors.",
    },
    {
      n: "03",
      t: "Guided media planning",
      p: "We match digital, static, and journey placements to the campaign window before commercial discussion.",
    },
  ];

  return (
    <section className="section reveal-section" id="why">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Why Rajkot Int Airport</span>
            <h2 className="h-section">
              Premium recall, airport access, and <em>ground-backed execution</em>.
            </h2>
          </div>
          <p className="section-head-right">
            The value is not only the board. It is the audience, the access,
            the visit handling, and the team that knows how airport media
            actually moves.
          </p>
        </div>

        <div className="why-grid">
          {cards.map((card) => (
            <article className="why-card" key={card.n}>
              <span className="why-card-num">{card.n}</span>
              <h3>{card.t}</h3>
              <p>{card.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connectivity() {
  const hub = geoToSvg(AIRPORT_HUB.lon, AIRPORT_HUB.lat);
  const cities = AIRPORT_CONNECTIONS.map((city) => ({
    ...city,
    p: geoToSvg(city.lon, city.lat),
  }));

  const routePath = (city: (typeof cities)[number]) => {
    const midX = (hub.x + city.p.x) / 2;
    const midY = (hub.y + city.p.y) / 2;
    const distance = Math.hypot(city.p.x - hub.x, city.p.y - hub.y);
    const controlY = midY - Math.max(28, distance * 0.1);
    return `M ${hub.x.toFixed(1)} ${hub.y.toFixed(1)} Q ${midX.toFixed(1)} ${controlY.toFixed(1)} ${city.p.x.toFixed(1)} ${city.p.y.toFixed(1)}`;
  };

  return (
    <section className="section connectivity reveal-section" id="connectivity">
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

        <div className="map-frame">
          <svg
            viewBox="0 0 1000 700"
            className="route-svg"
            role="img"
            aria-label="Map of India showing routes from Rajkot International Airport to major metro markets"
          >
            <defs>
              <radialGradient id="routeIndiaGlow" cx="42%" cy="48%" r="58%">
                <stop offset="0%" stopColor="#1597E5" stopOpacity="0.35" />
                <stop offset="62%" stopColor="#1597E5" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#1597E5" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="routeHubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g className="map-grid">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line key={`h-${i}`} x1="30" y1={(700 / 6) * i} x2="970" y2={(700 / 6) * i} />
              ))}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line key={`v-${i}`} x1={(1000 / 6) * i} y1="30" x2={(1000 / 6) * i} y2="670" />
              ))}
            </g>

            <rect x="0" y="0" width="1000" height="700" fill="url(#routeIndiaGlow)" opacity="0.9" />
              <image
                className="india-map-image"
                href={publicAsset("india-survey-of-india-outline.svg")}
                x="0"
                y="0"
                width="1000"
              height="700"
              preserveAspectRatio="xMidYMid meet"
            />

            {cities.map((city, i) => {
              const d = routePath(city);
              return (
                <g key={city.code}>
                  <path d={d} className="route-arc" />
                  <path
                    d={d}
                    className="route-arc-dash"
                    style={{ animationDelay: `${i * 0.18}s` } as CSSProperties}
                  />
                    <g
                      className="route-plane"
                      style={{ "--plane-delay": `${i * 0.2}s` } as CSSProperties}
                      transform={`translate(${(hub.x + city.p.x) / 2} ${(hub.y + city.p.y) / 2}) rotate(${Math.atan2(city.p.y - hub.y, city.p.x - hub.x) * (180 / Math.PI)}) scale(0.72)`}
                    >
                      <path d="M-16 1 L-2 -2 L14 -11 L18 -8 L6 0 L18 8 L14 11 L-2 3 L-16 5 Z" />
                    </g>
                </g>
              );
            })}

            <circle cx={hub.x} cy={hub.y} r="74" fill="url(#routeHubGlow)" />
            <circle cx={hub.x} cy={hub.y} r="7" className="hub-core" />
            <circle cx={hub.x} cy={hub.y} r="7" className="hub-pulse" />
            <text x={hub.x - 16} y={hub.y - 12} textAnchor="end" className="hub-label">
              {AIRPORT_HUB.city.toUpperCase()}
            </text>
            <text x={hub.x - 16} y={hub.y + 8} textAnchor="end" className="hub-code">
              {AIRPORT_HUB.code} HUB
            </text>

              {cities.map((city) => (
                <g key={`${city.code}-node`} className="city-node">
                  <circle cx={city.p.x} cy={city.p.y} r="12" className="city-dot-ring" />
                  <circle cx={city.p.x} cy={city.p.y} r="5" className="city-dot" />
                <text
                  x={city.p.x + (city.labelDx ?? 0)}
                  y={city.p.y + (city.labelDy ?? -18)}
                  textAnchor="middle"
                  className="city-name"
                >
                  {city.city}
                </text>
                <text
                  x={city.p.x + (city.labelDx ?? 0)}
                  y={city.p.y + (city.labelDy ?? -18) + 18}
                  textAnchor="middle"
                  className="city-code"
                >
                  {city.code} - {city.mins}
                </text>
              </g>
            ))}
          </svg>

            <div className="map-legend">
              <div>
                <span className="k">Connected metros</span>
                <span className="v">{AIRPORT_CONNECTIONS.length}</span>
              </div>
              <div>
                <span className="k">Airport hub</span>
                <span className="v">RAJ</span>
              </div>
            </div>
            <div className="map-source">Outline source: Survey of India</div>
          </div>

        <div className="route-table">
          {AIRPORT_CONNECTIONS.map((city) => (
            <article key={city.code}>
              <span className="rt-city">{city.city}</span>
              <span className="rt-meta">
                {city.code} - <b>{city.mins}</b>
              </span>
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
  visible,
  onOpen,
}: {
  filter: "All" | InventoryCategory;
  setFilter: (f: "All" | InventoryCategory) => void;
  visible: typeof INVENTORY;
  onOpen: (item: InventoryItem) => void;
}) {
  return (
    <section className="section reveal-section" id="inventory">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Inventory Portfolio</span>
            <h2 className="h-section">
              Inventory presented like <em>a body of work</em>.
            </h2>
          </div>
          <p className="section-head-right">
            Buyers see the range first. Full references, availability, and
            commercial discussion unlock when the campaign intent is real.
          </p>
        </div>

        <div className="inv-filter">
          <div className="chips" role="tablist" aria-label="Inventory filters">
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
          <span className="inv-count">
            <b>{visible.length}</b> {visible.length === 1 ? "unit" : "units"} shown
          </span>
        </div>

        <div className="inv-grid">
          {visible.map((item, i) => (
            <div
              className={`inv-cell ${filter === "All" && i === 0 ? "span-2" : ""}`}
              key={item.code}
            >
              <InventoryCard item={item} onOpen={() => onOpen(item)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InventoryCard({
  item,
  onOpen,
}: {
  item: InventoryItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="inv-card"
      onClick={onOpen}
      aria-label={`Open ${item.title} details`}
    >
      <div className="inv-photo">
        <div className="inv-photo-img inv-photo-day" style={{ backgroundImage: `url(${item.image})` }} />
        <div
          className="inv-photo-img inv-photo-night"
          style={{ backgroundImage: `url(${item.imageNight ?? item.image})` }}
        />
        <span className="inv-badge">{item.code} - {item.category}</span>
        <span className="inv-fan" aria-hidden="true">
          {item.gallery.slice(0, 4).map((src) => (
            <i key={`${item.code}-${src}`} style={{ backgroundImage: `url(${src})` }} />
          ))}
        </span>
        <span className="inv-fan-count">{item.gallery.length} site stills</span>
      </div>
      <div className="inv-body">
        <span className="inv-code">
          {item.code} - {item.unitCount}
        </span>
        <h3 className="inv-title">{item.title}</h3>
        <p className="inv-summary">{item.summary}</p>
        <p className="inv-lead">{item.leadLine}</p>
        <span className="inv-open">
          View details
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h12M12 6l7 6-7 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </button>
  );
}

function InventoryModal({
  item,
  initialLead,
  unlocked,
  onClose,
  onUnlock,
}: {
  item: InventoryItem;
  initialLead?: LeadForm;
  unlocked: boolean;
  onClose: () => void;
  onUnlock: (code: string, lead: LeadForm) => void;
}) {
  const [lead, setLead] = useState<LeadForm>(
    initialLead ?? { ...EMPTY_LEAD, interest: item.title },
  );
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  function updateLead(key: keyof LeadForm, value: string) {
    setLead((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(lead);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("Saving lead...");
    const result = await sendLeadEvent("inventory_viewed", lead, {
      inventoryCode: item.code,
      inventoryTitle: item.title,
      inventoryCategory: item.category,
      source: "inventory_modal",
    });
    onUnlock(item.code, lead);
    setStatus(result.persisted ? "Lead sent. Full details unlocked." : "Details unlocked. Lead saved locally for retry.");
  }

  async function requestDownload() {
    setStatus("Recording download request...");
    const result = await sendLeadEvent("inventory_download_requested", lead, {
      inventoryCode: item.code,
      inventoryTitle: item.title,
      inventoryCategory: item.category,
      source: "inventory_modal_download",
    });
    setStatus(result.persisted ? "Download request recorded." : "Download request saved locally for retry.");
  }

  return (
    <div
      className="modal-scrim open"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="inventory-modal" role="dialog" aria-modal="true" aria-label={`${item.title} details`}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close inventory details">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="modal-media">
          <div
            className="modal-media-img"
            style={{ backgroundImage: `url(${item.imageNight ?? item.image})` }}
          />
          <span className="inv-badge">{item.code} - {item.category}</span>
          <div className="modal-media-cap">
            <span>{item.category}</span>
            <h4>{item.title}</h4>
          </div>
        </div>

        <div className="modal-side">
          <span className="modal-code">
            {item.code} - {item.unitCount}
          </span>
          <h3 className="modal-title">{item.title}</h3>
          <p className="modal-summary">{item.summary}</p>

          {!unlocked ? (
            <div className="modal-locked">
              <span className="locked-note">
                <LockIcon /> Full board and commercials locked
              </span>
              <form className="modal-form" onSubmit={unlock} noValidate>
                <LeadField
                  label="Name"
                  value={lead.name}
                  onChange={(value) => updateLead("name", value)}
                  placeholder="Marketing lead name"
                  error={errors.name}
                  required
                  wide
                />
                <PhoneField
                  countryCode={lead.countryCode}
                  phone={lead.phone}
                  onCountryChange={(value) => updateLead("countryCode", value)}
                  onPhoneChange={(value) => updateLead("phone", value)}
                  error={errors.phone}
                />
                <LeadField
                  label="Company / Brand"
                  value={lead.company}
                  onChange={(value) => updateLead("company", value)}
                  placeholder="Brand / agency"
                />
                <LeadField
                  label="Designation"
                  value={lead.designation}
                  onChange={(value) => updateLead("designation", value)}
                  placeholder="Marketing manager / owner"
                />
                <LeadField
                  label="Campaign window"
                  value={lead.window}
                  onChange={(value) => updateLead("window", value)}
                  placeholder="Festive / Q3 / launch burst"
                  wide
                />
                <LeadField
                  label="Inventory interest"
                  value={lead.interest}
                  onChange={(value) => updateLead("interest", value)}
                  placeholder="Digital package, front-lit board, full airport plan"
                  wide
                />
                <button type="submit" className="btn-primary">
                  Unlock full details
                </button>
                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
          ) : (
            <div className="modal-locked">
              <span className="unlock-ok">
                <CheckIcon /> Unlocked - full specification
              </span>
              <dl className="spec-list">
                {[
                  ["Format", item.format],
                  ["Units", item.unitCount],
                  ["Location", item.location],
                  ["References", item.unitRefs.join(", ")],
                  ["Best use", item.leadLine],
                ].map(([label, value]) => (
                  <div className="row" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="modal-actions">
                <button type="button" className="btn-primary" onClick={requestDownload}>
                  Request plan download
                </button>
                <a href="#contact" className="btn-ghost" onClick={onClose}>
                  Talk to team
                </a>
              </div>
              {status && <p className="form-status">{status}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LeadField({
  label,
  value,
  onChange,
  placeholder,
  error,
  required,
  wide,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "wide" : undefined}>
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
      {error && <small className="field-err">{error}</small>}
    </label>
  );
}

function PhoneField({
  countryCode,
  phone,
  onCountryChange,
  onPhoneChange,
  error,
}: {
  countryCode: string;
  phone: string;
  onCountryChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  error?: string;
}) {
  return (
    <label className="phone-field">
      <span>Phone / WhatsApp *</span>
      <div className="phone-row">
        <select value={countryCode} onChange={(event) => onCountryChange(event.target.value)}>
          {COUNTRY_CODES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <input value={phone} onChange={(event) => onPhoneChange(event.target.value)} placeholder="99999 99999" />
      </div>
      {error && <small className="field-err">{error}</small>}
    </label>
  );
}

function RangeBand() {
  return (
    <section className="section reveal-section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="range">
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Commercial range
            </span>
            <h2 style={{ marginTop: 16 }}>
              Wide airport media inventory, starting from <em>2L+ per month</em>.
            </h2>
          </div>
          <p>
            Pricing stays consultative. Serious buyers share their campaign
            window, then receive the right plan, availability, and owner-side
            follow-up.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClientTrust() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [live, setLive] = useState(false);
  const positions = [
    { x: 50, y: 13 },
    { x: 70, y: 23 },
    { x: 82, y: 44 },
    { x: 68, y: 66 },
    { x: 50, y: 76 },
    { x: 30, y: 66 },
    { x: 18, y: 44 },
    { x: 30, y: 23 },
  ];

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section clients reveal-section" id="clients">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Clients and partnership</span>
            <h2 className="h-section">
              Trusted by <em>50+ national and international brands</em>.
            </h2>
          </div>
          <p className="section-head-right">
            Mukesh Arts brings brand trust, airport coordination, and
            relationship-led execution into one business conversation.
          </p>
        </div>

        <div className="proof-stage" ref={stageRef}>
          <div className="proof-baseline" />
          {FEATURED_CLIENTS.map((client, i) => {
            const pos = positions[i % positions.length];
            return (
              <span
                key={client}
                className={`proof-bubble ${live ? "rise" : ""}`}
                style={
                  {
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    animationDelay: `${i * 0.09}s`,
                  } as CSSProperties
                }
              >
                {client}
              </span>
            );
          })}
          <div className="proof-core">
            <span>Trusted across</span>
            <strong>50+</strong>
            <small>brand conversations</small>
          </div>
        </div>

        <div className="proof-scroll">
          {FEATURED_CLIENTS.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>

        <div className="campaign-types">
          {CAMPAIGN_TYPES.map((type) => (
            <span key={type}>{type}</span>
          ))}
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

function Team() {
  return (
    <section className="section reveal-section" id="team" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Owner-side POCs</span>
            <h2 className="h-section">
              One team for access, hospitality, and <em>campaign confidence</em>.
            </h2>
          </div>
          <p className="section-head-right">
            Qualified buyers connect with the right person for commercial
            direction, airport protocol, site visits, and ground coordination.
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
    <section className="future reveal-section" id="future">
      <div className="container">
        <div className="future-inner">
          <div>
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Growth operating layer
            </span>
            <h2 style={{ marginTop: 16 }}>
              Website, inventory operations, and <em>relationship follow-through</em>.
            </h2>
            <p className="future-lede">
              The public site builds trust. The operating layer helps qualify
              serious brands, coordinate visits, maintain inventory, and
              protect every important follow-up.
            </p>
          </div>

          <div className="future-modules">
            {FUTURE_MODULES.map((module) => (
              <article key={module}>{module}</article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [lead, setLead] = useState<LeadForm>(EMPTY_LEAD);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState("");

  function updateLead(key: keyof LeadForm, value: string) {
    setLead((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(lead);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("Sending request...");
    const result = await sendLeadEvent("contact_request", lead, {
      source: "contact_form",
    });
    setStatus(result.persisted ? "Request sent to the team." : "Request saved locally for retry.");
  }

  return (
    <section className="section reveal-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Request media kit</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Share the campaign window. We&apos;ll guide <em>the right airport path</em>.
            </h2>
            <p className="lede">
              Tell us your brand, timeline, and format interest. The owner-side
              team will respond with the most relevant airport media direction.
            </p>
          </div>

          <form className="contact-form" onSubmit={submit} noValidate>
            <LeadField
              label="Full name"
              value={lead.name}
              onChange={(value) => updateLead("name", value)}
              placeholder="Full name"
              error={errors.name}
              required
            />
            <LeadField
              label="Brand / company"
              value={lead.company}
              onChange={(value) => updateLead("company", value)}
              placeholder="Brand / company"
            />
            <PhoneField
              countryCode={lead.countryCode}
              phone={lead.phone}
              onCountryChange={(value) => updateLead("countryCode", value)}
              onPhoneChange={(value) => updateLead("phone", value)}
              error={errors.phone}
            />
            <LeadField
              label="Email"
              value={lead.email}
              onChange={(value) => updateLead("email", value)}
              placeholder="Email"
            />
            <LeadField
              label="Campaign window"
              value={lead.window}
              onChange={(value) => updateLead("window", value)}
              placeholder="Festive / Q3 / launch burst"
            />
            <LeadField
              label="Inventory interest"
              value={lead.interest}
              onChange={(value) => updateLead("interest", value)}
              placeholder="Digital, static, full airport plan"
            />
            <LeadField
              label="Designation"
              value={lead.designation}
              onChange={(value) => updateLead("designation", value)}
              placeholder="Marketing manager / owner"
              wide
            />
            <label className="wide">
              <span>Message</span>
              <textarea
                rows={4}
                value={lead.message}
                onChange={(event) => updateLead("message", event.target.value)}
                placeholder="Campaign brief, preferred dates, or notes"
              />
            </label>
            <button type="submit" className="btn-primary">
              Request Media Kit
            </button>
            {status && <p className="form-status">{status}</p>}
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
              <span className="brand-mark">
                <MukeshArtsLogoMark />
              </span>
              <h3>{BRAND_DISPLAY_NAME}</h3>
            </div>
            <p>
              Owner-operated airport media across digital screens, static
              hoardings, site visits, and campaign planning at Rajkot
              International Airport.
            </p>
          </div>

          <div className="foot-col">
            <h6>Sections</h6>
            <ul>
              <li><a href="#why">Why Rajkot Int Airport</a></li>
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
              <li>Owner-side response and visit coordination</li>
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

function MukeshArtsLogoMark() {
  return (
    <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
      <path className="logo-blue" d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
      <text
        x="70"
        y="63"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="800"
        letterSpacing="2.5"
        className="logo-word"
      >
        MUKESH
      </text>
      <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
      <text
        x="101"
        y="78"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="8"
        fontWeight="800"
        letterSpacing="3"
        fill="#FFFFFF"
      >
        ART
      </text>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function geoToSvg(lon: number, lat: number) {
  const degToRad = Math.PI / 180;
  const radius = 6378137;
  const falseEasting = 4000000;
  const falseNorthing = 4000000;
  const centralMeridian = 80 * degToRad;
  const latitudeOrigin = 24 * degToRad;
  const standardParallel1 = 12.472944 * degToRad;
  const standardParallel2 = 35.172806 * degToRad;
  const sourceBounds = {
    minX: 2818364.2018000046,
    minY: 2177526.7756000045,
    maxX: 5679118.517199999,
    maxY: 5444563.216300001,
  };
  const paddingY = 30;
  const scale = (700 - paddingY * 2) / (sourceBounds.maxY - sourceBounds.minY);
  const paddingX =
    (1000 - (sourceBounds.maxX - sourceBounds.minX) * scale) / 2;

  const n =
    Math.log(Math.cos(standardParallel1) / Math.cos(standardParallel2)) /
    Math.log(
      Math.tan(Math.PI / 4 + standardParallel2 / 2) /
        Math.tan(Math.PI / 4 + standardParallel1 / 2),
    );
  const f =
    (Math.cos(standardParallel1) *
      Math.pow(Math.tan(Math.PI / 4 + standardParallel1 / 2), n)) /
    n;
  const rho0 =
    (radius * f) / Math.pow(Math.tan(Math.PI / 4 + latitudeOrigin / 2), n);
  const rho =
    (radius * f) / Math.pow(Math.tan(Math.PI / 4 + lat * degToRad / 2), n);
  const theta = n * (lon * degToRad - centralMeridian);
  const projectedX = falseEasting + rho * Math.sin(theta);
  const projectedY = falseNorthing + rho0 - rho * Math.cos(theta);

  return {
    x: paddingX + (projectedX - sourceBounds.minX) * scale,
    y: paddingY + (sourceBounds.maxY - projectedY) * scale,
  };
}

function validateLead(lead: LeadForm) {
  const errors: LeadErrors = {};
  if (lead.name.trim().length < 2) errors.name = "Enter a contact name.";

  const digits = lead.phone.replace(/\D/g, "");
  if (lead.countryCode === "+91") {
    if (digits.length !== 10) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  } else if (digits.length < 6 || digits.length > 15) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
}

async function sendLeadEvent(
  eventType: LeadEventType,
  lead: LeadForm,
  context: Record<string, string>,
) {
  const payload = {
    eventType,
    ...context,
    name: lead.name.trim(),
    countryCode: lead.countryCode,
    phone: lead.phone.replace(/\D/g, ""),
    company: lead.company.trim(),
    designation: lead.designation.trim(),
    campaignWindow: lead.window.trim(),
    inventoryInterest: lead.interest.trim(),
    email: lead.email.trim(),
    message: lead.message.trim(),
    pagePath: typeof window !== "undefined" ? window.location.pathname : "",
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await fetch("/api/leads/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { persisted?: boolean };

    if (!response.ok || result.persisted === false) {
      storePendingLead(payload);
      return { persisted: false };
    }

    return { persisted: true };
  } catch {
    storePendingLead(payload);
    return { persisted: false };
  }
}

function storePendingLead(payload: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    const existing = window.localStorage.getItem(PENDING_LEADS_KEY);
    const rows = existing ? (JSON.parse(existing) as Record<string, string>[]) : [];
    rows.push(payload);
    window.localStorage.setItem(PENDING_LEADS_KEY, JSON.stringify(rows.slice(-50)));
  } catch {}
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
