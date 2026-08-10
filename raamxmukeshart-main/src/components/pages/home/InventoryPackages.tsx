// "use client";

// import { useCallback, useEffect, useState } from "react";
// import type { CSSProperties } from "react";
// import type { StaticImageData } from "next/image";
// import "./Home.css";

// import air7 from "@/public/images/inventory/air7.png";
// import air8 from "@/public/images/inventory/air8.png";
// import air9 from "@/public/images/inventory/air5.png";
// import air6 from "@/public/images/inventory/air6.png";
// import air1 from "@/public/images/inventory/air1.png";
// import air2 from "@/public/images/inventory/air2.png";

// type InventoryImage = StaticImageData | string;

// type InventoryItem = {
//     code: string;
//     category: string;
//     title: string;
//     summary: string;
//     leadLine: string;
//     image: InventoryImage;
//     gallery: InventoryImage[];
//     units: string;
// };

// function getImageUrl(image: InventoryImage) {
//     return typeof image === "string" ? image : image.src;
// }

// const inventoryItems: InventoryItem[] = [
//     {
//         code: "PKG-01",
//         category: "Digital Packages",
//         title: "Arrival + SHA Digital Loop",
//         summary:
//             "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
//         leadLine:
//             "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
//         image: air7,
//         gallery: [air8, air9, air7],
//         units: "18 Units",
//     },
//     {
//         code: "PKG-02",
//         category: "Digital Packages",
//         title: "Arrival + SHA Digital Loop",
//         summary:
//             "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
//         leadLine:
//             "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
//         image: air9,
//         gallery: [air8, air9, air7],
//         units: "18 Units",
//     },
//     {
//         code: "PKG-03",
//         category: "Static Boards",
//         title: "Arrival + SHA Digital Loop",
//         summary:
//             "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
//         leadLine:
//             "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
//         image: air6,
//         gallery: [air8, air9, air7],
//         units: "18 Units",
//     },
//     {
//         code: "PKG-04",
//         category: "Static Boards",
//         title: "Arrival + SHA Digital Loop",
//         summary:
//             "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
//         leadLine:
//             "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
//         image: air2,
//         gallery: [air8, air9, air7],
//         units: "18 Units",
//     },
//     {
//         code: "PKG-05",
//         category: "Custom Plans",
//         title: "Arrival + SHA Digital Loop",
//         summary:
//             "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
//         leadLine:
//             "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
//         image: air1,
//         gallery: [air8, air9, air7],
//         units: "18 Units",
//     },
// ];

// const filters = [
//     "All",
//     "Digital Packages",
//     "Static Boards",
//     "Passenger Journey",
//     "Custom Plans",
// ];

// export default function InventoryPackages() {
//     const [activeFilter, setActiveFilter] = useState("All");
//     const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

//     const visibleItems =
//         activeFilter === "All"
//             ? inventoryItems
//             : inventoryItems.filter((item) => item.category === activeFilter);

//     return (
//         <>
//             <section className="inventory-portfolio" id="inventory" data-animate>
//                 <div className="container">
//                     <div className="inventory-head">
//                         <div>
//                             <span className="inventory-eyebrow">Inventory Portfolio</span>
//                             <h2>
//                                 Inventory presented like <em>a body of work.</em>
//                             </h2>
//                         </div>

//                         <p>
//                             Buyers see the range first. Full references, availability, and
//                             commercial discussion unlock when the campaign intent is real.
//                         </p>
//                     </div>

//                     <div className="inventory-filter-row">
//                         <div className="inventory-chips">
//                             {filters.map((filter) => (
//                                 <button
//                                     key={filter}
//                                     type="button"
//                                     className={activeFilter === filter ? "active" : ""}
//                                     onClick={() => setActiveFilter(filter)}
//                                 >
//                                     {filter}
//                                 </button>
//                             ))}
//                         </div>

//                         <span className="inventory-count">
//                             <b>{visibleItems.length}</b> units shown
//                         </span>
//                     </div>

//                     <div className="inventory-masonry">
//                         {visibleItems.map((item, index) => (
//                             <button
//                                 type="button"
//                                 className={`inventory-work ${index === 0 ? "large" : ""}`}
//                                 key={item.code}
//                                 onClick={() => setActiveItem(item)}
//                             >
//                                 <div className="inventory-work-image">
//                                     <img src={getImageUrl(item.image)} alt={item.title} />

//                                     <span className="inventory-badge">
//                                         {item.code} - {item.category}
//                                     </span>

//                                     <div className="inventory-gallery-stack" aria-hidden="true">
//                                         {item.gallery.slice(0, 3).map((img, index) => (
//                                             <i
//                                                 key={`${item.code}-${index}`}
//                                                 className="gallery-card"
//                                                 style={
//                                                     {
//                                                         backgroundImage: `url(${getImageUrl(img)})`,
//                                                         "--i": index,
//                                                     } as React.CSSProperties
//                                                 }
//                                             />
//                                         ))}
//                                     </div>

//                                     <b className="inventory-site-count">
//                                         {item.gallery.length} Site Stills
//                                     </b>
//                                 </div>

//                                 <div className="inventory-work-body">
//                                     <small>
//                                         {item.code} - {item.units}
//                                     </small>

//                                     <h3>{item.title}</h3>
//                                     <p>{item.summary}</p>
//                                     <blockquote>{item.leadLine}</blockquote>

//                                     <strong>
//                                         <span>View details</span>
//                                         <svg viewBox="0 0 24 24" aria-hidden="true">
//                                             <path
//                                                 d="M5 12h12M12 6l7 6-7 6"
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 strokeWidth="1.7"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                             />
//                                         </svg>
//                                     </strong>
//                                 </div>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {activeItem && (
//                 <InventoryModal item={activeItem} onClose={() => setActiveItem(null)} />
//             )}
//         </>
//     );
// }

// function InventoryModal({
//     item,
//     onClose,
// }: {
//     item: InventoryItem;
//     onClose: () => void;
// }) {
//     const [closing, setClosing] = useState(false);

//     const handleClose = useCallback(() => {
//         if (closing) return;

//         setClosing(true);

//         setTimeout(() => {
//             onClose();
//         }, 500);
//     }, [closing, onClose]);

//     useEffect(() => {
//         const onKey = (event: KeyboardEvent) => {
//             if (event.key === "Escape") handleClose();
//         };

//         document.addEventListener("keydown", onKey);

//         const previousOverflow = document.body.style.overflow;
//         document.body.style.overflow = "hidden";

//         return () => {
//             document.removeEventListener("keydown", onKey);
//             document.body.style.overflow = previousOverflow;
//         };
//     }, [handleClose]);

//     return (
//         <div
//             className={`inventory-modal-overlay ${closing ? "closing" : "opening"}`}
//             onMouseDown={(event) => {
//                 if (event.target === event.currentTarget) handleClose();
//             }}
//         >
//             <div className={`inventory-popup ${closing ? "closing" : "opening"}`}>
//                 <button
//                     type="button"
//                     className="inventory-popup-close"
//                     onClick={handleClose}
//                     aria-label="Close inventory modal"
//                 >
//                     ×
//                 </button>

//                 <div className="inventory-popup-media">
//                     <img src={getImageUrl(item.image)} alt={item.title} />
//                     <span>
//                         {item.code} - {item.category}
//                     </span>
//                 </div>

//                 <div className="inventory-popup-side">
//                     <small>
//                         {item.code} - {item.units}
//                     </small>

//                     <h3>{item.title}</h3>
//                     <p>{item.summary}</p>

//                     <hr />

//                     <form className="inventory-popup-form">
//                         <label>
//                             <span>Name *</span>
//                             <input placeholder="Marketing lead name" />
//                         </label>

//                         <label>
//                             <span>Phone / WhatsApp *</span>
//                             <input placeholder="99999 99999" />
//                         </label>

//                         <div className="form-two">
//                             <label>
//                                 <span>Company / Brand</span>
//                                 <input placeholder="Brand / agency" />
//                             </label>

//                             <label>
//                                 <span>Designation</span>
//                                 <input placeholder="Marketing manager" />
//                             </label>
//                         </div>

//                         <button type="button">Unlock full details</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }












"use client";

import { useCallback, useEffect, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import type { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {
    inventoryCategories,
    type InventoryCategory,
} from "@/src/lib/inventoryData";
import { normalizeIndianMobile } from "@/src/lib/validation";
import { submitLead } from "@/src/lib/leads";
import "./Home.css";

// one lead form per session — once filled, every category opens directly
const UNLOCK_KEY = "ram-inventory-unlocked";

function isUnlocked() {
    try {
        return sessionStorage.getItem(UNLOCK_KEY) === "1";
    } catch {
        return false;
    }
}

import { getCategoryVisuals } from "@/src/lib/inventoryVisuals";
import { useNearViewport } from "@/src/lib/useNearViewport";

type InventoryImage = StaticImageData | string;

function getVisual(slug: string) {
    const visuals = getCategoryVisuals(slug);
    return { image: visuals.card, gallery: visuals.cardGallery };
}

function getImageUrl(image: InventoryImage) {
    return typeof image === "string" ? image : image.src;
}

const filters = [
    "All",
    ...inventoryCategories.map((category) => category.filter),
];

export default function InventoryPackages() {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeItem, setActiveItem] = useState<InventoryCategory | null>(null);
    // hover-gallery backgrounds wait until the section nears the viewport
    const { ref: sectionRef, near: mediaWake } = useNearViewport<HTMLElement>();

    const visibleItems =
        activeFilter === "All"
            ? inventoryCategories
            : inventoryCategories.filter((item) => item.filter === activeFilter);

    function openCategory(item: InventoryCategory) {
        if (isUnlocked()) {
            router.push(`/inventory/${item.slug}/`);
        } else {
            setActiveItem(item);
        }
    }

    return (
        <>
            <section
                className="inventory-portfolio"
                id="inventory"
                data-animate
                aria-labelledby="inventory-title"
                ref={sectionRef}
            >
                <div className="container">
                    <div className="inventory-head">
                        <div>
                            <span className="inventory-eyebrow" data-motion="clip">
                                Inventory Portfolio
                            </span>

                            <h2
                                id="inventory-title"
                                data-motion="up"
                                data-motion-delay="0.08"
                            >
                                Inventory presented like <em>a body of work.</em>
                            </h2>
                        </div>

                        <p data-motion="right" data-motion-delay="0.14">
                            Buyers see the range first. Full references, availability, and
                            commercial discussion unlock when the campaign intent is real.
                        </p>
                    </div>

                    <div
                        className="inventory-filter-row"
                        data-motion="zoom"
                        data-motion-delay="0.18"
                    >
                        <div className="inventory-chips">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={activeFilter === filter ? "active" : ""}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <span className="inventory-count">
                            <b>{visibleItems.length}</b> categories shown
                        </span>
                    </div>

                    <div className="inventory-masonry" data-motion-group>
                        {visibleItems.map((item) => {
                            const visual = getVisual(item.slug);

                            return (
                            <button
                                type="button"
                                className="inventory-work"
                                key={item.code}
                                onClick={() => openCategory(item)}
                                data-motion-item
                            >
                                <div className="inventory-work-image">
                                    <img
                                        src={getImageUrl(visual.image)}
                                        alt={`${item.title} at Rajkot Airport`}
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <span className="inventory-badge">
                                        {item.code} - {item.filter}
                                    </span>

                                    <div className="inventory-gallery-stack" aria-hidden="true">
                                        {visual.gallery.slice(0, 3).map((img, index) => (
                                            <i
                                                key={`${item.code}-${index}`}
                                                className="gallery-card"
                                                style={
                                                    {
                                                        // reveal-only art: don't fetch until the section is near
                                                        ...(mediaWake && {
                                                            backgroundImage: `url(${getImageUrl(img)})`,
                                                        }),
                                                        "--i": index,
                                                    } as CSSProperties
                                                }
                                            />
                                        ))}
                                    </div>

                                    <b className="inventory-site-count">
                                        {visual.gallery.length} Site Stills
                                    </b>
                                </div>

                                <div className="inventory-work-body">
                                    <small>{item.code}</small>

                                    <h3>{item.title}</h3>
                                    <p>{item.cardText}</p>

                                    <div className="inventory-work-meta">
                                        <span>{item.units}</span>
                                        <span className="price">{item.priceLine}</span>
                                        <span>{item.plans.length} plans</span>
                                    </div>

                                    <strong>
                                        <span>View full inventory</span>
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M5 12h12M12 6l7 6-7 6"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </strong>
                                </div>
                            </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {activeItem && (
                <InventoryModal item={activeItem} onClose={() => setActiveItem(null)} />
            )}
        </>
    );
}

function InventoryModal({
    item,
    onClose,
}: {
    item: InventoryCategory;
    onClose: () => void;
}) {
    const router = useRouter();
    const [closing, setClosing] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [error, setError] = useState("");

    function handleUnlock(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!name.trim()) {
            setError("Name and phone/WhatsApp are needed to unlock the inventory.");
            return;
        }

        const phoneDigits = normalizeIndianMobile(phone);
        if (!phoneDigits) {
            setError(
                "Enter a valid 10-digit Indian mobile number (starts with 6–9)."
            );
            return;
        }

        try {
            sessionStorage.setItem(UNLOCK_KEY, "1");
        } catch {
            // storage blocked (private mode) — still let them through
        }

        // capture the lead server-side (email + log); never blocks the unlock
        submitLead({
            name: name.trim(),
            phone: phoneDigits,
            company: company.trim(),
            designation: designation.trim(),
            interest: `${item.code} · ${item.title}`,
            source: "inventory-unlock",
            website: honeypot,
        });

        router.push(`/inventory/${item.slug}/`);
    }

    const handleClose = useCallback(() => {
        if (closing) return;

        setClosing(true);

        setTimeout(() => {
            onClose();
        }, 500);
    }, [closing, onClose]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose();
        };

        document.addEventListener("keydown", onKey);

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [handleClose]);

    return (
        <div
            className={`inventory-modal-overlay ${closing ? "closing" : "opening"}`}
            data-lenis-prevent
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <div className={`inventory-popup ${closing ? "closing" : "opening"}`}>
                <button
                    type="button"
                    className="inventory-popup-close"
                    onClick={handleClose}
                    aria-label="Close inventory modal"
                >
                    ×
                </button>

                <div className="inventory-popup-media">
                    <img
                        src={getImageUrl(getVisual(item.slug).image)}
                        alt={`${item.title} details`}
                    />
                    <span>
                        {item.code} - {item.filter}
                    </span>

                    <div className="inventory-popup-thumbs" aria-hidden="true">
                        {getVisual(item.slug).gallery.slice(0, 3).map((img, index) => (
                            <i
                                key={index}
                                style={{
                                    backgroundImage: `url(${getImageUrl(img)})`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="inventory-popup-side">
                    <small>
                        {item.code} - {item.units}
                    </small>

                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    <ul className="inventory-popup-plans">
                        {item.plans.map((plan) => (
                            <li key={plan.name}>
                                <div>
                                    <b>{plan.name}</b>
                                    <span>{plan.detail}</span>
                                </div>
                                <em>{plan.price}</em>
                            </li>
                        ))}
                    </ul>

                    <p className="inventory-popup-note">
                        Starting rates per month, exclusive of GST. Final rate card
                        and availability shared on request. All creatives subject to
                        AAI Rajkot approval.
                    </p>

                    <span className="inventory-popup-download pending">
                        Fill this once — every category, unit map, and plan PDF
                        unlocks for the rest of your visit.
                    </span>

                    <hr />

                    <form className="inventory-popup-form" onSubmit={handleUnlock}>
                        {/* honeypot — hidden from humans, bots autofill it */}
                        <input
                            type="text"
                            name="website"
                            value={honeypot}
                            onChange={(event) => setHoneypot(event.target.value)}
                            className="hp-field"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        <label>
                            <span>Name *</span>
                            <input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Marketing lead name"
                                autoComplete="name"
                            />
                        </label>

                        <label>
                            <span>Phone / WhatsApp *</span>
                            <input
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="99999 99999"
                                inputMode="tel"
                                autoComplete="tel"
                            />
                        </label>

                        <div className="form-two">
                            <label>
                                <span>Company / Brand</span>
                                <input
                                    value={company}
                                    onChange={(event) => setCompany(event.target.value)}
                                    placeholder="Brand / agency"
                                    autoComplete="organization"
                                />
                            </label>

                            <label>
                                <span>Designation</span>
                                <input
                                    value={designation}
                                    onChange={(event) => setDesignation(event.target.value)}
                                    placeholder="Marketing manager"
                                />
                            </label>
                        </div>

                        {error && <p className="inventory-popup-error">{error}</p>}

                        <button type="submit">Unlock the full inventory</button>
                    </form>
                </div>
            </div>
        </div>
    );
}