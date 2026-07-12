"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import mukeshLogo from "@/public/images/home/cover_logo.png";

import "./PageLoader.css";

/**
 * Cinematic airport-media opening moment.
 * - thin runway / frame lines draw in
 * - brand lockup rises cleanly
 * - single aircraft fly-by (~1.15s core pass)
 * - premium curtain reveal splits away to show the page
 * Respects prefers-reduced-motion (skips straight to a quick fade).
 */
export default function PageLoader() {
    const [hide, setHide] = useState(false); // triggers curtain reveal
    const [gone, setGone] = useState(false); // removes from flow

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const timers: ReturnType<typeof setTimeout>[] = [];

        if (reduce) {
            timers.push(setTimeout(() => setHide(true), 220));
            timers.push(setTimeout(() => setGone(true), 520));
        } else {
            // core fly-by ~1.15s + brand hold, then curtain reveal
            timers.push(setTimeout(() => setHide(true), 2050));
            timers.push(setTimeout(() => setGone(true), 2950));
        }

        return () => timers.forEach(clearTimeout);
    }, []);

    if (gone) return null;

    return (
        <div className={`airport-loader ${hide ? "hide" : ""}`} aria-hidden="true">
            <div className="loader-grid" />
            <div className="loader-glow loader-glow-red" />
            <div className="loader-glow loader-glow-blue" />

            <svg className="loader-frame" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line className="lf" x1="0" y1="0" x2="100" y2="0" pathLength={1} />
                <line className="lf" x1="100" y1="0" x2="100" y2="100" pathLength={1} />
                <line className="lf" x1="100" y1="100" x2="0" y2="100" pathLength={1} />
                <line className="lf" x1="0" y1="100" x2="0" y2="0" pathLength={1} />
                <line
                    className="loader-runway-dash"
                    x1="0"
                    y1="50"
                    x2="100"
                    y2="50"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            <div className="loader-plane">
                <svg viewBox="0 0 120 40" aria-hidden="true">
                    <path
                        d="M8 22 L45 18 L78 5 C88 1 98 3 106 9 L111 13 L80 23 L106 31 L99 36 L64 28 L35 33 L24 39 L18 37 L29 27 L8 26 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="loader-center">
                <Image
                    className="loader-logo"
                    src={mukeshLogo}
                    alt="Mukesh Arts"
                    width={168}
                    height={108}
                    priority
                />
                <span className="loader-kicker">Airport Advertising Media</span>
                <h1 className="loader-title">
                    Rajkot Airport
                    <span className="x">×</span>
                    Mukesh Arts
                </h1>
            </div>

            <div className="loader-curtain">
                <i className="c-left" />
                <i className="c-right" />
            </div>
        </div>
    );
}
