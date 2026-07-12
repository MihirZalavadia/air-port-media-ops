// "use client";

// import { useEffect, useState } from "react";
// import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
// import "./Header.css";

// type ThemeId = "day" | "night";

// export default function Header() {
//     const [themeId, setThemeId] = useState<ThemeId>("day");
//     useEffect(() => {
//         document.documentElement.setAttribute("data-theme", themeId);
//     }, [themeId]);

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         try {
//             const savedTheme = window.localStorage.getItem("ram-theme") as ThemeId | null;
//             if (savedTheme === "night" || savedTheme === "day") {
//                 setThemeId(savedTheme);
//                 document.documentElement.dataset.theme = savedTheme;
//             }
//         } catch { }
//     }, []);

//     useEffect(() => {
//         document.documentElement.dataset.theme = themeId;
//         try {
//             window.localStorage.setItem("ram-theme", themeId);
//         } catch { }
//     }, [themeId]);

//     useEffect(() => {
//         if (isMenuOpen) {
//             document.documentElement.classList.add("menu-open");
//             document.body.classList.add("menu-open");
//         } else {
//             document.documentElement.classList.remove("menu-open");
//             document.body.classList.remove("menu-open");
//         }

//         return () => {
//             document.documentElement.classList.remove("menu-open");
//             document.body.classList.remove("menu-open");
//         };
//     }, [isMenuOpen]);


//     function toggleTheme() {
//         setThemeId((id) => (id === "night" ? "day" : "night"));
//     }

//     return (
//         <header className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
//             <div className="container nav-inner">
//                 <a href="#top" className="brand" aria-label="Rajkot Airport x Mukesh Arts">
//                     <span className="brand-mark">
//                         <AirportLogoMark />
//                     </span>
//                     <span className="brand-text">
//                         <b>Rajkot Airport x Mukesh Arts</b>
//                         <small>Airport Advertising Media </small>
//                     </span>
//                 </a>

//                 <nav className="nav-links" aria-label="Primary">
//                     <a href="#about">About Us</a>
//                     <a href="#inventory">Inventory & Packages</a>
//                     <a href="#whyairportmedia">Why Airport Media</a>
//                     <a href="#gallery">Gallery</a>
//                     <a href="#contact">Contact Us</a>
//                 </nav>

//                 <div className="nav-end">
//                     <FlightToggle themeId={themeId} onToggle={toggleTheme} />

//                     <a href="#inventory" className="btn-primary">
//                         Unlock Inventory
//                     </a>
//                 </div>

//                 <button
//                     type="button"
//                     className="mobile-menu-btn"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                 >
//                     {isMenuOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
//                 </button>
//             </div>
//         </header>
//     );
// }

// function FlightToggle({
//     themeId,
//     onToggle,
// }: {
//     themeId: ThemeId;
//     onToggle: () => void;
// }) {
//     const isNight = themeId === "night";

//     return (
//         <button
//             type="button"
//             onClick={onToggle}
//             className="toggle"
//             aria-pressed={isNight}
//             aria-label={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
//             title={isNight ? "Switch to Day Takeoff" : "Switch to Night Runway"}
//         >
//             <span className="toggle-scene" aria-hidden="true">
//                 <span className="toggle-sun" />
//                 <span className="toggle-moon" />
//                 <span className="toggle-cloud toggle-cloud-a" />
//                 <span className="toggle-cloud toggle-cloud-b" />
//                 <span className="toggle-star toggle-star-1" />
//                 <span className="toggle-star toggle-star-2" />
//                 <span className="toggle-star toggle-star-3" />
//                 <span className="toggle-runway" />
//                 <span className="toggle-plane">
//                     <Airliner />
//                 </span>
//                 <span className="toggle-trail" />
//             </span>

//             <span className="toggle-label">
//                 <small>{isNight ? "Night" : "Day"}</small>
//                 <b>{isNight ? "Runway" : "Takeoff"}</b>
//             </span>
//         </button>
//     );
// }

// function Airliner() {
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

// function AirportLogoMark() {
//     return (
//         <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//             <rect x="0" y="0" width="140" height="90" rx="10" fill="currentColor" opacity="0" />
//             <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//             <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//             <text x="70" y="63" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="800" letterSpacing="2.5" fill="#111111">
//                 MUKESH
//             </text>
//             <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
//             <text x="101" y="78" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="10" fontWeight="800" letterSpacing="3" fill="#FFFFFF">
//                 ART
//             </text>
//         </svg>
//     );
// }
















"use client";

import Image from "next/image";
// import { useEffect, useState } from "react";
import { useEffect, useState, type MouseEvent } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import "./Header.css";

// import logo from "@/public/images/home/logo.png";
// import logo from "@/public/images/home/mukesh airport media-Photoroom.png";
import logo from "@/public/images/home/cover_logo.png";

type ThemeId = "day" | "night";

type ViewTransitionDocument = Document & {
    startViewTransition?: (callback: () => void) => {
        finished: Promise<void>;
    };
};

export default function Header() {
    const [themeId, setThemeId] = useState<ThemeId>("day");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);

    function closeMobileMenu() {
        if (window.innerWidth > 768) return;
        if (!isMenuOpen || isMenuClosing) return;

        setIsMenuClosing(true);

        setTimeout(() => {
            setIsMenuOpen(false);
            setIsMenuClosing(false);
        }, 380);
    }

    function toggleMobileMenu() {
        if (isMenuClosing) return;

        if (isMenuOpen) {
            closeMobileMenu();
        } else {
            setIsMenuOpen(true);
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("ram-theme") as ThemeId | null;

        if (savedTheme === "night" || savedTheme === "day") {
            setThemeId(savedTheme);
            document.documentElement.dataset.theme = savedTheme;
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = themeId;
        localStorage.setItem("ram-theme", themeId);
    }, [themeId]);

    useEffect(() => {
        document.documentElement.classList.toggle("menu-open", isMenuOpen);
        document.body.classList.toggle("menu-open", isMenuOpen);

        return () => {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        };
    }, [isMenuOpen]);

    const isNight = themeId === "night";


    function handleThemeToggle(event: MouseEvent<HTMLButtonElement>) {
        const nextTheme: ThemeId = isNight ? "day" : "night";
        const root = document.documentElement;
        const transitionDocument = document as ViewTransitionDocument;

        const buttonRect = event.currentTarget.getBoundingClientRect();
        const x = buttonRect.left + buttonRect.width / 2;
        const y = buttonRect.top + buttonRect.height / 2;

        root.style.setProperty("--theme-x", `${x}px`);
        root.style.setProperty("--theme-y", `${y}px`);

        root.classList.remove("theme-to-day", "theme-to-night");
        root.classList.add(`theme-to-${nextTheme}`);

        const updateTheme = () => {
            setThemeId(nextTheme);
            root.dataset.theme = nextTheme;
            localStorage.setItem("ram-theme", nextTheme);
        };

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!transitionDocument.startViewTransition || reduceMotion) {
            updateTheme();
            root.classList.remove("theme-to-day", "theme-to-night");
            return;
        }

        const transition = transitionDocument.startViewTransition(updateTheme);

        transition.finished.finally(() => {
            root.classList.remove("theme-to-day", "theme-to-night");
        });
    }

    return (
        // <header className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
        // <header
        //     className={`nav ${isMenuOpen ? "mobile-open" : ""} ${isMenuClosing ? "mobile-closing" : ""
        //         }`}
        // >
        <header
            className={`nav ${isMenuOpen || isMenuClosing ? "mobile-open" : ""
                } ${isMenuClosing ? "mobile-closing" : ""}`}
        >
            <div className="container nav-inner">
                <a href="#top" className="brand" aria-label="Rajkot Airport x Mukesh Arts">
                    <span className="brand-mark">
                        <AirportLogoMark />
                    </span>

                    <span className="brand-text">
                        {/* <b>Rajkot Airport x Mukesh Arts</b> */}
                        <b>Mukesh Airport Media</b>
                        <small>Rajkot Airport Advertising </small>
                    </span>
                </a>

                {/* <nav className="nav-links" aria-label="Primary">
                    <a href="#about">About Us</a>
                    <a href="#inventory">Inventory & Packages</a>
                    <a href="#whyairportmedia">Why Airport Media</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact Us</a>
                </nav> */}
                <nav className="nav-links" aria-label="Primary">
                    <a onClick={() => setIsMenuOpen(false)} href="#about">About Us</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#inventory">Inventory & Packages</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#whyairportmedia">Why Airport Media</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#gallery">Gallery</a>
                    <a onClick={() => setIsMenuOpen(false)} href="#contact">Contact Us</a>
                    {/* <a onClick={closeMobileMenu} href="#about">About Us</a>
                    <a onClick={closeMobileMenu} href="#inventory">Inventory & Packages</a>
                    <a onClick={closeMobileMenu} href="#whyairportmedia">Why Airport Media</a>
                    <a onClick={closeMobileMenu} href="#gallery">Gallery</a>
                    <a onClick={closeMobileMenu} href="#contact">Contact Us</a> */}
                </nav>

                <div className="nav-end">
                    {/* <ThemeToggle
                        isNight={isNight}
                        onToggle={() => setThemeId(isNight ? "day" : "night")}
                    /> */}
                    <ThemeToggle
                        isNight={isNight}
                        onToggle={handleThemeToggle}
                    />

                    <a href="#inventory" className="btn-primary">
                        Unlock Inventory
                    </a>
                </div>

                {/* <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
                </button> */}
                <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
                </button>
            </div>
        </header>
    );
}


// function ThemeToggle({
//     isNight,
//     onToggle,
// }: {
//     isNight: boolean;
//     onToggle: () => void;
// }) {
//     return (
//         <button
//             className="theme-toggle"
//             type="button"
//             onClick={onToggle}
//             aria-label={isNight ? "Switch to sun day theme" : "Switch to full moon night theme"}
//             aria-pressed={isNight}
//         >
//             <span className="theme-scene" aria-hidden="true">
//                 <span className="sun-core" />
//                 <span className="cloud cloud-a" />
//                 <span className="cloud cloud-b" />
//                 <span className="moon-core" />
//                 <span className="star star-a" />
//                 <span className="star star-b" />
//                 <span className="star star-c" />
//             </span>
//         </button>
//     );
// }

// function AirportLogoMark() {
//     return (
//         // <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//         //     <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//         //     <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//         //     <text
//         //         x="70"
//         //         y="63"
//         //         textAnchor="middle"
//         //         fontFamily="Arial, Helvetica, sans-serif"
//         //         fontSize="24"
//         //         fontWeight="800"
//         //         letterSpacing="2.5"
//         //         // fill="#111111"
//         //         fill="var(--ink)"
//         //     >
//         //         MUKESH
//         //     </text>
//         //     <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
//         //     <text
//         //         x="101"
//         //         y="78"
//         //         textAnchor="middle"
//         //         fontFamily="Arial, Helvetica, sans-serif"
//         //         fontSize="10"
//         //         fontWeight="800"
//         //         letterSpacing="3"
//         //         fill="#FFFFFF"
//         //     >
//         //         ART
//         //     </text>
//         // </svg>
//         // <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//         //     <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//         //     <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//         //     <text
//         //         x="70"
//         //         y="63"
//         //         textAnchor="middle"
//         //         fontFamily="Arial, Helvetica, sans-serif"
//         //         fontSize="24"
//         //         fontWeight="800"
//         //         letterSpacing="2.5"
//         //         // fill="#111111"
//         //         fill="var(--ink)"
//         //     >
//         //         MUKESH
//         //     </text>
//         //     <rect x="79" y="70" width="43" height="9" rx="1.5" fill="#E21D2D" />
//         //     <text
//         //         x="101"
//         //         y="78"
//         //         textAnchor="middle"
//         //         fontFamily="Arial, Helvetica, sans-serif"
//         //         fontSize="10"
//         //         fontWeight="800"
//         //         letterSpacing="3"
//         //         fill="#FFFFFF"
//         //     >
//         //         Airport Media
//         //     </text>
//         // </svg>
//         <svg
//             viewBox="0 0 140 90"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//         >

//             <rect
//                 x="2"
//                 y="2"
//                 width="136"
//                 height="105"
//                 rx="9"
//                 ry="9"
//                 fill="none"
//                 stroke="#111111"
//                 strokeWidth="1.5"
//             />

//             <path
//                 d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z"
//                 fill="#E21D2D"
//             />
//             <path
//                 d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z"
//                 fill="#1E2A78"
//             />

//             <text
//                 x="70"
//                 y="63"
//                 textAnchor="middle"
//                 fontFamily="Arial, Helvetica, sans-serif"
//                 fontSize="22"
//                 fontWeight="800"
//                 letterSpacing="2"
//                 fill="var(--ink, #111111)"
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
















// function AirportLogoMark() {
//     return (
//         <svg
//             className="airport-logo-svg"
//             viewBox="0 0 140 110"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//         >
//             <rect
//                 x="3"
//                 y="3"
//                 width="135"
//                 height="104"
//                 rx="10"
//                 ry="10"
//                 fill="#ffffff"
//                 stroke="#111111"
//                 strokeWidth="1.8"
//             />

//             <path
//                 d="M18 40 L45 8 L70 40 C54 33 34 33 18 40 Z"
//                 fill="#E21D2D"
//             />

//             <path
//                 d="M70 40 L96 8 L122 40 C105 33 86 33 70 40 Z"
//                 fill="#1E2A78"
//             />

//             <text
//                 x="70"
//                 y="66"
//                 textAnchor="middle"
//                 fontFamily="Arial, Helvetica, sans-serif"
//                 fontSize="22"
//                 fontWeight="800"
//                 letterSpacing="2"
//                 // fill="var(--ink, #111111)"
//                 fill="#111111"
//             >
//                 MUKESH
//             </text>

//             {/* <line
//                 x1="20"
//                 y1="76"
//                 x2="120"
//                 y2="76"
//                 stroke="#111111"
//                 strokeWidth="2"
//                 strokeLinecap="square"
//             /> */}
//             <line
//                 x1="12"
//                 y1="72"
//                 x2="124"
//                 y2="72"
//                 stroke="#1E2A78"
//                 strokeWidth="2"
//                 strokeLinecap="square"
//             />

//             <text
//                 x="70"
//                 y="93"
//                 textAnchor="middle"
//                 fontFamily="Arial, Helvetica, sans-serif"
//                 fontSize="13"
//                 fontWeight="600"
//                 letterSpacing="1"
//                 fill="#1E2A78"
//             >
//                 AIRPORT MEDIA
//             </text>
//         </svg>
//     );
// }

function ThemeToggle({
    isNight,
    onToggle,
}: {
    isNight: boolean;
    onToggle: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={onToggle}
            aria-label={isNight ? "Switch to sun day theme" : "Switch to full moon night theme"}
            aria-pressed={isNight}
        >
            <span className="theme-scene" aria-hidden="true">
                <span className="sun-core" />
                <span className="cloud cloud-a" />
                <span className="cloud cloud-b" />
                <span className="moon-core" />
                <span className="star star-a" />
                <span className="star star-b" />
                <span className="star star-c" />
            </span>
        </button>
    );
}


function AirportLogoMark() {
    return (
        // <Image
        //     src={logo}
        //     alt="Mukesh Airport Media Logo"
        //     priority
        //     className="airport-logo-img"
        //     sizes="(max-width: 768px) 54px, 70px"
        // />
        <Image
    src={logo}
    alt="Mukesh Airport Media Logo"
    width={300}
    height={300}
    quality={100}
    priority
    className="airport-logo-img"
/>
    );
}










// function AirportLogoMark() {
//     return (
//         <svg
//             className="airport-logo-svg"
//             viewBox="0 0 336 336"
//             xmlns="http://www.w3.org/2000/svg"
//             role="img"
//             aria-label="Mukesh Airport Media Logo"
//         >
//             <rect
//                 x="15"
//                 y="15"
//                 width="306"
//                 height="306"
//                 rx="34"
//                 ry="34"
//                 fill="#ffffff"
//                 stroke="#272323"
//                 strokeWidth="4"
//             />

//             <path
//                 d="M48 166 L108 73 L168 166 C133 140 83 140 48 166 Z"
//                 fill="#ED1C24"
//             />

//             <path
//                 d="M168 166 L228 73 L288 166 C253 140 203 140 168 166 Z"
//                 fill="#2E3192"
//             />

            
//             <text
//                 x="168"
//                 y="221"
//                 textAnchor="middle"
//                 fontFamily="'Albertus', 'Albertus MT', 'Albertus Nova', 'Flareserif 821', serif"
//                 fontSize="67"
//                 fontWeight="normal"
//                 fill="#000000"
//             >
//                 MuKesH
//             </text>

//             <line
//                 x1="54"
//                 y1="236"
//                 x2="282"
//                 y2="236"
//                 stroke="#222222"
//                 strokeWidth="5"
//                 strokeLinecap="butt"
//             />

//             <text
//                 x="168"
//                 y="269"
//                 textAnchor="middle"
//                 fontFamily="'Times New Roman', Georgia, serif"
//                 fontSize="26"
//                 fontWeight="500"
//                 letterSpacing="5"
//                 fill="#0071BC"
//                 textLength="233"
//                 lengthAdjust="spacing"
//             >
//                 AIRPORT MEDIA
//             </text>
//         </svg>
//     );
// }