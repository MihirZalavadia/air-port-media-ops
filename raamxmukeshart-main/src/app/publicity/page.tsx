import type { Metadata } from "next";
import PublicityHome from "@/src/components/pages/publicity/PublicityHome";

export const metadata: Metadata = {
    title: "Outdoor Advertising in Rajkot & Morbi | Hoardings & OOH — Mukesh Publicity",
    description:
        "Outdoor advertising and OOH marketing in Rajkot and Morbi: hoardings, billboards, and large-format OOH media across Saurashtra's high-traffic locations. Mukesh Publicity — the outdoor media division of Mukesh Art, running city campaigns since 2010.",

    alternates: {
        canonical: "/publicity/",
    },

    openGraph: {
        title: "Outdoor Advertising in Rajkot & Morbi | Mukesh Publicity",
        description:
            "Hoardings, billboards, and large-format outdoor media across Rajkot, Morbi and Saurashtra — planned placement, honest upkeep, one accountable partner.",
        url: "/publicity/",
        siteName: "Mukesh Art",
        locale: "en_IN",
        type: "website",
    },
};

export default function PublicityPage() {
    return <PublicityHome />;
}
