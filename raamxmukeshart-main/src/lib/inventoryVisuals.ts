// Real site photography per inventory category (webp, converted from
// /updated images/). Static imports so basePath/asset hashing stay correct
// on GitHub Pages.

import type { StaticImageData } from "next/image";

import ad2 from "@/public/images/inventory/updated/ad_2.webp";
import ad3 from "@/public/images/inventory/updated/ad_3.webp";
import ad4 from "@/public/images/inventory/updated/ad_4.webp";
import ad5 from "@/public/images/inventory/updated/ad_5.webp";
import ad6 from "@/public/images/inventory/updated/ad_6.webp";

import p1_1 from "@/public/images/inventory/updated/p1_1.webp";
import p1_2 from "@/public/images/inventory/updated/p1_2.webp";
import p1_3 from "@/public/images/inventory/updated/p1_3.webp";
import p1_4 from "@/public/images/inventory/updated/p1_4.webp";
import p1_5 from "@/public/images/inventory/updated/p1_5.webp";
import p1_6 from "@/public/images/inventory/updated/p1_6.webp";

import p2_1 from "@/public/images/inventory/updated/p2_1.webp";
import p2_2 from "@/public/images/inventory/updated/p2_2.webp";
import p2_3 from "@/public/images/inventory/updated/p2_3.webp";
import p2_4 from "@/public/images/inventory/updated/p2_4.webp";
import p2_5 from "@/public/images/inventory/updated/p2_5.webp";

import p3_1 from "@/public/images/inventory/updated/p3_1.webp";
import p3_2 from "@/public/images/inventory/updated/p3_2.webp";
import p3_3 from "@/public/images/inventory/updated/p3_3.webp";
import p3_4 from "@/public/images/inventory/updated/p3_4.webp";

import ws_1 from "@/public/images/inventory/updated/ws_1.webp";
import ws_2 from "@/public/images/inventory/updated/ws_2.webp";
import ws_3 from "@/public/images/inventory/updated/ws_3.webp";
import ws_4 from "@/public/images/inventory/updated/ws_4.webp";

import sec_1 from "@/public/images/inventory/updated/sec_1.webp";

export type CategoryVisuals = {
    /** homepage card + modal main image */
    card: StaticImageData;
    /** hover fan on the card + modal thumbnails */
    cardGallery: StaticImageData[];
    /** detail page hero */
    hero: StaticImageData;
    /** one photo per plan, same order as inventoryData.plans (null = no
        dedicated site photo yet — never substitute a wrong location) */
    planPhotos: (StaticImageData | null)[];
    /** one gallery per unit group, same order as inventoryData.unitGroups */
    groupGalleries: StaticImageData[][];
};

export const inventoryVisuals: Record<string, CategoryVisuals> = {
    "digital-screen-network": {
        card: p1_1,
        cardGallery: [p1_2, p2_1, p3_1],
        hero: p1_1,
        // Package 1, Package 2, Package 3, All-Digital Bundle
        planPhotos: [p1_1, p2_1, p3_1, p1_5],
        groupGalleries: [
            [p1_2, p1_3, p1_4, p1_5],
            [p2_1, p2_2, p2_3, p2_4],
            [p3_1, p3_2, p3_3, p3_4],
        ],
    },
    "landmark-outdoor-boards": {
        card: ad2,
        cardGallery: [ad3, ad4, ad5],
        hero: ad2,
        // AD-2, AD-3, AD-4, AD-5, AD-6 — one board, one photo
        planPhotos: [ad2, ad3, ad4, ad5, ad6],
        groupGalleries: [[ad2, ad3, ad4, ad5, ad6]],
    },
    "in-terminal-backlit-boards": {
        card: ws_1,
        cardGallery: [ws_2, ws_3, sec_1],
        hero: ws_1,
        // AD-15 (no dedicated photo yet), Security Clearance, Laptop Workstation
        planPhotos: [null, sec_1, ws_1],
        groupGalleries: [[sec_1, ws_2, ws_3, ws_4]],
    },
    "hybrid-journey-plans": {
        card: p2_5,
        cardGallery: [ad6, p1_6, ws_4],
        hero: p2_5,
        // Launch, Dominance, Arrival — composites of real assets
        planPhotos: [p2_3, ad2, p1_4],
        groupGalleries: [[p2_2, ad3, p1_6, ws_2]],
    },
};

export function getCategoryVisuals(slug: string): CategoryVisuals {
    return inventoryVisuals[slug] ?? inventoryVisuals["digital-screen-network"];
}
