import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  "Why Rajkot Int Airport",
  "Connectivity",
  "Inventory",
  "Clients",
  "Growth Layer",
  "Contact"
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-12 py-5 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
            Mukesh Art<span className="text-red-600">.</span>
          </span>
          <span className={`text-[0.65rem] md:text-xs uppercase tracking-wider font-medium ${scrolled ? 'text-blue-700 dark:text-blue-400' : 'text-blue-700 dark:text-blue-400'}`}>
            Rajkot Airport Media
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className={`text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400 ${
                scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-800 dark:text-slate-200'
              }`}
            >
              {item}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              scrolled 
                ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300' 
                : 'bg-white/20 hover:bg-white/30 text-slate-800 dark:text-white backdrop-blur-sm'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Mobile Nav Toggle could go here, but keeping it simple for concept */}
        <div className="lg:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
        </div>
      </div>
    </motion.header>
  );
};
