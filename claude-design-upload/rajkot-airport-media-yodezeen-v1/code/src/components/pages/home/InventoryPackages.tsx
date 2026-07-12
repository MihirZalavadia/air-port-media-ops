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
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import "./Home.css";

import air7 from "@/public/images/inventory/air7.png";
import air8 from "@/public/images/inventory/air8.png";
import air9 from "@/public/images/inventory/air5.png";
import air6 from "@/public/images/inventory/air6.png";
import air1 from "@/public/images/inventory/air1.png";
import air2 from "@/public/images/inventory/air2.png";

type InventoryImage = StaticImageData | string;

type InventoryItem = {
    code: string;
    category: string;
    title: string;
    summary: string;
    leadLine: string;
    image: InventoryImage;
    gallery: InventoryImage[];
    units: string;
};

function getImageUrl(image: InventoryImage) {
    return typeof image === "string" ? image : image.src;
}

const inventoryItems: InventoryItem[] = [
    {
        code: "PKG-01",
        category: "Digital Packages",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air7,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-02",
        category: "Digital Packages",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air9,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-03",
        category: "Static Boards",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air6,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-04",
        category: "Static Boards",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air2,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-05",
        category: "Custom Plans",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air1,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
];

const filters = [
    "All",
    "Digital Packages",
    "Static Boards",
    "Passenger Journey",
    "Custom Plans",
];

export default function InventoryPackages() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

    const visibleItems =
        activeFilter === "All"
            ? inventoryItems
            : inventoryItems.filter((item) => item.category === activeFilter);

    return (
        <>
            <section
                className="inventory-portfolio"
                id="inventory"
                data-animate
                aria-labelledby="inventory-title"
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
                            <b>{visibleItems.length}</b> units shown
                        </span>
                    </div>

                    <div className="inventory-masonry" data-motion-group>
                        {visibleItems.map((item, index) => (
                            <button
                                type="button"
                                className={`inventory-work ${index === 0 ? "large" : ""}`}
                                key={item.code}
                                onClick={() => setActiveItem(item)}
                                data-motion-item
                            >
                                <div className="inventory-work-image">
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={`${item.title} at Rajkot Airport`}
                                    />

                                    <span className="inventory-badge">
                                        {item.code} - {item.category}
                                    </span>

                                    <div className="inventory-gallery-stack" aria-hidden="true">
                                        {item.gallery.slice(0, 3).map((img, index) => (
                                            <i
                                                key={`${item.code}-${index}`}
                                                className="gallery-card"
                                                style={
                                                    {
                                                        backgroundImage: `url(${getImageUrl(img)})`,
                                                        "--i": index,
                                                    } as CSSProperties
                                                }
                                            />
                                        ))}
                                    </div>

                                    <b className="inventory-site-count">
                                        {item.gallery.length} Site Stills
                                    </b>
                                </div>

                                <div className="inventory-work-body">
                                    <small>
                                        {item.code} - {item.units}
                                    </small>

                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <blockquote>{item.leadLine}</blockquote>

                                    <strong>
                                        <span>View details</span>
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
                        ))}
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
    item: InventoryItem;
    onClose: () => void;
}) {
    const [closing, setClosing] = useState(false);

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

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [handleClose]);

    return (
        <div
            className={`inventory-modal-overlay ${closing ? "closing" : "opening"}`}
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
                    <img src={getImageUrl(item.image)} alt={`${item.title} details`} />
                    <span>
                        {item.code} - {item.category}
                    </span>
                </div>

                <div className="inventory-popup-side">
                    <small>
                        {item.code} - {item.units}
                    </small>

                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    <hr />

                    <form className="inventory-popup-form">
                        <label>
                            <span>Name *</span>
                            <input placeholder="Marketing lead name" />
                        </label>

                        <label>
                            <span>Phone / WhatsApp *</span>
                            <input placeholder="99999 99999" />
                        </label>

                        <div className="form-two">
                            <label>
                                <span>Company / Brand</span>
                                <input placeholder="Brand / agency" />
                            </label>

                            <label>
                                <span>Designation</span>
                                <input placeholder="Marketing manager" />
                            </label>
                        </div>

                        <button type="button">Unlock full details</button>
                    </form>
                </div>
            </div>
        </div>
    );
}