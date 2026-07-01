// import "./Home.css";

// export default function Contact() {
//     return (
//         <section
//             className="contact-section"
//             id="contact"
//             data-animate
//             aria-labelledby="contact-title"
//         >
//             <div className="container contact-inner">
//                 <div className="contact-content">
//                     <span className="section-tag" data-motion="clip">
//                         Contact Us
//                     </span>

//                     <h2
//                         id="contact-title"
//                         data-motion="up"
//                         data-motion-delay="0.08"
//                     >
//                         Let’s plan your next <em>airport media campaign.</em>
//                     </h2>

//                     <p data-motion="up" data-motion-delay="0.16">
//                         Share your campaign requirement, preferred media type, and timeline.
//                         Our team will help you choose the right advertising spaces at Rajkot
//                         Airport.
//                     </p>

//                     <div
//                         className="contact-info"
//                         aria-label="Rajkot Airport Media contact information"
//                         data-motion-group
//                     >
//                         <div data-motion-item>
//                             <span>Location</span>
//                             <p>
//                                 PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi,
//                                 Gujarat - 363642.
//                             </p>
//                         </div>

//                         <div data-motion-item>
//                             <span>Email</span>
//                             <p>
//                                 <a href="mailto:info@example.com">
//                                     info@example.com
//                                 </a>
//                             </p>
//                         </div>

//                         <div data-motion-item>
//                             <span>Response</span>
//                             <p>Within 1 working day</p>
//                         </div>
//                     </div>
//                 </div>

//                 <form
//                     className="contact-form"
//                     aria-label="Request Rajkot Airport media kit"
//                     data-motion-group
//                 >
//                     <div className="form-row" data-motion-item>
//                         <label className="field-wrap">
//                             <span>Name *</span>
//                             <div className="premium-input">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Your name"
//                                     autoComplete="name"
//                                     required
//                                 />
//                             </div>
//                         </label>

//                         <label className="field-wrap">
//                             <span>Phone *</span>
//                             <div className="premium-input">
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="+91"
//                                     autoComplete="tel"
//                                     required
//                                 />
//                             </div>
//                         </label>
//                     </div>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Company / Brand</span>
//                         <div className="premium-input">
//                             <input
//                                 type="text"
//                                 name="company"
//                                 placeholder="Company name"
//                                 autoComplete="organization"
//                             />
//                         </div>
//                     </label>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Campaign Interest</span>
//                         <div className="premium-select">
//                             <select name="campaignInterest" defaultValue="">
//                                 <option value="" disabled>
//                                     Select media type
//                                 </option>
//                                 <option>Digital Screens</option>
//                                 <option>Static Boards</option>
//                                 <option>Airport Branding</option>
//                                 <option>Full Airport Plan</option>
//                             </select>
//                         </div>
//                     </label>

//                     <label className="field-wrap" data-motion-item>
//                         <span>Message</span>
//                         <div className="premium-input">
//                             <textarea
//                                 name="message"
//                                 rows={5}
//                                 placeholder="Tell us about your campaign, timeline, or budget range"
//                             />
//                         </div>
//                     </label>

//                     <button
//                         type="submit"
//                         className="contact-submit"
//                         data-motion-item
//                     >
//                         <span>Request Media Kit</span>
//                         <b aria-hidden="true">→</b>
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// }







import "./Home.css";

const WHATSAPP_NUMBER = "917436080536"; // Replace with your WhatsApp number without + or spaces

const whatsappMessage = encodeURIComponent(
    "Hello Mukesh Airport Media, I want to know more about Rajkot Airport Advertising Media and request the media kit."
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

export default function Contact() {
    return (
        <section
            className="contact-section"
            id="contact"
            data-animate
            aria-labelledby="contact-title"
        >
            <div className="container contact-inner">
                <div className="contact-content">
                    <span className="section-tag" data-motion="clip">
                        Contact Us
                    </span>

                    <h2
                        id="contact-title"
                        data-motion="up"
                        data-motion-delay="0.08"
                    >
                        Let’s plan your next <em>airport media campaign.</em>
                    </h2>

                    <p data-motion="up" data-motion-delay="0.16">
                        Share your campaign requirement, preferred media type, and timeline.
                        Our team will help you choose the right advertising spaces at Rajkot
                        Airport.
                    </p>

                    <div
                        className="contact-info"
                        aria-label="Rajkot Airport Media contact information"
                        data-motion-group
                    >
                        <div data-motion-item>
                            <span>Location</span>
                            <p>
                                PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi,
                                Gujarat - 363642.
                            </p>
                        </div>

                        <div data-motion-item>
                            <span>Email</span>
                            <p>
                                <a href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </p>
                        </div>

                        <div data-motion-item>
                            <span>WhatsApp</span>
                            <p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Chat with Rajkot Airport Media on WhatsApp"
                                >
                                    Chat on WhatsApp
                                </a>
                            </p>
                        </div>

                        <div data-motion-item>
                            <span>Response</span>
                            <p>Within 1 working day</p>
                        </div>
                    </div>
                </div>

                <form
                    className="contact-form"
                    aria-label="Request Rajkot Airport media kit"
                    data-motion-group
                >
                    <div className="form-row" data-motion-item>
                        <label className="field-wrap">
                            <span>Name *</span>
                            <div className="premium-input">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                />
                            </div>
                        </label>

                        <label className="field-wrap">
                            <span>Phone *</span>
                            <div className="premium-input">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91"
                                    autoComplete="tel"
                                    required
                                />
                            </div>
                        </label>
                    </div>

                    <label className="field-wrap" data-motion-item>
                        <span>Company / Brand</span>
                        <div className="premium-input">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company name"
                                autoComplete="organization"
                            />
                        </div>
                    </label>

                    <label className="field-wrap" data-motion-item>
                        <span>Campaign Interest</span>
                        <div className="premium-select">
                            <select name="campaignInterest" defaultValue="">
                                <option value="" disabled>
                                    Select media type
                                </option>
                                <option>Digital Screens</option>
                                <option>Static Boards</option>
                                <option>Airport Branding</option>
                                <option>Full Airport Plan</option>
                            </select>
                        </div>
                    </label>

                    <label className="field-wrap" data-motion-item>
                        <span>Message</span>
                        <div className="premium-input">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell us about your campaign, timeline, or budget range"
                            />
                        </div>
                    </label>

                    <button
                        type="submit"
                        className="contact-submit"
                        data-motion-item
                    >
                        <span>Request Media Kit</span>
                        <b aria-hidden="true">→</b>
                    </button>
                </form>
            </div>
        </section>
    );
}