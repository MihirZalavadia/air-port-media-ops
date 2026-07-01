export default function Airliner() {
    return (
        <svg
            viewBox="0 0 60 36"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M29 7 Q30 2.5 30 2.5 Q30 2.5 31 7 L31 13" strokeWidth="1.3" />

            <path d="M24 14 L36 14" strokeWidth="1.3" />
            <path d="M24 14 L23 13" strokeWidth="1.2" />
            <path d="M36 14 L37 13" strokeWidth="1.2" />

            <ellipse cx="30" cy="20" rx="4" ry="6" strokeWidth="1.3" />

            <path d="M6 25 L25 17 L25 20 L9 27 Z" strokeWidth="1.3" />
            <path d="M54 25 L35 17 L35 20 L51 27 Z" strokeWidth="1.3" />

            <ellipse cx="15" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />
            <ellipse cx="45" cy="26.5" rx="2.6" ry="1.5" strokeWidth="1.2" />

            <g strokeWidth="0.8" opacity="0.6">
                <path d="M12 30 L12 33" />
                <path d="M15 30 L15 34" />
                <path d="M18 30 L18 33" />
                <path d="M42 30 L42 33" />
                <path d="M45 30 L45 34" />
                <path d="M48 30 L48 33" />
            </g>
        </svg>
    );
}