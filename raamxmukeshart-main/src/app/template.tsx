"use client";

// Re-mounts on every route change → plays a classic soft fade between
// pages. Opacity-only on purpose: transforms/filters here would turn this
// wrapper into a containing block and break the fixed header, and any
// transform would fight the GSAP scroll animations inside pages.
export default function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="page-transition">{children}</div>;
}
