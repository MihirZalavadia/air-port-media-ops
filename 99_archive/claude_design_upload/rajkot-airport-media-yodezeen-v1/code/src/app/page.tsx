// import Hero from "@/src/components/pages/home/Hero";
// import BrandMoment from "@/src/components/pages/home/BrandMoment";
// import "@/src/components/pages/home/Home.css";
// import About from "../components/pages/home/About";
// import InventoryPackages from "../components/pages/home/InventoryPackages";
// import Connectivity from "../components/pages/home/Connectivity";
// import Gallery from "../components/pages/home/Gallery";
// import Contact from "../components/pages/home/Contact";
// import CommercialRange from "../components/pages/home/CommercialRange";
// import ClientsPartnership from "../components/pages/home/ClientsPartnerships";
// import Team from "../components/pages/home/Team";
// import PageLoader from "../components/common/PageLoader";
// import SmoothScroll from "../components/common/SmoothScroller";
// import ScrollAnimations from "../components/common/ScrollAnimations";

// export default function Home() {
//   return (
//     <>
//       <ScrollAnimations />
//       <SmoothScroll />
//       <PageLoader />
//       <Hero />
//       <BrandMoment />
//       <About />
//       <InventoryPackages />
//       <Connectivity />
//       <CommercialRange />
//       <ClientsPartnership />
//       <Team />
//       <Gallery />
//       <Contact />
//     </>
//   );
// }






import type { Metadata } from "next";

import Hero from "@/src/components/pages/home/Hero";
import BrandMoment from "@/src/components/pages/home/BrandMoment";
import About from "@/src/components/pages/home/About";
import InventoryPackages from "@/src/components/pages/home/InventoryPackages";
import Connectivity from "@/src/components/pages/home/Connectivity";
import Gallery from "@/src/components/pages/home/Gallery";
import Contact from "@/src/components/pages/home/Contact";
import CommercialRange from "@/src/components/pages/home/CommercialRange";
import ClientsPartnership from "@/src/components/pages/home/ClientsPartnerships";
import Team from "@/src/components/pages/home/Team";

import PageLoader from "@/src/components/common/PageLoader";
import SmoothScroll from "@/src/components/common/SmoothScroller";
import ScrollAnimations from "@/src/components/common/ScrollAnimations";
import SeoSchema from "@/src/components/common/SeoSchema";

import { pageSeo } from "@/src/lib/seo";

import "@/src/components/pages/home/Home.css";

export const metadata: Metadata = {
  title: pageSeo.home.title,
  description: pageSeo.home.description,

  alternates: {
    canonical: pageSeo.home.path,
  },

  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    url: pageSeo.home.path,
    siteName: "Rajkot Airport x Mukesh Arts",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og/rajkot-airport-media.jpg",
        width: 1200,
        height: 630,
        alt: "Rajkot Airport Advertising Media by Mukesh Arts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: ["/images/og/rajkot-airport-media.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SeoSchema />

      <ScrollAnimations />
      <SmoothScroll />
      <PageLoader />

      <main>
        <Hero />
        <BrandMoment />
        <About />
        <InventoryPackages />
        <Connectivity />
        <CommercialRange />
        <ClientsPartnership />
        <Team />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}