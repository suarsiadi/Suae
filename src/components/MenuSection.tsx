import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Heart } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'souffle' | 'savory' | 'drinks'>('souffle');
  const [likes, setLikes] = useState<Record<string, number>>({
    's1': 428,
    's2': 315,
    's3': 294,
    's4': 118,
    's5': 202,
    'v1': 167,
    'v2': 94,
    'd1': 512,
    'd2': 288,
    'd3': 143
  });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const hasLiked = userLiked[id];
    setUserLiked(prev => ({ ...prev, [id]: !hasLiked }));
    setLikes(prev => ({
      ...prev,
      [id]: hasLiked ? prev[id] - 1 : prev[id] + 1
    }));
  };

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  const tabConfigs = [
    { id: 'souffle', label: 'Cloud Soufflés' },
    { id: 'savory', label: 'Savory Brunch' },
    { id: 'drinks', label: 'Artisanal Drinks' }
  ];

  return (
    <section 
      id="menu" 
      className="py-24 bg-transparent scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cafe-terracotta mb-3 block">Indulge Yourselves</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cafe-dark-espresso leading-tight mb-4">
            Browse Our Cloud Bake Menu
          </h2>
          <div className="w-12 h-[2px] bg-cafe-terracotta mx-auto mb-5" />
          <p className="font-sans text-sm sm:text-base text-cafe-text-muted">
            Crafted with locally sprouted cage-free eggs, Japanese fine sugar, and organic milk. Freshly steamed to order starting from 11:00 AM daily.
          </p>
        </div>

        {/* Tab Selection Filter Pills */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/40 backdrop-blur-md p-1.5 rounded-full inline-flex space-x-1 border border-white/60 shadow-sm">
            {tabConfigs.map((tab) => (
              <button
                key={tab.id}
                id={`menu-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as 'souffle' | 'savory' | 'drinks')}
                className={`relative px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-cafe-dark-espresso/70 hover:text-cafe-dark-espresso'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute inset-0 bg-cafe-terracotta rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Display Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                layout
                key={item.id}
                id={`menu-card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white/40 backdrop-blur-md hover:bg-white/55 p-5 rounded-[32px] border border-white/50 hover:border-white flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative overflow-hidden shadow-sm"
              >
                <div>
                  
                  {/* Card Image Cover */}
                  <div className="aspect-[4/3] rounded-[22px] overflow-hidden relative border border-white/40 bg-white/25">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Left overlay badge tags */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {item.isSpecialty && (
                        <div className="bg-cafe-terracotta text-white px-2.5 py-1 rounded-full text-[9px] font-sans font-bold flex items-center space-x-1 uppercase tracking-widest shadow-sm">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Signature</span>
                        </div>
                      )}
                      
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-white/65 backdrop-blur-md text-cafe-dark-espresso border border-white/50 px-2.5 py-0.5 rounded-full text-[9px] font-sans font-semibold tracking-wider uppercase block"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Like heartbeat counter */}
                    <button
                      id={`menu-like-${item.id}`}
                      onClick={(e) => handleLike(item.id, e)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 transform active:scale-75 cursor-pointer ${
                        userLiked[item.id]
                          ? 'bg-cafe-terracotta text-white'
                          : 'bg-white/70 text-cafe-dark-espresso hover:bg-white/90 border border-white/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${userLiked[item.id] ? 'fill-white' : ''}`} />
                    </button>
                    
                    {/* Tiny hearts indicator */}
                    <span className="absolute bottom-2 right-3 font-mono text-[9px] font-bold text-white bg-cafe-dark-espresso/60 px-2.5 py-0.5 rounded-full backdrop-blur-md border border-white/10">
                      {likes[item.id]} likes
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="mt-5 text-left px-1.5">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif text-lg font-bold text-cafe-dark-espresso group-hover:text-cafe-terracotta transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-cafe-terracotta shrink-0">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-cafe-text-muted mt-2 leading-relaxed h-[60px] overflow-hidden text-ellipsis line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Simulated Order Button / Callout */}
                <div className="mt-4 pt-4 border-t border-white/30 px-1.5 flex justify-between items-center">
                  <span className="font-sans text-[10px] text-cafe-text-muted/70 tracking-widest uppercase font-semibold">
                    Steamed to order
                  </span>
                  <div className="px-3.5 py-1.5 rounded-full bg-white/60 border border-white/50 text-cafe-dark-espresso font-sans text-xs font-semibold group-hover:bg-cafe-dark-espresso group-hover:text-white transition-all duration-300 cursor-default">
                    Specialty Item
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footnote bar */}
        <div className="mt-14 pt-8 border-t border-cafe-dark-espresso/10 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-cafe-text-muted leading-relaxed">
            🌿 <strong className="text-cafe-dark-espresso">Dietary Options:</strong> Oat milk, soy milk, almond milk substitutions are available. Eggs are always cruelty-free, organic local farm produce.
          </p>
        </div>

      </div>
    </section>
  );
}
