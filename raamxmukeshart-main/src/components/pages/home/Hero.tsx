"use client";

import { useEffect, useRef, useState } from "react";
import siteCopy from "@/content/site_copy.json";

const heroCopy = siteCopy.hero;
const AIRPORT_STATS = heroCopy.stats;

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// day = real Rajkot terminal footage; night = tarmac-at-night film.
// The theme toggle swaps the hero film with the rest of the theme.
// portraitSrc = native 9:16 cut for phones held upright — the 16:9
// films only show a ~1/3 slice there (see the focal rules in Home.css)
type HeroFilm = {
    src: string;
    poster: string;
    portraitSrc?: string;
    portraitPoster?: string;
};

const HERO_FILMS: Record<"day" | "night", HeroFilm> = {
    day: {
        src: `${BASE}/videos/hero_media.mp4`,
        poster: `${BASE}/videos/hero_media_poster.jpg`,
        // baked 9:16 crop of the 720p landscape film (40% focal = LED
        // screens + belt) — replace with a real daytime portrait shoot
        // when the client films one; the CSS slice looked broken on
        // Android and full bitrate on the visible region reads sharper
        portraitSrc: `${BASE}/videos/hero_media_portrait.mp4`,
        portraitPoster: `${BASE}/videos/hero_media_portrait_poster.jpg`,
    },
    night: {
        src: `${BASE}/videos/hero_night.mp4`,
        poster: `${BASE}/videos/hero_night_poster.jpg`,
        // owner shoot 2026-08: flag plaza → pan to the lit terminal sign
        portraitSrc: `${BASE}/videos/hero_night_portrait.mp4`,
        portraitPoster: `${BASE}/videos/hero_night_portrait_poster.jpg`,
    },
};

type ThemeId = keyof typeof HERO_FILMS;

export default function Hero() {
    const [theme, setTheme] = useState<ThemeId>("day");
    const [reduceMotion, setReduceMotion] = useState(false);
    // portrait phones swap in the 9:16 cut where one exists; 768px
    // matches the focal-crop breakpoint in Home.css
    const [portrait, setPortrait] = useState(false);
    // poster-first paint: the film (~2MB) must not compete with the
    // first render — it starts once the page has loaded (or 2.5s in,
    // whichever comes first) and the poster covers until then
    const [filmLive, setFilmLive] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const start = () => setFilmLive(true);
        if (document.readyState === "complete") {
            start();
            return;
        }
        window.addEventListener("load", start, { once: true });
        const fallback = window.setTimeout(start, 2500);
        return () => {
            window.removeEventListener("load", start);
            window.clearTimeout(fallback);
        };
    }, []);

    // .play() (not just the attribute) so the swap also works when the
    // flag flips after the video element is already mounted
    useEffect(() => {
        if (filmLive) videoRef.current?.play().catch(() => {});
    }, [filmLive, theme, reduceMotion, portrait]);

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

    useEffect(() => {
        const mq = window.matchMedia(
            "(max-width: 768px) and (orientation: portrait)"
        );
        const read = () => setPortrait(mq.matches);
        read();
        mq.addEventListener("change", read);
        return () => mq.removeEventListener("change", read);
    }, []);

    const film = HERO_FILMS[theme];
    // fall back to the landscape film when a theme has no portrait cut
    // (day has none yet — its focal crop in Home.css still applies)
    const portraitFilm = portrait && !!film.portraitSrc;
    const filmSrc = portraitFilm ? film.portraitSrc! : film.src;
    const filmPoster =
        portraitFilm && film.portraitPoster ? film.portraitPoster : film.poster;
    const videoClass = `hero-video hero-video--${theme}${
        portraitFilm ? " hero-video--portrait" : ""
    }`;

    return (
        <section id="top" className="hero">
            {reduceMotion ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    className={videoClass}
                    src={filmPoster}
                    alt=""
                    aria-hidden
                />
            ) : (
                <video
                    key={filmSrc}
                    ref={videoRef}
                    className={videoClass}
                    poster={filmPoster}
                    autoPlay={filmLive}
                    preload={filmLive ? "auto" : "none"}
                    muted
                    loop
                    playsInline
                >
                    <source src={filmSrc} type="video/mp4" />
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
