"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import "./AirportAdvertisingSpotlight.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type LenisWindow = Window & {
    __lenis?: { scrollTo: (t: Element, o?: { offset?: number }) => void };
};

const WALL = [
    { poster: "/videos/inv_digital_poster.jpg", label: "Digital Screens" },
    { poster: "/videos/inv_outdoor_poster.jpg", label: "Outdoor Boards" },
    { poster: "/videos/inv_backlit_poster.jpg", label: "Backlit Boards" },
    { poster: "/videos/inv_hybrid_poster.jpg", label: "Hybrid Plans" },
];

/**
 * In-scroll spotlight for the standalone /rajkot-airport-advertising/ page:
 * showcases the media-wall + a tight pitch inside the airport one-pager, then
 * hands off to the full page (SEO canonical) or down to inventory. H2 (not H1)
 * and reworded copy so it doesn't cannibalise the standalone page's keyword.
 */
export default function AirportAdvertisingSpotlight() {
    function scrollToInventory(event: MouseEvent<HTMLAnchorElement>) {
        const target = document.getElementById("inventory");
        if (!target) return;
        event.preventDefault();
        const lenis = (window as LenisWindow).__lenis;
        if (lenis) lenis.scrollTo(target, { offset: -84 });
        else target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#inventory");
    }

    return (
        <section className="aa-spot" id="rajkot-airport-advertising" aria-labelledby="aa-spot-title">
            <div className="container aa-spot-grid">
                <div className="aa-spot-copy">
                    <span className="aa-spot-eyebrow" data-motion="clip">Rajkot Airport Advertising</span>

                    <h2 className="aa-spot-h2" id="aa-spot-title" data-motion="up">
                        Advertise where <em>Saurashtra takes off.</em>
                    </h2>

                    <p className="aa-spot-lead" data-motion="up" data-motion-delay="0.08">
                        Reach business travellers, HNIs and the NRI corridor at Rajkot
                        International Airport (Hirasar) — digital screens, in-terminal
                        backlit boards, trolley media and landmark outdoor hoardings,
                        planned and run end to end by Mukesh Art with the Airports
                        Authority of India.
                    </p>

                    <ul className="aa-spot-points" data-motion-group>
                        <li data-motion-item><b>39</b> LED screens across the terminal</li>
                        <li data-motion-item><b>70+</b> boards &amp; screens airport-wide</li>
                        <li data-motion-item><b>AAI</b> authorised · creative-approved</li>
                    </ul>

                    <div className="aa-spot-cta" data-motion="up" data-motion-delay="0.12">
                        <Link href="/rajkot-airport-advertising/" className="aa-spot-btn aa-spot-btn--primary">
                            Explore Rajkot Airport Advertising
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 12h12M12 6l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <a href="#inventory" onClick={scrollToInventory} className="aa-spot-btn aa-spot-btn--ghost">
                            View inventory
                        </a>
                    </div>
                </div>

                <div className="aa-spot-wall" data-motion="zoom" data-motion-delay="0.1" aria-hidden="true">
                    <div className="aa-wall-grid" data-motion-group>
                        {WALL.map((tile) => (
                            <figure className="aa-wall-tile" key={tile.label} data-motion-item>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`${BASE}${tile.poster}`} alt="" loading="lazy" decoding="async" />
                                <figcaption>{tile.label}</figcaption>
                            </figure>
                        ))}
                        <span className="aa-wall-sheen" />
                    </div>
                </div>
            </div>
        </section>
    );
}
