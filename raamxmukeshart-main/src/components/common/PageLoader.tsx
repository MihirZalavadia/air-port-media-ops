"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mukeshLogoLight from "@/public/images/home/logo_mark_light.png";

import "./PageLoader.css";

// Module-level flag: resets on every real page load/refresh (so the curtain
// always plays then), but survives client-side route changes (so hopping to
// an inventory page and back doesn't replay it).
let playedThisPageLoad = false;

type LoaderMode = "full" | "mini" | "skip";

export default function PageLoader() {
    const [progress, setProgress] = useState(0);
    const [takeoff, setTakeoff] = useState(false);
    const [hide, setHide] = useState(false);
    // synchronous initial value — a skipped loader never renders at all,
    // so there's no one-frame flash on client-side navigation.
    // Full boarding curtain only when this page IS the entry document
    // (direct visit / refresh); arriving from another page of the site
    // (e.g. the Mukesh Art group landing) gets a quick veil instead.
    const [mode] = useState<LoaderMode>(() => {
        if (playedThisPageLoad) return "skip";
        if (typeof window !== "undefined") {
            try {
                const nav = performance.getEntriesByType("navigation")[0] as
                    | PerformanceNavigationTiming
                    | undefined;
                const strip = (p: string) => p.replace(/\/+$/, "");
                if (
                    nav?.name &&
                    strip(new URL(nav.name).pathname) !==
                        strip(window.location.pathname)
                ) {
                    return "mini";
                }
            } catch {
                /* entry URL unreadable — keep the full curtain */
            }
        }
        return "full";
    });
    const loadedRef = useRef(false);

    useEffect(() => {
        if (mode === "skip") {
            document.body.classList.add("site-ready");
            return;
        }

        playedThisPageLoad = true;

        if (mode === "mini") {
            // let the veil start lifting, then release the page entrances
            const ready = window.setTimeout(() => {
                document.body.classList.add("site-ready");
            }, 180);
            const done = window.setTimeout(() => setHide(true), 800);
            return () => {
                window.clearTimeout(ready);
                window.clearTimeout(done);
            };
        }

        const start = Date.now();
        const MIN = 1400; // keep the boarding moment for at least ~1.4s

        // The curtain is a brand moment, not a progress gate: this effect
        // running means the shell + hero poster already paint behind the
        // veil, so don't hold the exit for window.load — the hero films
        // push that past 10s on mobile networks and pin LCP to the loader.
        loadedRef.current = true;

        let finished = false;

        // Counter taxis to ~90% on its own, then sprints to 100 once the
        // page is actually loaded AND the minimum brand moment has passed.
        const tick = window.setInterval(() => {
            const canFinish =
                loadedRef.current && Date.now() - start >= MIN;

            setProgress((current) => {
                const target = canFinish ? 100 : 90;
                const step =
                    (target - current) * (canFinish ? 0.18 : 0.05) +
                    Math.random() * 0.6;
                const next = Math.min(target, current + step);

                if (next >= 99.4 && !finished) {
                    finished = true;
                    window.clearInterval(tick);

                    // wheels up, then lift the curtain
                    setTakeoff(true);
                    window.setTimeout(() => {
                        setHide(true);
                        // tell the page (hero entrance, etc.) the curtain is lifting
                        document.body.classList.add("site-ready");
                    }, 620);

                    return 100;
                }

                return next;
            });
        }, 50);

        return () => {
            window.clearInterval(tick);
        };
    }, []);

    const shown = Math.floor(progress);

    if (mode === "skip") return null;

    if (mode === "mini") {
        if (hide) return null;
        return <div className="loader-mini" aria-hidden="true" />;
    }

    return (
        <div
            className={`airport-loader ${takeoff ? "takeoff" : ""} ${hide ? "hide" : ""}`}
            aria-hidden={hide}
        >
            {/* accent layer sweeps up just behind the main curtain */}
            <span className="loader-veil" aria-hidden="true" />

            <div className="loader-panel">
                <div className="loader-inner">
                    <div className="loader-logo">
                        <Image
                            src={mukeshLogoLight}
                            alt="Mukesh Airport Media"
                            width={226}
                            height={183}
                            quality={100}
                            priority
                        />
                    </div>

                    <div className="loader-title">
                        <span className="loader-kicker">Airport Advertising Media</span>
                        <h1>
                            Rajkot Airport <em>×</em> Mukesh Art
                        </h1>
                    </div>

                    <div
                        className="loader-runway"
                        role="progressbar"
                        aria-label="Loading"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={shown}
                    >
                        <span className="loader-runway-line" />
                        <span
                            className="loader-runway-fill"
                            style={{ width: `${progress}%` }}
                        />
                        <span
                            className="loader-plane"
                            style={{ left: `${progress}%` }}
                        >
                            <PlaneIcon />
                        </span>
                    </div>
                </div>

                <span className="loader-corner loader-corner-tl">
                    RAJ · Rajkot International
                </span>

                <span className="loader-corner loader-corner-tr">
                    Now Boarding
                </span>

                <span className="loader-corner loader-corner-bl">
                    Authorised Advertising Partner · AAI
                </span>

                <span className="loader-count" aria-hidden="true">
                    {String(shown).padStart(3, "0")}
                    <i>%</i>
                </span>
            </div>
        </div>
    );
}

function PlaneIcon() {
    return (
        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
                d="M8 22 L45 18 L78 5 C88 1 98 3 106 9 L111 13 L80 23 L106 31 L99 36 L64 28 L35 33 L24 39 L18 37 L29 27 L8 26 Z"
                fill="currentColor"
            />
        </svg>
    );
}
