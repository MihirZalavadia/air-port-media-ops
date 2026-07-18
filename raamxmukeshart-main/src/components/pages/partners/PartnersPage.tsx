"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import { partnerGroups, allPartners, type Partner } from "@/src/lib/clientLogos";
import "./Partners.css";

const marqueeTop = allPartners.filter((_, i) => i % 2 === 0);
const marqueeBottom = allPartners.filter((_, i) => i % 2 === 1);


function MarqueeRow({
    partners,
    direction,
}: {
    partners: Partner[];
    direction: "left" | "right";
}) {
    const track = (hidden: boolean) => (
        <div className="marquee-track" aria-hidden={hidden || undefined}>
            {partners.map((partner) => (
                <span className="marquee-chip" key={partner.name}>
                    <span className="chip-logo">
                        <Image src={partner.img} alt={hidden ? "" : `${partner.name} logo`} />
                    </span>
                    <b>{partner.name}</b>
                </span>
            ))}
        </div>
    );

    return (
        <div className="marquee-row" data-direction={direction}>
            {track(false)}
            {track(true)}
        </div>
    );
}

export default function PartnersPage() {
    // Lenis on the previous page can leave the window deep-scrolled when the
    // route changes — always open the partners page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SmoothScroll />
            <ScrollAnimations />

            <main className="partners-page">
                <section className="partners-hero" aria-labelledby="partners-title">
                    <span className="partners-hero-watermark" aria-hidden="true">
                        Partners
                    </span>

                    <div className="container">
                        <Link href="/airport/#clients" className="partners-back" data-motion="up">
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
                            <span>Back to home</span>
                        </Link>

                        <span className="partners-eyebrow" data-motion="clip">
                            Trusted by Leaders
                        </span>

                        <h1 id="partners-title" data-motion="up" data-motion-delay="0.08">
                            50+ National &amp;
                            <br />
                            <em>International Brands.</em>
                        </h1>

                        <p className="partners-tagline" data-motion="right" data-motion-delay="0.14">
                            From Morbi&rsquo;s leading ceramic houses to Rajkot&rsquo;s jewellers,
                            casting groups, and national mobile brands — this is the roster that
                            trusts Mukesh Art with its presence in front of Rajkot Airport&rsquo;s
                            passengers.
                        </p>

                        <div className="partners-stats" data-motion="zoom" data-motion-delay="0.18">
                            <div className="stat">
                                <b>50+</b>
                                <span>Brand Partners</span>
                            </div>
                            <div className="stat">
                                <b>07</b>
                                <span>Industries Covered</span>
                            </div>
                            <div className="stat">
                                <b>2010</b>
                                <span>Campaigns Since</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="partners-marquee-section"
                    aria-label="Partner brand logos"
                >
                    <div className="partners-marquee" data-motion="up">
                        <MarqueeRow partners={marqueeTop} direction="left" />
                        <MarqueeRow partners={marqueeBottom} direction="right" />
                    </div>
                </section>

                <section className="partners-roster" aria-labelledby="roster-title">
                    <div className="container">
                        <span className="partners-eyebrow" data-motion="clip">
                            The Full Roster
                        </span>

                        <h2 id="roster-title" data-motion="up" data-motion-delay="0.08">
                            Every partner, <em>every industry.</em>
                        </h2>

                        <p className="partners-roster-intro" data-motion="up" data-motion-delay="0.14">
                            Grouped by the industries that power Saurashtra — and the national
                            names that campaign alongside them.
                        </p>

                        {partnerGroups.map((group, groupIndex) => (
                            <div className="roster-group" key={group.label}>
                                <div className="roster-group-head" data-motion="up">
                                    <span className="index">
                                        {String(groupIndex + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{group.label}</h3>
                                    <span className="count">
                                        {String(group.partners.length).padStart(2, "0")}{" "}
                                        {group.partners.length === 1 ? "brand" : "brands"}
                                    </span>
                                </div>

                                <div className="roster-grid" data-motion-group>
                                    {group.partners.map((partner) => (
                                        <article
                                            className="roster-card"
                                            key={partner.name}
                                            data-motion-item
                                        >
                                            <div className="roster-logo">
                                                <Image src={partner.img} alt={`${partner.name} logo`} />
                                            </div>
                                            <div className="roster-name">
                                                <b>{partner.name}</b>
                                                <span>{partner.sector}</span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="partners-cta" aria-labelledby="partners-cta-title">
                    <div className="container">
                        <h2 id="partners-cta-title" data-motion="up">
                            Your logo belongs <em>up here.</em>
                        </h2>

                        <p data-motion="up" data-motion-delay="0.1">
                            Join the brands already reaching Rajkot Airport&rsquo;s passengers —
                            planned placement, airport coordination, and one accountable partner.
                        </p>

                        <Link
                            href="/contact/"
                            className="partners-cta-btn"
                            data-motion="zoom"
                            data-motion-delay="0.18"
                        >
                            <span>Plan Your Campaign</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                <path
                                    d="M3.5 8h8M8.5 4.5L12 8l-3.5 3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
