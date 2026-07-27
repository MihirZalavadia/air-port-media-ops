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
//                         <h2>Rajkot Airport   <br /> <em>x</em> Mukesh Arts</h2>

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
//                         <a href="mailto:info@example.com">info@example.com</a>
//                     </div>
//                 </div>
//             </div>

//             <div className="container footer-bottom">
//                 <p>© {new Date().getFullYear()} Rajkot Airport Advertising Media.</p>
//                 <p>Powered by Mukesh Arts</p>
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
// import airportLogo from "@/public/images/home/mukesh airport media-Photoroom.png"
import airportLogo from "@/public/images/home/cover_logo.png"
import "./Footer.css";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" aria-label="Website footer">
            <div className="container footer-inner">

                <div className="footer-brand">
                    <div className="footer-brand-row">
                        <h2>Rajkot Airport   <br /> <em>x</em> Mukesh Arts</h2>

                        <span className="footer-logo" aria-hidden="true">
                            <AirportLogoMark />
                        </span>
                    </div>

                    <p>
                        Premium airport media spaces for brands looking to build
                        visibility across Rajkot Airport through digital screens,
                        static boards, terminal branding, and planned placements.
                    </p>

                    <div className="footer-actions">
                        <div className="footer-socials" aria-label="Social media links">
                            <a href="#" aria-label="Rajkot Airport Media on Instagram">
                                <FaInstagram aria-hidden="true" />
                            </a>

                            <a href="#" aria-label="Rajkot Airport Media on Facebook">
                                <FaFacebookF aria-hidden="true" />
                            </a>

                            <a href="#" aria-label="Rajkot Airport Media on LinkedIn">
                                <FaLinkedinIn aria-hidden="true" />
                            </a>

                            <a href="#" aria-label="Contact Rajkot Airport Media on WhatsApp">
                                <FaWhatsapp aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Explore</h4>
                        <nav aria-label="Footer navigation">
                            <a href="/#about">About Us</a>
                            <a href="/#inventory">Inventory & Packages</a>
                            <a href="/#whyairportmedia">Why Airport Media</a>
                            <a href="/#gallery">Gallery</a>
                            <a href="/#contact">Contact Us</a>
                        </nav>
                    </div>

                    <div>
                        <h4>Media</h4>
                        <nav aria-label="Airport media services">
                            <a href="/#inventory">Digital Screens</a>
                            <a href="/#inventory">Static Boards</a>
                            <a href="/#inventory">Airport Branding</a>
                            <a href="/#inventory">OOH Media</a>
                        </nav>
                    </div>

                    <div>
                        <h4>Reach</h4>
                        <p>Rajkot International Airport</p>
                        <p>
                            Mukesh Art Main Office, PLOT NO. 71, SURVEY NO. 145,
                            JAMBUDIYA, Morbi, Gujarat - 363642
                        </p>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Rajkot Airport Advertising Media.</p>
                <p>Powered by Mukesh Arts</p>
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
        <Image
            src={airportLogo}
            alt="Mukesh Airport Media Logo"
            width={140}
            height={90}
            priority
            className="airport-logo-img"
        />
    );
}