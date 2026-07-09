import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

// Chrome for the airport sub-site (/airport/ + /inventory/*). The Mukesh
// Media Group landing at "/" renders its own minimal header/footer.
export default function AirportLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
