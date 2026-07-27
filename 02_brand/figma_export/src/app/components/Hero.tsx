import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1561101904-da649fcbf03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXJwb3J0JTIwdGVybWluYWwlMjB3aWRlfGVufDF8fHx8MTc4MTEwMjE0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern airport terminal wide view"
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability - Light blue tint for airport layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-blue-50/70 to-transparent dark:from-slate-900/95 dark:via-slate-900/80 dark:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 dark:border-slate-700 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-800 dark:text-slate-200">
                Premium Airport Visibility
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Command Attention at <span className="text-blue-700 dark:text-blue-400">Rajkot International.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-xl">
              Engage a high-net-worth traveling audience with unparalleled recall. Discover curated OOH/DOOH media inventory positioned for maximum impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium overflow-hidden rounded-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10 flex items-center">
                  View Inventory <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-blue-700 dark:bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </button>
              
              <button className="group flex items-center text-slate-800 dark:text-slate-200 font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Download className="mr-2 w-5 h-5" />
                <span className="border-b border-transparent group-hover:border-red-600 dark:group-hover:border-red-400 pb-0.5 transition-colors">
                  Request Media Kit
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
