// import "./Home.css";

// const team = [
//     {
//         name: "Mukesh Arts",
//         role: "Airport Media Partner",
//         image: "/images/team/team-1.jpg",
//         desc: "Leads brand relationships, campaign planning, and premium media coordination.",
//     },
//     {
//         name: "Rajkot Airport Team",
//         role: "Operations Support",
//         image: "/images/team/team-2.jpg",
//         desc: "Handles ground-level coordination, site access, and campaign execution support.",
//     },
//     {
//         name: "Media Planning Team",
//         role: "Campaign Strategy",
//         image: "/images/team/herobg.png",
//         desc: "Supports inventory selection, media mix planning, and campaign follow-up.",
//     },
// ];

// export default function Team() {
//     return (
//         <section className="team-section" id="team">
//             <div className="container">
//                 <div className="team-head">
//                     <span>Our Team</span>

//                     <h2>
//                         The people behind airport media planning and{" "}
//                         <em>ground execution.</em>
//                     </h2>

//                     <p>
//                         A compact team focused on brand conversations, airport coordination,
//                         inventory planning, and smooth campaign execution.
//                     </p>
//                 </div>

//                 <div className="team-grid">
//                     {team.map((person, index) => (
//                         <article className="team-card" key={person.name}>
//                             <div className="team-image">
//                                 <img src={person.image} alt={person.name} />
//                                 <span>{String(index + 1).padStart(2, "0")}</span>
//                             </div>

//                             <div className="team-body">
//                                 <small>{person.role}</small>
//                                 <h3>{person.name}</h3>
//                                 <p>{person.desc}</p>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }









// import "./Home.css";
// import Image from "next/image";
// import team1 from '@/public/images/team/team1.jpg'
// import team2 from '@/public/images/team/team2.jpg'
// import team3 from '@/public/images/team/team3.jpg'



// // const team = [
// //     {
// //         name: "Mukesh Arts",
// //         role: "Airport Media Partner",
// //         image: "/images/team/team-1.jpg",
// //         linkedin: "https://www.linkedin.com/",
// //         desc: "Leads brand relationships, campaign planning, and premium media coordination.",
// //     },
// //     {
// //         name: "Rajkot Airport Team",
// //         role: "Operations Support",
// //         image: "../images/home/hero.bg.png",
// //         linkedin: "https://www.linkedin.com/",
// //         desc: "Handles ground-level coordination, site access, and campaign execution support.",
// //     },
// //     {
// //         name: "Media Planning Team",
// //         role: "Campaign Strategy",
// //         image: "/images/team/herobg.png",
// //         linkedin: "https://www.linkedin.com/",
// //         desc: "Supports inventory selection, media mix planning, and campaign follow-up.",
// //     },
// // ];
// const team = [
//     {
//         name: "Mukesh Patel",
//         initials: "MP",
//         role: "Founder / Owner",
//         label: "Commercial Direction",
//         image: team1,
//         linkedin: "https://www.linkedin.com/in/mukesh-patel/",
//         desc: "Leads owner-side conversations, trusted client relationships, commercial clarity, and premium campaign confidence.",
//     },
//     {
//         name: "Mayur Patel",
//         initials: "MP",
//         role: "Managing Partner",
//         label: "Client Coordination",
//         image: team2,
//         linkedin: "https://www.linkedin.com/in/mayur-patel/",
//         desc: "Handles business operations, campaign follow-through, client coordination, and execution support from first call to closure.",
//     },
//     {
//         name: "Ridham Bhuva",
//         initials: "RB",
//         role: "Airport ASCO & Manager",
//         label: "Airport Protocol",
//         image: team3,
//         linkedin: "https://www.linkedin.com/in/ridham-bhuva/",
//         desc: "Supports airport protocol, access coordination, visitor handling, hospitality, and ground-team readiness.",
//     },
// ];

// export default function Team() {
//     return (
//         <section className="team-section" id="team" data-animate>
//             <div className="container">
//                 <div className="team-head">
//                     <span>Our Team</span>

//                     <h2>
//                         The people behind airport media planning and{" "}
//                         <em>ground execution.</em>
//                     </h2>

//                     <p>
//                         A compact team focused on brand conversations, airport coordination,
//                         inventory planning, and smooth campaign execution.
//                     </p>
//                 </div>

//                 <div className="team-grid" data-stagger>
//                     {team.map((person, index) => (
//                         <article className="team-card" key={person.name} data-stagger-item>
//                             <div className="team-image">
//                                 {/* <img src={person.image} alt={person.name} /> */}
//                                 <Image
//                                     src={person.image}
//                                     alt=""
//                                     width={600}
//                                     height={400}
//                                 />

//                                 {/* <span className="team-number">
//                                     {String(index + 1).padStart(2, "0")}
//                                 </span> */}

//                                 <a
//                                     href={person.linkedin}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="team-linkedin"
//                                     aria-label={`${person.name} LinkedIn`}
//                                 >
//                                     in
//                                 </a>
//                             </div>

//                             <div className="team-body">
//                                 <small>{person.role}</small>
//                                 <h3>{person.name}</h3>
//                                 <p>{person.desc}</p>
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }












import "./Home.css";
import Image from "next/image";

import team1 from "@/public/images/team/team1.jpg";
import team2 from "@/public/images/team/team2.jpg";
import team3 from "@/public/images/team/team3.jpg";

const team = [
    {
        name: "Mukesh Patel",
        initials: "MP",
        role: "Founder / Owner",
        label: "Commercial Direction",
        image: team1,
        linkedin: "https://www.linkedin.com/in/mukesh-patel/",
        desc: "Leads owner-side conversations, trusted client relationships, commercial clarity, and premium campaign confidence.",
    },
    {
        name: "Mayur Patel",
        initials: "MP",
        role: "Managing Partner",
        label: "Client Coordination",
        image: team2,
        linkedin: "https://www.linkedin.com/in/mayur-patel/",
        desc: "Handles business operations, campaign follow-through, client coordination, and execution support from first call to closure.",
    },
    {
        name: "Ridham Bhuva",
        initials: "RB",
        role: "Airport ASCO & Manager",
        label: "Airport Protocol",
        image: team3,
        linkedin: "https://www.linkedin.com/in/ridham-bhuva/",
        desc: "Supports airport protocol, access coordination, visitor handling, hospitality, and ground-team readiness.",
    },
];

export default function Team() {
    return (
        <section
            className="team-section"
            id="team"
            data-animate
            aria-labelledby="team-title"
        >
            <div className="container">
                <div className="team-head">
                    <span data-motion="clip">Our Team</span>

                    <h2
                        id="team-title"
                        data-motion="up"
                        data-motion-delay="0.08"
                    >
                        The people behind airport media planning and{" "}
                        <em>ground execution.</em>
                    </h2>

                    <p data-motion="up" data-motion-delay="0.16">
                        A compact team focused on brand conversations, airport coordination,
                        inventory planning, and smooth campaign execution.
                    </p>
                </div>

                <div
                    className="team-grid"
                    data-motion-group
                    aria-label="Rajkot Airport Media team members"
                >
                    {team.map((person, index) => (
                        <article
                            className="team-card"
                            key={person.name}
                            data-motion-item
                            aria-label={`${person.name}, ${person.role}`}
                        >
                            <div className="team-image">
                                <Image
                                    src={person.image}
                                    alt={`${person.name} - ${person.role}`}
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                />

                                <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="team-linkedin"
                                    aria-label={`${person.name} LinkedIn profile`}
                                >
                                    in
                                </a>
                            </div>

                            <div className="team-body">
                                <small>{person.role}</small>
                                <h3>{person.name}</h3>
                                <p>{person.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}