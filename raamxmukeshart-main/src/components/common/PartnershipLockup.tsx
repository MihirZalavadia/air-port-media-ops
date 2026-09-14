import Image from "next/image";
import artLogo from "@/public/images/home/mukesh_art_logo.png";
import aaiLogo from "@/public/images/common/aai_logo.png";
import "./PartnershipLockup.css";

type Props = {
    /** extra class for context-specific spacing (e.g. footer vs section) */
    className?: string;
};

/**
 * Co-brand lockup: Mukesh Art × Airports Authority of India (Rajkot).
 * Sits on a fixed white plate so both marks stay legible in day and night
 * themes — same light-plate rule the partners wall uses.
 */
export default function PartnershipLockup({ className = "" }: Props) {
    return (
        <div
            className={`aai-lockup ${className}`.trim()}
            role="img"
            aria-label="Mukesh Art in partnership with the Airports Authority of India, Rajkot"
        >
            <span className="aai-lockup-logo aai-lockup-art">
                <Image
                    src={artLogo}
                    alt=""
                    aria-hidden="true"
                    width={251}
                    height={208}
                    quality={100}
                />
            </span>

            <span className="aai-lockup-x" aria-hidden="true">
                &#215;
            </span>

            <span className="aai-lockup-logo aai-lockup-aai">
                <Image
                    src={aaiLogo}
                    alt=""
                    aria-hidden="true"
                    width={600}
                    height={417}
                    quality={100}
                />
                <small className="aai-lockup-place">Rajkot</small>
            </span>
        </div>
    );
}
