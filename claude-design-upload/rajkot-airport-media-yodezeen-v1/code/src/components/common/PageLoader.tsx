// "use client";

// import { useEffect, useState } from "react";
// import "./PageLoader.css";

// export default function PageLoader() {
//     const [hide, setHide] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setHide(true);
//         }, 3200);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className={`airport-loader ${hide ? "hide" : ""}`}>
//             <div className="loader-door loader-door-left" />
//             <div className="loader-door loader-door-right" />

//             <div className="loader-runway">
//                 <span />
//                 <span />
//                 <span />
//             </div>

//             <div className="loader-plane">
//                 <PlaneIcon />
//             </div>

//             <div className="loader-brand">
//                 <img src="/images/common/logo.jpeg" alt="Mukesh Arts" />
//                 <p>Rajkot Airport Media <br /> X <br /> Mukesh Art</p>
//                 <small>Preparing premium airport visibility</small>
//             </div>
//         </div>
//     );
// }

// function PlaneIcon() {
//     return (
//         <svg viewBox="0 0 120 40" aria-hidden="true">
//             <path
//                 d="M8 22 L45 18 L78 5 C88 1 98 3 106 9 L111 13 L80 23 L106 31 L99 36 L64 28 L35 33 L24 39 L18 37 L29 27 L8 26 Z"
//                 fill="currentColor"
//             />
//         </svg>
//     );
// }










// "use client";

// import { useEffect, useState } from "react";
// import "./PageLoader.css";

// export default function PageLoader() {
//     const [hide, setHide] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setHide(true);
//         }, 3600);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className={`airport-loader ${hide ? "hide" : ""}`}>
//             <div className="loader-door loader-door-left" />
//             <div className="loader-door loader-door-right" />

//             <div className="loader-grid" />
//             <div className="loader-glow loader-glow-red" />
//             <div className="loader-glow loader-glow-blue" />

//             <div className="loader-plane">
//                 <PlaneIcon />
//             </div>

//             <div className="loader-runway">
//                 <span />
//                 <span />
//                 <span />
//             </div>

//             <div className="loader-brand">
//                 <div className="loader-logo-box">
//                     <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                         <rect x="0" y="0" width="140" height="90" rx="10" fill="currentColor" opacity="0" />
//                         <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//                         <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//                         <text x="70" y="63" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="800" letterSpacing="2.5" fill="#111111">
//                             MUKESH
//                         </text>
//                         <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
//                         <text x="101" y="78" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="800" letterSpacing="3" fill="#FFFFFF">
//                             ART
//                         </text>
//                     </svg>
//                 </div>


//                 <span className="loader-kicker">Airport Advertising Media</span>

//                 <h1>
//                     Rajkot Airport <br /><em>x</em><br /> Mukesh Arts
//                 </h1>

//                 <p>Preparing premium airport visibility</p>
//             </div>

//             <div className="loader-bottom-text">
//                 <span>RAJ</span>
//                 <span>Terminal Visibility</span>
//                 <span>Premium Media</span>
//             </div>
//         </div>
//     );
// }

// function PlaneIcon() {
//     return (
//         <svg viewBox="0 0 120 40" aria-hidden="true">
//             <path
//                 d="M8 22 L45 18 L78 5 C88 1 98 3 106 9 L111 13 L80 23 L106 31 L99 36 L64 28 L35 33 L24 39 L18 37 L29 27 L8 26 Z"
//                 fill="currentColor"
//             />
//         </svg>
//     );
// }










// "use client";

// import { useEffect, useState } from "react";
// import "./PageLoader.css";

// export default function PageLoader() {
//     const [hide, setHide] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => setHide(true), 3400);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className={`premium-loader ${hide ? "hide" : ""}`}>
//             <div className="premium-door premium-door-left" />
//             <div className="premium-door premium-door-right" />

//             <div className="premium-loader-content">
//                 <div className="premium-aircraft">
//                     <AircraftIcon />
//                 </div>

//                 <span className="premium-kicker">Rajkot Airport Media</span>
//                 <h1>Mukesh Arts</h1>

//                 <div className="premium-runway">
//                     <i />
//                     <i />
//                     <i />
//                 </div>
//             </div>
//         </div>
//     );
// }

// function AircraftIcon() {
//     return (
//         <svg
//             viewBox="0 0 60 36"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden="true"
//         >
//             <path d="M29 7 Q30 2.5 30 2.5 Q30 2.5 31 7 L31 13" strokeWidth="1.3" />
//             <path d="M24 14 L36 14" strokeWidth="1.3" />
//             <path d="M24 14 L23 13" strokeWidth="1.2" />
//             <path d="M36 14 L37 13" strokeWidth="1.2" />
//             <ellipse cx="30" cy="20" rx="4" ry="6" strokeWidth="1.3" />
//             <path d="M6 25 L25 17 L25 20 L9 27 Z" strokeWidth="1.3" />
//             <path d="M54 25 L35 17 L35 20 L51 27 Z" strokeWidth="1.3" />
//             <ellipse cx="15" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
//             <ellipse cx="45" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
//             <g strokeWidth="0.8" opacity="0.6">
//                 <path d="M12 30 L12 33" />
//                 <path d="M15 30 L15 34" />
//                 <path d="M18 30 L18 33" />
//                 <path d="M42 30 L42 33" />
//                 <path d="M45 30 L45 34" />
//                 <path d="M48 30 L48 33" />
//             </g>
//         </svg>
//     );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import mukeshLogo from "@/public/images/home/mukesh airport media-Photoroom.png";
import mukeshLogo from "@/public/images/home/cover_logo.png";

import "./PageLoader.css";

export default function PageLoader() {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHide(true);
        }, 3600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`airport-loader ${hide ? "hide" : ""}`}>
            <div className="loader-door loader-door-left" />
            <div className="loader-door loader-door-right" />

            <div className="loader-grid" />
            <div className="loader-glow loader-glow-red" />
            <div className="loader-glow loader-glow-blue" />

            {/* <div className="loader-plane loader-aircraft">
                <AircraftIcon />
            </div> */}

            {/* <div className="loader-runway">
                <span />
                <span />
                <span />
            </div> */}

            <div className="loader-runway">
                <div className="runway-center-line" />

                <div className="runway-aircraft">
                    {/* <AircraftIcon /> */}
                    <PlaneIcon />
                </div>
            </div>

            <div className="loader-brand">
                <div className="loader-logo-box">
                    <MukeshLogo />
                </div>

                <span className="loader-kicker">Airport Advertising Media</span>

                <h1>
                    Rajkot Airport <br />
                    <em>x</em>
                    <br />
                    Mukesh Arts
                </h1>

                {/* <p>Preparing premium airport visibility</p> */}
            </div>

            <div className="loader-bottom-text">
                <span>RAJ</span>
                <span>Terminal Visibility</span>
                <span>Premium Media</span>
            </div>
        </div>
    );
}

// function MukeshLogo() {
//     return (
//         <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//             <rect x="0" y="0" width="140" height="90" rx="10" fill="currentColor" opacity="0" />
//             <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//             <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//             <text
//                 x="70"
//                 y="63"
//                 textAnchor="middle"
//                 fontFamily="Arial, Helvetica, sans-serif"
//                 fontSize="24"
//                 fontWeight="800"
//                 letterSpacing="2.5"
//                 fill="#111111"
//             >
//                 MUKESH
//             </text>

//             <line
//                 x1="6"
//                 y1="72"
//                 x2="132"
//                 y2="72"
//                 stroke="#1E2A78"
//                 strokeWidth="2"
//                 strokeLinecap="square"
//             />

//             <text
//                 x="70"
//                 y="90"
//                 textAnchor="middle"
//                 // fontFamily="Georgia, 'Times New Roman', serif"
//                 fontFamily="Arial, Helvetica, sans-serif"
//                 fontSize="15"
//                 fontWeight="600"
//                 letterSpacing="1"
//                 fill="#1E2A78"
//             >
//                 AIRPORT MEDIA
//             </text>
//         </svg>
//     );
// }

// function AircraftIcon() {
//     return (
//         <svg
//             viewBox="0 0 60 36"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden="true"
//         >
//             <path d="M29 7 Q30 2.5 30 2.5 Q30 2.5 31 7 L31 13" strokeWidth="1.3" />
//             <path d="M24 14 L36 14" strokeWidth="1.3" />
//             <path d="M24 14 L23 13" strokeWidth="1.2" />
//             <path d="M36 14 L37 13" strokeWidth="1.2" />
//             <ellipse cx="30" cy="20" rx="4" ry="6" strokeWidth="1.3" />
//             <path d="M6 25 L25 17 L25 20 L9 27 Z" strokeWidth="1.3" />
//             <path d="M54 25 L35 17 L35 20 L51 27 Z" strokeWidth="1.3" />
//             <ellipse cx="15" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
//             <ellipse cx="45" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />

//             <g strokeWidth="0.8" opacity="0.6">
//                 <path d="M12 30 L12 33" />
//                 <path d="M15 30 L15 34" />
//                 <path d="M18 30 L18 33" />
//                 <path d="M42 30 L42 33" />
//                 <path d="M45 30 L45 34" />
//                 <path d="M48 30 L48 33" />
//             </g>
//         </svg>
//     );
// }

function MukeshLogo() {
    return (
        <Image
            src={mukeshLogo}
            alt="Mukesh Airport Media Logo"
            width={140}
            height={90}
            priority
            className="mukesh-logo-img"
        />
    );
}




function PlaneIcon() {
    return (
        <svg viewBox="0 0 120 40" aria-hidden="true">
            <path
                d="M8 22 L45 18 L78 5 C88 1 98 3 106 9 L111 13 L80 23 L106 31 L99 36 L64 28 L35 33 L24 39 L18 37 L29 27 L8 26 Z"
                fill="currentColor"
            />
        </svg>
    );
}

