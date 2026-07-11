"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import "./GroupHome.css";

import logoMark from "@/public/images/home/logo_mark.png";
import groupLogo from "@/public/images/home/mukesh_media_group_logo.png";
import artLogo from "@/public/images/home/mukesh_art_logo.png";
import publicityLogo from "@/public/images/home/mukesh_publicity_logo.png";

const stats = [
    { value: "20+", label: "Years of media experience" },
    { value: "03", label: "Business divisions" },
    { value: "50+", label: "Brand campaigns" },
    { value: "1.25L", label: "Monthly airport passengers" },
];

const divisions = [
    {
        code: "01",
        est: "Est. 2004",
        name: "Mukesh Art",
        tag: "Wall Painting & Signage",
        line: "The original studio — visual brand communication and on-ground campaign execution across Saurashtra.",
        points: [
            "Signage & wall media",
            "Creative production",
            "On-ground campaign execution",
        ],
        live: false,
        cta: "",
        logo: artLogo,
    },
    {
        code: "02",
        est: "Est. 2010",
        name: "Mukesh Publicity",
        tag: "Outdoor & Large-Format OOH",
        line: "Outdoor hoardings and large-format advertising that give brands visibility across high-traffic city locations.",
        points: [
            "City hoardings & billboards",
            "High-traffic locations",
            "Campaign rotation & upkeep",
        ],
        live: true,
        href: "/publicity/",
        cta: "Explore outdoor media",
        logo: publicityLogo,
    },
    {
        code: "03",
        est: "Est. 2023",
        name: "Mukesh Airport Media",
        tag: "Airport Advertising · Rajkot International",
        line: "Premium advertising inventory at Rajkot International Airport — digital screens, boards, and full journey plans.",
        points: [
            "70+ screens & boards",
            "Exclusive advertising rights",
            "Full passenger journey coverage",
        ],
        live: true,
        href: "/airport/",
        cta: "Enter the airport site",
        logo: logoMark,
    },
];

const journey = [
    {
        year: "2004",
        title: "The foundation",
        body: "Mukesh Art started with wall painting and local advertising, building a strong base in visual brand communication and on-ground execution.",
    },
    {
        year: "2010",
        title: "The expansion",
        body: "Mukesh Publicity moved into outdoor hoardings and large-format advertising, helping brands win visibility across high-traffic city locations.",
    },
    {
        year: "2023",
        title: "The premium leap",
        body: "Mukesh Airport Media brought that experience into Rajkot International Airport — connecting brands with travellers, business audiences, and decision-makers.",
    },
];

const capabilities = [
    "Outdoor advertising",
    "Airport media operations",
    "Static & digital display coordination",
    "Campaign execution support",
    "Creative & production coordination",
    "Local vendor coordination",
];

export default function GroupHome() {
    return (
        <>
            <SmoothScroll />
            <ScrollAnimations />

            <main className="grp">
                <header className="grp-top">
                    <div className="grp-container grp-top-inner">
                        <span className="grp-brand">
                            <Image
                                src={groupLogo}
                                alt="Mukesh Media Group"
                                width={251}
                                height={204}
                                quality={100}
                                priority
                            />
                            <span>
                                <b>Mukesh Media Group</b>
                                <small>Integrated Media & Advertising</small>
                            </span>
                        </span>

                        <Link className="grp-top-cta" href="/airport/">
                            Airport Media
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
                        </Link>
                    </div>
                </header>

                <section className="grp-hero" aria-labelledby="grp-title">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            Mukesh Media Group
                        </span>

                        <h1 id="grp-title" data-motion="up" data-motion-delay="0.08">
                            Brand Beyond <em>Boundaries.</em>
                        </h1>

                        <p className="grp-punch" data-motion="right" data-motion-delay="0.14">
                            We Create Visibility. We Build Influence.
                        </p>

                        <p className="grp-lede" data-motion="up" data-motion-delay="0.18">
                            Mukesh Media Group is a leading integrated media and
                            advertising company delivering impactful brand communication
                            across airports, outdoor media, and innovative advertising
                            platforms. With a commitment to creativity, strategic
                            planning, and premium media solutions, we help brands connect
                            with millions of travelers, commuters, and consumers every
                            day.
                        </p>

                        <p className="grp-mission" data-motion="zoom" data-motion-delay="0.22">
                            Our mission is simple — to take your brand beyond boundaries
                            and transform visibility into business growth.
                        </p>

                        <div className="grp-stats" data-motion-group>
                            {stats.map((stat) => (
                                <div className="grp-stat" data-motion-item key={stat.label}>
                                    <b>{stat.value}</b>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grp-divisions" aria-label="Our divisions">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            The Group
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            Three divisions, <em>one signature.</em>
                        </h2>

                        <p className="grp-section-sub" data-motion="right" data-motion-delay="0.12">
                            Each business runs its own craft — street-level art, city-scale
                            outdoor, and premium airport media — under one accountable
                            family name.
                        </p>

                        <div className="grp-division-grid" data-motion-group>
                            {divisions.map((division) => {
                                const body = (
                                    <>
                                        <figure className="grp-division-logo">
                                            <img
                                                src={division.logo.src}
                                                alt={`${division.name} logo`}
                                            />
                                        </figure>

                                        <div className="grp-division-meta">
                                            <small>{division.code}</small>
                                            <small>{division.est}</small>
                                        </div>

                                        <h3>{division.name}</h3>
                                        <span className="grp-division-tag">{division.tag}</span>
                                        <p>{division.line}</p>

                                        <ul className="grp-division-points">
                                            {division.points.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))}
                                        </ul>

                                        {division.live ? (
                                            <strong>
                                                {division.cta}
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
                                        ) : (
                                            <strong className="soon">Website coming soon</strong>
                                        )}
                                    </>
                                );

                                return division.live && division.href ? (
                                    <Link
                                        key={division.code}
                                        href={division.href}
                                        className="grp-division live"
                                        data-motion-item
                                    >
                                        {body}
                                    </Link>
                                ) : (
                                    <div
                                        key={division.code}
                                        className="grp-division"
                                        data-motion-item
                                    >
                                        {body}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="grp-journey" aria-label="Our journey">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            The Journey
                        </span>

                        <h2 data-motion="up" data-motion-delay="0.06">
                            From street walls <em>to the runway.</em>
                        </h2>

                        <div className="grp-journey-grid" data-motion-group>
                            {journey.map((step) => (
                                <article className="grp-journey-step" data-motion-item key={step.year}>
                                    <b>{step.year}</b>
                                    <h3>{step.title}</h3>
                                    <p>{step.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grp-about" aria-labelledby="grp-about-title">
                    <div className="grp-container">
                        <span className="grp-eyebrow" data-motion="clip">
                            About Us
                        </span>

                        <h2 id="grp-about-title" data-motion="up" data-motion-delay="0.06">
                            Decades of experience, <em>measured impact.</em>
                        </h2>

                        <div className="grp-about-copy" data-motion="up" data-motion-delay="0.12">
                            <p>
                                At Mukesh Media Group, we combine decades of experience
                                with innovative media strategies to create high-impact
                                advertising campaigns. From iconic outdoor billboards to
                                premium airport branding, we provide brands with exclusive
                                opportunities to engage audiences in high-value
                                environments.
                            </p>

                            <p>
                                Every campaign is designed with precision, executed with
                                excellence, and measured for maximum brand impact.
                            </p>
                        </div>

                        <div className="grp-capabilities" data-motion-group>
                            {capabilities.map((capability) => (
                                <span data-motion-item key={capability}>
                                    {capability}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grp-cta" aria-label="Start a campaign">
                    <div className="grp-container">
                        <div className="grp-cta-card" data-motion="zoom">
                            <h2>
                                Planning a campaign <em>in Saurashtra?</em>
                            </h2>

                            <p>
                                Start with the airport — our flagship inventory at Rajkot
                                International — or talk to the team about outdoor and
                                city-scale placements.
                            </p>

                            <div className="grp-cta-actions">
                                <Link className="grp-cta-primary" href="/airport/">
                                    Explore Airport Media
                                </Link>

                                <a
                                    className="grp-cta-secondary"
                                    href="https://wa.me/919825340818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="grp-footer">
                    <div className="grp-container grp-footer-inner">
                        <p>© {new Date().getFullYear()} Mukesh Media Group.</p>
                        <Link href="/airport/">Mukesh Airport Media →</Link>
                    </div>
                </footer>
            </main>
        </>
    );
}
