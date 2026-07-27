// import "./Home.css";
// import Image from "next/image";
// import gal1 from '@/public/images/inventory/air1.png'
// import gal2 from '@/public/images/inventory/air2.png'
// import gal3 from '@/public/images/inventory/air3.png'
// import gal4 from '@/public/images/inventory/air5.png'
// import gal5 from '@/public/images/inventory/air6.png'
// import gal6 from '@/public/images/inventory/air7.png'
// import gal7 from '@/public/images/inventory/air8.png'

// const galleryItems = [
//     {
//         title: "Terminal Branding",
//         category: "Airport Media",
//         image: gal1,
//         gridClass: "type-tall", // Double height & width card on the left
//     },
//     {
//         title: "Digital Screen Network",
//         category: "DOOH",
//         image: gal2,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Passenger Waiting Zone",
//         category: "Visibility",
//         image: gal3,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Static Media Boards",
//         category: "OOH",
//         image: gal4,
//         gridClass: "type-wide", // Spans right under items 2 and 3
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal5,
//         gridClass: "type-standard",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal6,
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal7,
//         gridClass: "type-standard",
//     },
// ];

// export default function Gallery() {
//     return (
//         <section className="gallery-premium" id="gallery">
//             <div className="gallery-premium-head">
//                 <div className="tag-container">
//                     <div className="tag-line"></div>
//                     <span>Gallery</span>
//                 </div>
//                 <h2>
//                     Premium airport media spaces built for <em>high brand recall.</em>
//                 </h2>
//                 <p>
//                     Explore visual references of airport advertising placements, passenger
//                     movement zones, digital media surfaces, and branding opportunities
//                     across Rajkot Airport.
//                 </p>
//             </div>

//             <div className="gallery-premium-grid">
//                 {galleryItems.map((item, index) => (
//                     <article
//                         key={`${item.title}-${index}`}
//                         className={`gallery-premium-card ${item.gridClass}`}
//                     >
//                         {/* <img src={item.image} alt={item.title} loading="lazy" /> */}
//                         <Image
//                             src={item.image}
//                             alt=""
//                             width={600}
//                             height={400}
//                         />

//                         <div className="gallery-premium-overlay">
//                             <span>{item.category}</span>
//                             <h3>{item.title}</h3>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }













// import "./Home.css";
// import Image from "next/image";

// import gal1 from "@/public/images/inventory/air1.png";
// import gal2 from "@/public/images/inventory/air2.png";
// import gal3 from "@/public/images/inventory/air3.png";
// import gal4 from "@/public/images/inventory/air5.png";
// import gal5 from "@/public/images/inventory/air6.png";
// import gal6 from "@/public/images/inventory/air7.png";
// import gal7 from "@/public/images/inventory/air8.png";

// const galleryItems = [
//     {
//         title: "Terminal Branding",
//         category: "Airport Media",
//         image: gal1,
//         alt: "Terminal branding media space at Rajkot Airport",
//         gridClass: "type-tall",
//     },
//     {
//         title: "Digital Screen Network",
//         category: "DOOH",
//         image: gal2,
//         alt: "Digital screen advertising display at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Passenger Waiting Zone",
//         category: "Visibility",
//         image: gal3,
//         alt: "Passenger waiting zone branding space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Static Media Boards",
//         category: "OOH",
//         image: gal4,
//         alt: "Static media board placement at Rajkot Airport",
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal5,
//         alt: "Arrival area branding space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal6,
//         alt: "Airport passenger journey branding placement",
//         gridClass: "type-wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: gal7,
//         alt: "Premium arrival area media space at Rajkot Airport",
//         gridClass: "type-standard",
//     },
// ];

// export default function Gallery() {
//     return (
//         <section
//             className="gallery-premium"
//             id="gallery"
//             aria-labelledby="gallery-title"
//         >
//             <div className="gallery-premium-head">
//                 <div className="tag-container">
//                     <div className="tag-line" aria-hidden="true"></div>
//                     <span>Gallery</span>
//                 </div>

//                 <h2 id="gallery-title">
//                     Airport media in <br /><em>real spaces.</em>
//                 </h2>

//                 <p>
//                     A quick look at Rajkot Airport placements across terminal areas,
//                     digital screens, passenger zones, and static media surfaces.
//                 </p>
//             </div>

//             <div
//                 className="gallery-premium-grid"
//                 aria-label="Rajkot Airport media gallery"
//             >
//                 {galleryItems.map((item, index) => (
//                     <article
//                         key={`${item.title}-${index}`}
//                         className={`gallery-premium-card ${item.gridClass}`}
//                         aria-label={`${item.title} - ${item.category}`}
//                     >
//                         <Image
//                             src={item.image}
//                             alt={item.alt}
//                             width={600}
//                             height={400}
//                             loading="lazy"
//                         />

//                         <div className="gallery-premium-overlay">
//                             <span>{item.category}</span>
//                             <h3>{item.title}</h3>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </section>
//     );
// }






import "./Home.css";
import Image from "next/image";

import gal1 from "@/public/images/inventory/air1.png";
import gal2 from "@/public/images/inventory/air2.png";
import gal3 from "@/public/images/inventory/air3.png";
import gal4 from "@/public/images/inventory/air5.png";
import gal5 from "@/public/images/inventory/air6.png";
import gal6 from "@/public/images/inventory/air7.png";
import gal7 from "@/public/images/inventory/air8.png";

const galleryItems = [
    {
        title: "Terminal Branding",
        category: "Airport Media",
        image: gal1,
        alt: "Terminal branding media space at Rajkot Airport",
        gridClass: "type-tall",
    },
    {
        title: "Digital Screen Network",
        category: "DOOH",
        image: gal2,
        alt: "Digital screen advertising display at Rajkot Airport",
        gridClass: "type-standard",
    },
    {
        title: "Passenger Waiting Zone",
        category: "Visibility",
        image: gal3,
        alt: "Passenger waiting zone branding space at Rajkot Airport",
        gridClass: "type-standard",
    },
    {
        title: "Static Media Boards",
        category: "OOH",
        image: gal4,
        alt: "Static media board placement at Rajkot Airport",
        gridClass: "type-wide",
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal5,
        alt: "Arrival area branding space at Rajkot Airport",
        gridClass: "type-standard",
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal6,
        alt: "Airport passenger journey branding placement",
        gridClass: "type-wide",
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal7,
        alt: "Premium arrival area media space at Rajkot Airport",
        gridClass: "type-standard",
    },
];

export default function Gallery() {
    return (
        <section
            className="gallery-premium"
            id="gallery"
            aria-labelledby="gallery-title"
            data-animate
        >
            <div className="gallery-premium-head">
                <div
                    className="tag-container"
                    data-motion="clip"
                >
                    <div className="tag-line" aria-hidden="true"></div>
                    <span>Gallery</span>
                </div>

                <h2
                    id="gallery-title"
                    data-motion="up"
                    data-motion-delay="0.08"
                >
                    Airport media in <br />
                    <em>real spaces.</em>
                </h2>

                <p data-motion="up" data-motion-delay="0.16">
                    A quick look at Rajkot Airport placements across terminal areas,
                    digital screens, passenger zones, and static media surfaces.
                </p>
            </div>

            <div
                className="gallery-premium-grid"
                aria-label="Rajkot Airport media gallery"
                data-motion-group
            >
                {galleryItems.map((item, index) => (
                    <article
                        key={`${item.title}-${index}`}
                        className={`gallery-premium-card ${item.gridClass}`}
                        aria-label={`${item.title} - ${item.category}`}
                        data-motion-item
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={600}
                            height={400}
                            loading="lazy"
                        />

                        <div className="gallery-premium-overlay">
                            <span>{item.category}</span>
                            <h3>{item.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}