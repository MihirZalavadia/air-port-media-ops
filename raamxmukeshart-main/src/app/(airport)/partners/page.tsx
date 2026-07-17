import type { Metadata } from "next";
import PartnersPage from "@/src/components/pages/partners/PartnersPage";

export const metadata: Metadata = {
    title: "Our Clients & Partners | 50+ Brands at Rajkot Airport",
    description:
        "50+ brands across ceramics, castings, jewellery, telecom, and automotive trust Mukesh Art for Rajkot Airport advertising — from Morbi's leading tile makers to national names like OPPO, Vivo, and Škoda.",

    alternates: {
        canonical: "/partners/",
    },

    // unlisted preview: reachable by direct URL only while the roster is
    // under internal review — remove this (and re-add nav/sitemap links)
    // when the page goes public
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },

    openGraph: {
        title: "Our Clients & Partners | 50+ Brands at Rajkot Airport",
        description:
            "The brands that trust Mukesh Art with their airport presence — ceramics, castings, jewellery, telecom, and automotive leaders from Saurashtra and beyond.",
        url: "/partners/",
        siteName: "Mukesh Art",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/og/rajkot-airport-media.jpg",
                width: 1200,
                height: 630,
                alt: "Rajkot Airport Advertising Media by Mukesh Art",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Our Clients & Partners | 50+ Brands at Rajkot Airport",
        description:
            "The brands that trust Mukesh Art with their airport presence — ceramics, castings, jewellery, telecom, and automotive leaders from Saurashtra and beyond.",
        images: ["/images/og/rajkot-airport-media.jpg"],
    },
};

export default function Partners() {
    return <PartnersPage />;
}
