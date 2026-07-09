import type { Metadata } from "next";
import GroupHome from "@/src/components/pages/group/GroupHome";

export const metadata: Metadata = {
    title: "Mukesh Media Group | Brand Beyond Boundaries",
    description:
        "Mukesh Media Group is an integrated media and advertising company — airport branding, outdoor media, and innovative advertising platforms across Gujarat. Divisions: Mukesh Art, Mukesh Publicity, Mukesh Airport Media.",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "Mukesh Media Group | Brand Beyond Boundaries",
        description:
            "We Create Visibility. We Build Influence. Airport branding, outdoor media, and premium advertising platforms.",
        url: "/",
        siteName: "Mukesh Media Group",
        locale: "en_IN",
        type: "website",
    },
};

export default function MediaGroupPage() {
    return <GroupHome />;
}
