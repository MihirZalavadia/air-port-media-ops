import React from 'react';
import { motion } from 'motion/react';

const brands = [
  "Apple", "Google", "Vivo", "Oppo", 
  "Jade Blue", "Simpolo", "Poojara Mobiles", "Radhika Jewellers",
  "Samsung", "HDFC Bank", "Amul", "Tata Motors"
];

export const Clients = () => {
  return (
    <section id="clients" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">
            Trusted Partners
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
            Worked with 50+ national and international brands
          </h3>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Ambient glow */}
            <div className="w-64 h-64 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10 max-w-4xl mx-auto px-4 py-12">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: i * 0.1,
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
