// import "./Home.css";

// export default function Contact() {
//     return (
//         <section
//             className="contact-section"
//             id="contact"
//             data-animate
//             aria-labelledby="contact-title"
//         >
//             <div className="container contact-inner">
//                 <div className="contact-content">
//                     <span className="section-tag" data-motion="clip">
//                         Contact Us
//                     </span>

//                     <h2
//                         id="contact-title"
//                         data-motion="up"
//                         data-motion-delay="0.08"
//                     >
//                         Let’s plan your next <em>airport media campaign.</em>
//                     </h2>

//                     <p data-motion="up" data-motion-delay="0.16">
//                         Share your campaign requirement, preferred media type, and timeline.
//                         Our team will help you choose the right advertising spaces at Rajkot
//                         Airport.
//                     </p>

//                     <div
//                         className="contact-info"
//                         aria-label="Rajkot Airport Media contact information"
//                         data-motion-group
//                     >
//                         <div data-motion-item>
//                             <span>Location</span>
//                             <p>
//                                 PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi,
//                                 Gujarat - 363642.
//                             </p>
//                         </div>

//                         <div data-motion-item>
//                             <span>Email</span>
//                             <p>
//                                 <a href="mailto:info@example.com">
//                                     info@example.com
//                                 </a>
//                             </p>
//                         </div>

//                         <div data-motion-item>
//                             <span>Response</span>
//                             <p>Within 1 working day</p>
//                         </div>
//                     </div>
//                 </div>

//                 <form
//                     className="contact-form"
//                     aria-label="Request Rajkot Airport media kit"
//                     data-motion-group
//                 >
//                     <div className="form-row" data-motion-item>
//                         <label className="field-wrap">
//                             <span>Name *</span>
//                             <div className="premium-input">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Your name"
//                                     autoComplete="name"
//                                     required
//                                 />
//                             </div>
//                         </label>

//                         <label className="field-wrap">
//                             <span>Phone *</span>
//                             <div className="premium-input">
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="+91"
//                                     autoComplete="tel"
//                                     required
//                                 />
//                             </div>
//                         </label>
//                     </div>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Company / Brand</span>
//                         <div className="premium-input">
//                             <input
//                                 type="text"
//                                 name="company"
//                                 placeholder="Company name"
//                                 autoComplete="organization"
//                             />
//                         </div>
//                     </label>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Campaign Interest</span>
//                         <div className="premium-select">
//                             <select name="campaignInterest" defaultValue="">
//                                 <option value="" disabled>
//                                     Select media type
//                                 </option>
//                                 <option>Digital Screens</option>
//                                 <option>Static Boards</option>
//                                 <option>Airport Branding</option>
//                                 <option>Full Airport Plan</option>
//                             </select>
//                         </div>
//                     </label>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Message</span>
//                         <div className="premium-input">
//                             <textarea
//                                 name="message"
//                                 rows={5}
//                                 placeholder="Tell us about your campaign, timeline, or budget range"
//                             />
//                         </div>
//                     </label>

//                     <button
//                         type="submit"
//                         className="contact-submit"
//                         data-motion-item
//                     >
//                         <span>Request Media Kit</span>
//                         <b aria-hidden="true">→</b>
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }







"use client";

import { useState, type FormEvent } from "react";
import { normalizeIndianMobile } from "@/src/lib/validation";
import { submitLead } from "@/src/lib/leads";
import siteCopy from "@/content/site_copy.json";
import "./Home.css";

const contactCopy = siteCopy.contact;

// WhatsApp: country code + number, no + or spaces
const WHATSAPP_NUMBER = contactCopy.whatsappNumber;
const CONTACT_EMAIL = contactCopy.email;

const whatsappMessage = encodeURIComponent(
    "Hello Mukesh Airport Media, I want to know more about Rajkot Airport Advertising Media and request the media kit."
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

type FieldErrors = { name?: string; phone?: string };

export default function Contact() {
    const [errors, setErrors] = useState<FieldErrors>({});
    const [sent, setSent] = useState(false);

    function clearError(field: keyof FieldErrors) {
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const next = { ...prev };
            delete next[field];
            return next;
        });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const name = String(data.get("name") ?? "").trim();
        const phoneRaw = String(data.get("phone") ?? "").trim();
        const phoneDigits = normalizeIndianMobile(phoneRaw);
        const company = String(data.get("company") ?? "").trim();
        const campaignInterest = String(data.get("campaignInterest") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();

        const nextErrors: FieldErrors = {};
        if (!name) nextErrors.name = "Please enter your name.";
        if (!phoneDigits)
            nextErrors.phone =
                "Enter a valid 10-digit Indian mobile number (starts with 6–9).";

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            form
                .querySelector<HTMLElement>("[aria-invalid='true']")
                ?.focus();
            return;
        }

        const lead = { name, phone: phoneRaw, company, campaignInterest, message };

        // capture server-side (email + log) even if the WhatsApp send is
        // abandoned — fire-and-forget, never blocks the redirect
        submitLead({
            name,
            phone: phoneDigits ?? "",
            company,
            interest: campaignInterest,
            message,
            source: "contact-form",
            website: String(data.get("website") ?? ""),
        });

        const lines = [
            "New airport media enquiry — Rajkot Airport Media",
            "",
            `Name: ${lead.name}`,
            `Phone: ${lead.phone}`,
            lead.company && `Company / Brand: ${lead.company}`,
            lead.campaignInterest && `Interest: ${lead.campaignInterest}`,
            lead.message && `Message: ${lead.message}`,
        ].filter(Boolean);

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            lines.join("\n")
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");

        setSent(true);
        form.reset();
    }

    return (
        <section
            className="contact-section"
            id="contact"
            data-animate
            aria-labelledby="contact-title"
        >
            <div className="container contact-inner">
                <div className="contact-content">
                    <span className="section-tag" data-motion="clip">
                        {contactCopy.eyebrow}
                    </span>

                    <h2
                        id="contact-title"
                        data-motion="up"
                        data-motion-delay="0.08"
                    >
                        {contactCopy.titlePre} <em>{contactCopy.titleEm}</em>
                    </h2>

                    <p data-motion="up" data-motion-delay="0.16">
                        {contactCopy.sub}
                    </p>

                    <div
                        className="contact-info"
                        aria-label="Rajkot Airport Media contact information"
                        data-motion-group
                    >
                        <div data-motion-item>
                            <span>Location</span>
                            <p>{contactCopy.address}</p>
                        </div>

                        <div data-motion-item>
                            <span>Email</span>
                            <p>
                                <a href={`mailto:${CONTACT_EMAIL}`}>
                                    {CONTACT_EMAIL}
                                </a>
                            </p>
                        </div>

                        <div data-motion-item>
                            <span>WhatsApp</span>
                            <p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat with Rajkot Airport Media on WhatsApp"
                                >
                                    Chat on WhatsApp
                                </a>
                            </p>
                        </div>

                        <div data-motion-item>
                            <span>Response</span>
                            <p>{contactCopy.response}</p>
                        </div>
                    </div>
                </div>

                <form
                    className="contact-form"
                    aria-label="Request Rajkot Airport media kit"
                    onSubmit={handleSubmit}
                    noValidate
                    data-motion-group
                >
                    {/* honeypot — hidden from humans, bots autofill it */}
                    <input
                        type="text"
                        name="website"
                        className="hp-field"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                    />

                    <div className="form-row" data-motion-item>
                        <label className="field-wrap">
                            <span>Name *</span>
                            <div className={`premium-input ${errors.name ? "is-invalid" : ""}`}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    aria-invalid={errors.name ? "true" : undefined}
                                    onChange={() => clearError("name")}
                                    required
                                />
                            </div>
                            {errors.name && (
                                <span className="field-error" role="alert">
                                    {errors.name}
                                </span>
                            )}
                        </label>

                        <label className="field-wrap">
                            <span>Phone *</span>
                            <div className={`premium-input ${errors.phone ? "is-invalid" : ""}`}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91"
                                    autoComplete="tel"
                                    aria-invalid={errors.phone ? "true" : undefined}
                                    onChange={() => clearError("phone")}
                                    required
                                />
                            </div>
                            {errors.phone && (
                                <span className="field-error" role="alert">
                                    {errors.phone}
                                </span>
                            )}
                        </label>
                    </div>

                    <label className="field-wrap" data-motion-item>
                        <span>Company / Brand</span>
                        <div className="premium-input">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company name"
                                autoComplete="organization"
                            />
                        </div>
                    </label>

                    <label className="field-wrap" data-motion-item>
                        <span>Campaign Interest</span>
                        <div className="premium-select">
                            <select name="campaignInterest" defaultValue="">
                                <option value="" disabled>
                                    Select media type
                                </option>
                                <option>Digital Screens</option>
                                <option>Static Boards</option>
                                <option>Airport Branding</option>
                                <option>Full Airport Plan</option>
                            </select>
                        </div>
                    </label>

                    <label className="field-wrap" data-motion-item>
                        <span>Message</span>
                        <div className="premium-input">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell us about your campaign, timeline, or budget range"
                            />
                        </div>
                    </label>

                    {sent && (
                        <p className="form-success" role="status">
                            Thanks — opening WhatsApp so you can send your enquiry. We reply
                            within 1 working day.
                        </p>
                    )}

                    <button
                        type="submit"
                        className="contact-submit"
                        data-motion-item
                    >
                        <span>Request Media Kit</span>
                        <b aria-hidden="true">→</b>
                    </button>
                </form>
            </div>
        </section>
    );
}