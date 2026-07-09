"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import "./GroupHome.css";

import logoMark from "@/public/images/home/logo_mark.png";
import airportPhoto from "@/public/images/inventory/updated/ad_2.webp";

const divisions = [
    {
        code: "01",
        name: "Mukesh Art",
        line: "The original studio — signage, wall media, and visual brand communication built over decades.",
        live: false,
    },
    {
        code: "02",
        name: "Mukesh Publicity",
        line: "Outdoor hoardings, billboards, and city-scale OOH campaigns across Saurashtra.",
        live: false,
    },
    {
        code: "03",
        name: "Mukesh Airport Media",
        line: "Premium advertising inventory at Rajkot International Airport — digital screens, boards, and journey plans.",
        live: true,
        href: "/airport/",
    },
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
                                src={logoMark}
                                alt="Mukesh Media Group"
                                width={251}
                                height={202}
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

                        <div className="grp-division-grid" data-motion-group>
                            {divisions.map((division) =>
                                division.live && division.href ? (
                                    <Link
                                        key={division.code}
                                        href={division.href}
                                        className="grp-division live"
                                        data-motion-item
                                    >
                                        <figure>
                                            <img
                                                src={airportPhoto.src}
                                                alt="Rajkot Airport advertising by Mukesh Airport Media"
                                            />
                                        </figure>
                                        <small>{division.code}</small>
                                        <h3>{division.name}</h3>
                                        <p>{division.line}</p>
                                        <strong>
                                            Enter the airport site
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
                                    </Link>
                                ) : (
                                    <div
                                        key={division.code}
                                        className="grp-division"
                                        data-motion-item
                                    >
                                        <small>{division.code}</small>
                                        <h3>{division.name}</h3>
                                        <p>{division.line}</p>
                                        <strong className="soon">Website coming soon</strong>
                                    </div>
                                )
                            )}
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
