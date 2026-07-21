import type { Metadata } from "next";
import PartnersPage from "@/src/components/pages/partners/PartnersPage";

export const metadata: Metadata = {
    title: "Our Clients & Partners | 50+ Brands at Rajkot Airport",
    description:
        "50+ brands across ceramics, castings, jewellery, telecom, and automotive trust Mukesh Art for Rajkot Airport advertising — from Morbi's leading tile makers to national names like OPPO, Vivo, and Škoda.",

    alternates: {
        canonical: "/partners/",
    },

    // public on the site (header/footer/home links) but deliberately kept
    // out of search engines and the sitemap — the client roster shouldn't
    // be harvestable via Google (owner's call, 2026-07-21)
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
