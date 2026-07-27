import React from 'react';
import { motion } from 'motion/react';
import { Shield, BarChart3, Database, DownloadCloud, Users, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: Users, title: "Selected-User CRM", desc: "Curated client relationship management." },
  { icon: BarChart3, title: "Lead Tracking", desc: "Advanced analytics on inventory interest." },
  { icon: Database, title: "Inventory Maintenance", desc: "Real-time availability and technical specs." },
  { icon: DownloadCloud, title: "Download Tracking", desc: "Media kit access insights and history." },
  { icon: LayoutDashboard, title: "Owner Dashboard", desc: "High-level overview of total ad performance." },
  { icon: Shield, title: "Media Kit Library", desc: "Secure portal for premium brand assets." },
];

export const GrowthLayer = () => {
  return (
    <section id="growth-layer" className="py-24 md:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="lg:w-1/3">
            <h2 className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
              Future Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
              The Growth Layer
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We are building a robust operational backend to ensure seamless collaboration, transparent tracking, and premium data-driven insights for our partners and clients.
            </p>
            <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white rounded-lg transition-colors text-sm font-medium">
              Learn about our roadmap
            </button>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 text-blue-400 group-hover:text-red-400 transition-colors">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
