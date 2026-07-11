"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import "@/src/components/pages/group/GroupHome.css";
import "./PublicityHome.css";

import publicityLogo from "@/public/images/home/mukesh_publicity_logo.png";
import ad3Photo from "@/public/images/inventory/updated/ad_3.webp";

const services = [
    "City hoardings & billboards",
    "Large-format OOH displays",
    "High-traffic location planning",
    "Campaign rotation & upkeep",
    "Creative & production coordination",
    "Multi-site campaign execution",
];

const whyPoints = [
    {
        n: "01",
        t: "High-traffic corridors",
        p: "Hoardings and billboards placed on Rajkot's busiest roads and junctions — visibility that works around the clock, for commuters and businesses alike.",
    },
    {
        n: "02",
        t: "Saurashtra's commercial hub",
        p: "Rajkot anchors one of Gujarat's fastest-growing industrial and trade regions. Outdoor media here reaches buyers, dealers, and decision-makers daily.",
    },
    {
        n: "03",
        t: "One accountable partner",
        p: "As a Mukesh Art division with 20+ years behind it, campaigns get planned placement, honest upkeep, and follow-through — not just a wall.",
    },
];

export default function PublicityHome() {
    return (
        <>
            <SmoothScroll />
            <ScrollAnimations />

            <main className="grp pub">
                <header className="grp-top">
                    <div className="grp-container grp-top-inner">
                        <Link href="/" className="grp-brand">
                            <Image
                                src={publicityLogo}
                                alt="Mukesh Publicity"
                                width={251}
                                height={200}
                                quality={100}
                                priority
                            />
                            <span>
                                <b>Mukesh Publicity</b>
                                <small>A Mukesh Art Division</small>
                            </span>
                        </Link>

                        <a
                            className="grp-top-cta"
                            href="https://wa.me/919825340818"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Plan a Campaign
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
                        </a>
                    </div>
                </header>

                <section className="grp-hero" aria-labelledby="pub-title">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            Mukesh Publicity · Est. 2010
                        </span>

                        <h1 id="pub-title" data-motion="up" data-motion-delay="0.08">
                            Outdoor Advertising <em>in Rajkot.</em>
                        </h1>

                        <p className="grp-punch" data-motion="right" data-motion-delay="0.14">
                            Hoardings, billboards, and large-format OOH across Saurashtra.
                        </p>

                        <p className="grp-lede" data-motion="up" data-motion-delay="0.18">
                            Mukesh Publicity is the outdoor media division of Mukesh Media
                            Group — planning and running hoarding, billboard, and
                            large-format outdoor advertising campaigns across Rajkot and
                            Saurashtra's high-traffic locations since 2010. From single
                            landmark sites to multi-site city campaigns, brands get
                            planned placement, reliable upkeep, and honest execution.
                        </p>

                        <div className="pub-chips" data-motion="zoom" data-motion-delay="0.22">
                            {services.map((service) => (
                                <span key={service}>{service}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pub-why" aria-label="Why outdoor media in Rajkot">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            Why Outdoor, Why Rajkot
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            The city sees you <em>before it searches you.</em>
                        </h2>

                        <div className="pub-why-grid" data-motion-group>
                            {whyPoints.map((point) => (
                                <article className="pub-why-card" data-motion-item key={point.n}>
                                    <span>{point.n}</span>
                                    <h3>{point.t}</h3>
                                    <p>{point.p}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pub-cross" aria-label="Airport media">
                    <div className="grp-container">
                        <Link href="/airport/" className="pub-cross-card" data-motion="card">
                            <figure>
                                <img
                                    src={ad3Photo.src}
                                    alt="Airport advertising board at Rajkot International Airport"
                                    loading="lazy"
                                />
                            </figure>

                            <div>
                                <span className="grp-eyebrow">Also from the group</span>
                                <h2>
                                    Want the airport <em>audience too?</em>
                                </h2>
                                <p>
                                    Mukesh Airport Media runs 70+ screens and boards inside
                                    Rajkot International Airport — pair city outdoor with
                                    airport presence in one plan.
                                </p>
                                <strong>
                                    Explore Airport Media
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
                                </strong>
                            </div>
                        </Link>
                    </div>
                </section>

                <section className="grp-cta" aria-label="Start a campaign">
                    <div className="grp-container">
                        <div className="grp-cta-card" data-motion="zoom">
                            <h2>
                                Put your brand on <em>Rajkot's roads.</em>
                            </h2>

                            <p>
                                Share your campaign window, preferred areas, and budget —
                                the team maps available sites, availability, and a plan
                                that fits.
                            </p>

                            <div className="grp-cta-actions">
                                <a
                                    className="grp-cta-primary"
                                    href="https://wa.me/919825340818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chat on WhatsApp
                                </a>

                                <Link className="grp-cta-secondary" href="/">
                                    Mukesh Art Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="grp-footer">
                    <div className="grp-container grp-footer-inner">
                        <p>© {new Date().getFullYear()} Mukesh Publicity · Mukesh Art.</p>
                        <Link href="/airport/">Mukesh Airport Media →</Link>
                    </div>
                </footer>
            </main>
        </>
    );
}
