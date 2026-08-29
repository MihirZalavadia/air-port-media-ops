// import "./Footer.css";
// import {
//     FaInstagram,
//     FaFacebookF,
//     FaLinkedinIn,
//     FaWhatsapp,
// } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="footer">
//             <div className="container footer-inner">

//                 <div className="footer-brand">
//                     <div className="footer-brand-row">
//                         <h2>Rajkot Airport   <br /> <em>x</em> Mukesh Art</h2>

//                         <span className="footer-logo">
//                             <AirportLogoMark />
//                         </span>
//                     </div>

//                     <p>
//                         Premium airport advertising media for brands looking to reach
//                         high-value travellers across Rajkot Airport.
//                     </p>


//                     <div className="footer-actions">
//                         <div className="footer-socials">
//                             <a href="#" aria-label="Instagram">
//                                 <FaInstagram />
//                             </a>

//                             <a href="#" aria-label="Facebook">
//                                 <FaFacebookF />
//                             </a>

//                             <a href="#" aria-label="LinkedIn">
//                                 <FaLinkedinIn />
//                             </a>

//                             <a href="#" aria-label="WhatsApp">
//                                 <FaWhatsapp />
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="footer-links">
//                     <div>
//                         <h4>Explore</h4>
//                         <a href="#about">About Us</a>
//                         <a href="#inventory">Inventory & Packages</a>
//                         <a href="#packages">Why Airport Media</a>
//                         <a href="#gallery">Gallery</a>
//                         <a href="#gallery">Contact Us</a>
//                     </div>

//                     <div>
//                         <h4>Media</h4>
//                         <a href="#digital">Digital Screens</a>
//                         <a href="#static">Static Boards</a>
//                         <a href="#branding">Airport Branding</a>
//                         <a href="#ooh">OOH Media</a>
//                     </div>

//                     <div>
//                         <h4>Reach</h4>
//                         <p>Rajkot International Airport</p>
//                         <p>Mukesh Art Main Office, PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi, Gujarat - 363642</p>
//                         <a href="mailto:info@mukeshart.in">info@mukeshart.in</a>
//                     </div>
//                 </div>
//             </div>

//             <div className="container footer-bottom">
//                 <p>© {new Date().getFullYear()} Rajkot Airport Advertising Media.</p>
//                 <p>Powered by Mukesh Art</p>
//             </div>
//         </footer>
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










import Image from "next/image";
import Link from "next/link";
import logoDay from "@/public/images/home/logo_mark.png"
import logoLight from "@/public/images/home/logo_mark_light.png"
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" aria-label="Website footer">
            <div className="container footer-inner">

                <div className="footer-brand">
                    <div className="footer-brand-row">
                        <h2>Rajkot Airport   <br /> <em>x</em> Mukesh Art</h2>

                        <span className="footer-logo" aria-hidden="true">
                            <AirportLogoMark />
                        </span>
                    </div>

                    <p>
                        Rajkot Airport marketing and advertising for brands that
                        want premium visibility — digital screens, static boards,
                        terminal branding, and planned placements across Rajkot
                        International Airport (Hirasar).
                    </p>

                    <div className="footer-actions">
                        {/* Instagram/Facebook/LinkedIn return here (plus
                            SeoSchema sameAs) once the real profiles exist —
                            dead # icons read as an unfinished site */}
                        <div className="footer-socials" aria-label="Social media links">
                            <a
                                href="https://wa.me/919825340818"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact Rajkot Airport Media on WhatsApp"
                            >
                                <FaWhatsapp aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h3>Explore</h3>
                        <nav aria-label="Footer navigation">
                            <Link href="/airport/#about">About Us</Link>
                            <Link href="/airport/#inventory">Inventory & Packages</Link>
                            <Link href="/airport/#whyairportmedia">Why Airport Media</Link>
                            <Link href="/airport/#gallery">Gallery</Link>
                            <Link href="/partners/">Our Partners</Link>
                            <Link href="/contact/">Contact Us</Link>
                        </nav>
                    </div>

                    <div>
                        <h3>Media</h3>
                        {/* inventory unlocks via the lead form — no direct plan links */}
                        <nav aria-label="Airport media services">
                            <Link href="/airport/#inventory">Digital Screens</Link>
                            <Link href="/airport/#inventory">Outdoor Boards</Link>
                            <Link href="/airport/#inventory">Backlit Boards</Link>
                            <Link href="/airport/#inventory">Hybrid Plans</Link>
                        </nav>
                    </div>

                    <div>
                        <h3>Reach</h3>
                        <p>Rajkot International Airport</p>
                        <p>
                            Mukesh Art Main Office, PLOT NO. 71, SURVEY NO. 145,
                            JAMBUDIYA, Morbi, Gujarat - 363642
                        </p>
                        <a href="mailto:info@mukeshart.in">info@mukeshart.in</a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Rajkot Airport Advertising Media.</p>
                <p>Powered by Mukesh Art</p>
            </div>
        </footer>
    );
}

// function AirportLogoMark() {
//     return (
//         <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//             <rect x="0" y="0" width="140" height="90" rx="10" fill="currentColor" opacity="0" />
//             <path d="M18 38 L45 5 L70 38 C54 31 34 31 18 38 Z" fill="#E21D2D" />
//             <path d="M70 38 L96 5 L122 38 C105 31 86 31 70 38 Z" fill="#1E2A78" />
//             <text x="70" y="63" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="800" letterSpacing="2.5" fill="#111111">
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

function AirportLogoMark() {
    return (
        <>
            <Image
                src={logoDay}
                alt="Mukesh Airport Media"
                width={251}
                height={202}
                quality={100}
                className="airport-logo-img airport-logo-img--day"
            />
            <Image
                src={logoLight}
                alt=""
                aria-hidden
                width={251}
                height={202}
                quality={100}
                className="airport-logo-img airport-logo-img--night"
            />
        </>
    );
}