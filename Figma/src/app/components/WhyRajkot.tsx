import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const WhyRajkot = () => {
  return (
    <section id="why-rajkot-int-airport" className="py-24 md:py-32 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-semibold tracking-widest text-red-600 dark:text-red-500 uppercase mb-4">
                The Strategic Gateway
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight mb-8">
                Why Rajkot International?
              </h3>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  As the primary aviation hub for the Saurashtra region, Rajkot International Airport serves as a vital artery for business and premium leisure travel. It's not just a transit point—it's a high-attention environment.
                </p>
                <p>
                  For brands in Gujarat and beyond, this represents an unparalleled opportunity. Our consultative media planning places your message squarely in the sightlines of a captive, affluent audience, ensuring high-recall and measurable brand elevation.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-1">High-Net</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Audience Profile</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-1">100%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Share of Voice</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1532968899863-5b52ef155913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYXZlbGVycyUyMHdhbGtpbmclMjBhaXJwb3J0fGVufDF8fHx8MTc4MTEwMjE0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business travelers walking in airport"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-2xl pointer-events-none" />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-50 dark:bg-slate-900 rounded-full flex items-center justify-center border border-blue-100 dark:border-slate-800 shadow-sm hidden md:flex z-10">
              <span className="text-center">
                <span className="block font-serif text-2xl font-bold text-slate-900 dark:text-white">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">Visibility</span>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
