// "use client";

// import { useState, useRef, useTransition, useEffect } from "react";
// import "./Home.css";

// type PillarKey = "legacy" | "audience" | "network" | "recall";

// interface PillarData {
//     index: string;
//     key: PillarKey;
//     title: string;
//     meta: string;
//     body: string;
//     metric: string;
//     coords: string;
// }

// interface PanelData {
//     id: string;
//     title: string;
//     label: string;
//     body: string;
// }

// const strategicPillars: PillarData[] = [
//     {
//         index: "1997",
//         key: "legacy",
//         title: "The Mukesh Arts Foundation",
//         meta: "Rooted Experience // Regional Legacy",
//         body: "Built on decades of outdoor advertising dominance. Rajkot Airport Media inherits a strong eye for high-scale brand presence across Gujarat’s economic and travel corridors.",
//         metric: "29+ Years Authority",
//         coords: "420 / 01.A",
//     },
//     {
//         index: "01",
//         key: "audience",
//         title: "Premium Passenger Curation",
//         meta: "Captive High-Value Demographics",
//         body: "Place your brand in front of business travellers, affluent families, decision-makers, NRIs, and premium regional audiences inside a high-attention airport environment.",
//         metric: "Premium Audience",
//         coords: "720 / 02.B",
//     },
//     {
//         index: "02",
//         key: "network",
//         title: "Architectural Space Network",
//         meta: "Synchronized Terminal Visibility",
//         body: "A premium configuration of digital canvases, static media, and tactical placements integrated across passenger movement zones for maximum visibility.",
//         metric: "Terminal Coverage",
//         coords: "990 / 03.C",
//     },
//     {
//         index: "03",
//         key: "recall",
//         title: "Cognitive Resonance Environment",
//         meta: "High-Dwell Brand Recall",
//         body: "Extended dwell time and a clean premium environment help your brand stay remembered beyond crowded outdoor spaces and standard city advertising.",
//         metric: "Deep Brand Recall",
//         coords: "110 / 04.D",
//     },
// ];

// const dynamicPanels: PanelData[] = [
//     {
//         id: "vision",
//         title: "Vision",
//         label: "Future Direction",
//         body: "To make Rajkot Airport Media a premium advertising gateway where brands connect with travellers, business audiences, and decision-makers through impactful airport visibility.",
//     },
//     {
//         id: "mission",
//         title: "Mission",
//         label: "Execution Focus",
//         body: "To deliver strategic, elegant, and result-driven airport advertising through creative placements, premium presentation, strong visibility, and trusted execution.",
//     },
//     {
//         id: "promise",
//         title: "Promise",
//         label: "Brand Commitment",
//         body: "We focus on clarity, quality, premium placement, and measurable brand presence so every campaign earns attention inside a high-impact airport environment.",
//     },
// ];

// export default function About() {
//     const [activeSegment, setActiveSegment] = useState<number>(0);
//     const [activePanel, setActivePanel] = useState<string>("vision");
//     const [isPending, startTransition] = useTransition();
//     const containerRef = useRef<HTMLDivElement>(null);
//     const tabsRef = useRef<HTMLDivElement>(null);

//     const active = strategicPillars[activeSegment];
//     const currentPanel = dynamicPanels.find((item) => item.id === activePanel);

//     // Dynamic horizontal indicator navigation computation engine
//     useEffect(() => {
//         if (!tabsRef.current) return;
//         const activeBtn = tabsRef.current.querySelector(".is-active") as HTMLButtonElement;
//         if (activeBtn) {
//             tabsRef.current.style.setProperty("--slide-width", `${activeBtn.offsetWidth}px`);
//             tabsRef.current.style.setProperty("--slide-left", `${activeBtn.offsetLeft}px`);
//         }
//     }, [activePanel]);

//     const handleSegmentChange = (index: number) => {
//         startTransition(() => {
//             setActiveSegment(index);
//         });
//     };

//     return (
//         <section className="cinematic-about" id="about">
//             <div className="ambient-radial-glow" />
//             <div className="ambient-blue-glow" />

//             <div className="cinematic-wrapper">
//                 <header className="about-header">
//                     <span className="about-eyebrow">
//                         About Rajkot Airport Media
//                     </span>

//                     <h2 className="about-title">
//                         Connecting Brands With
//                         <span> Premium Airport Audiences</span>
//                     </h2>

//                     <p className="about-description">
//                         Since 1997, Mukesh Arts has delivered high-impact advertising
//                         experiences across Gujarat. Through Rajkot Airport Media, we help
//                         brands engage affluent travellers, business leaders, NRIs, and
//                         decision-makers through premium airport advertising environments.
//                     </p>
//                 </header>

//                 <div
//                     className={`cinematic-strip-matrix ${isPending ? "is-transitioning" : ""}`}
//                     ref={containerRef}
//                 >
//                     {strategicPillars.map((item, index) => {
//                         const isCurrent = activeSegment === index;

//                         return (
//                             <div
//                                 key={item.key}
//                                 className={`matrix-strip-segment ${isCurrent ? "is-expanded" : ""}`}
//                                 onClick={() => handleSegmentChange(index)}
//                                 onMouseEnter={() => handleSegmentChange(index)}
//                             >
//                                 <div className="strip-header-zone">
//                                     <span className="strip-index">{item.index}</span>
//                                     <span className="strip-title-short">{item.key}</span>
//                                 </div>

//                                 <div className="strip-expanded-content">
//                                     <div className="content-inner-fade">
//                                         <div className="segment-copy">
//                                             <span className="content-meta-tag">{item.meta}</span>
//                                             <h3 className="content-main-title">{item.title}</h3>
//                                             <p className="content-body-desc">{item.body}</p>

//                                             <div className="content-footer-metrics">
//                                                 <div className="metric-badge">
//                                                     <span className="badge-lbl">INDEX VALUE</span>
//                                                     <strong className="badge-val">{item.metric}</strong>
//                                                 </div>

//                                                 <span className="system-coordinates">
//                                                     {item.coords}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="segment-vector-card">
//                                             {renderPillarVector(item.key)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="strip-axis-line" />
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="cinematic-intel-dock">

//                     <div className="intel-content-panel">
//                         <div className="intel-tabs" ref={tabsRef}>
//                             <div className="ram-tab-slider-indicator" />
//                             {dynamicPanels.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     type="button"
//                                     onClick={() => setActivePanel(item.id)}
//                                     className={activePanel === item.id ? "is-active" : ""}
//                                 >
//                                     {item.title}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="intel-copy">
//                             <span>{currentPanel?.label}</span>
//                             <h3>{currentPanel?.title}</h3>
//                             <p>{currentPanel?.body}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function renderPillarVector(type: PillarKey) {
//     if (type === "legacy") return <LegacyVector />;
//     if (type === "audience") return <AudienceVector />;
//     if (type === "network") return <NetworkVector />;
//     return <RecallVector />;
// }

// function LegacyVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector legacy-animated" aria-hidden="true">
//             {/* Minimalist Multi-Axis Dimensional Blades */}
//             <g className="blade-system">
//                 <line x1="80" y1="20" x2="80" y2="140" className="core-axis" />
//                 <line x1="20" y1="80" x2="140" y2="80" className="core-axis" />

//                 {/* Rotating structural accent segments */}
//                 <path d="M 50,50 L 110,110" className="diagonal-blade blade-alpha" />
//                 <path d="M 110,50 L 50,110" className="diagonal-blade blade-beta" />
//             </g>
//             {/* Clean focal coordinate ring */}
//             <circle cx="80" cy="80" r="12" className="focal-ring" />
//             <circle cx="80" cy="80" r="2" className="focal-center" />
//         </svg>
//     );
// }

// function AudienceVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector audience-animated" aria-hidden="true">
//             {/* Abstract Focal Concentric Waveguides */}
//             <circle cx="80" cy="80" r="68" className="wave-ring outermost" />
//             <circle cx="80" cy="80" r="48" className="wave-ring middle" />
//             <circle cx="80" cy="80" r="28" className="wave-ring inner" />

//             {/* Kinetic Target Intersection Nodes */}
//             <g className="target-cluster">
//                 <line x1="80" y1="80" x2="128" y2="128" className="ray-pointer" />
//                 <circle cx="128" cy="128" r="5" className="cluster-node node-a" />
//                 <circle cx="32" cy="80" r="4" className="cluster-node node-b" />
//                 <circle cx="80" cy="32" r="3.5" className="cluster-node node-c" />
//             </g>
//         </svg>
//     );
// }

// function NetworkVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector network-animated" aria-hidden="true">
//             {/* Isometric Matrix Cage Structural Projection */}
//             <g className="iso-cage">
//                 {/* Top Plane projection */}
//                 <polygon points="80,20 130,45 80,70 30,45" className="cage-face" />
//                 {/* Bottom Plane projection */}
//                 <polygon points="80,90 130,115 80,140 30,115" className="cage-face" />

//                 {/* Vertical Node Intersections */}
//                 <line x1="80" y1="20" x2="80" y2="90" className="cage-edge" />
//                 <line x1="130" y1="45" x2="130" y2="115" className="cage-edge" />
//                 <line x1="30" y1="45" x2="30" y2="115" className="cage-edge" />
//             </g>
//             {/* Dynamic Center Conduit */}
//             <circle cx="80" cy="85" r="4" className="matrix-conduit" />
//         </svg>
//     );
// }

// function RecallVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector recall-animated" aria-hidden="true">
//             {/* Asymmetric Split Trajectory Waveguides */}
//             <path d="M 20,130 C 50,80, 110,50, 140,40" className="trace-path primary-stream" />
//             <path d="M 20,140 C 45,100, 95,80, 140,80" className="trace-path secondary-stream" />

//             {/* Linear Horizon Grid Reference */}
//             <line x1="20" y1="40" x2="20" y2="140" className="vertical-datum" />

//             {/* Trailing Signal Nodes */}
//             <circle cx="92" cy="62" r="4" className="stream-particle generic-p1" />
//             <circle cx="140" cy="40" r="5" className="stream-particle kinetic-tip" />
//         </svg>
//     );
// }














// after the seo

// "use client";

// import { useState, useRef, useTransition, useEffect } from "react";
// import "./Home.css";

// type PillarKey = "legacy" | "audience" | "network" | "recall";

// interface PillarData {
//     index: string;
//     key: PillarKey;
//     title: string;
//     meta: string;
//     body: string;
//     metric: string;
//     coords: string;
// }

// interface PanelData {
//     id: string;
//     title: string;
//     label: string;
//     body: string;
// }

// const strategicPillars: PillarData[] = [
//     {
//         index: "1997",
//         key: "legacy",
//         title: "Mukesh Arts Legacy",
//         meta: "Outdoor Media Experience",
//         body: "Since 1997, Mukesh Arts has helped brands build visibility across Gujarat through outdoor media and planned brand placements.",
//         metric: "Since 1997",
//         coords: "420 / 01.A",
//     },
//     {
//         index: "01",
//         key: "audience",
//         title: "Airport Audience",
//         meta: "Traveller Reach",
//         body: "Reach business travellers, families, NRIs, professionals, and regional buyers inside Rajkot Airport.",
//         metric: "Premium Reach",
//         coords: "720 / 02.B",
//     },
//     {
//         index: "02",
//         key: "network",
//         title: "Media Network",
//         meta: "Terminal Spaces",
//         body: "Digital screens, static boards, and terminal placements create visibility across the airport journey.",
//         metric: "Multiple Formats",
//         coords: "990 / 03.C",
//     },
//     {
//         index: "03",
//         key: "recall",
//         title: "Cleaner Attention",
//         meta: "Focused Environment",
//         body: "Airport media gives brands a calmer space compared to crowded city advertising.",
//         metric: "Clear Presence",
//         coords: "110 / 04.D",
//     },
// ];

// const dynamicPanels: PanelData[] = [
//     {
//         id: "vision",
//         title: "Vision",
//         label: "Future Direction",
//         body: "To make Rajkot Airport Media a trusted platform for brands looking to connect with airport audiences.",
//     },
//     {
//         id: "mission",
//         title: "Mission",
//         label: "Execution Focus",
//         body: "To deliver clean, planned, and reliable airport media placements across digital, static, and terminal spaces.",
//     },
//     {
//         id: "promise",
//         title: "Promise",
//         label: "Brand Commitment",
//         body: "To keep every campaign clear, premium, and well-supported from planning to execution.",
//     },
// ];

// export default function About() {
//     const [activeSegment, setActiveSegment] = useState<number>(0);
//     const [activePanel, setActivePanel] = useState<string>("vision");
//     const [isPending, startTransition] = useTransition();
//     const containerRef = useRef<HTMLDivElement>(null);
//     const tabsRef = useRef<HTMLDivElement>(null);

//     const active = strategicPillars[activeSegment];
//     const currentPanel = dynamicPanels.find((item) => item.id === activePanel);

//     useEffect(() => {
//         if (!tabsRef.current) return;

//         const activeBtn = tabsRef.current.querySelector(".is-active") as HTMLButtonElement;

//         if (activeBtn) {
//             tabsRef.current.style.setProperty("--slide-width", `${activeBtn.offsetWidth}px`);
//             tabsRef.current.style.setProperty("--slide-left", `${activeBtn.offsetLeft}px`);
//         }
//     }, [activePanel]);

//     const handleSegmentChange = (index: number) => {
//         startTransition(() => {
//             setActiveSegment(index);
//         });
//     };

//     // return (
//     //     <section
//     //         className="cinematic-about"
//     //         id="about"
//     //         aria-labelledby="about-title"
//     //     >
//     //         <div className="ambient-radial-glow" aria-hidden="true" />
//     //         <div className="ambient-blue-glow" aria-hidden="true" />

//     //         <div className="cinematic-wrapper">
//     //             <header className="about-header">
//     //                 <span className="about-eyebrow">
//     //                     About Rajkot Airport Media
//     //                 </span>

//     //                 <h2 className="about-title" id="about-title">
//     //                     A legacy of visibility,
//     //                     <span> now inside Rajkot Airport</span>
//     //                 </h2>

//     //                 <p className="about-description">
//     //                     Since 1997, Mukesh Arts has helped brands build strong visibility
//     //                     across Gujarat. Today, we bring that experience to Rajkot Airport
//     //                     through planned media spaces, clear execution, and premium placements.
//     //                 </p>
//     //             </header>

//     //             <div
//     //                 className={`cinematic-strip-matrix ${isPending ? "is-transitioning" : ""}`}
//     //                 ref={containerRef}
//     //                 aria-label={`About Mukesh Arts and Rajkot Airport Media: ${active.title}`}
//     //             >
//     //                 {strategicPillars.map((item, index) => {
//     //                     const isCurrent = activeSegment === index;

//     //                     return (
//     //                         <div
//     //                             key={item.key}
//     //                             className={`matrix-strip-segment ${isCurrent ? "is-expanded" : ""}`}
//     //                             onClick={() => handleSegmentChange(index)}
//     //                             onMouseEnter={() => handleSegmentChange(index)}
//     //                             role="button"
//     //                             tabIndex={0}
//     //                             aria-expanded={isCurrent}
//     //                             aria-label={`${item.title}. ${item.body}`}
//     //                             onKeyDown={(event) => {
//     //                                 if (event.key === "Enter" || event.key === " ") {
//     //                                     event.preventDefault();
//     //                                     handleSegmentChange(index);
//     //                                 }
//     //                             }}
//     //                         >
//     //                             <div className="strip-header-zone">
//     //                                 <span className="strip-index">{item.index}</span>
//     //                                 <span className="strip-title-short">{item.key}</span>
//     //                             </div>

//     //                             <div className="strip-expanded-content">
//     //                                 <div className="content-inner-fade">
//     //                                     <div className="segment-copy">
//     //                                         <span className="content-meta-tag">{item.meta}</span>
//     //                                         <h3 className="content-main-title">{item.title}</h3>
//     //                                         <p className="content-body-desc">{item.body}</p>

//     //                                         <div className="content-footer-metrics">
//     //                                             <div className="metric-badge">
//     //                                                 <span className="badge-lbl">INDEX VALUE</span>
//     //                                                 <strong className="badge-val">{item.metric}</strong>
//     //                                             </div>

//     //                                             <span className="system-coordinates">
//     //                                                 {item.coords}
//     //                                             </span>
//     //                                         </div>
//     //                                     </div>

//     //                                     <div className="segment-vector-card" aria-hidden="true">
//     //                                         {renderPillarVector(item.key)}
//     //                                     </div>
//     //                                 </div>
//     //                             </div>

//     //                             <div className="strip-axis-line" aria-hidden="true" />
//     //                         </div>
//     //                     );
//     //                 })}
//     //             </div>

//     //             <div className="cinematic-intel-dock">
//     //                 <div className="intel-content-panel">
//     //                     <div
//     //                         className="intel-tabs"
//     //                         ref={tabsRef}
//     //                         aria-label="About Rajkot Airport Media tabs"
//     //                     >
//     //                         <div className="ram-tab-slider-indicator" aria-hidden="true" />

//     //                         {dynamicPanels.map((item) => (
//     //                             <button
//     //                                 key={item.id}
//     //                                 type="button"
//     //                                 onClick={() => setActivePanel(item.id)}
//     //                                 className={activePanel === item.id ? "is-active" : ""}
//     //                                 aria-pressed={activePanel === item.id}
//     //                             >
//     //                                 {item.title}
//     //                             </button>
//     //                         ))}
//     //                     </div>

//     //                     <div className="intel-copy">
//     //                         <span>{currentPanel?.label}</span>
//     //                         <h3>{currentPanel?.title}</h3>
//     //                         <p>{currentPanel?.body}</p>
//     //                     </div>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </section>
//     // );
//     return (
//         <section
//             className="cinematic-about"
//             id="about"
//             aria-labelledby="about-title"
//         >
//             <div className="ambient-radial-glow" aria-hidden="true" />
//             <div className="ambient-blue-glow" aria-hidden="true" />

//             <div className="cinematic-wrapper">
//                 <header className="about-header">
//                     <span className="about-eyebrow" data-motion="up">
//                         About Rajkot Airport Media
//                     </span>

//                     <h2
//                         className="about-title"
//                         id="about-title"
//                         data-motion="up"
//                         data-motion-delay="0.08"
//                     >
//                         A legacy of visibility,
//                         <span> now inside Rajkot Airport</span>
//                     </h2>

//                     <p
//                         className="about-description"
//                         data-motion="up"
//                         data-motion-delay="0.14"
//                     >
//                         Since 1997, Mukesh Arts has helped brands build strong visibility
//                         across Gujarat. Today, we bring that experience to Rajkot Airport
//                         through planned media spaces, clear execution, and premium placements.
//                     </p>
//                 </header>

//                 <div
//                     className={`cinematic-strip-matrix ${isPending ? "is-transitioning" : ""}`}
//                     ref={containerRef}
//                     aria-label={`About Mukesh Arts and Rajkot Airport Media: ${active.title}`}
//                     data-motion-group
//                 >
//                     {strategicPillars.map((item, index) => {
//                         const isCurrent = activeSegment === index;

//                         return (
//                             <div
//                                 key={item.key}
//                                 className={`matrix-strip-segment ${isCurrent ? "is-expanded" : ""}`}
//                                 onClick={() => handleSegmentChange(index)}
//                                 onMouseEnter={() => handleSegmentChange(index)}
//                                 role="button"
//                                 tabIndex={0}
//                                 aria-expanded={isCurrent}
//                                 aria-label={`${item.title}. ${item.body}`}
//                                 data-motion-item
//                                 onKeyDown={(event) => {
//                                     if (event.key === "Enter" || event.key === " ") {
//                                         event.preventDefault();
//                                         handleSegmentChange(index);
//                                     }
//                                 }}
//                             >
//                                 <div className="strip-header-zone">
//                                     <span className="strip-index">{item.index}</span>
//                                     <span className="strip-title-short">{item.key}</span>
//                                 </div>

//                                 <div className="strip-expanded-content">
//                                     <div className="content-inner-fade">
//                                         <div className="segment-copy">
//                                             <span className="content-meta-tag">{item.meta}</span>
//                                             <h3 className="content-main-title">{item.title}</h3>
//                                             <p className="content-body-desc">{item.body}</p>

//                                             <div className="content-footer-metrics">
//                                                 <div className="metric-badge">
//                                                     <span className="badge-lbl">INDEX VALUE</span>
//                                                     <strong className="badge-val">{item.metric}</strong>
//                                                 </div>

//                                                 <span className="system-coordinates">
//                                                     {item.coords}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="segment-vector-card" aria-hidden="true">
//                                             {renderPillarVector(item.key)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="strip-axis-line" aria-hidden="true" />
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div
//                     className="cinematic-intel-dock"
//                     data-motion="up"
//                     data-motion-delay="0.12"
//                 >
//                     <div className="intel-content-panel">
//                         <div
//                             className="intel-tabs"
//                             ref={tabsRef}
//                             aria-label="About Rajkot Airport Media tabs"
//                         >
//                             <div className="ram-tab-slider-indicator" aria-hidden="true" />

//                             {dynamicPanels.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     type="button"
//                                     onClick={() => setActivePanel(item.id)}
//                                     className={activePanel === item.id ? "is-active" : ""}
//                                     aria-pressed={activePanel === item.id}
//                                 >
//                                     {item.title}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="intel-copy">
//                             <span>{currentPanel?.label}</span>
//                             <h3>{currentPanel?.title}</h3>
//                             <p>{currentPanel?.body}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// function renderPillarVector(type: PillarKey) {
//     if (type === "legacy") return <LegacyVector />;
//     if (type === "audience") return <AudienceVector />;
//     if (type === "network") return <NetworkVector />;
//     return <RecallVector />;
// }

// function LegacyVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector legacy-animated" aria-hidden="true">
//             <g className="blade-system">
//                 <line x1="80" y1="20" x2="80" y2="140" className="core-axis" />
//                 <line x1="20" y1="80" x2="140" y2="80" className="core-axis" />

//                 <path d="M 50,50 L 110,110" className="diagonal-blade blade-alpha" />
//                 <path d="M 110,50 L 50,110" className="diagonal-blade blade-beta" />
//             </g>

//             <circle cx="80" cy="80" r="12" className="focal-ring" />
//             <circle cx="80" cy="80" r="2" className="focal-center" />
//         </svg>
//     );
// }

// function AudienceVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector audience-animated" aria-hidden="true">
//             <circle cx="80" cy="80" r="68" className="wave-ring outermost" />
//             <circle cx="80" cy="80" r="48" className="wave-ring middle" />
//             <circle cx="80" cy="80" r="28" className="wave-ring inner" />

//             <g className="target-cluster">
//                 <line x1="80" y1="80" x2="128" y2="128" className="ray-pointer" />
//                 <circle cx="128" cy="128" r="5" className="cluster-node node-a" />
//                 <circle cx="32" cy="80" r="4" className="cluster-node node-b" />
//                 <circle cx="80" cy="32" r="3.5" className="cluster-node node-c" />
//             </g>
//         </svg>
//     );
// }

// function NetworkVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector network-animated" aria-hidden="true">
//             <g className="iso-cage">
//                 <polygon points="80,20 130,45 80,70 30,45" className="cage-face" />
//                 <polygon points="80,90 130,115 80,140 30,115" className="cage-face" />

//                 <line x1="80" y1="20" x2="80" y2="90" className="cage-edge" />
//                 <line x1="130" y1="45" x2="130" y2="115" className="cage-edge" />
//                 <line x1="30" y1="45" x2="30" y2="115" className="cage-edge" />
//             </g>

//             <circle cx="80" cy="85" r="4" className="matrix-conduit" />
//         </svg>
//     );
// }

// function RecallVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector recall-animated" aria-hidden="true">
//             <path d="M 20,130 C 50,80, 110,50, 140,40" className="trace-path primary-stream" />
//             <path d="M 20,140 C 45,100, 95,80, 140,80" className="trace-path secondary-stream" />

//             <line x1="20" y1="40" x2="20" y2="140" className="vertical-datum" />

//             <circle cx="92" cy="62" r="4" className="stream-particle generic-p1" />
//             <circle cx="140" cy="40" r="5" className="stream-particle kinetic-tip" />
//         </svg>
//     );
// }































// "use client";

// import { useState, useRef, useTransition, useEffect } from "react";
// import "./Home.css";

// type PillarKey = "legacy" | "audience" | "network" | "recall";

// interface PillarData {
//     index: string;
//     key: PillarKey;
//     title: string;
//     meta: string;
//     body: string;
//     metric: string;
//     coords: string;
// }

// interface PanelData {
//     id: string;
//     title: string;
//     label: string;
//     body: string;
// }

// const strategicPillars: PillarData[] = [
//     {
//         index: "1997",
//         key: "legacy",
//         title: "The Mukesh Arts Foundation",
//         meta: "Rooted Experience // Regional Legacy",
//         body: "Built on decades of outdoor advertising dominance. Rajkot Airport Media inherits a strong eye for high-scale brand presence across Gujarat’s economic and travel corridors.",
//         metric: "29+ Years Authority",
//         coords: "420 / 01.A",
//     },
//     {
//         index: "01",
//         key: "audience",
//         title: "Premium Passenger Curation",
//         meta: "Captive High-Value Demographics",
//         body: "Place your brand in front of business travellers, affluent families, decision-makers, NRIs, and premium regional audiences inside a high-attention airport environment.",
//         metric: "Premium Audience",
//         coords: "720 / 02.B",
//     },
//     {
//         index: "02",
//         key: "network",
//         title: "Architectural Space Network",
//         meta: "Synchronized Terminal Visibility",
//         body: "A premium configuration of digital canvases, static media, and tactical placements integrated across passenger movement zones for maximum visibility.",
//         metric: "Terminal Coverage",
//         coords: "990 / 03.C",
//     },
//     {
//         index: "03",
//         key: "recall",
//         title: "Cognitive Resonance Environment",
//         meta: "High-Dwell Brand Recall",
//         body: "Extended dwell time and a clean premium environment help your brand stay remembered beyond crowded outdoor spaces and standard city advertising.",
//         metric: "Deep Brand Recall",
//         coords: "110 / 04.D",
//     },
// ];

// const dynamicPanels: PanelData[] = [
//     {
//         id: "vision",
//         title: "Vision",
//         label: "Future Direction",
//         body: "To make Rajkot Airport Media a premium advertising gateway where brands connect with travellers, business audiences, and decision-makers through impactful airport visibility.",
//     },
//     {
//         id: "mission",
//         title: "Mission",
//         label: "Execution Focus",
//         body: "To deliver strategic, elegant, and result-driven airport advertising through creative placements, premium presentation, strong visibility, and trusted execution.",
//     },
//     {
//         id: "promise",
//         title: "Promise",
//         label: "Brand Commitment",
//         body: "We focus on clarity, quality, premium placement, and measurable brand presence so every campaign earns attention inside a high-impact airport environment.",
//     },
// ];

// export default function About() {
//     const [activeSegment, setActiveSegment] = useState<number>(0);
//     const [activePanel, setActivePanel] = useState<string>("vision");
//     const [isPending, startTransition] = useTransition();
//     const containerRef = useRef<HTMLDivElement>(null);
//     const tabsRef = useRef<HTMLDivElement>(null);

//     const active = strategicPillars[activeSegment];
//     const currentPanel = dynamicPanels.find((item) => item.id === activePanel);

//     useEffect(() => {
//         if (!tabsRef.current) return;
//         const activeBtn = tabsRef.current.querySelector(".is-active") as HTMLButtonElement;
//         if (activeBtn) {
//             tabsRef.current.style.setProperty("--slide-width", `${activeBtn.offsetWidth}px`);
//             tabsRef.current.style.setProperty("--slide-left", `${activeBtn.offsetLeft}px`);
//         }
//     }, [activePanel]);

//     const handleSegmentChange = (index: number) => {
//         startTransition(() => {
//             setActiveSegment(index);
//         });
//     };

//     return (
//         <section className="cinematic-about" id="about">
//             <div className="ambient-radial-glow" />
//             <div className="ambient-blue-glow" />

//             <div className="cinematic-wrapper">
//                 <header className="about-header">
//                     <span className="about-eyebrow" data-motion="clip">
//                         About Rajkot Airport Media
//                     </span>

//                     <h2 className="about-title" data-motion="up" data-motion-delay="0.08">
//                         Connecting Brands With
//                         <span> Premium Airport Audiences</span>
//                     </h2>

//                     <p className="about-description" data-motion="up" data-motion-delay="0.16">
//                         Since 1997, Mukesh Arts has delivered high-impact advertising
//                         experiences across Gujarat. Through Rajkot Airport Media, we help
//                         brands engage affluent travellers, business leaders, NRIs, and
//                         decision-makers through premium airport advertising environments.
//                     </p>
//                 </header>

//                 <div
//                     className={`cinematic-strip-matrix ${isPending ? "is-transitioning" : ""}`}
//                     ref={containerRef}
//                     data-motion-group
//                 >
//                     {strategicPillars.map((item, index) => {
//                         const isCurrent = activeSegment === index;

//                         return (
//                             <div
//                                 key={item.key}
//                                 className={`matrix-strip-segment ${isCurrent ? "is-expanded" : ""}`}
//                                 onClick={() => handleSegmentChange(index)}
//                                 onMouseEnter={() => handleSegmentChange(index)}
//                                 data-motion-item
//                             >
//                                 <div className="strip-header-zone">
//                                     <span className="strip-index">{item.index}</span>
//                                     <span className="strip-title-short">{item.key}</span>
//                                 </div>

//                                 <div className="strip-expanded-content">
//                                     <div className="content-inner-fade">
//                                         <div className="segment-copy">
//                                             <span className="content-meta-tag">{item.meta}</span>
//                                             <h3 className="content-main-title">{item.title}</h3>
//                                             <p className="content-body-desc">{item.body}</p>

//                                             <div className="content-footer-metrics">
//                                                 <div className="metric-badge">
//                                                     <span className="badge-lbl">INDEX VALUE</span>
//                                                     <strong className="badge-val">{item.metric}</strong>
//                                                 </div>

//                                                 <span className="system-coordinates">
//                                                     {item.coords}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="segment-vector-card">
//                                             {renderPillarVector(item.key)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="strip-axis-line" />
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="cinematic-intel-dock" data-motion="zoom" data-motion-delay="0.1">
//                     <div className="intel-content-panel">
//                         <div className="intel-tabs" ref={tabsRef}>
//                             <div className="ram-tab-slider-indicator" />
//                             {dynamicPanels.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     type="button"
//                                     onClick={() => setActivePanel(item.id)}
//                                     className={activePanel === item.id ? "is-active" : ""}
//                                 >
//                                     {item.title}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="intel-copy">
//                             <span>{currentPanel?.label}</span>
//                             <h3>{currentPanel?.title}</h3>
//                             <p>{currentPanel?.body}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function renderPillarVector(type: PillarKey) {
//     if (type === "legacy") return <LegacyVector />;
//     if (type === "audience") return <AudienceVector />;
//     if (type === "network") return <NetworkVector />;
//     return <RecallVector />;
// }

// function LegacyVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector legacy-animated" aria-hidden="true">
//             <g className="blade-system">
//                 <line x1="80" y1="20" x2="80" y2="140" className="core-axis" />
//                 <line x1="20" y1="80" x2="140" y2="80" className="core-axis" />

//                 <path d="M 50,50 L 110,110" className="diagonal-blade blade-alpha" />
//                 <path d="M 110,50 L 50,110" className="diagonal-blade blade-beta" />
//             </g>
//             <circle cx="80" cy="80" r="12" className="focal-ring" />
//             <circle cx="80" cy="80" r="2" className="focal-center" />
//         </svg>
//     );
// }

// function AudienceVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector audience-animated" aria-hidden="true">
//             <circle cx="80" cy="80" r="68" className="wave-ring outermost" />
//             <circle cx="80" cy="80" r="48" className="wave-ring middle" />
//             <circle cx="80" cy="80" r="28" className="wave-ring inner" />

//             <g className="target-cluster">
//                 <line x1="80" y1="80" x2="128" y2="128" className="ray-pointer" />
//                 <circle cx="128" cy="128" r="5" className="cluster-node node-a" />
//                 <circle cx="32" cy="80" r="4" className="cluster-node node-b" />
//                 <circle cx="80" cy="32" r="3.5" className="cluster-node node-c" />
//             </g>
//         </svg>
//     );
// }

// function NetworkVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector network-animated" aria-hidden="true">
//             <g className="iso-cage">
//                 <polygon points="80,20 130,45 80,70 30,45" className="cage-face" />
//                 <polygon points="80,90 130,115 80,140 30,115" className="cage-face" />

//                 <line x1="80" y1="20" x2="80" y2="90" className="cage-edge" />
//                 <line x1="130" y1="45" x2="130" y2="115" className="cage-edge" />
//                 <line x1="30" y1="45" x2="30" y2="115" className="cage-edge" />
//             </g>
//             <circle cx="80" cy="85" r="4" className="matrix-conduit" />
//         </svg>
//     );
// }

// function RecallVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector recall-animated" aria-hidden="true">
//             <path d="M 20,130 C 50,80, 110,50, 140,40" className="trace-path primary-stream" />
//             <path d="M 20,140 C 45,100, 95,80, 140,80" className="trace-path secondary-stream" />

//             <line x1="20" y1="40" x2="20" y2="140" className="vertical-datum" />

//             <circle cx="92" cy="62" r="4" className="stream-particle generic-p1" />
//             <circle cx="140" cy="40" r="5" className="stream-particle kinetic-tip" />
//         </svg>
//     );
// }




































// "use client";

// import { useState, useRef, useTransition, useEffect } from "react";
// import "./Home.css";

// type PillarKey = "arts" | "publicity" | "airport";

// interface PillarData {
//     index: string;
//     key: PillarKey;
//     title: string;
//     meta: string;
//     body: string;
//     metric: string;
//     coords: string;
// }

// interface PanelData {
//     id: string;
//     title: string;
//     label: string;
//     body: string;
// }

// const strategicPillars: PillarData[] = [
//     {
//         index: "2004",
//         key: "arts",
//         title: "Mukesh Arts",
//         meta: "Wall Painting & Advertising",
//         body: "Mukesh Arts started with wall painting and local advertising, building a strong foundation in visual brand communication and on-ground campaign execution.",
//         metric: "Wall Painting",
//         coords: "01 / Foundation",
//     },
//     {
//         index: "2010",
//         key: "publicity",
//         title: "Mukesh Publicity",
//         meta: "Outdoor Hoarding & Advertising",
//         body: "Mukesh Publicity expanded into outdoor hoardings and large-format advertising, helping brands gain stronger visibility across high-traffic city locations.",
//         metric: "Outdoor Hoardings",
//         coords: "02 / Expansion",
//     },
//     {
//         index: "2023",
//         key: "airport",
//         title: "Mukesh Airport Media",
//         meta: "Airport Media & Premium Branding",
//         body: "Mukesh Airport Media brings the experience of outdoor advertising into premium airport environments, connecting brands with travellers, business audiences, and decision-makers.",
//         metric: "Airport Media",
//         coords: "03 / Premium Reach",
//     },
// ];

// const dynamicPanels: PanelData[] = [
//     {
//         id: "journey",
//         title: "Journey",
//         label: "Brand Evolution",
//         body: "From wall painting to outdoor hoardings and airport media, Mukesh has grown with a clear focus on visibility, trust, and premium advertising spaces.",
//     },
//     {
//         id: "strength",
//         title: "Strength",
//         label: "Execution Quality",
//         body: "Our strength is practical media planning, clean execution, strong local understanding, and long-term experience in outdoor and airport advertising.",
//     },
//     {
//         id: "future",
//         title: "Future",
//         label: "Airport Media Focus",
//         body: "Through Rajkot Airport Media, we aim to help brands create premium visibility inside high-value airport environments with planned and impactful placements.",
//     },
// ];

// export default function About() {
//     const [activeSegment, setActiveSegment] = useState<number>(0);
//     const [activePanel, setActivePanel] = useState<string>("journey");
//     const [isPending, startTransition] = useTransition();
//     const containerRef = useRef<HTMLDivElement>(null);
//     const tabsRef = useRef<HTMLDivElement>(null);

//     const currentPanel = dynamicPanels.find((item) => item.id === activePanel);

//     useEffect(() => {
//         if (!tabsRef.current) return;

//         const activeBtn = tabsRef.current.querySelector(".is-active") as HTMLButtonElement;

//         if (activeBtn) {
//             tabsRef.current.style.setProperty("--slide-width", `${activeBtn.offsetWidth}px`);
//             tabsRef.current.style.setProperty("--slide-left", `${activeBtn.offsetLeft}px`);
//         }
//     }, [activePanel]);

//     const handleSegmentChange = (index: number) => {
//         startTransition(() => {
//             setActiveSegment(index);
//         });
//     };

//     return (
//         <section className="cinematic-about" id="about">
//             <div className="ambient-radial-glow" />
//             <div className="ambient-blue-glow" />

//             <div className="cinematic-wrapper">
//                 <header className="about-header">
//                     <span className="about-eyebrow" data-motion="clip">
//                         About Rajkot Airport Media
//                     </span>

//                     <h2 className="about-title" data-motion="up" data-motion-delay="0.08">
//                         A Legacy Built Through
//                         <span> Outdoor & Airport Media</span>
//                     </h2>

//                     <p className="about-description" data-motion="up" data-motion-delay="0.16">
//                         Mukesh started with wall painting and advertising, expanded into
//                         outdoor hoardings, and now brings trusted media execution to premium
//                         airport advertising at Rajkot Airport.
//                     </p>
//                 </header>

//                 <div
//                     className={`cinematic-strip-matrix is-three-history ${isPending ? "is-transitioning" : ""}`}
//                     ref={containerRef}
//                     data-motion-group
//                 >
//                     {strategicPillars.map((item, index) => {
//                         const isCurrent = activeSegment === index;

//                         return (
//                             <div
//                                 key={item.key}
//                                 className={`matrix-strip-segment ${isCurrent ? "is-expanded" : ""}`}
//                                 onClick={() => handleSegmentChange(index)}
//                                 onMouseEnter={() => handleSegmentChange(index)}
//                                 data-motion-item
//                             >
//                                 <div className="strip-header-zone">
//                                     <span className="strip-index">{item.index}</span>
//                                     <span className="strip-title-short">{item.title}</span>
//                                 </div>

//                                 <div className="strip-expanded-content">
//                                     <div className="content-inner-fade">
//                                         <div className="segment-copy">
//                                             <span className="content-meta-tag">{item.meta}</span>
//                                             <h3 className="content-main-title">{item.title}</h3>
//                                             <p className="content-body-desc">{item.body}</p>

//                                             <div className="content-footer-metrics">
//                                                 <div className="metric-badge">
//                                                     <span className="badge-lbl">MEDIA TYPE</span>
//                                                     <strong className="badge-val">{item.metric}</strong>
//                                                 </div>

//                                                 <span className="system-coordinates">
//                                                     {item.coords}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="segment-vector-card">
//                                             {renderPillarVector(item.key)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="strip-axis-line" />
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="cinematic-intel-dock" data-motion="zoom" data-motion-delay="0.1">
//                     <div className="intel-content-panel">
//                         <div className="intel-tabs" ref={tabsRef}>
//                             <div className="ram-tab-slider-indicator" />

//                             {dynamicPanels.map((item) => (
//                                 <button
//                                     key={item.id}
//                                     type="button"
//                                     onClick={() => setActivePanel(item.id)}
//                                     className={activePanel === item.id ? "is-active" : ""}
//                                 >
//                                     {item.title}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className="intel-copy">
//                             <span>{currentPanel?.label}</span>
//                             <h3>{currentPanel?.title}</h3>
//                             <p>{currentPanel?.body}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function renderPillarVector(type: PillarKey) {
//     if (type === "arts") return <WallPaintingVector />;
//     if (type === "publicity") return <HoardingVector />;
//     return <AirportMediaVector />;
// }

// function WallPaintingVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector wall-paint-vector" aria-hidden="true">
//             <rect x="28" y="35" width="104" height="82" rx="8" className="wall-board" />

//             <path
//                 d="M42 58 H116"
//                 className="motion-stroke paint-line paint-line-a"
//             />
//             <path
//                 d="M42 76 H101"
//                 className="motion-stroke paint-line paint-line-b"
//             />
//             <path
//                 d="M42 94 H121"
//                 className="motion-stroke paint-line paint-line-c"
//             />

//             <g className="roller-group">
//                 <rect x="46" y="42" width="44" height="13" rx="6" className="roller-head" />
//                 <path d="M90 49 H105 C112 49 116 53 116 60 V72" className="roller-handle" />
//                 <circle cx="116" cy="78" r="5" className="roller-dot" />
//             </g>

//             <path
//                 d="M40 124 C58 116 76 132 96 124 C112 118 121 122 132 128"
//                 className="motion-stroke wall-sweep"
//             />
//         </svg>
//     );
// }

// function HoardingVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector hoarding-vector" aria-hidden="true">
//             <rect x="28" y="36" width="104" height="56" rx="6" className="hoarding-board" />
//             <rect x="40" y="49" width="80" height="12" rx="2" className="hoarding-strip" />
//             <rect x="40" y="69" width="52" height="8" rx="2" className="hoarding-small-strip" />

//             <line x1="54" y1="92" x2="54" y2="126" className="hoarding-pole" />
//             <line x1="106" y1="92" x2="106" y2="126" className="hoarding-pole" />
//             <line x1="38" y1="126" x2="122" y2="126" className="hoarding-base" />

//             <path
//                 d="M32 32 C55 18 105 18 128 32"
//                 className="motion-stroke hoarding-glow"
//             />

//             <circle cx="40" cy="102" r="4" className="light-node light-a" />
//             <circle cx="120" cy="102" r="4" className="light-node light-b" />
//         </svg>
//     );
// }

// function AirportMediaVector() {
//     return (
//         <svg viewBox="0 0 160 160" className="pillar-vector airport-media-vector" aria-hidden="true">
//             <path
//                 d="M28 112 H132 V76 C132 62 120 50 106 50 H54 C40 50 28 62 28 76 Z"
//                 className="terminal-body"
//             />

//             <rect x="44" y="67" width="72" height="30" rx="4" className="digital-screen" />
//             <path d="M52 79 H108" className="screen-line screen-line-a" />
//             <path d="M52 88 H88" className="screen-line screen-line-b" />

//             <path
//                 d="M30 44 C62 20 102 23 130 47"
//                 className="motion-stroke flight-arc"
//             />

//             <path
//                 d="M122 43 L136 48 L122 53 L126 48 Z"
//                 className="plane-mark"
//             />

//             <line x1="48" y1="112" x2="48" y2="130" className="terminal-pillar" />
//             <line x1="80" y1="112" x2="80" y2="130" className="terminal-pillar" />
//             <line x1="112" y1="112" x2="112" y2="130" className="terminal-pillar" />
//             <line x1="34" y1="130" x2="126" y2="130" className="terminal-base" />
//         </svg>
//     );
// }






// "use client";

// import { useRef, useState, useTransition } from "react";
// import "./Home.css";

// type PillarKey = "arts" | "publicity" | "airport";

// interface PillarData {
//     index: string;
//     key: PillarKey;
//     title: string;
//     meta: string;
//     body: string;
//     metric: string;
//     coords: string;
// }

// interface LegacySignal {
//     number: string;
//     title: string;
//     body: string;
// }

// const strategicPillars: PillarData[] = [
//     {
//         index: "2004",
//         key: "arts",
//         title: "Mukesh Arts",
//         meta: "Wall Painting & Advertising",
//         body: "Mukesh Arts started with wall painting and local advertising, building a strong foundation in visual brand communication and on-ground campaign execution.",
//         metric: "Wall Painting",
//         coords: "01 / Foundation",
//     },
//     {
//         index: "2010",
//         key: "publicity",
//         title: "Mukesh Publicity",
//         meta: "Outdoor Hoarding & Advertising",
//         body: "Mukesh Publicity expanded into outdoor hoardings and large-format advertising, helping brands gain stronger visibility across high-traffic city locations.",
//         metric: "Outdoor Hoardings",
//         coords: "02 / Expansion",
//     },
//     {
//         index: "2023",
//         key: "airport",
//         title: "Mukesh Airport Media",
//         meta: "Airport Media & Premium Branding",
//         body: "Mukesh Airport Media brings the experience of outdoor advertising into premium airport environments, connecting brands with travellers, business audiences, and decision-makers.",
//         metric: "Airport Media",
//         coords: "03 / Premium Reach",
//     },
// ];

// const legacySignals: LegacySignal[] = [
//     {
//         number: "20+",
//         title: "Years of Media Experience",
//         body: "A journey from local wall painting to large-format outdoor advertising and airport media.",
//     },
//     {
//         number: "03",
//         title: "Strong Media Chapters",
//         body: "Mukesh Arts, Mukesh Publicity, and Mukesh Airport Media built step by step.",
//     },
//     {
//         number: "2023",
//         title: "Airport Media Focus",
//         body: "A premium advertising direction for Rajkot Airport audiences and high-value visibility.",
//     },
// ];

// export default function About() {
//     const [activeSegment, setActiveSegment] = useState<number>(0);
//     const [isPending, startTransition] = useTransition();
//     const containerRef = useRef<HTMLDivElement>(null);

//     const handleSegmentChange = (index: number) => {
//         startTransition(() => {
//             setActiveSegment(index);
//         });
//     };

//     return (
//         <section className="cinematic-about" id="about">
//             <div className="ambient-radial-glow" />
//             <div className="ambient-blue-glow" />

//             <div className="cinematic-wrapper">
//                 <header className="about-header">
//                     <span className="about-eyebrow" data-motion="clip">
//                         About Rajkot Airport Media
//                     </span>

//                     <h2 className="about-title" data-motion="up" data-motion-delay="0.08">
//                         A Legacy Built Through
//                         <span> Outdoor & Airport Media</span>
//                     </h2>

//                     <p className="about-description" data-motion="up" data-motion-delay="0.16">
//                         Mukesh started with wall painting and advertising, expanded into
//                         outdoor hoardings, and now brings trusted media execution to premium
//                         airport advertising at Rajkot Airport.
//                     </p>
//                 </header>

//                 <div
//                     className={`cinematic-strip-matrix is-three-history active-${activeSegment} ${isPending ? "is-transitioning" : ""
//                         }`}
//                     ref={containerRef}
//                     data-motion-group
//                 >
//                     {strategicPillars.map((item, index) => {
//                         const isCurrent = activeSegment === index;
//                         const position =
//                             index === activeSegment
//                                 ? "is-expanded"
//                                 : index < activeSegment
//                                     ? "is-before"
//                                     : "is-after";

//                         return (
//                             <div
//                                 key={item.key}
//                                 className={`matrix-strip-segment ${position}`}
//                                 onClick={() => handleSegmentChange(index)}
//                                 onMouseEnter={() => handleSegmentChange(index)}
//                                 data-motion-item
//                             >
//                                 <div className="strip-header-zone">
//                                     <span className="strip-index">{item.index}</span>
//                                     <span className="strip-title-short">{item.title}</span>
//                                 </div>

//                                 <div className="strip-expanded-content">
//                                     <div className="content-inner-fade">
//                                         <div className="segment-copy">
//                                             <span className="content-meta-tag">{item.meta}</span>
//                                             <h3 className="content-main-title">{item.title}</h3>
//                                             <p className="content-body-desc">{item.body}</p>

//                                             <div className="content-footer-metrics">
//                                                 <div className="metric-badge">
//                                                     <span className="badge-lbl">MEDIA TYPE</span>
//                                                     <strong className="badge-val">{item.metric}</strong>
//                                                 </div>

//                                                 <span className="system-coordinates">
//                                                     {item.coords}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div className="segment-vector-card">
//                                             {renderPillarVector(item.key)}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="strip-axis-line" />

//                                 {isCurrent && (
//                                     <span className="active-card-glow" aria-hidden="true" />
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="legacy-signal-dock" data-motion="zoom" data-motion-delay="0.1">
//                     <div className="legacy-signal-head">
//                         <span>Growth Path</span>
//                         <h3>From street-level visibility to airport media presence.</h3>
//                     </div>

//                     <div className="legacy-signal-grid">
//                         {legacySignals.map((item) => (
//                             <div className="legacy-signal-card" key={item.title}>
//                                 <strong>{item.number}</strong>
//                                 <div>
//                                     <h4>{item.title}</h4>
//                                     <p>{item.body}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function renderPillarVector(type: PillarKey) {
//     if (type === "arts") return <WallPaintingVector />;
//     if (type === "publicity") return <HoardingVector />;
//     return <AirportMediaVector />;
// }

// function WallPaintingVector() {
//     return (
//         <svg viewBox="0 0 220 180" className="pillar-vector wall-paint-vector" aria-hidden="true">
//             <defs>
//                 <linearGradient id="wallPremiumBg" x1="0" x2="1" y1="0" y2="1">
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#eef7ff" />
//                 </linearGradient>

//                 <linearGradient id="paintRedBlue" x1="0" x2="1">
//                     <stop offset="0%" stopColor="#E21D2D" />
//                     <stop offset="100%" stopColor="#1E2A78" />
//                 </linearGradient>
//             </defs>

//             <path
//                 d="M36 42 H158 C168 42 176 50 176 60 V122 C176 132 168 140 158 140 H36 Z"
//                 className="premium-wall-panel"
//             />

//             <path d="M48 62 H136" className="wall-grid-line" />
//             <path d="M48 84 H150" className="wall-grid-line" />
//             <path d="M48 106 H122" className="wall-grid-line" />

//             <path
//                 d="M48 66 C78 52 105 76 136 60"
//                 className="premium-paint-stroke paint-stroke-one"
//             />
//             <path
//                 d="M48 88 C82 74 112 98 150 80"
//                 className="premium-paint-stroke paint-stroke-two"
//             />
//             <path
//                 d="M48 110 C74 96 98 122 126 104"
//                 className="premium-paint-stroke paint-stroke-three"
//             />

//             <g className="premium-roller">
//                 <rect x="126" y="42" width="54" height="18" rx="9" className="roller-premium-head" />
//                 <path d="M153 60 V80 C153 88 159 94 167 94 H178" className="premium-dark-line" />
//                 <rect x="174" y="88" width="12" height="42" rx="6" className="roller-premium-handle" />
//             </g>

//             <path
//                 d="M34 148 C58 132 86 158 112 143 C140 126 158 144 186 132"
//                 className="premium-flow-line"
//             />

//             <circle cx="188" cy="54" r="10" className="floating-dot dot-red" />
//             <circle cx="194" cy="104" r="7" className="floating-dot dot-blue" />
//             <circle cx="30" cy="112" r="5" className="floating-dot dot-soft" />
//         </svg>
//     );
// }

// function HoardingVector() {
//     return (
//         <svg viewBox="0 0 220 180" className="pillar-vector hoarding-vector" aria-hidden="true">
//             <defs>
//                 <linearGradient id="hoardingGlow" x1="0" x2="1" y1="0" y2="1">
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#edf6ff" />
//                 </linearGradient>
//             </defs>

//             <path d="M32 146 H188" className="premium-road-line" />

//             <rect x="38" y="34" width="144" height="76" rx="12" className="premium-hoarding-frame" />
//             <rect x="50" y="46" width="120" height="52" rx="7" className="premium-hoarding-screen" />

//             <path d="M62 61 H150" className="hoarding-copy-line red-copy" />
//             <path d="M62 78 H126" className="hoarding-copy-line blue-copy" />
//             <path d="M62 91 H146" className="hoarding-copy-line soft-copy" />

//             <path d="M72 110 V145" className="premium-dark-line" />
//             <path d="M148 110 V145" className="premium-dark-line" />
//             <path d="M58 145 H162" className="premium-dark-line" />

//             <g className="premium-spotlight left-spot">
//                 <circle cx="47" cy="128" r="7" className="spotlight-source" />
//                 <path d="M48 126 L76 110 L96 145 Z" className="spotlight-beam-premium" />
//             </g>

//             <g className="premium-spotlight right-spot">
//                 <circle cx="173" cy="128" r="7" className="spotlight-source" />
//                 <path d="M172 126 L144 110 L124 145 Z" className="spotlight-beam-premium" />
//             </g>

//             <path
//                 d="M30 32 C68 12 152 12 190 32"
//                 className="premium-flow-line hoarding-top-arc"
//             />

//             <g className="mini-traffic">
//                 <rect x="94" y="136" width="28" height="9" rx="4" />
//                 <circle cx="101" cy="146" r="3" />
//                 <circle cx="116" cy="146" r="3" />
//             </g>
//         </svg>
//     );
// }

// function AirportMediaVector() {
//     return (
//         <svg viewBox="0 0 220 180" className="pillar-vector airport-media-vector" aria-hidden="true">
//             <defs>
//                 <linearGradient id="terminalPremium" x1="0" x2="1" y1="0" y2="1">
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#eef7ff" />
//                 </linearGradient>
//             </defs>

//             <path
//                 d="M36 132 H184 V86 C184 66 166 48 146 48 H74 C54 48 36 66 36 86 Z"
//                 className="premium-terminal-shell"
//             />

//             <path d="M52 84 H168" className="terminal-roof-line" />
//             <path d="M56 132 V152" className="premium-dark-line" />
//             <path d="M92 132 V152" className="premium-dark-line" />
//             <path d="M128 132 V152" className="premium-dark-line" />
//             <path d="M164 132 V152" className="premium-dark-line" />
//             <path d="M42 152 H178" className="premium-dark-line" />

//             <rect x="62" y="70" width="96" height="44" rx="9" className="premium-airport-screen" />
//             <path d="M78 88 H143" className="screen-light-line" />
//             <path d="M78 101 H121" className="screen-light-line short" />

//             <path
//                 d="M38 48 C78 14 142 16 182 48"
//                 className="premium-flow-line airport-flight-route"
//             />

//             <path
//                 d="M174 42 L198 50 L174 58 L180 50 Z"
//                 className="premium-plane"
//             />

//             <circle cx="110" cy="92" r="48" className="premium-radar radar-large" />
//             <circle cx="110" cy="92" r="28" className="premium-radar radar-small" />

//             <g className="airport-passenger-dots">
//                 <circle cx="72" cy="124" r="4" />
//                 <circle cx="110" cy="124" r="4" />
//                 <circle cx="148" cy="124" r="4" />
//             </g>
//         </svg>
//     );
// }
























"use client";

import { useLayoutEffect, useRef, useState, useTransition } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

type PillarKey = "arts" | "publicity" | "airport";

interface PillarData {
    index: string;
    key: PillarKey;
    title: string;
    meta: string;
    body: string;
    metric: string;
    coords: string;
}

interface LegacySignal {
    number: string;
    title: string;
    body: string;
}

const strategicPillars: PillarData[] = [
    {
        index: "2004",
        key: "arts",
        title: "Mukesh Arts",
        meta: "Wall Painting & Advertising",
        body: "Mukesh Arts started with wall painting and local advertising, building a strong foundation in visual brand communication and on-ground campaign execution.",
        metric: "Wall Painting",
        coords: "01 / Foundation",
    },
    {
        index: "2010",
        key: "publicity",
        title: "Mukesh Publicity",
        meta: "Outdoor Hoarding & Advertising",
        body: "Mukesh Publicity expanded into outdoor hoardings and large-format advertising, helping brands gain stronger visibility across high-traffic city locations.",
        metric: "Outdoor Hoardings",
        coords: "02 / Expansion",
    },
    {
        index: "2023",
        key: "airport",
        title: "Mukesh Airport Media",
        meta: "Airport Media & Premium Branding",
        body: "Mukesh Airport Media brings the experience of outdoor advertising into premium airport environments, connecting brands with travellers, business audiences, and decision-makers.",
        metric: "Airport Media",
        coords: "03 / Premium Reach",
    },
];

const legacySignals: LegacySignal[] = [
    {
        number: "20+",
        title: "Years of Media Experience",
        body: "A journey from local wall painting to large-format outdoor advertising and airport media.",
    },
    {
        number: "03",
        title: "Strong Media Chapters",
        body: "Mukesh Arts, Mukesh Publicity, and Mukesh Airport Media built step by step.",
    },
    {
        number: "2023",
        title: "Airport Media Focus",
        body: "A premium advertising direction for Rajkot Airport audiences and high-value visibility.",
    },
];

export default function About() {
    const [activeSegment, setActiveSegment] = useState<number>(0);
    const [isPending, startTransition] = useTransition();
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (!section) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        const ctx = gsap.context(() => {
            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 78%",
                    once: true,
                },
                defaults: {
                    ease: "power4.out",
                },
            });

            introTl
                .from(".ambient-radial-glow", {
                    autoAlpha: 0,
                    scale: 0.78,
                    duration: 1.1,
                    clearProps: "transform,opacity,visibility",
                })
                .from(
                    ".ambient-blue-glow",
                    {
                        autoAlpha: 0,
                        scale: 0.82,
                        duration: 1.1,
                        clearProps: "transform,opacity,visibility",
                    },
                    "<0.08"
                )
                .from(
                    ".about-eyebrow",
                    {
                        autoAlpha: 0,
                        y: 24,
                        clipPath: "inset(0 100% 0 0)",
                        duration: 0.85,
                        clearProps: "transform,opacity,visibility,clipPath",
                    },
                    "-=0.8"
                )
                .from(
                    ".about-title",
                    {
                        autoAlpha: 0,
                        y: 56,
                        duration: 1,
                        clearProps: "transform,opacity,visibility",
                    },
                    "-=0.5"
                )
                .from(
                    ".about-title span",
                    {
                        autoAlpha: 0,
                        y: 32,
                        duration: 0.85,
                        clearProps: "transform,opacity,visibility",
                    },
                    "-=0.7"
                )
                .from(
                    ".about-description",
                    {
                        autoAlpha: 0,
                        y: 34,
                        duration: 0.85,
                        clearProps: "transform,opacity,visibility",
                    },
                    "-=0.6"
                );

            gsap.from(".matrix-strip-segment", {
                autoAlpha: 0,
                y: 76,
                rotateX: 6,
                scale: 0.96,
                duration: 1,
                stagger: 0.14,
                ease: "power4.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".cinematic-strip-matrix",
                    start: "top 82%",
                    once: true,
                },
            });

            gsap.from(".strip-index", {
                autoAlpha: 0,
                y: 24,
                duration: 0.7,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".cinematic-strip-matrix",
                    start: "top 76%",
                    once: true,
                },
            });

            gsap.from(".strip-title-short", {
                autoAlpha: 0,
                x: -22,
                duration: 0.72,
                stagger: 0.09,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".cinematic-strip-matrix",
                    start: "top 76%",
                    once: true,
                },
            });

            gsap.from(".segment-vector-card", {
                autoAlpha: 0,
                y: 28,
                scale: 0.84,
                duration: 0.9,
                stagger: 0.12,
                ease: "back.out(1.45)",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".cinematic-strip-matrix",
                    start: "top 72%",
                    once: true,
                },
            });

            gsap.from(
                ".content-meta-tag, .content-main-title, .content-body-desc, .content-footer-metrics",
                {
                    autoAlpha: 0,
                    y: 24,
                    duration: 0.7,
                    stagger: 0.045,
                    ease: "power3.out",
                    clearProps: "transform,opacity,visibility",
                    scrollTrigger: {
                        trigger: ".cinematic-strip-matrix",
                        start: "top 68%",
                        once: true,
                    },
                }
            );

            gsap.from(".premium-roller", {
                autoAlpha: 0,
                x: 24,
                rotate: -8,
                duration: 0.9,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".wall-paint-vector",
                    start: "top 84%",
                    once: true,
                },
            });

            gsap.from(".premium-spotlight", {
                autoAlpha: 0,
                y: 18,
                scale: 0.9,
                duration: 0.82,
                stagger: 0.12,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".hoarding-vector",
                    start: "top 84%",
                    once: true,
                },
            });

            gsap.from(".premium-plane", {
                autoAlpha: 0,
                x: -26,
                y: 14,
                rotate: -10,
                duration: 0.9,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".airport-media-vector",
                    start: "top 84%",
                    once: true,
                },
            });

            gsap.from(".legacy-signal-dock", {
                autoAlpha: 0,
                y: 72,
                scale: 0.96,
                duration: 1,
                ease: "power4.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".legacy-signal-dock",
                    start: "top 86%",
                    once: true,
                },
            });

            gsap.from(".legacy-signal-head span, .legacy-signal-head h3", {
                autoAlpha: 0,
                y: 32,
                duration: 0.78,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".legacy-signal-dock",
                    start: "top 82%",
                    once: true,
                },
            });

            gsap.from(".legacy-signal-card", {
                autoAlpha: 0,
                y: 42,
                scale: 0.96,
                duration: 0.82,
                stagger: 0.12,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: {
                    trigger: ".legacy-signal-grid",
                    start: "top 88%",
                    once: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    const handleSegmentChange = (index: number) => {
        startTransition(() => {
            setActiveSegment(index);
        });
    };

    return (
        <section ref={sectionRef} className="cinematic-about" id="about">
            <div className="ambient-radial-glow" />
            <div className="ambient-blue-glow" />

            <div className="cinematic-wrapper">
                <header className="about-header">
                    <span className="about-eyebrow" data-motion="clip">
                        About Rajkot Airport Media
                    </span>

                    <h2 className="about-title" data-motion="up" data-motion-delay="0.08">
                        A Legacy Built Through
                        <span> Outdoor & Airport Media</span>
                    </h2>

                    <p className="about-description" data-motion="up" data-motion-delay="0.16">
                        Mukesh started with wall painting and advertising, expanded into
                        outdoor hoardings, and now brings trusted media execution to premium
                        airport advertising at Rajkot Airport.
                    </p>
                </header>

                <div
                    className={`cinematic-strip-matrix is-three-history active-${activeSegment} ${isPending ? "is-transitioning" : ""
                        }`}
                    ref={containerRef}
                    data-motion-group
                >
                    {strategicPillars.map((item, index) => {
                        const isCurrent = activeSegment === index;
                        const position =
                            index === activeSegment
                                ? "is-expanded"
                                : index < activeSegment
                                    ? "is-before"
                                    : "is-after";

                        return (
                            <div
                                key={item.key}
                                className={`matrix-strip-segment ${position}`}
                                onClick={() => handleSegmentChange(index)}
                                onMouseEnter={() => handleSegmentChange(index)}
                                data-motion-item
                            >
                                <div className="strip-header-zone">
                                    <span className="strip-index">{item.index}</span>
                                    <span className="strip-title-short">{item.title}</span>
                                </div>

                                <div className="strip-expanded-content">
                                    <div className="content-inner-fade">
                                        <div className="segment-copy">
                                            <span className="content-meta-tag">{item.meta}</span>
                                            <h3 className="content-main-title">{item.title}</h3>
                                            <p className="content-body-desc">{item.body}</p>

                                            <div className="content-footer-metrics">
                                                <div className="metric-badge">
                                                    <span className="badge-lbl">MEDIA TYPE</span>
                                                    <strong className="badge-val">{item.metric}</strong>
                                                </div>

                                                <span className="system-coordinates">
                                                    {item.coords}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="segment-vector-card">
                                            {renderPillarVector(item.key)}
                                        </div>
                                    </div>
                                </div>

                                <div className="strip-axis-line" />

                                {isCurrent && (
                                    <span className="active-card-glow" aria-hidden="true" />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="legacy-signal-dock" data-motion="zoom" data-motion-delay="0.1">
                    <div className="legacy-signal-head">
                        <span>Growth Path</span>
                        <h3>From street-level visibility to airport media presence.</h3>
                    </div>

                    <div className="legacy-signal-grid">
                        {legacySignals.map((item) => (
                            <div className="legacy-signal-card" key={item.title}>
                                <strong>{item.number}</strong>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function renderPillarVector(type: PillarKey) {
    if (type === "arts") return <WallPaintingVector />;
    if (type === "publicity") return <HoardingVector />;
    return <AirportMediaVector />;
}

function WallPaintingVector() {
    return (
        <svg viewBox="0 0 220 180" className="pillar-vector wall-paint-vector" aria-hidden="true">
            <defs>
                <linearGradient id="wallPremiumBg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#eef7ff" />
                </linearGradient>

                <linearGradient id="paintRedBlue" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E21D2D" />
                    <stop offset="100%" stopColor="#1E2A78" />
                </linearGradient>
            </defs>

            <path
                d="M36 42 H158 C168 42 176 50 176 60 V122 C176 132 168 140 158 140 H36 Z"
                className="premium-wall-panel"
            />

            <path d="M48 62 H136" className="wall-grid-line" />
            <path d="M48 84 H150" className="wall-grid-line" />
            <path d="M48 106 H122" className="wall-grid-line" />

            <path
                d="M48 66 C78 52 105 76 136 60"
                className="premium-paint-stroke paint-stroke-one"
            />
            <path
                d="M48 88 C82 74 112 98 150 80"
                className="premium-paint-stroke paint-stroke-two"
            />
            <path
                d="M48 110 C74 96 98 122 126 104"
                className="premium-paint-stroke paint-stroke-three"
            />

            <g className="premium-roller">
                <rect x="126" y="42" width="54" height="18" rx="9" className="roller-premium-head" />
                <path d="M153 60 V80 C153 88 159 94 167 94 H178" className="premium-dark-line" />
                <rect x="174" y="88" width="12" height="42" rx="6" className="roller-premium-handle" />
            </g>

            <path
                d="M34 148 C58 132 86 158 112 143 C140 126 158 144 186 132"
                className="premium-flow-line"
            />

            <circle cx="188" cy="54" r="10" className="floating-dot dot-red" />
            <circle cx="194" cy="104" r="7" className="floating-dot dot-blue" />
            <circle cx="30" cy="112" r="5" className="floating-dot dot-soft" />
        </svg>
    );
}

function HoardingVector() {
    return (
        <svg viewBox="0 0 220 180" className="pillar-vector hoarding-vector" aria-hidden="true">
            <defs>
                <linearGradient id="hoardingGlow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#edf6ff" />
                </linearGradient>
            </defs>

            <path d="M32 146 H188" className="premium-road-line" />

            <rect x="38" y="34" width="144" height="76" rx="12" className="premium-hoarding-frame" />
            <rect x="50" y="46" width="120" height="52" rx="7" className="premium-hoarding-screen" />

            <path d="M62 61 H150" className="hoarding-copy-line red-copy" />
            <path d="M62 78 H126" className="hoarding-copy-line blue-copy" />
            <path d="M62 91 H146" className="hoarding-copy-line soft-copy" />

            <path d="M72 110 V145" className="premium-dark-line" />
            <path d="M148 110 V145" className="premium-dark-line" />
            <path d="M58 145 H162" className="premium-dark-line" />

            <g className="premium-spotlight left-spot">
                <circle cx="47" cy="128" r="7" className="spotlight-source" />
                <path d="M48 126 L76 110 L96 145 Z" className="spotlight-beam-premium" />
            </g>

            <g className="premium-spotlight right-spot">
                <circle cx="173" cy="128" r="7" className="spotlight-source" />
                <path d="M172 126 L144 110 L124 145 Z" className="spotlight-beam-premium" />
            </g>

            <path
                d="M30 32 C68 12 152 12 190 32"
                className="premium-flow-line hoarding-top-arc"
            />

            <g className="mini-traffic">
                <rect x="94" y="136" width="28" height="9" rx="4" />
                <circle cx="101" cy="146" r="3" />
                <circle cx="116" cy="146" r="3" />
            </g>
        </svg>
    );
}

function AirportMediaVector() {
    return (
        <svg viewBox="0 0 220 180" className="pillar-vector airport-media-vector" aria-hidden="true">
            <defs>
                <linearGradient id="terminalPremium" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#eef7ff" />
                </linearGradient>
            </defs>

            <path
                d="M36 132 H184 V86 C184 66 166 48 146 48 H74 C54 48 36 66 36 86 Z"
                className="premium-terminal-shell"
            />

            <path d="M52 84 H168" className="terminal-roof-line" />
            <path d="M56 132 V152" className="premium-dark-line" />
            <path d="M92 132 V152" className="premium-dark-line" />
            <path d="M128 132 V152" className="premium-dark-line" />
            <path d="M164 132 V152" className="premium-dark-line" />
            <path d="M42 152 H178" className="premium-dark-line" />

            <rect x="62" y="70" width="96" height="44" rx="9" className="premium-airport-screen" />
            <path d="M78 88 H143" className="screen-light-line" />
            <path d="M78 101 H121" className="screen-light-line short" />

            <path
                d="M38 48 C78 14 142 16 182 48"
                className="premium-flow-line airport-flight-route"
            />

            <path
                d="M174 42 L198 50 L174 58 L180 50 Z"
                className="premium-plane"
            />

            <circle cx="110" cy="92" r="48" className="premium-radar radar-large" />
            <circle cx="110" cy="92" r="28" className="premium-radar radar-small" />

            <g className="airport-passenger-dots">
                <circle cx="72" cy="124" r="4" />
                <circle cx="110" cy="124" r="4" />
                <circle cx="148" cy="124" r="4" />
            </g>
        </svg>
    );
}