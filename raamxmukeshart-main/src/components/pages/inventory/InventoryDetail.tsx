"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import {
    airportFacts,
    getInventoryCategory,
} from "@/src/lib/inventoryData";
import "./InventoryDetail.css";

// serif headline with the last word in italic accent, matching the home
// page's editorial style
function AccentTitle({ text }: { text: string }) {
    const words = text.trim().split(" ");
    const last = words.pop();

    return (
        <>
            {words.join(" ")} <em>{last}</em>
        </>
    );
}

import { getCategoryVisuals } from "@/src/lib/inventoryVisuals";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// indoor categories open on a short terminal film; outdoor keeps the
// real site photos (client rule: our own photos for outdoor inventory)
const INVENTORY_FILMS: Record<string, { src: string; poster: string }> = {
    "digital-screen-network": {
        src: `${BASE}/videos/inv_digital.mp4`,
        poster: `${BASE}/videos/inv_digital_poster.jpg`,
    },
    "in-terminal-backlit-boards": {
        src: `${BASE}/videos/inv_backlit.mp4`,
        poster: `${BASE}/videos/inv_backlit_poster.jpg`,
    },
    "hybrid-journey-plans": {
        src: `${BASE}/videos/inv_hybrid.mp4`,
        poster: `${BASE}/videos/inv_hybrid_poster.jpg`,
    },
};

export default function InventoryDetail({ slug }: { slug: string }) {
    const category = getInventoryCategory(slug);
    const [reduceMotion, setReduceMotion] = useState(false);

    // Lenis on the homepage can leave the window deep-scrolled when the
    // route changes — always open a category page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
        setReduceMotion(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
    }, [slug]);

    if (!category) return null;

    const visuals = getCategoryVisuals(slug);
    const hero = visuals.hero;

    return (
        <>
            <SmoothScroll />
            <ScrollAnimations />

            <main className="inv-detail">
                <section className="inv-hero" aria-labelledby="inv-title">
                    <div className="container">
                        <Link href="/airport/#inventory" className="inv-back" data-motion="up">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M19 12H7m5 6-7-6 7-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>All inventory</span>
                        </Link>

                        <span className="inv-eyebrow" data-motion="clip">
                            {category.code} · {category.filter}
                        </span>

                        <h1 id="inv-title" data-motion="up" data-motion-delay="0.08">
                            <AccentTitle text={category.title} />
                        </h1>

                        <p className="inv-tagline" data-motion="right" data-motion-delay="0.14">
                            {category.tagline}
                        </p>

                        <div className="inv-hero-meta" data-motion="zoom" data-motion-delay="0.18">
                            <span className="highlight">{category.units}</span>
                            <span>{category.priceLine}</span>
                            <span>+ GST · availability on confirmation</span>
                        </div>

                        <figure className="inv-hero-media" data-motion="card" data-motion-delay="0.22">
                            {INVENTORY_FILMS[slug] && !reduceMotion ? (
                                <video
                                    poster={INVENTORY_FILMS[slug].poster}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-label={`${category.title} at Rajkot Airport`}
                                >
                                    <source
                                        src={INVENTORY_FILMS[slug].src}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    src={hero.src}
                                    alt={`${category.title} at Rajkot Airport`}
                                />
                            )}
                        </figure>

                        <div className="inv-facts" data-motion-group>
                            {airportFacts.map((fact) => (
                                <div className="inv-fact" data-motion-item key={fact.label}>
                                    <b>{fact.value}</b>
                                    <span>{fact.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="inv-plans" aria-label="Plans in this category">
                    <div className="container">
                        <span className="inv-eyebrow" data-motion="clip">
                            Plans
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            Pick the plan, <em>we shape the campaign.</em>
                        </h2>

                        <div className="inv-plan-grid" data-motion-group>
                            {category.plans.map((plan, planIndex) => {
                                const photo = visuals.planPhotos[planIndex];

                                return (
                                <article className="inv-plan-card" data-motion-item key={plan.name}>
                                    {photo && (
                                        <figure className="inv-plan-photo">
                                            <img
                                                src={photo.src}
                                                alt={`${plan.name} — site photo`}
                                                loading="lazy"
                                            />
                                        </figure>
                                    )}
                                    <h3>{plan.name}</h3>
                                    <p>{plan.detail}</p>
                                    <b>{plan.price}</b>
                                </article>
                                );
                            })}
                        </div>

                        <p className="inv-note" data-motion="up">
                            Starting rates per month, exclusive of GST. Final rate card
                            and availability shared on request. All creatives subject to
                            AAI Rajkot approval.
                        </p>
                    </div>
                </section>

                <section className="inv-units" aria-label="Full unit inventory">
                    <div className="container">
                        <span className="inv-eyebrow" data-motion="clip">
                            The Inventory
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            Every placement, <em>mapped to the journey.</em>
                        </h2>

                        {category.unitGroups.map((group, groupIndex) => {
                            const gallery = visuals.groupGalleries[groupIndex] ?? [];

                            return (
                            <div className="inv-unit-group" data-motion="up" key={group.heading}>
                                <h3>{group.heading}</h3>
                                {group.note && <p>{group.note}</p>}

                                <div className="inv-unit-table">
                                    {group.rows.map((row) => (
                                        <div className="inv-unit-row" key={row.code}>
                                            <b>{row.code}</b>
                                            <span>{row.spec}</span>
                                            <span>{row.location}</span>
                                        </div>
                                    ))}
                                </div>

                                {gallery.length > 0 && (
                                    <div className="inv-unit-gallery">
                                        {gallery.map((photo, photoIndex) => (
                                            <figure key={photoIndex}>
                                                <img
                                                    src={photo.src}
                                                    alt={`${group.heading} — site photo ${photoIndex + 1}`}
                                                    loading="lazy"
                                                />
                                            </figure>
                                        ))}
                                    </div>
                                )}
                            </div>
                            );
                        })}
                    </div>
                </section>

                <section className="inv-why" aria-label="Why this format works">
                    <div className="container">
                        <span className="inv-eyebrow" data-motion="clip">
                            Why It Works
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            Why buyers <em>pick this format.</em>
                        </h2>

                        <ul className="inv-why-list" data-motion-group>
                            {category.whyPoints.map((point) => (
                                <li data-motion-item key={point}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="inv-cta" aria-label="Check availability">
                    <div className="container">
                        <div className="inv-cta-card" data-motion="zoom">
                            <h2>Check availability for your campaign window.</h2>

                            <p>
                                Share your campaign month, preferred plan, and creative
                                format — we confirm availability, the final rate card,
                                and a site-visit slot before you commit.
                            </p>

                            <div className="inv-cta-actions">
                                {category.pdfReady ? (
                                    <a
                                        className="inv-cta-primary"
                                        href={category.pdfHref}
                                        download
                                    >
                                        Download plan PDF
                                    </a>
                                ) : (
                                    <Link className="inv-cta-primary" href="/contact/">
                                        Request the plan PDF
                                    </Link>
                                )}

                                <Link className="inv-cta-secondary" href="/contact/">
                                    Talk to the team
                                </Link>
                            </div>

                            <small>
                                ASCO-certified operations support site visits, airport
                                protocol coordination, and creative approval handling.
                            </small>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
