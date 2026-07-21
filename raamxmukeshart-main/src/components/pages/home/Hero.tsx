"use client";

import { useEffect, useState } from "react";
import siteCopy from "@/content/site_copy.json";

const heroCopy = siteCopy.hero;
const AIRPORT_STATS = heroCopy.stats;

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// day = real Rajkot terminal footage; night = tarmac-at-night film.
// The theme toggle swaps the hero film with the rest of the theme.
const HERO_FILMS = {
    day: {
        src: `${BASE}/videos/hero_media.mp4`,
        poster: `${BASE}/videos/hero_media_poster.jpg`,
    },
    night: {
        src: `${BASE}/videos/hero_night.mp4`,
        poster: `${BASE}/videos/hero_night_poster.jpg`,
    },
} as const;

type ThemeId = keyof typeof HERO_FILMS;

export default function Hero() {
    const [theme, setTheme] = useState<ThemeId>("day");
    const [reduceMotion, setReduceMotion] = useState(false);

    // follow the site theme via the <html data-theme> attribute so only
    // the active theme's film is ever downloaded
    useEffect(() => {
        const root = document.documentElement;
        const read = () =>
            setTheme(root.dataset.theme === "night" ? "night" : "day");
        read();

        const observer = new MutationObserver(read);
        observer.observe(root, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        setReduceMotion(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );

        return () => observer.disconnect();
    }, []);

    const film = HERO_FILMS[theme];

    return (
        <section id="top" className="hero">
            {reduceMotion ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className="hero-video" src={film.poster} alt="" aria-hidden />
            ) : (
                <video
                    key={film.src}
                    className="hero-video"
                    poster={film.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={film.src} type="video/mp4" />
                </video>
            )}

            <div className="hero-overlay" />
            <div className="hero-vignette" />
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="container hero-content">
                <div className="hero-badge hero-anim">
                    <span></span>
                    {heroCopy.badge}
                </div>

                <h1 className="hero-h1 hero-anim">
                    {heroCopy.titlePre} <em>{heroCopy.titleEm}</em>
                </h1>

                <p className="hero-sub hero-anim">{heroCopy.sub}</p>

                <div className="hero-trust hero-anim">
                    {[
                        "OOH Media",
                        "Airport Branding",
                        "Digital Screens",
                        "Static Boards",
                    ].map((item, index) => (
                        <span key={item} style={{ "--i": index } as React.CSSProperties}>
                            <b>0{index + 1}</b>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="container hero-stats-wrap hero-anim">
                <div className="hero-stats">
                    {AIRPORT_STATS.map((stat) => (
                        <article key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </div>

            <a href="#about" className="hero-scroll hero-anim" aria-label="Scroll to explore">
                <span className="hero-scroll-label">Scroll</span>
                <span className="hero-scroll-track">
                    <span className="hero-scroll-dot" />
                </span>
            </a>
        </section>
    );
}
