import React from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

const destinations = [
  { name: 'Delhi', x: 65, y: 30 },
  { name: 'Mumbai', x: 30, y: 65 },
  { name: 'Navi Mumbai', x: 34, y: 68 },
  { name: 'Pune', x: 38, y: 72 },
  { name: 'Hyderabad', x: 55, y: 75 },
  { name: 'Bengaluru', x: 50, y: 90 },
];

const rajkot = { x: 20, y: 50 };

export const Connectivity = () => {
  return (
    <section id="connectivity" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-4">
            Strategic Reach
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
            Direct Connectivity
          </h3>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[16/10] bg-white dark:bg-slate-950 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 overflow-hidden">
          
          {/* Stylized Map Container */}
          <div className="absolute inset-8">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              
              {/* Abstract Map Nodes/Background to give context (Optional) */}
              
              {/* Routes */}
              {destinations.map((dest, index) => {
                // Control points for bezier curves to make arcs
                const cx = (rajkot.x + dest.x) / 2 + (Math.random() * 10 - 5);
                const cy = (rajkot.y + dest.y) / 2 - 20; 
                
                const pathData = `M ${rajkot.x} ${rajkot.y} Q ${cx} ${cy} ${dest.x} ${dest.y}`;
                
                return (
                  <g key={dest.name}>
                    <path
                      d={pathData}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.2"
                      className="text-slate-300 dark:text-slate-700"
                      strokeDasharray="1 1"
                    />
                    
                    <motion.path
                      d={pathData}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.4"
                      className="text-blue-500 dark:text-blue-400"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
                    />
                    
                    {/* Animated Plane along path */}
                    <motion.circle
                      r="0.8"
                      className="fill-red-500"
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "linear"
                      }}
                      style={{ 
                        offsetPath: `path('${pathData}')`,
                      }}
                    />
                  </g>
                );
              })}

              {/* Destination Nodes */}
              {destinations.map((dest, index) => (
                <motion.g 
                  key={`node-${dest.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                >
                  <circle cx={dest.x} cy={dest.y} r="1" className="fill-slate-400 dark:fill-slate-500" />
                  <text 
                    x={dest.x + 2} 
                    y={dest.y + 0.5} 
                    fontSize="2.5" 
                    className="fill-slate-600 dark:fill-slate-400 font-medium"
                  >
                    {dest.name}
                  </text>
                </motion.g>
              ))}

              {/* Rajkot Hub Node */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <circle cx={rajkot.x} cy={rajkot.y} r="2" className="fill-red-600" />
                <motion.circle 
                  cx={rajkot.x} cy={rajkot.y} r="2" 
                  className="fill-red-600/30"
                  animate={{ scale: [1, 3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <text 
                  x={rajkot.x - 2} 
                  y={rajkot.y - 4} 
                  fontSize="3" 
                  fontWeight="bold"
                  textAnchor="middle"
                  className="fill-slate-900 dark:fill-white font-serif"
                >
                  Rajkot
                </text>
              </motion.g>
            </svg>
          </div>
          
          <div className="absolute bottom-6 right-8 max-w-[200px] hidden md:block">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Connecting Saurashtra to India's major economic centers with high-frequency daily flights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
