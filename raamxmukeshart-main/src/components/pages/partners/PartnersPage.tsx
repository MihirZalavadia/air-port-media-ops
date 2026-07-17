"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import "./Partners.css";

/* ceramics & vitrified — the Morbi cluster */
import simpolo from "@/public/images/clients/simpolo.webp";
import varmora from "@/public/images/clients/varmora.png";
import simero from "@/public/images/clients/simero.png";
import iconGranito from "@/public/images/clients/icon_granito.png";
import itaca from "@/public/images/clients/itaca.jpg";
import lavishGranito from "@/public/images/clients/lavish_granito.png";
import mottoGranito from "@/public/images/clients/motto_granito.png";
import mozart from "@/public/images/clients/mozart.png";
import skytouch from "@/public/images/clients/skytouch.png";
import rockGranito from "@/public/images/clients/rock_granito.jpg";
import flaisGranito from "@/public/images/clients/flais_granito.jpg";
import itoli from "@/public/images/clients/itoli.png";

/* engineering & industrial */
import meeraCasting from "@/public/images/clients/meera_casting.png";
import rajanTechnocast from "@/public/images/clients/rajan_technocast.png";
import shivomCasting from "@/public/images/clients/shivom_casting.png";
import novaGroup from "@/public/images/clients/nova_group.jpg";
import esteemAuto from "@/public/images/clients/esteem_auto.jpg";
import speedwell from "@/public/images/clients/speedwell.jpg";

/* jewellery & lifestyle */
import radhikaJeweltech from "@/public/images/clients/radhika_jeweltech.png";
import jKamdar from "@/public/images/clients/j_kamdar.png";
import jadeBlue from "@/public/images/clients/jadeblue.webp";

/* automotive */
import skoda from "@/public/images/clients/skoda.png";
import mgAuto from "@/public/images/clients/mg_auto.png";

/* mobile & telecom */
import oppo from "@/public/images/clients/oppo.jpg";
import vivo from "@/public/images/clients/vivo.png";
import oneplus from "@/public/images/clients/oneplus.png";
import apple from "@/public/images/clients/apple.jpg";
import google from "@/public/images/clients/google.png";
import poojara from "@/public/images/clients/poojara.svg";

type Partner = {
    name: string;
    sector: string;
    img: StaticImageData;
};

type PartnerGroup = {
    label: string;
    partners: Partner[];
};

const partnerGroups: PartnerGroup[] = [
    {
        label: "Ceramics & Vitrified",
        partners: [
            { name: "Simpolo", sector: "Tiles & Bathware", img: simpolo },
            { name: "Varmora", sector: "Tiles & Bathware", img: varmora },
            { name: "Simero", sector: "Ceramics", img: simero },
            { name: "Icon Granito", sector: "Vitrified Tiles", img: iconGranito },
            { name: "Itaca", sector: "Granito", img: itaca },
            { name: "Lavish Granito", sector: "Ceramics", img: lavishGranito },
            { name: "Motto Granito", sector: "Future Surfaces", img: mottoGranito },
            { name: "Mozart", sector: "The Tile Composer", img: mozart },
            { name: "Skytouch", sector: "Ceramic", img: skytouch },
            { name: "Rock Granito", sector: "Vitrified Tiles", img: rockGranito },
            { name: "Flais Granito", sector: "Vitrified Tiles", img: flaisGranito },
            { name: "Itoli", sector: "Granito", img: itoli },
        ],
    },
    {
        label: "Engineering & Industrial",
        partners: [
            { name: "Meera Casting", sector: "Castings", img: meeraCasting },
            { name: "Rajan Techno Cast", sector: "Investment Casting", img: rajanTechnocast },
            { name: "Shiv Om", sector: "Castings", img: shivomCasting },
            { name: "Nova Group", sector: "Castings", img: novaGroup },
            { name: "Esteem Auto", sector: "Casting & Machining", img: esteemAuto },
            { name: "Speedwell", sector: "Electric", img: speedwell },
        ],
    },
    {
        label: "Jewellery & Lifestyle",
        partners: [
            { name: "Radhika Jeweltech", sector: "Jewellery", img: radhikaJeweltech },
            { name: "J. Kamdar", sector: "Sarees", img: jKamdar },
            { name: "Jade Blue", sector: "Fashion", img: jadeBlue },
        ],
    },
    {
        label: "Automotive",
        partners: [
            { name: "Škoda Auto", sector: "Automotive", img: skoda },
            { name: "MG Auto", sector: "Automotive", img: mgAuto },
        ],
    },
    {
        label: "Mobile & Telecom",
        partners: [
            { name: "OPPO", sector: "Smartphones", img: oppo },
            { name: "Vivo", sector: "Smartphones", img: vivo },
            { name: "OnePlus", sector: "Smartphones", img: oneplus },
            { name: "Apple", sector: "Technology", img: apple },
            { name: "Google", sector: "Technology", img: google },
            { name: "Poojara Telecom", sector: "Telecom Retail", img: poojara },
        ],
    },
];

const allPartners = partnerGroups.flatMap((group) => group.partners);
const marqueeTop = allPartners.filter((_, i) => i % 2 === 0);
const marqueeBottom = allPartners.filter((_, i) => i % 2 === 1);

/* internal-preview data — this whole block and its section are removed
   when the page goes public */
const pendingLogos = [
    {
        name: "Inox Casting",
        note: "No official logo found online — share the exact company name or a logo file and it joins the wall.",
    },
];

const confirmNotes = [
    {
        name: "Shiv Om",
        note: "Showing the Shiv-Om Brass Industries mark — confirm this is the right company.",
    },
    {
        name: "MG Auto",
        note: "Showing the MG Motor octagon — if this is a local dealership with its own logo, share that instead.",
    },
];

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
                                <b>05</b>
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

                {/* internal preview only — delete this section at public launch */}
                <section className="partners-review" aria-labelledby="review-title">
                    <div className="container">
                        <div className="review-panel" data-motion="card">
                            <span className="review-flag">
                                Internal preview · not linked anywhere · removed at public launch
                            </span>

                            <h2 id="review-title">
                                Pending for <em>review.</em>
                            </h2>

                            <div className="review-cols">
                                <div>
                                    <h3>Logo not found yet</h3>
                                    <ul>
                                        {pendingLogos.map((item) => (
                                            <li key={item.name}>
                                                <b>{item.name}</b>
                                                <span>{item.note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3>Please confirm</h3>
                                    <ul>
                                        {confirmNotes.map((item) => (
                                            <li key={item.name}>
                                                <b>{item.name}</b>
                                                <span>{item.note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                            href="/airport/#contact"
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
