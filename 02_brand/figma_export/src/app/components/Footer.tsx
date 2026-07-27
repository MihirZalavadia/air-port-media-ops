import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Mukesh Art<span className="text-red-600">.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Premium OOH/DOOH media solutions at Rajkot International Airport. Connecting your brand with high-net-worth travelers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>+91 98765 43210</li>
                <li>sales@mukeshart.com</li>
                <li>Rajkot International Airport, Hirasar, Gujarat</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#inventory" className="hover:text-blue-600 dark:hover:text-blue-400">Inventory</a></li>
                <li><a href="#why-rajkot-int-airport" className="hover:text-blue-600 dark:hover:text-blue-400">Why Rajkot</a></li>
                <li><a href="#clients" className="hover:text-blue-600 dark:hover:text-blue-400">Clients</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mukesh Art. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Rajkot Airport Media</p>
        </div>
      </div>
    </footer>
  );
};
