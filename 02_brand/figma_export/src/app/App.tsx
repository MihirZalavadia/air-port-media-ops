import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyRajkot } from './components/WhyRajkot';
import { Connectivity } from './components/Connectivity';
import { Inventory } from './components/Inventory';
import { Clients } from './components/Clients';
import { Team } from './components/Team';
import { GrowthLayer } from './components/GrowthLayer';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 min-h-screen selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-white">
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <WhyRajkot />
              <Connectivity />
              <Inventory />
              <Clients />
              <Team />
              <GrowthLayer />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
