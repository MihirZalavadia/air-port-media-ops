"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { INDIA_OUTLINE } from "./indiaOutline";
import "./Connectivity.css";

const AIRPORT_NAME = "Rajkot International Airport";

const HUB = { city: "Rajkot", code: "RAJ", x: 265, y: 352 };

type City = {
    city: string;
    code: string;
    mins: string;
    x: number;
    y: number;
    ldx: number;
    ldy: number;
};

// Coordinates tuned against the Survey-of-India outline (viewBox 1000×700).
// Every metro sits cleanly on land with no label collisions.
const CITIES: City[] = [
    { city: "Delhi",     code: "DEL", mins: "110 min", x: 392, y: 188, ldx: 0,  ldy: -20 },
    { city: "Ahmedabad", code: "AMD", mins: "45 min",  x: 300, y: 350, ldx: 54, ldy: 6 },
    { city: "Mumbai",    code: "BOM", mins: "75 min",  x: 305, y: 432, ldx: -6, ldy: 30 },
    { city: "Goa",       code: "GOI", mins: "95 min",  x: 322, y: 500, ldx: 2,  ldy: 28 },
    { city: "Hyderabad", code: "HYD", mins: "115 min", x: 440, y: 478, ldx: 4,  ldy: -20 },
    { city: "Bengaluru", code: "BLR", mins: "130 min", x: 392, y: 552, ldx: 0,  ldy: 30 },
];

const PLANE = "M-13 1 L-2 -2 L11 -8 L15 -5 L5 0 L15 5 L11 8 L-2 2 L-13 5 Z";

function routePath(c: City) {
    const midX = (HUB.x + c.x) / 2;
    const midY = (HUB.y + c.y) / 2;
    const dist = Math.hypot(c.x - HUB.x, c.y - HUB.y);
    const cY = midY - Math.max(38, dist * 0.16);
    return `M ${HUB.x} ${HUB.y} Q ${midX} ${cY} ${c.x} ${c.y}`;
}

export default function Connectivity() {
    const sectionRef = useRef<HTMLElement>(null);
    const [played, setPlayed] = useState(false);
    const [active, setActive] = useState<number | null>(null);
    const pinnedRef = useRef<number | null>(null);

    // Trigger the intro sequence when the map scrolls into view (or immediately
    // for reduced-motion / no-IntersectionObserver environments).
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce || typeof IntersectionObserver === "undefined") {
            setPlayed(true);
            return;
        }
        const node = sectionRef.current;
        if (!node) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting) {
                        setPlayed(true);
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(node);
        return () => io.disconnect();
    }, []);

    const enter = (i: number) => {
        if (pinnedRef.current === null) setActive(i);
    };
    const leave = () => {
        if (pinnedRef.current === null) setActive(null);
    };
    const toggle = (i: number) => {
        if (pinnedRef.current === i) {
            pinnedRef.current = null;
            setActive(null);
        } else {
            pinnedRef.current = i;
            setActive(i);
        }
    };

    const boardClass = [
        "ram-map-board",
        played ? "played" : "",
        active !== null ? "has-active" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section
            className="ram-connectivity"
            id="connectivity"
            ref={sectionRef}
            aria-labelledby="ram-connectivity-title"
        >
            <div className="ram-conn-container">
                <div className="ram-conn-top">
                    <div>
                        <span className="eyebrow" data-motion="clip">
                            Connectivity
                        </span>
                        <h2
                            className="ram-conn-display"
                            id="ram-connectivity-title"
                            data-motion="up"
                            data-motion-delay="0.08"
                        >
                            Routes that connect Rajkot with{" "}
                            <em>India&apos;s metro markets</em>
                        </h2>
                    </div>

                    <p data-motion="right" data-motion-delay="0.14">
                        {AIRPORT_NAME} links Gujarat&apos;s business corridor to high-value
                        metro audiences — a clear, premium airport-media touchpoint for
                        regional and national campaigns.
                    </p>
                </div>

                <div className={boardClass}>
                    <div className="ram-map-card" data-motion="zoom" data-motion-delay="0.12">
                        <svg
                            className="ram-route-svg"
                            viewBox="0 0 1000 700"
                            role="img"
                            aria-labelledby="ram-conn-map-title ram-conn-map-desc"
                        >
                            <title id="ram-conn-map-title">Rajkot Airport connectivity map</title>
                            <desc id="ram-conn-map-desc">
                                Route map showing Rajkot Airport connections with Delhi,
                                Ahmedabad, Mumbai, Goa, Hyderabad and Bengaluru.
                            </desc>

                            <defs>
                                <linearGradient
                                    id="ramLandGrad"
                                    x1="360"
                                    y1="40"
                                    x2="640"
                                    y2="690"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#1b4a63" />
                                    <stop offset="0.55" stopColor="#143b53" />
                                    <stop offset="1" stopColor="#1d5168" />
                                </linearGradient>
                            </defs>

                            {/* 1 — card frame draws first */}
                            <rect
                                className="ram-card-frame"
                                x="14"
                                y="14"
                                width="972"
                                height="672"
                                rx="18"
                                pathLength={1}
                            />

                            {/* 2 — India: filled land + outline stroke draw */}
                            <path className="ram-india-fill" d={INDIA_OUTLINE} aria-hidden="true" />
                            <path
                                className="ram-india-outline"
                                d={INDIA_OUTLINE}
                                pathLength={1}
                                aria-hidden="true"
                            />

                            {/* 5-6 — routes draw outward + aircraft travel the curves */}
                            {CITIES.map((c, i) => {
                                const d = routePath(c);
                                const delay = { "--rdelay": `${1.7 + i * 0.12}s` } as CSSProperties;
                                return (
                                    <g
                                        key={`route-${c.code}`}
                                        className={`ram-route-group ${active === i ? "active" : ""}`}
                                        data-i={i}
                                    >
                                        <path
                                            className="ram-route-base"
                                            id={`ram-route-${i}`}
                                            d={d}
                                            pathLength={1}
                                            style={delay}
                                        />
                                        <path className="ram-route-flow" d={d} style={delay} />
                                        <g className="ram-route-plane" style={delay} aria-hidden="true">
                                            <path className="ram-plane-body" d={PLANE} />
                                            <animateMotion
                                                dur={`${3 + i * 0.25}s`}
                                                repeatCount="indefinite"
                                                rotate="auto"
                                                keyPoints="0;1"
                                                keyTimes="0;1"
                                                calcMode="spline"
                                                keySplines="0.45 0 0.25 1"
                                            >
                                                <mpath href={`#ram-route-${i}`} />
                                            </animateMotion>
                                        </g>
                                    </g>
                                );
                            })}

                            {/* 3 — Rajkot hub with pulse */}
                            <circle className="ram-hub-glow" cx={HUB.x} cy={HUB.y} r={60} />
                            <circle className="ram-hub-pulse" cx={HUB.x} cy={HUB.y} r={8} />
                            <circle className="ram-hub-dot" cx={HUB.x} cy={HUB.y} r={8} />
                            <text className="ram-hub-label" x={HUB.x - 16} y={HUB.y - 16} textAnchor="end">
                                RAJKOT
                            </text>
                            <text className="ram-hub-code" x={HUB.x - 16} y={HUB.y - 3} textAnchor="end">
                                RAJ HUB
                            </text>

                            {/* 4 — metro city points appear one by one (7 — hover/tap highlights) */}
                            {CITIES.map((c, i) => (
                                <g
                                    key={`node-${c.code}`}
                                    className={`ram-city-node ${active === i ? "active" : ""}`}
                                    data-i={i}
                                    style={{ "--cdelay": `${1.0 + i * 0.13}s` } as CSSProperties}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${c.city} route, ${c.mins} from Rajkot`}
                                    onMouseEnter={() => enter(i)}
                                    onMouseLeave={leave}
                                    onFocus={() => setActive(i)}
                                    onBlur={leave}
                                    onClick={() => toggle(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            toggle(i);
                                        }
                                    }}
                                >
                                    <circle className="ram-city-ring" cx={c.x} cy={c.y} r={12} />
                                    <circle className="ram-city-dot" cx={c.x} cy={c.y} r={4.6} />
                                    <text
                                        className="ram-city-name"
                                        x={c.x + c.ldx}
                                        y={c.y + c.ldy}
                                        textAnchor="middle"
                                    >
                                        {c.city}
                                    </text>
                                    <text
                                        className="ram-city-code"
                                        x={c.x + c.ldx}
                                        y={c.y + c.ldy + 15}
                                        textAnchor="middle"
                                    >
                                        {c.code} · {c.mins}
                                    </text>
                                </g>
                            ))}
                        </svg>

                        <div className="ram-map-stats" aria-label="Rajkot Airport route highlights">
                            <div>
                                <span>Connected metros</span>
                                <strong>{CITIES.length}</strong>
                            </div>
                            <div>
                                <span>Airport hub</span>
                                <strong>RAJ</strong>
                            </div>
                        </div>
                    </div>

                    {/* 8 — route list synced with the selected map route */}
                    <aside className="ram-route-panel" aria-label="Rajkot Airport metro access list">
                        <span className="ram-panel-label">Metro access</span>
                        <h3>Strategic reach from Gujarat&apos;s business corridor.</h3>

                        <div className="ram-route-list">
                            {CITIES.map((c, i) => (
                                <div
                                    key={`item-${c.code}`}
                                    className={`ram-route-item ${active === i ? "active" : ""}`}
                                    data-i={i}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={active === i}
                                    onMouseEnter={() => enter(i)}
                                    onMouseLeave={leave}
                                    onFocus={() => setActive(i)}
                                    onBlur={leave}
                                    onClick={() => toggle(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault();
                                            toggle(i);
                                        }
                                    }}
                                >
                                    <span className="ram-ri-name">
                                        <i className="ram-ri-dot" />
                                        {c.city}
                                    </span>
                                    <b>
                                        {c.code} · {c.mins}
                                    </b>
                                </div>
                            ))}
                        </div>

                        <p className="ram-panel-foot">
                            Owner-operated media, one short hop from every metro on this board —
                            a captive, high-intent airport audience with relationship-led
                            execution on the ground.
                        </p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
