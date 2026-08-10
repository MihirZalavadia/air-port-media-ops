import type { Metadata } from "next";
import ContactPage from "@/src/components/pages/contact/ContactPage";

export const metadata: Metadata = {
    title: "Plan Your Airport Campaign | Contact Mukesh Art",
    description:
        "Start your Rajkot Airport marketing campaign — share your brand, media interest, and timeline, and the Mukesh Art team will respond within one working day.",

    alternates: {
        canonical: "/contact/",
    },

    openGraph: {
        title: "Plan Your Airport Campaign | Contact Mukesh Art",
        description:
            "Share your campaign requirement and timeline — digital screens, static boards, or a full airport plan at Rajkot Airport.",
        url: "/contact/",
        siteName: "Mukesh Art",
        locale: "en_IN",
        type: "website",
    },
};

export default function Contact() {
    return <ContactPage />;
}
