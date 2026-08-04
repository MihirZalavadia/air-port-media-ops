// import "./Home.css";
// import Image from "next/image";
// import gal1 from '@/public/images/inventory/air1.png'
// import gal2 from '@/public/images/inventory/air2.png'
// import gal3 from '@/public/images/inventory/air3.png'
// import gal4 from '@/public/images/inventory/air5.png'
// import gal5 from '@/public/images/inventory/air6.png'
// import gal6 from '@/public/images/inventory/air7.png'
// import gal7 from '@/public/images/inventory/air8.png'

// const galleryItems = [
//     {
//         title: "Terminal Branding",
//         category: "Airport Media",
//         image: gal1,
//         gridClass: "type-tall", // Double height & width card on the left
//     },
//     {
//         title: "Digital Screen Network",
//         category: "DOOH",
//         image: gal2,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Passenger Waiting Zone",
//         category: "Visibility",
//         image: gal3,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Static Media Boards",
//         category: "OOH",
//         image: gal4,
//         gridClass: "type-wide", // Spans right under items 2 and 3
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal5,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal6,
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal7,
//         gridClass: "type-standard",
//     },
// ];

// export default function Gallery() {
//     return (
//         <section className="gallery-premium" id="gallery">
//             <div className="gallery-premium-head">
//                 <div className="tag-container">
//                     <div className="tag-line"></div>
//                     <span>Gallery</span>
//                 </div>
//                 <h2>
//                     Premium airport media spaces built for <em>high brand recall.</em>
//                 </h2>
//                 <p>
//                     Explore visual references of airport advertising placements, passenger
//                     movement zones, digital media surfaces, and branding opportunities
//                     across Rajkot Airport.
//                 </p>
//             </div>

//             <div className="gallery-premium-grid">
//                 {galleryItems.map((item, index) => (
//                     <article
//                         key={`${item.title}-${index}`}
//                         className={`gallery-premium-card ${item.gridClass}`}
//                     >
//                         {/* <img src={item.image} alt={item.title} loading="lazy" /> */}
//                         <Image
//                             src={item.image}
//                             alt=""
//                             width={600}
//                             height={400}
//                         />

//                         <div className="gallery-premium-overlay">
//                             <span>{item.category}</span>
//                             <h3>{item.title}</h3>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }













// import "./Home.css";
// import Image from "next/image";

// import gal1 from "@/public/images/inventory/air1.png";
// import gal2 from "@/public/images/inventory/air2.png";
// import gal3 from "@/public/images/inventory/air3.png";
// import gal4 from "@/public/images/inventory/air5.png";
// import gal5 from "@/public/images/inventory/air6.png";
// import gal6 from "@/public/images/inventory/air7.png";
// import gal7 from "@/public/images/inventory/air8.png";

// const galleryItems = [
//     {
//         title: "Terminal Branding",
//         category: "Airport Media",
//         image: gal1,
//         alt: "Terminal branding media space at Rajkot Airport",
//         gridClass: "type-tall",
//     },
//     {
//         title: "Digital Screen Network",
//         category: "DOOH",
//         image: gal2,
//         alt: "Digital screen advertising display at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Passenger Waiting Zone",
//         category: "Visibility",
//         image: gal3,
//         alt: "Passenger waiting zone branding space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Static Media Boards",
//         category: "OOH",
//         image: gal4,
//         alt: "Static media board placement at Rajkot Airport",
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal5,
//         alt: "Arrival area branding space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal6,
//         alt: "Airport passenger journey branding placement",
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal7,
//         alt: "Premium arrival area media space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
// ];

// export default function Gallery() {
//     return (
//         <section
//             className="gallery-premium"
//             id="gallery"
//             aria-labelledby="gallery-title"
//         >
//             <div className="gallery-premium-head">
//                 <div className="tag-container">
//                     <div className="tag-line" aria-hidden="true"></div>
//                     <span>Gallery</span>
//                 </div>

//                 <h2 id="gallery-title">
//                     Airport media in <br /><em>real spaces.</em>
//                 </h2>

//                 <p>
//                     A quick look at Rajkot Airport placements across terminal areas,
//                     digital screens, passenger zones, and static media surfaces.
//                 </p>
//             </div>

//             <div
//                 className="gallery-premium-grid"
//                 aria-label="Rajkot Airport media gallery"
//             >
//                 {galleryItems.map((item, index) => (
//                     <article
//                         key={`${item.title}-${index}`}
//                         className={`gallery-premium-card ${item.gridClass}`}
//                         aria-label={`${item.title} - ${item.category}`}
//                     >
//                         <Image
//                             src={item.image}
//                             alt={item.alt}
//                             width={600}
//                             height={400}
//                             loading="lazy"
//                         />

//                         <div className="gallery-premium-overlay">
//                             <span>{item.category}</span>
//                             <h3>{item.title}</h3>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }

"use client";

// Home showcase: one cinematic auto-advancing slideshow — the real dusk
// films first, then approved site photos category by category.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import "./Home.css";

import p1_1 from "@/public/images/inventory/updated/p1_1.webp";
import p2_1 from "@/public/images/inventory/updated/p2_1.webp";
import p3_1 from "@/public/images/inventory/updated/p3_1.webp";
import ws_1 from "@/public/images/inventory/updated/ws_1.webp";
import sec_1 from "@/public/images/inventory/updated/sec_1.webp";
import p2_5 from "@/public/images/inventory/updated/p2_5.webp";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Slide = {
    kind: "video" | "image";
    src?: string;
    poster?: string;
    img?: StaticImageData;
    tag: string;
    title: string;
    /** ms on screen before auto-advance */
    duration: number;
};

const SLIDES: Slide[] = [
    {
        kind: "video",
        src: `${BASE}/videos/hero_night.mp4`,
        poster: `${BASE}/videos/hero_night_poster.jpg`,
        tag: "Rajkot International Airport",
        title: "The airport at dusk",
        duration: 8000,
    },
    {
        kind: "image",
        img: p1_1,
        tag: "Digital Screen Network",
        title: "Arrival belts & SHA gates",
        duration: 4500,
    },
    {
        kind: "image",
        img: p2_1,
        tag: "Digital Screen Network",
        title: "Check-in & first touch",
        duration: 4500,
    },
    {
        kind: "image",
        img: p3_1,
        tag: "Digital Screen Network",
        title: "Vertical screens in pause zones",
        duration: 4500,
    },
    {
        kind: "image",
        img: ws_1,
        tag: "In-Terminal Backlit",
        title: "Laptop work station",
        duration: 4500,
    },
    {
        kind: "image",
        img: sec_1,
        tag: "In-Terminal Backlit",
        title: "Security clearance",
        duration: 4500,
    },
    {
        kind: "video",
        src: `${BASE}/videos/inv_outdoor.mp4`,
        poster: `${BASE}/videos/inv_outdoor_poster.jpg`,
        tag: "Landmark Outdoor",
        title: "Live campaign on the approach road",
        duration: 9000,
    },
    {
        kind: "image",
        img: p2_5,
        tag: "Hybrid Journey Plans",
        title: "The whole airport as one canvas",
        duration: 4500,
    },
];

export default function Gallery() {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const visibleRef = useRef(false);
    const pausedRef = useRef(false);
    // slide was held while off-screen/paused → owed a full dwell on resume
    const heldRef = useRef(false);

    // auto-advance with per-slide dwell; holds while off-screen or hovered
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
                { threshold: 0.2 }
            );
            observer.observe(section);
        } else {
            visibleRef.current = true;
        }

        let timer: number;
        const tick = () => {
            if (visibleRef.current && !pausedRef.current) {
                // if the slide was held (off-screen/hovered), grant it a
                // full dwell now — otherwise scrolling to the gallery
                // flips off slide 1 within a second of it appearing
                if (heldRef.current) {
                    heldRef.current = false;
                    timer = window.setTimeout(tick, SLIDES[active].duration);
                } else {
                    setActive((a) => (a + 1) % SLIDES.length);
                }
            } else {
                heldRef.current = true;
                timer = window.setTimeout(tick, 800);
            }
        };
        timer = window.setTimeout(tick, SLIDES[active].duration);

        return () => {
            window.clearTimeout(timer);
            observer?.disconnect();
        };
    }, [active]);

    const go = (i: number) =>
        setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);

    return (
        <section
            className="showcase-section"
            id="gallery"
            aria-labelledby="gallery-title"
            ref={sectionRef}
        >
            <div className="container">
                <span className="premium-eyebrow" data-motion="clip">
                    Media Gallery
                </span>

                <h2 className="premium-heading" id="gallery-title" data-motion="up">
                    The inventory, <em>in motion.</em>
                </h2>

                <div
                    className="showcase-stage"
                    data-motion="card"
                    onMouseEnter={() => (pausedRef.current = true)}
                    onMouseLeave={() => (pausedRef.current = false)}
                >
                    {SLIDES.map((slide, i) => {
                        const isActive = i === active;
                        const isNear =
                            isActive ||
                            i === (active + 1) % SLIDES.length ||
                            i === (active - 1 + SLIDES.length) % SLIDES.length;

                        return (
                            <div
                                className={`showcase-slide ${isActive ? "is-active" : ""}`}
                                key={`${slide.tag}-${slide.title}`}
                                aria-hidden={!isActive}
                            >
                                {slide.kind === "video" ? (
                                    isNear ? (
                                        <video
                                            src={slide.src}
                                            poster={slide.poster}
                                            muted
                                            loop
                                            playsInline
                                            autoPlay
                                            preload="none"
                                        />
                                    ) : (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={slide.poster} alt="" loading="lazy" />
                                    )
                                ) : slide.img ? (
                                    <Image
                                        src={slide.img}
                                        alt={`${slide.tag} — ${slide.title}`}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 1200px"
                                    />
                                ) : null}

                                <div className="showcase-caption">
                                    <span>{slide.tag}</span>
                                    <b>{slide.title}</b>
                                </div>
                            </div>
                        );
                    })}

                    <button
                        type="button"
                        className="showcase-arrow showcase-prev"
                        aria-label="Previous slide"
                        onClick={() => go(active - 1)}
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className="showcase-arrow showcase-next"
                        aria-label="Next slide"
                        onClick={() => go(active + 1)}
                    >
                        →
                    </button>

                    <div className="showcase-dots" aria-label="Slides">
                        {SLIDES.map((slide, i) => (
                            <button
                                type="button"
                                key={`${slide.tag}-${slide.title}-dot`}
                                className={i === active ? "on" : ""}
                                aria-label={`Slide ${i + 1}: ${slide.tag}`}
                                onClick={() => go(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
