"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mukeshLogoLight from "@/public/images/home/logo_mark_light.png";

import "./PageLoader.css";

// the boarding curtain plays once per session — client-side hops back to
// the homepage shouldn't re-run the whole show
const PLAYED_KEY = "ram-loader-played";

function alreadyPlayed() {
    try {
        return sessionStorage.getItem(PLAYED_KEY) === "1";
    } catch {
        return false;
    }
}

export default function PageLoader() {
    const [progress, setProgress] = useState(0);
    const [takeoff, setTakeoff] = useState(false);
    const [hide, setHide] = useState(false);
    const [skipped, setSkipped] = useState(false);
    const loadedRef = useRef(false);

    useEffect(() => {
        if (alreadyPlayed()) {
            setSkipped(true);
            setHide(true);
            document.body.classList.add("site-ready");
            return;
        }

        const start = Date.now();
        const MIN = 1400; // keep the boarding moment for at least ~1.4s
        const MAX = 5000; // never trap the user if something is slow

        const markLoaded = () => {
            loadedRef.current = true;
        };

        if (document.readyState === "complete") {
            markLoaded();
        } else {
            window.addEventListener("load", markLoaded, { once: true });
        }
        const cap = window.setTimeout(markLoaded, MAX);

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
                        try {
                            sessionStorage.setItem(PLAYED_KEY, "1");
                        } catch {}
                    }, 620);

                    return 100;
                }

                return next;
            });
        }, 50);

        return () => {
            window.removeEventListener("load", markLoaded);
            window.clearTimeout(cap);
            window.clearInterval(tick);
        };
    }, []);

    const shown = Math.floor(progress);

    if (skipped) return null;

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
