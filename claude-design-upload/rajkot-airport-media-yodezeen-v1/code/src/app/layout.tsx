// import type { Metadata } from "next";
// import "./globals.css";

// import Header from "@/src/components/common/Header";
// import Footer from "@/src/components/common/Footer";

// export const metadata: Metadata = {
//   title: "Mukesh Airport Media x Rajkot Airport Advertising",
//   description: "Premium Airport Advertising Solutions",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-theme="day">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }




// src/app/layout.tsx

import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import { siteConfig } from "@/src/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Rajkot Airport Media",
  },

  description: siteConfig.description,
  keywords: siteConfig.keywords,

  applicationName: siteConfig.shortName,
  authors: [{ name: "Mukesh Arts" }],
  creator: "Mukesh Arts",
  publisher: "Mukesh Arts",

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Rajkot Airport Advertising Media by Mukesh Arts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-theme="day">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}