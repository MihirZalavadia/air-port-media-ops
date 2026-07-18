import type { StaticImageData } from "next/image";

/* ceramics & vitrified — the Morbi cluster */
import simpolo from "@/public/images/clients/simpolo.webp";
import varmora from "@/public/images/clients/varmora.png";
import simero from "@/public/images/clients/simero.png";
import iconGranito from "@/public/images/clients/icon_granito.png";
import itaca from "@/public/images/clients/itaca.png";
import lavishGranito from "@/public/images/clients/lavish_granito.png";
import mottoGranito from "@/public/images/clients/motto_granito.png";
import mozart from "@/public/images/clients/mozart.png";
import skytouch from "@/public/images/clients/skytouch.png";
import rockGranito from "@/public/images/clients/rock_granito.jpg";
import flaisGranito from "@/public/images/clients/flais_granito.jpg";
import itoli from "@/public/images/clients/itoli.png";
import lorence from "@/public/images/clients/lorence.png";
import lemel from "@/public/images/clients/lemel.jpg";

/* engineering & industrial */
import innoxCasting from "@/public/images/clients/innox_casting.png";
import meeraCasting from "@/public/images/clients/meera_casting.png";
import rajanTechnocast from "@/public/images/clients/rajan_technocast.png";
import shivomCasting from "@/public/images/clients/shivom_casting.png";
import novaGroup from "@/public/images/clients/nova_group.jpg";
import esteemAuto from "@/public/images/clients/esteem_auto.png";
import speedwell from "@/public/images/clients/speedwell.jpg";
import unityCement from "@/public/images/clients/unity_cement.png";
import leenova from "@/public/images/clients/leenova.png";

/* jewellery & lifestyle */
import radhikaJeweltech from "@/public/images/clients/radhika_jeweltech.png";
import jKamdar from "@/public/images/clients/j_kamdar.png";
import jadeBlue from "@/public/images/clients/jadeblue.webp";

/* automotive */
import skoda from "@/public/images/clients/skoda.png";
import mgAuto from "@/public/images/clients/mg_auto.png";

/* healthcare */
import globalIvf from "@/public/images/clients/global_ivf.png";
import payalMaternity from "@/public/images/clients/payal_maternity.png";

/* mobile & telecom */
import oppo from "@/public/images/clients/oppo.jpg";
import vivo from "@/public/images/clients/vivo.png";
import oneplus from "@/public/images/clients/oneplus.png";
import apple from "@/public/images/clients/apple.jpg";
import google from "@/public/images/clients/google.png";
import poojara from "@/public/images/clients/poojara.svg";

/* services & technology */
import tirupatiCourier from "@/public/images/clients/tirupati_courier.png";
import infinitySoftware from "@/public/images/clients/infinity_software.png";

export type Partner = {
    name: string;
    sector: string;
    img: StaticImageData;
};

export type PartnerGroup = {
    label: string;
    partners: Partner[];
};

export const partnerGroups: PartnerGroup[] = [
    {
        label: "Ceramics & Vitrified",
        partners: [
            { name: "Simpolo", sector: "Tiles & Bathware", img: simpolo },
            { name: "Varmora", sector: "Tiles & Bathware", img: varmora },
            { name: "Simero", sector: "Ceramics", img: simero },
            { name: "Icon Granito", sector: "Vitrified Tiles", img: iconGranito },
            { name: "Itaca", sector: "Granito", img: itaca },
            { name: "Lavish Granito", sector: "Ceramics", img: lavishGranito },
            { name: "Motto Granito", sector: "Future Surfaces", img: mottoGranito },
            { name: "Mozart", sector: "The Tile Composer", img: mozart },
            { name: "Skytouch", sector: "Ceramic", img: skytouch },
            { name: "Rock Granito", sector: "Vitrified Tiles", img: rockGranito },
            { name: "Flais Granito", sector: "Vitrified Tiles", img: flaisGranito },
            { name: "Itoli", sector: "Granito", img: itoli },
            { name: "Lorence", sector: "Vitrified Tiles", img: lorence },
            { name: "Lemel", sector: "Eternal Surfaces", img: lemel },
        ],
    },
    {
        label: "Engineering & Industrial",
        partners: [
            { name: "Innox Precision", sector: "Investment Casting", img: innoxCasting },
            { name: "Meera Casting", sector: "Castings", img: meeraCasting },
            { name: "Rajan Techno Cast", sector: "Investment Casting", img: rajanTechnocast },
            { name: "Shiv Om", sector: "Castings", img: shivomCasting },
            { name: "Nova Group", sector: "Castings", img: novaGroup },
            { name: "Esteem Auto", sector: "Casting & Machining", img: esteemAuto },
            { name: "Speedwell", sector: "Electric", img: speedwell },
            { name: "Unity Cement", sector: "Cement", img: unityCement },
            { name: "Leenova", sector: "Kitchen & Food Machinery", img: leenova },
        ],
    },
    {
        label: "Jewellery & Lifestyle",
        partners: [
            { name: "Radhika Jeweltech", sector: "Jewellery", img: radhikaJeweltech },
            { name: "J. Kamdar", sector: "Sarees", img: jKamdar },
            { name: "Jade Blue", sector: "Fashion", img: jadeBlue },
        ],
    },
    {
        label: "Automotive",
        partners: [
            { name: "Škoda Auto", sector: "Shreenathji Auto · Rajkot", img: skoda },
            { name: "MG Auto", sector: "Jai Ganesh · Rajkot", img: mgAuto },
        ],
    },
    {
        label: "Healthcare",
        partners: [
            { name: "Global IVF", sector: "IVF & Fertility · Rajkot", img: globalIvf },
            { name: "Payal Maternity", sector: "Maternity Care · Rajkot", img: payalMaternity },
        ],
    },
    {
        label: "Mobile & Telecom",
        partners: [
            { name: "OPPO", sector: "Smartphones", img: oppo },
            { name: "Vivo", sector: "Smartphones", img: vivo },
            { name: "OnePlus", sector: "Smartphones", img: oneplus },
            { name: "Apple", sector: "Technology", img: apple },
            { name: "Google", sector: "Technology", img: google },
            { name: "Poojara Telecom", sector: "Telecom Retail", img: poojara },
        ],
    },
    {
        label: "Services & Technology",
        partners: [
            { name: "Tirupati Courier", sector: "Courier & Logistics", img: tirupatiCourier },
            { name: "Infinity Infoway", sector: "Software & IT", img: infinitySoftware },
        ],
    },
];

export const allPartners: Partner[] = partnerGroups.flatMap(
    (group) => group.partners
);
