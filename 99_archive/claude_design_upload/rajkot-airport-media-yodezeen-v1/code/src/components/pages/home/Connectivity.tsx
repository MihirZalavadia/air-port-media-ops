// "use client";

// import type { CSSProperties } from "react";

// const AIRPORT_NAME = "Rajkot International Airport";
// const mapImage = "/images/home/indianmap.svg";


// const AIRPORT_HUB = {
//     city: "Rajkot",
//     code: "RAJ",
//     x: 265, // Moved right onto the Kathiawar peninsula
//     y: 352, // Positioned correctly in Gujarat
// };

// const AIRPORT_CONNECTIONS = [
//     { city: "Delhi", code: "DEL", mins: "110 min", x: 375, y: 230, labelDx: 0, labelDy: -26 }, // Center North
//     { city: "Ahmedabad", code: "AMD", mins: "45 min", x: 300, y: 350, labelDx: 42, labelDy: -5 }, // Shifted text right to prevent overlapping RAJ
//     { city: "Mumbai", code: "BOM", mins: "75 min", x: 310, y: 430, labelDx: 0, labelDy: -26 }, // Coastal Maharashtra
//     { city: "Goa", code: "GOI", mins: "95 min", x: 328, y: 498, labelDx: 0, labelDy: -26 }, // Mid-coast
//     { city: "Hyderabad", code: "HYD", mins: "115 min", x: 435, y: 480, labelDx: 0, labelDy: -26 }, // Inland South-Central
//     { city: "Bengaluru", code: "BLR", mins: "130 min", x: 388, y: 550, labelDx: 0, labelDy: -26 }, // Moved up from the ocean into South India
// ];

// export default function Connectivity() {
//     const hub = {
//         x: AIRPORT_HUB.x,
//         y: AIRPORT_HUB.y,
//     };

//     const cities = AIRPORT_CONNECTIONS.map((city) => ({
//         ...city,
//         p: {
//             x: city.x,
//             y: city.y,
//         },
//     }));

//     const routePath = (city: (typeof cities)[number]) => {
//         const midX = (hub.x + city.p.x) / 2;
//         const midY = (hub.y + city.p.y) / 2;
//         const distance = Math.hypot(city.p.x - hub.x, city.p.y - hub.y);
//         const controlY = midY - Math.max(38, distance * 0.16);

//         return `M ${hub.x} ${hub.y} Q ${midX} ${controlY} ${city.p.x} ${city.p.y}`;
//     };

//     return (
//         <section className="connectivity-modern" id="connectivity" data-animate>
//             <div className="connectivity-container">
//                 <div className="connectivity-top">
//                     <div>
//                         <span className="connectivity-tag">Connectivity</span>
//                         <h2>
//                             Rajkot connected with India&apos;s major{" "}
//                             <span>metro markets</span>
//                         </h2>
//                     </div>

//                     <p>
//                         {AIRPORT_NAME} connects Gujarat&apos;s growing business region with
//                         high-value metro audiences, making it a strong media touchpoint for
//                         regional and national campaigns.
//                     </p>
//                 </div>

//                 <div className="connectivity-layout">
//                     <div className="map-card">
//                         <svg viewBox="0 0 1000 700" className="route-svg">
//                             <defs>
//                                 <radialGradient id="mapGlow" cx="45%" cy="48%" r="60%">
//                                     <stop offset="0%" stopColor="#1597E5" stopOpacity="0.22" />
//                                     <stop offset="70%" stopColor="#1597E5" stopOpacity="0.05" />
//                                     <stop offset="100%" stopColor="#1597E5" stopOpacity="0" />
//                                 </radialGradient>
//                             </defs>

//                             <rect width="1000" height="700" fill="url(#mapGlow)" />

//                             <image
//                                 href={mapImage}
//                                 x="0"
//                                 y="0"
//                                 width="1000"
//                                 height="700"
//                                 preserveAspectRatio="xMidYMid meet"
//                                 className="india-map-image"
//                             />

//                             {cities.map((city, i) => {
//                                 const d = routePath(city);

//                                 return (
//                                     <g key={city.code}>
//                                         <path d={d} className="route-line-base" />

//                                         <path
//                                             d={d}
//                                             className="route-line-flow"
//                                             style={
//                                                 { animationDelay: `${i * 0.2}s` } as CSSProperties
//                                             }
//                                         />

//                                         <g
//                                             className="route-plane"
//                                             style={
//                                                 { "--plane-delay": `${i * 0.2}s` } as CSSProperties
//                                             }
//                                             transform={`translate(${(hub.x + city.p.x) / 2} ${(hub.y + city.p.y) / 2
//                                                 }) rotate(${Math.atan2(city.p.y - hub.y, city.p.x - hub.x) *
//                                                 (180 / Math.PI)
//                                                 }) scale(0.7)`}
//                                         >
//                                             <path d="M-16 1 L-2 -2 L14 -11 L18 -8 L6 0 L18 8 L14 11 L-2 3 L-16 5 Z" />
//                                         </g>
//                                     </g>
//                                 );
//                             })}

//                             <circle cx={hub.x} cy={hub.y} r="60" className="hub-glow" />
//                             <circle cx={hub.x} cy={hub.y} r="8" className="hub-dot" />
//                             <circle cx={hub.x} cy={hub.y} r="8" className="hub-pulse" />

//                             <text
//                                 x={hub.x - 18}
//                                 y={hub.y - 16}
//                                 textAnchor="end"
//                                 className="hub-label"
//                             >
//                                 RAJKOT
//                             </text>

//                             <text
//                                 x={hub.x - 18}
//                                 y={hub.y + 7}
//                                 textAnchor="end"
//                                 className="hub-code"
//                             >
//                                 RAJ HUB
//                             </text>

//                             {cities.map((city) => (
//                                 <g key={`${city.code}-node`} className="city-node">
//                                     <circle
//                                         cx={city.p.x}
//                                         cy={city.p.y}
//                                         r="13"
//                                         className="city-ring"
//                                     />

//                                     <circle
//                                         cx={city.p.x}
//                                         cy={city.p.y}
//                                         r="5"
//                                         className="city-dot"
//                                     />

//                                     <text
//                                         x={city.p.x + (city.labelDx ?? 0)}
//                                         y={city.p.y + (city.labelDy ?? -24)}
//                                         textAnchor="middle"
//                                         className="city-name"
//                                     >
//                                         {city.city}
//                                     </text>

//                                     <text
//                                         x={city.p.x + (city.labelDx ?? 0)}
//                                         y={city.p.y + (city.labelDy ?? -24) + 17}
//                                         textAnchor="middle"
//                                         className="city-code"
//                                     >
//                                         {city.code} · {city.mins}
//                                     </text>
//                                 </g>
//                             ))}
//                         </svg>

//                         <div className="map-floating-stats">
//                             <div>
//                                 <span>Connected metros</span>
//                                 <strong>{AIRPORT_CONNECTIONS.length}</strong>
//                             </div>

//                             <div>
//                                 <span>Airport hub</span>
//                                 <strong>RAJ</strong>
//                             </div>
//                         </div>
//                     </div>

//                     <aside className="connectivity-panel">
//                         <span className="panel-label">Metro access</span>
//                         <h3>Strategic reach from Gujarat&apos;s business corridor.</h3>

//                         <div className="route-list">
//                             {AIRPORT_CONNECTIONS.map((city) => (
//                                 <div key={city.code}>
//                                     <span>{city.city}</span>
//                                     <b>
//                                         {city.code} · {city.mins}
//                                     </b>
//                                 </div>
//                             ))}
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </section>
//     );
// }















// after seo



// "use client";

// import type { CSSProperties } from "react";

// const AIRPORT_NAME = "Rajkot International Airport";
// const mapImage = "/images/home/indianmap.svg";

// const AIRPORT_HUB = {
//     city: "Rajkot",
//     code: "RAJ",
//     x: 265,
//     y: 352,
// };

// const AIRPORT_CONNECTIONS = [
//     { city: "Delhi", code: "DEL", mins: "110 min", x: 375, y: 230, labelDx: 0, labelDy: -26 },
//     { city: "Ahmedabad", code: "AMD", mins: "45 min", x: 300, y: 350, labelDx: 42, labelDy: -5 },
//     { city: "Mumbai", code: "BOM", mins: "75 min", x: 310, y: 430, labelDx: 0, labelDy: -26 },
//     { city: "Goa", code: "GOI", mins: "95 min", x: 328, y: 498, labelDx: 0, labelDy: -26 },
//     { city: "Hyderabad", code: "HYD", mins: "115 min", x: 435, y: 480, labelDx: 0, labelDy: -26 },
//     { city: "Bengaluru", code: "BLR", mins: "130 min", x: 388, y: 550, labelDx: 0, labelDy: -26 },
// ];

// export default function Connectivity() {
//     const hub = {
//         x: AIRPORT_HUB.x,
//         y: AIRPORT_HUB.y,
//     };

//     const cities = AIRPORT_CONNECTIONS.map((city) => ({
//         ...city,
//         p: {
//             x: city.x,
//             y: city.y,
//         },
//     }));

//     const routePath = (city: (typeof cities)[number]) => {
//         const midX = (hub.x + city.p.x) / 2;
//         const midY = (hub.y + city.p.y) / 2;
//         const distance = Math.hypot(city.p.x - hub.x, city.p.y - hub.y);
//         const controlY = midY - Math.max(38, distance * 0.16);

//         return `M ${hub.x} ${hub.y} Q ${midX} ${controlY} ${city.p.x} ${city.p.y}`;
//     };

//     return (
//         <section
//             className="connectivity-modern"
//             id="connectivity"
//             data-animate
//             aria-labelledby="connectivity-title"
//         >
//             <div className="connectivity-container">
//                 <div className="connectivity-top">
//                     <div>
//                         <span className="connectivity-tag">Connectivity</span>
//                         <h2 id="connectivity-title">
//                             Routes that connect Rajkot with{" "}
//                             <span>India&apos;s metro markets</span>
//                         </h2>
//                     </div>

//                     <p>
//                         {AIRPORT_NAME} connects Gujarat&apos;s business corridor with key
//                         metro routes, giving brands a clear airport media touchpoint for
//                         regional and national campaigns.
//                     </p>
//                 </div>

//                 <div className="connectivity-layout">
//                     <div className="map-card">
//                         <svg
//                             viewBox="0 0 1000 700"
//                             className="route-svg"
//                             role="img"
//                             aria-labelledby="connectivity-map-title connectivity-map-desc"
//                         >
//                             <title id="connectivity-map-title">
//                                 Rajkot Airport connectivity map
//                             </title>
//                             <desc id="connectivity-map-desc">
//                                 Route map showing Rajkot Airport connections with Delhi,
//                                 Ahmedabad, Mumbai, Goa, Hyderabad and Bengaluru.
//                             </desc>

//                             <defs>
//                                 <radialGradient id="mapGlow" cx="45%" cy="48%" r="60%">
//                                     <stop offset="0%" stopColor="#1597E5" stopOpacity="0.22" />
//                                     <stop offset="70%" stopColor="#1597E5" stopOpacity="0.05" />
//                                     <stop offset="100%" stopColor="#1597E5" stopOpacity="0" />
//                                 </radialGradient>
//                             </defs>

//                             <rect width="1000" height="700" fill="url(#mapGlow)" />

//                             <image
//                                 href={mapImage}
//                                 x="0"
//                                 y="0"
//                                 width="1000"
//                                 height="700"
//                                 preserveAspectRatio="xMidYMid meet"
//                                 className="india-map-image"
//                                 aria-hidden="true"
//                             />

//                             {cities.map((city, i) => {
//                                 const d = routePath(city);

//                                 return (
//                                     <g key={city.code}>
//                                         <path d={d} className="route-line-base" />

//                                         <path
//                                             d={d}
//                                             className="route-line-flow"
//                                             style={
//                                                 { animationDelay: `${i * 0.2}s` } as CSSProperties
//                                             }
//                                         />

//                                         <g
//                                             className="route-plane"
//                                             aria-hidden="true"
//                                             style={
//                                                 { "--plane-delay": `${i * 0.2}s` } as CSSProperties
//                                             }
//                                             transform={`translate(${(hub.x + city.p.x) / 2} ${(hub.y + city.p.y) / 2
//                                                 }) rotate(${Math.atan2(city.p.y - hub.y, city.p.x - hub.x) *
//                                                 (180 / Math.PI)
//                                                 }) scale(0.7)`}
//                                         >
//                                             <path d="M-16 1 L-2 -2 L14 -11 L18 -8 L6 0 L18 8 L14 11 L-2 3 L-16 5 Z" />
//                                         </g>
//                                     </g>
//                                 );
//                             })}

//                             <circle cx={hub.x} cy={hub.y} r="60" className="hub-glow" />
//                             <circle cx={hub.x} cy={hub.y} r="8" className="hub-dot" />
//                             <circle cx={hub.x} cy={hub.y} r="8" className="hub-pulse" />

//                             <text
//                                 x={hub.x - 18}
//                                 y={hub.y - 16}
//                                 textAnchor="end"
//                                 className="hub-label"
//                             >
//                                 RAJKOT
//                             </text>

//                             <text
//                                 x={hub.x - 18}
//                                 y={hub.y + 7}
//                                 textAnchor="end"
//                                 className="hub-code"
//                             >
//                                 RAJ HUB
//                             </text>

//                             {cities.map((city) => (
//                                 <g key={`${city.code}-node`} className="city-node">
//                                     <circle
//                                         cx={city.p.x}
//                                         cy={city.p.y}
//                                         r="13"
//                                         className="city-ring"
//                                     />

//                                     <circle
//                                         cx={city.p.x}
//                                         cy={city.p.y}
//                                         r="5"
//                                         className="city-dot"
//                                     />

//                                     <text
//                                         x={city.p.x + (city.labelDx ?? 0)}
//                                         y={city.p.y + (city.labelDy ?? -24)}
//                                         textAnchor="middle"
//                                         className="city-name"
//                                     >
//                                         {city.city}
//                                     </text>

//                                     <text
//                                         x={city.p.x + (city.labelDx ?? 0)}
//                                         y={city.p.y + (city.labelDy ?? -24) + 17}
//                                         textAnchor="middle"
//                                         className="city-code"
//                                     >
//                                         {city.code} · {city.mins}
//                                     </text>
//                                 </g>
//                             ))}
//                         </svg>

//                         <div className="map-floating-stats" aria-label="Rajkot Airport route highlights">
//                             <div>
//                                 <span>Connected metros</span>
//                                 <strong>{AIRPORT_CONNECTIONS.length}</strong>
//                             </div>

//                             <div>
//                                 <span>Airport hub</span>
//                                 <strong>RAJ</strong>
//                             </div>
//                         </div>
//                     </div>

//                     <aside
//                         className="connectivity-panel"
//                         aria-label="Rajkot Airport metro access list"
//                     >
//                         <span className="panel-label">Metro access</span>
//                         <h3>Strategic reach from Gujarat&apos;s business corridor.</h3>

//                         <div className="route-list" aria-label="Connected airport routes">
//                             {AIRPORT_CONNECTIONS.map((city) => (
//                                 <div key={city.code}>
//                                     <span>{city.city}</span>
//                                     <b>
//                                         {city.code} · {city.mins}
//                                     </b>
//                                 </div>
//                             ))}
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </section>
//     );
// }















"use client";

import type { CSSProperties } from "react";

const AIRPORT_NAME = "Rajkot International Airport";
const mapImage = "/images/home/indianmap.svg";

const AIRPORT_HUB = {
    city: "Rajkot",
    code: "RAJ",
    x: 265,
    y: 352,
};

const AIRPORT_CONNECTIONS = [
    { city: "Delhi", code: "DEL", mins: "110 min", x: 375, y: 230, labelDx: 0, labelDy: -26 },
    { city: "Ahmedabad", code: "AMD", mins: "45 min", x: 300, y: 350, labelDx: 42, labelDy: -5 },
    { city: "Mumbai", code: "BOM", mins: "75 min", x: 310, y: 430, labelDx: 0, labelDy: -26 },
    { city: "Goa", code: "GOI", mins: "95 min", x: 328, y: 498, labelDx: 0, labelDy: -26 },
    { city: "Hyderabad", code: "HYD", mins: "115 min", x: 435, y: 480, labelDx: 0, labelDy: -26 },
    { city: "Bengaluru", code: "BLR", mins: "130 min", x: 388, y: 550, labelDx: 0, labelDy: -26 },
];

export default function Connectivity() {
    const hub = {
        x: AIRPORT_HUB.x,
        y: AIRPORT_HUB.y,
    };

    const cities = AIRPORT_CONNECTIONS.map((city) => ({
        ...city,
        p: {
            x: city.x,
            y: city.y,
        },
    }));

    const routePath = (city: (typeof cities)[number]) => {
        const midX = (hub.x + city.p.x) / 2;
        const midY = (hub.y + city.p.y) / 2;
        const distance = Math.hypot(city.p.x - hub.x, city.p.y - hub.y);
        const controlY = midY - Math.max(38, distance * 0.16);

        return `M ${hub.x} ${hub.y} Q ${midX} ${controlY} ${city.p.x} ${city.p.y}`;
    };

    return (
        <section
            className="connectivity-modern"
            id="connectivity"
            data-animate
            aria-labelledby="connectivity-title"
        >
            <div className="connectivity-container">
                <div className="connectivity-top">
                    <div>
                        <span className="connectivity-tag" data-motion="clip">
                            Connectivity
                        </span>

                        <h2
                            id="connectivity-title"
                            data-motion="up"
                            data-motion-delay="0.08"
                        >
                            Routes that connect Rajkot with{" "}
                            <span>India&apos;s metro markets</span>
                        </h2>
                    </div>

                    <p data-motion="right" data-motion-delay="0.14">
                        {AIRPORT_NAME} connects Gujarat&apos;s business corridor with key
                        metro routes, giving brands a clear airport media touchpoint for
                        regional and national campaigns.
                    </p>
                </div>

                <div className="connectivity-layout">
                    <div
                        className="map-card"
                        data-motion="zoom"
                        data-motion-delay="0.12"
                    >
                        <svg
                            viewBox="0 0 1000 700"
                            className="route-svg"
                            role="img"
                            aria-labelledby="connectivity-map-title connectivity-map-desc"
                        >
                            <title id="connectivity-map-title">
                                Rajkot Airport connectivity map
                            </title>
                            <desc id="connectivity-map-desc">
                                Route map showing Rajkot Airport connections with Delhi,
                                Ahmedabad, Mumbai, Goa, Hyderabad and Bengaluru.
                            </desc>

                            <defs>
                                <radialGradient id="mapGlow" cx="45%" cy="48%" r="60%">
                                    <stop offset="0%" stopColor="#1597E5" stopOpacity="0.22" />
                                    <stop offset="70%" stopColor="#1597E5" stopOpacity="0.05" />
                                    <stop offset="100%" stopColor="#1597E5" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            <rect width="1000" height="700" fill="url(#mapGlow)" />

                            <image
                                href={mapImage}
                                x="0"
                                y="0"
                                width="1000"
                                height="700"
                                preserveAspectRatio="xMidYMid meet"
                                className="india-map-image"
                                aria-hidden="true"
                            />

                            {cities.map((city, i) => {
                                const d = routePath(city);

                                return (
                                    <g key={city.code}>
                                        <path d={d} className="route-line-base" />

                                        <path
                                            d={d}
                                            className="route-line-flow"
                                            style={
                                                { animationDelay: `${i * 0.2}s` } as CSSProperties
                                            }
                                        />

                                        <g
                                            className="route-plane"
                                            aria-hidden="true"
                                            style={
                                                { "--plane-delay": `${i * 0.2}s` } as CSSProperties
                                            }
                                            transform={`translate(${(hub.x + city.p.x) / 2} ${(hub.y + city.p.y) / 2
                                                }) rotate(${Math.atan2(city.p.y - hub.y, city.p.x - hub.x) *
                                                (180 / Math.PI)
                                                }) scale(0.7)`}
                                        >
                                            <path d="M-16 1 L-2 -2 L14 -11 L18 -8 L6 0 L18 8 L14 11 L-2 3 L-16 5 Z" />
                                        </g>
                                    </g>
                                );
                            })}

                            <circle cx={hub.x} cy={hub.y} r="60" className="hub-glow" />
                            <circle cx={hub.x} cy={hub.y} r="8" className="hub-dot" />
                            <circle cx={hub.x} cy={hub.y} r="8" className="hub-pulse" />

                            <text
                                x={hub.x - 18}
                                y={hub.y - 16}
                                textAnchor="end"
                                className="hub-label"
                            >
                                RAJKOT
                            </text>

                            <text
                                x={hub.x - 18}
                                y={hub.y + 7}
                                textAnchor="end"
                                className="hub-code"
                            >
                                RAJ HUB
                            </text>

                            {cities.map((city) => (
                                <g key={`${city.code}-node`} className="city-node">
                                    <circle
                                        cx={city.p.x}
                                        cy={city.p.y}
                                        r="13"
                                        className="city-ring"
                                    />

                                    <circle
                                        cx={city.p.x}
                                        cy={city.p.y}
                                        r="5"
                                        className="city-dot"
                                    />

                                    <text
                                        x={city.p.x + (city.labelDx ?? 0)}
                                        y={city.p.y + (city.labelDy ?? -24)}
                                        textAnchor="middle"
                                        className="city-name"
                                    >
                                        {city.city}
                                    </text>

                                    <text
                                        x={city.p.x + (city.labelDx ?? 0)}
                                        y={city.p.y + (city.labelDy ?? -24) + 17}
                                        textAnchor="middle"
                                        className="city-code"
                                    >
                                        {city.code} · {city.mins}
                                    </text>
                                </g>
                            ))}
                        </svg>

                        <div
                            className="map-floating-stats"
                            aria-label="Rajkot Airport route highlights"
                            data-motion-group
                        >
                            <div data-motion-item>
                                <span>Connected metros</span>
                                <strong>{AIRPORT_CONNECTIONS.length}</strong>
                            </div>

                            <div data-motion-item>
                                <span>Airport hub</span>
                                <strong>RAJ</strong>
                            </div>
                        </div>
                    </div>

                    <aside
                        className="connectivity-panel"
                        aria-label="Rajkot Airport metro access list"
                        data-motion="left"
                        data-motion-delay="0.2"
                    >
                        <span className="panel-label">Metro access</span>
                        <h3>Strategic reach from Gujarat&apos;s business corridor.</h3>

                        <div
                            className="route-list"
                            aria-label="Connected airport routes"
                            data-motion-group
                        >
                            {AIRPORT_CONNECTIONS.map((city) => (
                                <div key={city.code} data-motion-item>
                                    <span>{city.city}</span>
                                    <b>
                                        {city.code} · {city.mins}
                                    </b>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}