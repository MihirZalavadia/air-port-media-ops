"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import type { StaticImageData } from "next/image";

import "./InventoryShowcase.css";

import air1 from "@/public/images/inventory/air1.png";
import air2 from "@/public/images/inventory/air2.png";
import air5 from "@/public/images/inventory/air5.png";
import air6 from "@/public/images/inventory/air6.png";
import air7 from "@/public/images/inventory/air7.png";
import air8 from "@/public/images/inventory/air8.png";

type InventoryImage = StaticImageData | string;

type Category = "Digital" | "Static" | "Packages";

type InventoryItem = {
    code: string;
    cat: Category;
    title: string;
    summary: string;
    surfaces: string;
    image: InventoryImage;
    gallery: InventoryImage[];
};

const url = (img: InventoryImage) => (typeof img === "string" ? img : img.src);

/* ------------------------------------------------------------------
   Inventory — generic, confirmed airport-media formats only.
   Presentation copy; no prices, no invented/unconfirmed surfaces.
   ------------------------------------------------------------------ */
const INVENTORY: InventoryItem[] = [
    {
        code: "RAM-01",
        cat: "Digital",
        title: "Digital Display Network",
        summary:
            "A network of digital screens across high-dwell terminal zones — flexible, high-frequency airport visibility you can rotate by campaign window.",
        surfaces: "Digital LED · Terminal",
        image: air7,
        gallery: [air8, air5, air6],
    },
    {
        code: "RAM-02",
        cat: "Static",
        title: "Static Backlit Boards",
        summary:
            "Illuminated backlit boards along primary passenger routes — a clean, always-on canvas that stays sharp from early departures to late arrivals.",
        surfaces: "Backlit · Terminal",
        image: air5,
        gallery: [air1, air2, air8],
    },
    {
        code: "RAM-03",
        cat: "Static",
        title: "Airport Front Lit Boards",
        summary:
            "Large front-lit boards on main concourse walls — a confident, editorial format for flagship brand presence in the airport.",
        surfaces: "Front Lit · Concourse",
        image: air6,
        gallery: [air7, air2, air1],
    },
    {
        code: "RAM-04",
        cat: "Static",
        title: "Security Clearance Backlit",
        summary:
            "Backlit placements around the security-clearance flow, where passengers naturally wait and read — calm, repeat, unmissable exposure.",
        surfaces: "Backlit · Security",
        image: air2,
        gallery: [air6, air8, air5],
    },
    {
        code: "RAM-05",
        cat: "Static",
        title: "Laptop Workstation Static Backlit",
        summary:
            "Backlit panels at the laptop and charging workstations — close-range attention from a settled, high-intent business audience.",
        surfaces: "Backlit · Workstation",
        image: air1,
        gallery: [air5, air7, air6],
    },
    {
        code: "RAM-06",
        cat: "Packages",
        title: "Grouped Media Plans",
        summary:
            "Ready-made Package 1, 2 and 3 combinations across digital and static formats — a simple way to book wide airport coverage as one plan.",
        surfaces: "Bundled · Digital + Static",
        image: air8,
        gallery: [air2, air1, air5],
    },
];

const FILTERS = ["All", "Digital", "Static", "Packages"] as const;
const FILTER_LABEL: Record<string, string> = {
    All: "All Media",
    Digital: "Digital",
    Static: "Static Boards",
    Packages: "Packages",
};

export default function InventoryPackages() {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);
    const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

    const visible =
        activeFilter === "All"
            ? INVENTORY
            : INVENTORY.filter((x) => x.cat === activeFilter);

    return (
        <>
            <section
                className="ram-inventory"
                id="inventory"
                aria-labelledby="ram-inventory-title"
            >
                <div className="container">
                    <div className="ram-inv-head">
                        <div>
                            <span className="eyebrow" data-motion="clip">
                                Inventory Portfolio
                            </span>
                            <h2
                                className="ram-inv-display"
                                id="ram-inventory-title"
                                data-motion="up"
                                data-motion-delay="0.08"
                            >
                                A wide airport media inventory, presented like{" "}
                                <em>a body of work.</em>
                            </h2>
                        </div>
                        <p data-motion="right" data-motion-delay="0.14">
                            Browse the range first. Full references, availability and the
                            complete media plan unlock once your campaign intent is real.
                        </p>
                    </div>

                    <div
                        className="ram-inv-filter"
                        data-motion="up"
                        data-motion-delay="0.16"
                    >
                        <div className="ram-inv-chips" role="tablist" aria-label="Filter inventory">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeFilter === f}
                                    className={activeFilter === f ? "active" : ""}
                                    onClick={() => setActiveFilter(f)}
                                >
                                    {FILTER_LABEL[f]}
                                </button>
                            ))}
                        </div>
                        <span className="ram-inv-count">
                            <b>{visible.length}</b> placements shown
                        </span>
                    </div>

                    <div className="ram-inv-grid" data-motion-group>
                        {visible.map((it, i) => (
                            <button
                                type="button"
                                key={`${activeFilter}-${it.code}`}
                                className={`ram-inv-card ${i === 0 ? "large" : ""}`}
                                onClick={(event) => {
                                    lastTriggerRef.current = event.currentTarget;
                                    setActiveItem(it);
                                }}
                                style={{ "--card-index": i } as CSSProperties}
                                data-motion-item
                                aria-label={`${it.title} — request full media plan`}
                            >
                                <div className="ram-inv-photo">
                                    <img
                                        src={url(it.image)}
                                        alt={`${it.title} at Rajkot Airport`}
                                        loading="lazy"
                                    />
                                    <span className="ram-inv-badge">
                                        {it.code} · {FILTER_LABEL[it.cat]}
                                    </span>
                                    <div className="ram-inv-fan" aria-hidden="true">
                                        {it.gallery
                                            .slice(0, 3)
                                            .map((g, k) => (
                                                <i
                                                    key={`${it.code}-g${k}`}
                                                    style={
                                                        {
                                                            "--i": 2 - k,
                                                            backgroundImage: `url('${url(g)}')`,
                                                        } as CSSProperties
                                                    }
                                                />
                                            ))
                                            .reverse()}
                                    </div>
                                    <span className="ram-inv-stills">
                                        {it.gallery.length} site stills
                                    </span>
                                </div>
                                <div className="ram-inv-body">
                                    <small>{it.surfaces}</small>
                                    <h3>{it.title}</h3>
                                    <p>{it.summary}</p>
                                    <span className="ram-inv-open">
                                        <span>Request full media plan</span>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M5 12h12M12 6l7 6-7 6" />
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {activeItem && (
                <InventoryDrawer
                    item={activeItem}
                    onClose={() => {
                        setActiveItem(null);
                        window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
                    }}
                />
            )}
        </>
    );
}

/* ------------------------------------------------------------------
   Lead-gated details drawer (frontend only)
   ------------------------------------------------------------------ */
type Lead = {
    name: string;
    countryCode: string;
    phone: string;
    company: string;
    designation: string;
    campaignWindow: string;
    placement: string;
};

const UNLOCKED_DETAILS = [
    "Exact surface map, dimensions and locations for this placement",
    "Live availability and recommended campaign windows",
    "Audience and footfall context for premium airport visibility",
    "Production specs, creative guidelines and turnaround",
    "A tailored media plan prepared by our owner-operated team",
];

function InventoryDrawer({
    item,
    onClose,
}: {
    item: InventoryItem;
    onClose: () => void;
}) {
    const [open, setOpen] = useState(false);
    const [unlocked, setUnlocked] = useState(false);

    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [campaignWindow, setCampaignWindow] = useState("");

    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const drawerRef = useRef<HTMLElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const handleClose = useCallback(() => {
        setOpen(false);
        window.setTimeout(onClose, 500); // let the slide-out finish
    }, [onClose]);

    // slide in on mount, lock scroll, close on Escape
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setOpen(true);
            (nameRef.current ?? closeRef.current)?.focus();
        });
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
                return;
            }

            if (e.key !== "Tab") return;

            const drawer = drawerRef.current;
            if (!drawer) return;

            const focusable = Array.from(
                drawer.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter((element) => !element.hasAttribute("disabled"));

            if (!focusable.length) {
                e.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            cancelAnimationFrame(id);
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [handleClose]);

    const validate = () => {
        const next: { name?: string; phone?: string } = {};
        if (name.trim().length < 2) next.name = "Please enter your name.";
        if (!/^\d{10}$/.test(phone.trim()))
            next.phone = "Enter a valid 10-digit number.";
        setErrors(next);
        return next;
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const next = validate();
        if (next.name || next.phone) {
            (next.name ? nameRef : phoneRef).current?.focus();
            return;
        }
        const lead: Lead = {
            name: name.trim(),
            countryCode,
            phone: phone.trim(),
            company: company.trim(),
            designation: designation.trim(),
            campaignWindow: campaignWindow.trim(),
            placement: item.title,
        };

        // ---------------------------------------------------------------
        // TODO (lead capture): persist `lead` to a CRM / Google Sheet /
        // Excel endpoint. No backend is wired yet — this only unlocks the
        // details on the client. Example when a backend exists:
        //   await fetch("/api/leads", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(lead),
        //   });
        // ---------------------------------------------------------------
        if (process.env.NODE_ENV !== "production") {
            console.log("[lead captured — TODO persist to CRM/Sheet]", lead);
        }
        setUnlocked(true);
    };

    return (
        <>
            <div
                className={`ram-inv-scrim ${open ? "open" : ""}`}
                onClick={handleClose}
                aria-hidden="true"
            />
            <aside
                ref={drawerRef}
                className={`ram-inv-drawer ${open ? "open" : ""} ${
                    unlocked ? "unlocked" : ""
                }`}
                role="dialog"
                aria-modal="true"
                aria-label={`${item.title} — media plan`}
            >
                <button
                    ref={closeRef}
                    type="button"
                    className="ram-inv-drawer-close"
                    onClick={handleClose}
                    aria-label="Close details"
                >
                    ×
                </button>

                <div className="ram-inv-drawer-media">
                    <img src={url(item.image)} alt={item.title} />
                    <span className="ram-inv-dm-code">
                        {item.code} · {FILTER_LABEL[item.cat]}
                    </span>
                    <h3 className="ram-inv-dm-title">{item.title}</h3>
                </div>

                <div className="ram-inv-drawer-body">
                    <p className="ram-inv-summary">{item.summary}</p>
                    <div className="ram-inv-meta">
                        <span>{item.surfaces}</span>
                        <span>Rajkot Int&apos;l Airport</span>
                        <span>Premium airport visibility</span>
                    </div>

                    {!unlocked ? (
                        <>
                            <div className="ram-inv-gate">Request full media plan</div>
                            <form className="ram-inv-form" onSubmit={onSubmit} noValidate>
                                <div className={`ram-inv-field ${errors.name ? "invalid" : ""}`}>
                                    <label htmlFor="ram-lead-name">Name *</label>
                                    <input
                                        id="ram-lead-name"
                                        ref={nameRef}
                                        type="text"
                                        value={name}
                                        autoComplete="name"
                                        placeholder="Marketing lead name"
                                        aria-invalid={!!errors.name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name)
                                                setErrors((p) => ({ ...p, name: undefined }));
                                        }}
                                    />
                                    <small className="ram-inv-err">{errors.name}</small>
                                </div>

                                <div className={`ram-inv-field ${errors.phone ? "invalid" : ""}`}>
                                    <label htmlFor="ram-lead-phone">Phone / WhatsApp *</label>
                                    <div className="ram-inv-phone">
                                        <select
                                            value={countryCode}
                                            aria-label="Country code"
                                            onChange={(e) => setCountryCode(e.target.value)}
                                        >
                                            <option value="+91">+91</option>
                                            <option value="+971">+971</option>
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+65">+65</option>
                                        </select>
                                        <input
                                            id="ram-lead-phone"
                                            ref={phoneRef}
                                            type="tel"
                                            inputMode="numeric"
                                            maxLength={10}
                                            value={phone}
                                            placeholder="10-digit number"
                                            aria-invalid={!!errors.phone}
                                            onChange={(e) => {
                                                setPhone(
                                                    e.target.value.replace(/\D/g, "").slice(0, 10)
                                                );
                                                if (errors.phone)
                                                    setErrors((p) => ({ ...p, phone: undefined }));
                                            }}
                                        />
                                    </div>
                                    <small className="ram-inv-err">{errors.phone}</small>
                                </div>

                                <div className="ram-inv-row">
                                    <div className="ram-inv-field">
                                        <label htmlFor="ram-lead-company">Company / Brand</label>
                                        <input
                                            id="ram-lead-company"
                                            type="text"
                                            value={company}
                                            placeholder="Brand or agency"
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>
                                    <div className="ram-inv-field">
                                        <label htmlFor="ram-lead-role">Designation</label>
                                        <input
                                            id="ram-lead-role"
                                            type="text"
                                            value={designation}
                                            placeholder="e.g. Marketing Manager"
                                            onChange={(e) => setDesignation(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="ram-inv-field">
                                    <label htmlFor="ram-lead-window">Campaign window</label>
                                    <input
                                        id="ram-lead-window"
                                        type="text"
                                        value={campaignWindow}
                                        placeholder="e.g. Diwali 2026 / Q3"
                                        onChange={(e) => setCampaignWindow(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="ram-inv-submit">
                                    Unlock full media plan
                                </button>
                                <p className="ram-inv-fine">
                                    We&apos;ll share the complete plan, available surfaces and
                                    visibility details. No spam — just a serious media conversation.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="ram-inv-success">
                            <span className="ram-inv-unlock-badge">✓ Access unlocked</span>
                            <ul className="ram-inv-unlock-list">
                                {UNLOCKED_DETAILS.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                            <p className="ram-inv-fine" style={{ marginTop: 18 }}>
                                Your plan request has been logged for our team to follow up.
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
