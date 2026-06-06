import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajkot Airport x Mukesh Arts - Premium airport media at Rajkot International",
  description:
    "Editorial reference site for a premium airport OOH and DOOH media network by Rajkot Airport x Mukesh Arts. Inventory portfolio, identity routes, and selected-user CRM plan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="day" data-brand="maroonBlue" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ram-theme');var b=localStorage.getItem('ram-brand');var r=document.documentElement;if(t==='night')r.dataset.theme='night';if(b==='redSky')r.dataset.brand='redSky';if(b==='maroonBlue')r.dataset.brand='maroonBlue';}catch(_){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
