import type { Metadata } from "next";
import Link from "next/link";

import { pageSeo, siteConfig } from "@/src/lib/seo";
import { inventoryCategories, airportFacts } from "@/src/lib/inventoryData";
import PartnershipLockup from "@/src/components/common/PartnershipLockup";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";

import "./RajkotAirportAdvertising.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PAGE_URL = `${siteConfig.url}/rajkot-airport-advertising/`;
const WHATSAPP = "https://wa.me/919825340818";

export const metadata: Metadata = {
    title: pageSeo.rajkotAirportAdvertising.title,
    description: pageSeo.rajkotAirportAdvertising.description,

    alternates: {
        canonical: "/rajkot-airport-advertising/",
    },

    openGraph: {
        title: pageSeo.rajkotAirportAdvertising.title,
        description: pageSeo.rajkotAirportAdvertising.description,
        url: "/rajkot-airport-advertising/",
        siteName: "Rajkot Airport x Mukesh Art",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/og/rajkot-airport-media.jpg",
                width: 1200,
                height: 630,
                alt: "Rajkot Airport Advertising media by Mukesh Art",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: pageSeo.rajkotAirportAdvertising.title,
        description: pageSeo.rajkotAirportAdvertising.description,
        images: ["/images/og/rajkot-airport-media.jpg"],
    },
};

// real owner footage posters, mapped to each inventory category
const FORMAT_POSTER: Record<string, string> = {
    "digital-screen-network": "/videos/inv_digital_poster.jpg",
    "landmark-outdoor-boards": "/videos/inv_outdoor_poster.jpg",
    "in-terminal-backlit-boards": "/videos/inv_backlit_poster.jpg",
    "hybrid-journey-plans": "/videos/inv_hybrid_poster.jpg",
};

// hero "media wall" tiles — real stills, short labels
const WALL = [
    { poster: "/videos/inv_digital_poster.jpg", label: "Digital Screens" },
    { poster: "/videos/inv_outdoor_poster.jpg", label: "Outdoor Boards" },
    { poster: "/videos/inv_backlit_poster.jpg", label: "Backlit Boards" },
    { poster: "/videos/inv_hybrid_poster.jpg", label: "Hybrid Plans" },
];

const FAQS = [
    {
        q: "How much does advertising at Rajkot airport cost?",
        a: "Public teaser rates: digital LED screen packages start around ₹2 Lac/month, in-terminal backlit boards from ₹1.5 Lac/month, and landmark outdoor boards from ₹6 Lac/month (all + GST). The exact Rajkot airport advertising rate card and availability are shared on request.",
    },
    {
        q: "What advertising formats are available at Rajkot International Airport?",
        a: "Digital LED screens across arrivals, check-in, security hold and exit; always-on backlit boards at high-dwell chokepoints; large-format frontlit boards on the city side and approach road; luggage-trolley branding; and hybrid journey plans that combine digital and static in a single buy.",
    },
    {
        q: "Who manages advertising at Rajkot (Hirasar) airport?",
        a: "Mukesh Art (Mukesh Airport Media) is the airport advertising media partner at Rajkot International Airport (Hirasar), working in partnership with the Airports Authority of India. One team handles planning, installation, AAI creative approval and campaign reporting end to end.",
    },
    {
        q: "How do I book a Rajkot airport advertising campaign?",
        a: "Share your brand, format and timeline on WhatsApp or the enquiry form. The team maps the right screens, boards or package, confirms availability, routes the creative through AAI approval (typically 10–15 days), and runs the campaign — so you can book without visiting Rajkot.",
    },
    {
        q: "How many people will see my brand at Rajkot airport?",
        a: "Roughly 1.25–1.30 lakh passenger visits a month (4,200+ a day) across 28 daily flight movements, with 35–50 minutes of average dwell time inside security — plus every dropper and taxi on the approach road for the outdoor boards.",
    },
];

export default function RajkotAirportAdvertisingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Rajkot Airport Advertising",
                serviceType: "Airport Advertising",
                provider: { "@id": `${siteConfig.url}/#business` },
                areaServed: [
                    { "@type": "City", name: "Rajkot" },
                    { "@type": "State", name: "Gujarat" },
                    { "@type": "Country", name: "India" },
                ],
                description:
                    "Advertising media at Rajkot International Airport (Hirasar) — digital screens, static boards, terminal branding, trolley media and outdoor hoardings — managed by Mukesh Art with the Airports Authority of India.",
                url: PAGE_URL,
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
                    { "@type": "ListItem", position: 2, name: "Rajkot Airport Media", item: `${siteConfig.url}/airport/` },
                    { "@type": "ListItem", position: 3, name: "Rajkot Airport Advertising", item: PAGE_URL },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: FAQS.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <main className="raa">
            <ScrollAnimations />
            <SmoothScroll />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* ================= HERO — bespoke "media wall" ================= */}
            <section className="raa-hero" aria-labelledby="raa-h1">
                <div className="raa-hero-fx" aria-hidden="true">
                    <span className="raa-glow raa-glow-red" />
                    <span className="raa-glow raa-glow-navy" />
                    <span className="raa-grid" />
                    <span className="raa-scan" />
                </div>

                <div className="container raa-hero-grid">
                    <div className="raa-hero-copy">
                        <nav className="raa-breadcrumb" aria-label="Breadcrumb">
                            <Link href="/airport/">Rajkot Airport Media</Link>
                            <span aria-hidden="true">/</span>
                            <span>Rajkot Airport Advertising</span>
                        </nav>

                        <span className="raa-badge" data-motion="up">
                            <b />
                            Authorised partner · Airports Authority of India
                        </span>

                        <h1 id="raa-h1" className="raa-h1" data-motion="clip">
                            Rajkot Airport <em>Advertising.</em>
                        </h1>

                        <p className="raa-sub" data-motion="up" data-motion-delay="0.08">
                            Premium advertising media at Rajkot International Airport
                            (Hirasar) — digital screens, in-terminal backlit boards,
                            trolley media and landmark outdoor hoardings, planned and
                            managed end to end by Mukesh Art.
                        </p>

                        <div className="raa-cta-row" data-motion="up" data-motion-delay="0.16">
                            <a className="raa-btn raa-btn--primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                                Get rates on WhatsApp
                            </a>
                            <Link className="raa-btn raa-btn--ghost" href="/airport/#inventory">
                                View inventory
                            </Link>
                        </div>

                        <ul className="raa-trust" data-motion-group>
                            {airportFacts.map((fact) => (
                                <li key={fact.label} data-motion-item>
                                    <strong>{fact.value}</strong>
                                    <span>{fact.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="raa-hero-wall" data-motion="zoom" data-motion-delay="0.1" aria-hidden="true">
                        <div className="raa-wall-grid" data-motion-group>
                            {WALL.map((tile) => (
                                <figure className="raa-wall-tile" key={tile.label} data-motion-item>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`${BASE}${tile.poster}`} alt="" loading="eager" decoding="async" />
                                    <figcaption>{tile.label}</figcaption>
                                </figure>
                            ))}
                            <span className="raa-wall-sheen" />
                        </div>
                        <PartnershipLockup className="raa-wall-lockup" />
                    </div>
                </div>

                <a href="#raa-intro" className="raa-hero-cue" aria-label="Scroll to explore">
                    <span />
                </a>
            </section>

            {/* ================= INTRO ================= */}
            <section className="raa-section raa-intro" id="raa-intro">
                <div className="container raa-intro-inner">
                    <div className="raa-intro-head">
                        <span className="raa-eyebrow" data-motion="clip">Rajkot Airport Advertising</span>
                        <h2 className="raa-h2" data-motion="up">
                            Put your brand where <em>Saurashtra flies from.</em>
                        </h2>
                    </div>
                    <p className="raa-lead" data-motion="up" data-motion-delay="0.08">
                        Mukesh Art offers end-to-end <strong>Rajkot airport advertising</strong> at
                        Rajkot International Airport (Hirasar), reaching business travellers, HNIs and
                        the Saurashtra NRI corridor. From digital LED screens to terminal branding and
                        luggage-trolley media, we plan, place and manage high-visibility airport
                        campaigns across Rajkot and Gujarat — as the official airport advertising
                        partner working with the Airports Authority of India.
                    </p>
                </div>
            </section>

            {/* ================= FORMATS ================= */}
            <section className="raa-section raa-formats" aria-labelledby="raa-formats-title">
                <div className="container">
                    <span className="raa-eyebrow" data-motion="clip">Media formats</span>
                    <h2 className="raa-h2" id="raa-formats-title" data-motion="up">
                        Every surface across <em>the passenger journey.</em>
                    </h2>

                    <div className="raa-format-grid" data-motion-group>
                        {inventoryCategories.map((cat) => (
                            <Link key={cat.slug} href={`/inventory/${cat.slug}/`} className="raa-format-card" data-motion-item>
                                <div className="raa-format-media">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${BASE}${FORMAT_POSTER[cat.slug] ?? "/images/og/rajkot-airport-media.jpg"}`}
                                        alt={`${cat.title} at Rajkot International Airport`}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="raa-format-price">{cat.priceLine}</span>
                                </div>
                                <div className="raa-format-body">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.cardText}</p>
                                    <span className="raa-format-link">
                                        View details
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M5 12h12M12 6l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY ================= */}
            <section className="raa-section raa-why" aria-labelledby="raa-why-title">
                <div className="container">
                    <span className="raa-eyebrow" data-motion="clip">Why Rajkot airport</span>
                    <h2 className="raa-h2" id="raa-why-title" data-motion="up">
                        A premium audience, <em>already slowing down.</em>
                    </h2>
                    <div className="raa-why-grid" data-motion-group>
                        <article data-motion-item>
                            <span className="raa-why-no">01</span>
                            <h3>Business &amp; NRI travellers</h3>
                            <p>Rajkot airport advertising reaches Saurashtra&apos;s industrialists, business flyers and the NRI corridor — high-intent decision-makers, not passing footfall.</p>
                        </article>
                        <article data-motion-item>
                            <span className="raa-why-no">02</span>
                            <h3>High dwell, trusted space</h3>
                            <p>35–50 minutes of average dwell inside security means your brand is seen in an unskippable, premium environment — no scroll-past, no ad-block.</p>
                        </article>
                        <article data-motion-item>
                            <span className="raa-why-no">03</span>
                            <h3>One partner, end to end</h3>
                            <p>Planning, printing, installation, AAI creative approval and reporting handled by a single team — run a campaign without visiting Rajkot.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= STEPS ================= */}
            <section className="raa-section raa-steps" aria-labelledby="raa-steps-title">
                <div className="container">
                    <span className="raa-eyebrow" data-motion="clip">How it works</span>
                    <h2 className="raa-h2" id="raa-steps-title" data-motion="up">
                        From enquiry to live, <em>in four steps.</em>
                    </h2>
                    <ol className="raa-step-list" data-motion-group>
                        <li data-motion-item><b>01</b><h3>Pick your format</h3><p>Digital, backlit, outdoor, trolley — or a hybrid plan.</p></li>
                        <li data-motion-item><b>02</b><h3>Share the creative</h3><p>We adapt or design it to the exact media spec.</p></li>
                        <li data-motion-item><b>03</b><h3>AAI approval</h3><p>Creative is routed through AAI sign-off (~10–15 days).</p></li>
                        <li data-motion-item><b>04</b><h3>Go live</h3><p>We install, run and report the campaign.</p></li>
                    </ol>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="faq-section raa-faq" aria-labelledby="raa-faq-title">
                <div className="container">
                    <span className="raa-eyebrow" data-motion="clip">Common questions</span>
                    <h2 className="raa-h2" id="raa-faq-title" data-motion="up">
                        Rajkot airport advertising, <em>answered.</em>
                    </h2>
                    <div className="faq-list" data-motion-group>
                        {FAQS.map((f) => (
                            <details className="faq-item" key={f.q} data-motion-item>
                                <summary>{f.q}</summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="raa-cta-band" aria-labelledby="raa-cta-title">
                <span className="raa-cta-fx" aria-hidden="true" />
                <div className="container" data-motion="zoom">
                    <h2 id="raa-cta-title">Ready to advertise at Rajkot International Airport?</h2>
                    <p>Tell us your brand and timeline — we&apos;ll share the rate card and current availability.</p>
                    <div className="raa-cta-row">
                        <a className="raa-btn raa-btn--primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Get rates on WhatsApp</a>
                        <Link className="raa-btn raa-btn--ghost raa-btn--on-dark" href="/contact/">Send an enquiry</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
