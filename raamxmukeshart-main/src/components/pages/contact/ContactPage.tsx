"use client";

import { useEffect } from "react";
import Link from "next/link";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import Contact from "@/src/components/pages/home/Contact";
import "./ContactPage.css";

export default function ContactPage() {
    // Lenis on the previous page can leave the window deep-scrolled when
    // the route changes — always open the contact page at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SmoothScroll />
            <ScrollAnimations />

            {/* light opening sweep instead of the full boarding loader */}
            <span className="contact-veil" aria-hidden="true" />

            <main className="contact-page">
                <section className="contact-page-hero" aria-labelledby="contact-page-title">
                    <div className="container">
                        <Link href="/airport/" className="contact-back" data-motion="up">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M19 12H7m5 6-7-6 7-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>Back to home</span>
                        </Link>

                        <span className="contact-page-eyebrow" data-motion="clip">
                            Plan Your Campaign
                        </span>

                        <h1 id="contact-page-title" data-motion="up" data-motion-delay="0.08">
                            Put your brand <em>in the terminal.</em>
                        </h1>

                        <p className="contact-page-tagline" data-motion="right" data-motion-delay="0.14">
                            Tell us about your brand and timeline — we&rsquo;ll map the right
                            screens, boards, and packages at Rajkot Airport and reply within
                            one working day.
                        </p>
                    </div>
                </section>

                <Contact />
            </main>
        </>
    );
}
