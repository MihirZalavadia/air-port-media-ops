// "use client";

// import type { CSSProperties } from "react";
// import Image from "next/image";
// import "./Home.css";
// import oppo from '@/public/images/clients/oppo.jpg'
// import vivo from '@/public/images/clients/vivo.png'
// import apple from '@/public/images/clients/apple.jpg'
// import poojara from '@/public/images/clients/poojara.svg'
// import google from '@/public/images/clients/google.png'
// import jade from '@/public/images/clients/jadeblue.webp'
// import simpolo from '@/public/images/clients/simpolo.webp'
// import oneplus from '@/public/images/clients/oneplus.png'
// import radhika from '@/public/images/clients/radhikajwl.png'


// const items = [
//     { id: 1, img: poojara, },
//     { id: 2, img: oppo, },
//     { id: 3, img: vivo, },
//     { id: 4, img: google },
//     { id: 5, img: apple },
//     { id: 6, img: jade },
//     { id: 7, img: radhika },
//     { id: 8, img: oneplus },
//     { id: 9, img: simpolo },

// ];

// const categories = ["Events", "Campaigns", "Private Campaigns", "Corporate Campaigns", "Temporary Agency Campaigns"];
// const featureSteps = [{ num: "01", title: "Owner-operated media", desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery." }, { num: "02", title: "ASCO-led airport access", desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team." }, { num: "03", title: "Relationship-first execution", desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction." }];

// export default function ClientsPartnership() {
//     // Distribute items neatly along a top arch (e.g., from -75 degrees to +75 degrees)
//     const startAngle = -75;
//     const endAngle = 75;
//     const totalItems = items.length;
//     const angleStep = (endAngle - startAngle) / (totalItems - 1);

//     return (
//         <section className="premium-showcase-section" id="clients">
//             <div className="container">
//                 <div className="pre-container">
//                     <div className="premium-container">

//                         {/* Decorative Arch Container for Desktop */}
//                         <div className="premium-arch-wrapper">
//                             {items.map((item, index) => {
//                                 const currentAngle = startAngle + angleStep * index;
//                                 // Introduce a subtle natural variation in rotation for a realistic physical layout
//                                 const naturalTilt = currentAngle * 0.4;

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="premium-arch-card"
//                                         style={{
//                                             "--card-angle": `${currentAngle}deg`,
//                                             "--card-tilt": `${naturalTilt}deg`,
//                                         } as CSSProperties}
//                                     >
//                                         <div className="premium-card-inner">
//                                             {/* <img src={item.img} alt={`Showcase visual ${item.id}`} loading="lazy" /> */}
//                                             <Image
//                                                 src={item.img}
//                                                 alt=""
//                                                 width={600}
//                                                 height={400}
//                                             />
//                                             {/* <img src={item.img} alt={`${item.name} logo`} loading="lazy" /> */}
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>


//                     <div className="premium-content-block">
//                         <span className="premium-eyebrow">Clients & Partnerships</span>

//                         <h2 className="premium-heading">
//                             Trusted by <em>50+ brands</em> <br />
//                             across premium campaigns.
//                         </h2>

//                         <p className="premium-subtext">
//                             Mukesh Art connects premium brands with Rajkot Airport’s passenger journey
//                             through trusted media planning, airport coordination, and relationship-led execution.
//                         </p>

//                         <a href="#contact" className="premium-cta-btn">
//                             <span>Plan Your Campaign</span>
//                             <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
//                                 <path
//                                     d="M3.5 8h8M8.5 4.5L12 8l-3.5 3.5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                     </div>


//                     <div className="features-cards-grid">
//                         <div className="decor-connecting-curve" aria-hidden="true">
//                             <svg viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
//                                 <path
//                                     d="M70 92 C190 150 270 10 420 54 C560 95 650 135 790 78 C955 12 1045 38 1130 70"
//                                     stroke="#e32019"
//                                     strokeWidth="3.2"
//                                     strokeLinecap="round"
//                                     fill="none"
//                                 />

//                                 <circle cx="190" cy="95" r="15" fill="#ffffff" />
//                                 <circle cx="190" cy="95" r="6" fill="#cfd7df" />

//                                 <circle cx="610" cy="105" r="15" fill="#ffffff" />
//                                 <circle cx="610" cy="105" r="8" fill="#cfd7df" />

//                                 <circle cx="1015" cy="40" r="15" fill="#ffffff" />
//                                 <circle cx="1015" cy="40" r="6" fill="#cfd7df" />
//                             </svg>
//                         </div>

//                         {featureSteps.map((step) => (
//                             <div key={step.num} className="premium-feature-card">
//                                 <div className="card-watermark-num">
//                                     {parseInt(step.num, 10)}
//                                 </div>

//                                 <div className="card-inner-payload">
//                                     <span className="card-step-indicator">{step.num}</span>
//                                     <h3 className="card-main-title">{step.title}</h3>
//                                     <p className="card-description">{step.desc}</p>
//                                 </div>

//                                 <div className="card-flow-node">
//                                     <span className="node-dot" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section >
//     );
// }







// "use client";

// import type { CSSProperties } from "react";
// import Image from "next/image";
// import "./Home.css";

// import oppo from "@/public/images/clients/oppo.jpg";
// import vivo from "@/public/images/clients/vivo.png";
// import apple from "@/public/images/clients/apple.jpg";
// import poojara from "@/public/images/clients/poojara.svg";
// import google from "@/public/images/clients/google.png";
// import jade from "@/public/images/clients/jadeblue.webp";
// import simpolo from "@/public/images/clients/simpolo.webp";
// import oneplus from "@/public/images/clients/oneplus.png";
// import radhika from "@/public/images/clients/radhikajwl.png";

// const items = [
//     { id: 1, img: poojara, name: "Poojara Telecom" },
//     { id: 2, img: oppo, name: "OPPO" },
//     { id: 3, img: vivo, name: "Vivo" },
//     { id: 4, img: google, name: "Google" },
//     { id: 5, img: apple, name: "Apple" },
//     { id: 6, img: jade, name: "Jade Blue" },
//     { id: 7, img: radhika, name: "Radhika Jewellers" },
//     { id: 8, img: oneplus, name: "OnePlus" },
//     { id: 9, img: simpolo, name: "Simpolo" },
// ];

// const categories = [
//     "Events",
//     "Campaigns",
//     "Private Campaigns",
//     "Corporate Campaigns",
//     "Temporary Agency Campaigns",
// ];

// const featureSteps = [
//     {
//         num: "01",
//         title: "Owner-operated media",
//         desc: "The same team that plans the campaign also understands sites, access, approvals, and delivery.",
//     },
//     {
//         num: "02",
//         title: "Airport access support",
//         desc: "Site visits, checks, access windows, and coordination are handled with a ready ground team.",
//     },
//     {
//         num: "03",
//         title: "Relationship-first execution",
//         desc: "Brands get clear follow-through, hospitality, and campaign support beyond a one-time media booking.",
//     },
// ];

// export default function ClientsPartnership() {
//     // Distribute items neatly along a top arch
//     const startAngle = -75;
//     const endAngle = 75;
//     const totalItems = items.length;
//     const angleStep = (endAngle - startAngle) / (totalItems - 1);

//     return (
//         <section
//             className="premium-showcase-section"
//             id="clients"
//             aria-labelledby="clients-title"
//         >
//             <div className="container">
//                 <div className="pre-container">
//                     <div className="premium-container">
//                         {/* Decorative Arch Container for Desktop */}
//                         <div
//                             className="premium-arch-wrapper"
//                             aria-label="Selected brand partners and campaign clients"
//                         >
//                             {items.map((item, index) => {
//                                 const currentAngle = startAngle + angleStep * index;
//                                 const naturalTilt = currentAngle * 0.4;

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="premium-arch-card"
//                                         style={
//                                             {
//                                                 "--card-angle": `${currentAngle}deg`,
//                                                 "--card-tilt": `${naturalTilt}deg`,
//                                             } as CSSProperties
//                                         }
//                                     >
//                                         <div className="premium-card-inner">
//                                             <Image
//                                                 src={item.img}
//                                                 alt={`${item.name} brand logo`}
//                                                 width={600}
//                                                 height={400}
//                                                 loading="lazy"
//                                             />
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     <div className="premium-content-block">
//                         <span className="premium-eyebrow">Clients & Partnerships</span>

//                         <h2 className="premium-heading" id="clients-title">
//                             Trusted by <em>50+ brands</em> <br />
//                             across premium campaigns.
//                         </h2>

//                         <p className="premium-subtext">
//                             Mukesh Art works with brands across Rajkot Airport’s passenger
//                             journey through planned media placement, airport coordination,
//                             and reliable campaign execution.
//                         </p>

//                         <a
//                             href="#contact"
//                             className="premium-cta-btn"
//                             aria-label="Plan your Rajkot Airport media campaign"
//                         >
//                             <span>Plan Your Campaign</span>
//                             <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
//                                 <path
//                                     d="M3.5 8h8M8.5 4.5L12 8l-3.5 3.5"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </a>
//                     </div>

//                     <div
//                         className="features-cards-grid"
//                         aria-label="Campaign execution strengths"
//                     >
//                         <div className="decor-connecting-curve" aria-hidden="true">
//                             <svg viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
//                                 <path
//                                     d="M70 92 C190 150 270 10 420 54 C560 95 650 135 790 78 C955 12 1045 38 1130 70"
//                                     stroke="#e32019"
//                                     strokeWidth="3.2"
//                                     strokeLinecap="round"
//                                     fill="none"
//                                 />

//                                 <circle cx="190" cy="95" r="15" fill="#ffffff" />
//                                 <circle cx="190" cy="95" r="6" fill="#cfd7df" />

//                                 <circle cx="610" cy="105" r="15" fill="#ffffff" />
//                                 <circle cx="610" cy="105" r="8" fill="#cfd7df" />

//                                 <circle cx="1015" cy="40" r="15" fill="#ffffff" />
//                                 <circle cx="1015" cy="40" r="6" fill="#cfd7df" />
//                             </svg>
//                         </div>

//                         {featureSteps.map((step) => (
//                             <div
//                                 key={step.num}
//                                 className="premium-feature-card"
//                                 aria-label={`${step.title}: ${step.desc}`}
//                             >
//                                 <div className="card-watermark-num" aria-hidden="true">
//                                     {parseInt(step.num, 10)}
//                                 </div>

//                                 <div className="card-inner-payload">
//                                     <span className="card-step-indicator">{step.num}</span>
//                                     <h3 className="card-main-title">{step.title}</h3>
//                                     <p className="card-description">{step.desc}</p>
//                                 </div>

//                                 <div className="card-flow-node" aria-hidden="true">
//                                     <span className="node-dot" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }










"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { allPartners } from "@/src/lib/clientLogos";
import "./Home.css";

const ARCH_SLOTS = 10;
const ROTATE_MS = 3200;
const TOTAL = allPartners.length;

const mod = (a: number, n: number) => ((a % n) + n) % n;

const featureSteps = [
    {
        num: "01",
        title: "Owner-operated media",
        desc: "The same team that plans the campaign also understands sites, access, approvals, and delivery.",
    },
    {
        num: "02",
        title: "Airport access support",
        desc: "Site visits, checks, access windows, and coordination are handled with a ready ground team.",
    },
    {
        num: "03",
        title: "Relationship-first execution",
        desc: "Brands get clear follow-through, hospitality, and campaign support beyond a one-time media booking.",
    },
];

export default function ClientsPartnership() {
    // ±58° pushed the outermost cards past the viewport edge on scaled
    // laptop screens — ±48° keeps the whole arch inside every width the
    // arch layout serves (a grid takes over below 850px)
    const startAngle = -48;
    const endAngle = 48;
    const angleStep = (endAngle - startAngle) / (ARCH_SLOTS - 1);

    // the arch cycles through the full roster: every tick each card
    // cross-fades to the brand 9 places ahead, staggered left-to-right
    const [tick, setTick] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const visibleRef = useRef(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) return;

        const section = sectionRef.current;
        let observer: IntersectionObserver | undefined;
        if (section && "IntersectionObserver" in window) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    visibleRef.current = entry.isIntersecting;
                },
                { threshold: 0.15 }
            );
            observer.observe(section);
        } else {
            visibleRef.current = true;
        }

        const timer = window.setInterval(() => {
            // no logo churn (or image downloads) while the arch is off-screen
            if (visibleRef.current) setTick((t) => t + 1);
        }, ROTATE_MS);

        return () => {
            window.clearInterval(timer);
            observer?.disconnect();
        };
    }, []);

    return (
        <section
            className="premium-showcase-section"
            id="clients"
            aria-labelledby="clients-title"
            ref={sectionRef}
        >
            <div className="container">
                <div className="pre-container">
                    <div className="premium-container" data-motion-group>
                        {/* Decorative Arch Container for Desktop */}
                        <div
                            className="premium-arch-wrapper"
                            aria-label="Rotating showcase of partner brand logos"
                        >
                            {Array.from({ length: ARCH_SLOTS }, (_, i) => {
                                const currentAngle = startAngle + angleStep * i;
                                const naturalTilt = currentAngle * 0.4;
                                const current = allPartners[mod(tick * ARCH_SLOTS + i, TOTAL)];
                                const previous = allPartners[mod((tick - 1) * ARCH_SLOTS + i, TOTAL)];

                                return (
                                    <div
                                        key={i}
                                        className="premium-arch-card"
                                        style={
                                            {
                                                "--card-angle": `${currentAngle}deg`,
                                                "--card-tilt": `${naturalTilt}deg`,
                                                "--swap-delay": `${i * 90}ms`,
                                                // tight fan: center cards sit above their neighbours
                                                "--card-z": ARCH_SLOTS - Math.abs(i - (ARCH_SLOTS - 1) / 2),
                                            } as CSSProperties
                                        }
                                    >
                                        <div className="premium-card-inner" data-motion-item>
                                            <a
                                                className="arch-logo-link"
                                                href={current.url}
                                                target={current.url ? "_blank" : undefined}
                                                rel={current.url ? "noopener noreferrer" : undefined}
                                                tabIndex={current.url ? undefined : -1}
                                                aria-label={
                                                    current.url
                                                        ? `Visit the ${current.name} website`
                                                        : undefined
                                                }
                                            >
                                                {tick > 0 && (
                                                    <span
                                                        className="arch-logo-layer"
                                                        aria-hidden="true"
                                                        key={`prev-${previous.name}`}
                                                    >
                                                        <Image
                                                            src={previous.img}
                                                            alt=""
                                                            width={220}
                                                            height={280}
                                                            loading="lazy"
                                                        />
                                                    </span>
                                                )}
                                                <span
                                                    className="arch-logo-layer is-active"
                                                    key={`cur-${current.name}`}
                                                >
                                                    <Image
                                                        src={current.img}
                                                        alt={`${current.name} brand logo`}
                                                        width={220}
                                                        height={280}
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="premium-content-block">
                        <span className="premium-eyebrow" data-motion="clip">
                            Clients &amp; Partnerships
                        </span>

                        <h2
                            className="premium-heading"
                            id="clients-title"
                            data-motion="up"
                            data-motion-delay="0.08"
                        >
                            Trusted by <em>50+ brands</em> <br />
                            across premium campaigns.
                        </h2>

                        <p
                            className="premium-subtext"
                            data-motion="up"
                            data-motion-delay="0.16"
                        >
                            Mukesh Art works with brands across Rajkot Airport&rsquo;s passenger
                            journey through planned media placement, airport coordination,
                            and reliable campaign execution.
                        </p>

                        <Link
                            href="/partners/"
                            className="premium-cta-btn"
                            aria-label="Meet all our partner brands"
                            data-motion="zoom"
                            data-motion-delay="0.22"
                        >
                            <span>Meet All 50+ Brands</span>
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

                    <div
                        className="features-cards-grid"
                        aria-label="Campaign execution strengths"
                        data-motion-group
                    >
                        <div className="decor-connecting-curve" aria-hidden="true">
                            <svg viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M70 92 C190 150 270 10 420 54 C560 95 650 135 790 78 C955 12 1045 38 1130 70"
                                    stroke="#e32019"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                <circle cx="190" cy="95" r="15" fill="#ffffff" />
                                <circle cx="190" cy="95" r="6" fill="#cfd7df" />

                                <circle cx="610" cy="105" r="15" fill="#ffffff" />
                                <circle cx="610" cy="105" r="8" fill="#cfd7df" />

                                <circle cx="1015" cy="40" r="15" fill="#ffffff" />
                                <circle cx="1015" cy="40" r="6" fill="#cfd7df" />
                            </svg>
                        </div>

                        {featureSteps.map((step) => (
                            <div
                                key={step.num}
                                className="premium-feature-card"
                                aria-label={`${step.title}: ${step.desc}`}
                                data-motion-item
                            >
                                <div className="card-watermark-num" aria-hidden="true">
                                    {parseInt(step.num, 10)}
                                </div>

                                <div className="card-inner-payload">
                                    <span className="card-step-indicator">{step.num}</span>
                                    <h3 className="card-main-title">{step.title}</h3>
                                    <p className="card-description">{step.desc}</p>
                                </div>

                                <div className="card-flow-node" aria-hidden="true">
                                    <span className="node-dot" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
