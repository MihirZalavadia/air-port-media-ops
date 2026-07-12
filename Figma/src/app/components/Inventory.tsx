import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { InventoryGateModal } from './InventoryGateModal';

const inventoryData = [
  {
    id: 1,
    title: 'Arrival Concourse DOOH',
    type: 'Digital Screen',
    mainImage: 'https://images.unsplash.com/photo-1725111503165-2f9f0db0f55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBzY3JlZW4lMjBhaXJwb3J0fGVufDF8fHx8MTc4MTEwMjE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    postcards: [
      'https://images.unsplash.com/photo-1690964099676-3882eb6737ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwYWR2ZXJ0aXNpbmclMjBiaWxsYm9hcmR8ZW58MXx8fHwxNzgxMTAyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1533069027836-fa937181a8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmlsbGJvYXJkJTIwZGlzcGxheXxlbnwxfHx8fDE3ODExMDIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 2,
    title: 'Terminal Facade Premium',
    type: 'Static Backlit',
    mainImage: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBmYWNhZGV8ZW58MXx8fHwxNzgxMTAyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    postcards: [
      'https://images.unsplash.com/photo-1721592872734-3398900b195c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwZGVwYXJ0dXJlJTIwYm9hcmR8ZW58MXx8fHwxNzgxMTAyMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690964099676-3882eb6737ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwYWR2ZXJ0aXNpbmclMjBiaWxsYm9hcmR8ZW58MXx8fHwxNzgxMTAyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 3,
    title: 'Departure Gates Network',
    type: 'DOOH Network',
    mainImage: 'https://images.unsplash.com/photo-1721592872734-3398900b195c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwZGVwYXJ0dXJlJTIwYm9hcmR8ZW58MXx8fHwxNzgxMTAyMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    postcards: [
      'https://images.unsplash.com/photo-1725111503165-2f9f0db0f55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBzY3JlZW4lMjBhaXJwb3J0fGVufDF8fHx8MTc4MTEwMjE0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBmYWNhZGV8ZW58MXx8fHwxNzgxMTAyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 4,
    title: 'Baggage Claim Pillars',
    type: 'Wrap & Static',
    mainImage: 'https://images.unsplash.com/photo-1533069027836-fa937181a8ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmlsbGJvYXJkJTIwZGlzcGxheXxlbnwxfHx8fDE3ODExMDIxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    postcards: [
      'https://images.unsplash.com/photo-1690964099676-3882eb6737ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwYWR2ZXJ0aXNpbmclMjBiaWxsYm9hcmR8ZW58MXx8fHwxNzgxMTAyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1725111503165-2f9f0db0f55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBzY3JlZW4lMjBhaXJwb3J0fGVufDF8fHx8MTc4MTEwMjE0OXww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];

export const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState<{title: string} | null>(null);
  const [unlockedDetails, setUnlockedDetails] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleCardClick = (title: string) => {
    if (unlockedDetails.includes(title)) {
      // Show full details directly
      alert(`Showing details for ${title}`);
    } else {
      setSelectedItem({ title });
    }
  };

  const handleGateSuccess = () => {
    if (selectedItem) {
      setUnlockedDetails([...unlockedDetails, selectedItem.title]);
      setSelectedItem(null);
      // Immediately open details or show success state
      alert('Access granted! Full specs unlocked.');
    }
  };

  return (
    <section id="inventory" className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-4">
              Curated Selection
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
              Inventory Portfolio
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-block px-4 py-2 border border-blue-100 dark:border-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
              Wide inventory starting from 2L+
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {inventoryData.map((item) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => handleCardClick(item.title)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] mb-6">
                {/* Postcards fanning behind */}
                <AnimatePresence>
                  {hoveredId === item.id && item.postcards.map((img, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-xl overflow-hidden shadow-xl"
                      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 0.95, 
                        rotate: i === 0 ? -6 : 6,
                        x: i === 0 ? '-8%' : '8%',
                        y: '-4%'
                      }}
                      exit={{ opacity: 0, scale: 0.9, rotate: 0, x: 0, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ zIndex: 0 }}
                    >
                      <ImageWithFallback src={img} alt="Additional view" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 mix-blend-overlay" />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Main Image */}
                <div className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <ImageWithFallback src={item.mainImage} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                    {item.type}
                  </p>
                </div>
                {unlockedDetails.includes(item.title) ? (
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Unlocked</span>
                ) : (
                  <span className="text-xs font-semibold text-slate-500 underline underline-offset-4 group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                    View Specs
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <InventoryGateModal
        isOpen={!!selectedItem}
        inventoryTitle={selectedItem?.title || ''}
        onClose={() => setSelectedItem(null)}
        onSuccess={handleGateSuccess}
      />
    </section>
  );
};
