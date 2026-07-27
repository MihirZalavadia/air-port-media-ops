import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const team = [
  {
    name: "Mukesh Patel",
    role: "Founder / Owner",
    image: "https://images.unsplash.com/photo-1618306842557-a2515acf2112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwZm91bmRlcnxlbnwxfHx8fDE3ODExMDIxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Mayur Patel",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1659353220482-554773c2f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBhcnRuZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc4MTEwMjE1NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Ridham Bhuva",
    role: "Airport ASCO & Partner/Manager",
    image: "https://images.unsplash.com/photo-1596574027589-b1264b9c720d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHlvdW5nJTIwbWFuYWdlcnxlbnwxfHx8fDE3ODExMDIxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-red-600 dark:text-red-500 uppercase mb-4">
            Leadership & Execution
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Strong owner-side execution.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            With direct airport protocol support and smooth campaign coordination, our leadership ensures your brand's presence is impeccably managed from planning to installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                {member.name}
              </h4>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
