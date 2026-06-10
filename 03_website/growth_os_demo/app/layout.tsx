import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajkot Airport Media x Mukesh Art - Premium airport media",
  description:
    "Premium airport OOH and DOOH media inventory by Rajkot Airport Media x Mukesh Art. Explore digital screens, static hoardings, connectivity, and campaign planning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="day" data-brand="redSky" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ram-theme');var r=document.documentElement;r.dataset.brand='redSky';if(t==='night')r.dataset.theme='night';localStorage.removeItem('ram-brand');}catch(_){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
