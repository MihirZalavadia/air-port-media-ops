import type { Metadata } from "next";
import PublicityHome from "@/src/components/pages/publicity/PublicityHome";

export const metadata: Metadata = {
    title: "Outdoor Advertising in Rajkot | Hoardings & OOH — Mukesh Publicity",
    description:
        "Outdoor advertising in Rajkot: hoardings, billboards, and large-format OOH media across Saurashtra's high-traffic locations. Mukesh Publicity — the outdoor media division of Mukesh Media Group, running city campaigns since 2010.",

    alternates: {
        canonical: "/publicity/",
    },

    openGraph: {
        title: "Outdoor Advertising in Rajkot | Mukesh Publicity",
        description:
            "Hoardings, billboards, and large-format outdoor media across Rajkot and Saurashtra — planned placement, honest upkeep, one accountable partner.",
        url: "/publicity/",
        siteName: "Mukesh Media Group",
        locale: "en_IN",
        type: "website",
    },
};

export default function PublicityPage() {
    return <PublicityHome />;
}
