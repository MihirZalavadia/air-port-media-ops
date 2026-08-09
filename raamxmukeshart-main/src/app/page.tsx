import type { Metadata } from "next";
import GroupHome from "@/src/components/pages/group/GroupHome";

export const metadata: Metadata = {
    title: "Mukesh Art | Brand Beyond Boundaries — Marketing, Media & Advertising, Rajkot",
    description:
        "Mukesh Art is an integrated marketing, media and advertising company in Rajkot, Gujarat — airport marketing at Rajkot International Airport and outdoor hoardings across Saurashtra. Divisions: Mukesh Airport Media and Mukesh Publicity.",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Mukesh Art | Brand Beyond Boundaries",
        description:
            "We Create Visibility. We Build Influence. Airport branding, outdoor media, and premium advertising platforms across Rajkot and Saurashtra.",
        url: "/",
        siteName: "Mukesh Art",
        locale: "en_IN",
        type: "website",
    },
};

export default function MukeshArtHomePage() {
    return <GroupHome />;
}
