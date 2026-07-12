import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane } from 'lucide-react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-50 dark:bg-slate-900 overflow-hidden"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-tight"
        >
          Mukesh Art<span className="text-red-600">.</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 mt-2 font-medium"
        >
          Rajkot Airport Media
        </motion.div>
      </div>

      {/* Airplane fly-by */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 text-blue-600/20 dark:text-blue-400/20"
        initial={{ x: '-10vw', y: '10vh', rotate: -15, scale: 2 }}
        animate={{ x: '110vw', y: '-20vh', rotate: -5, scale: 3 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Plane size={120} strokeWidth={1} />
      </motion.div>
    </motion.div>
  );
};
