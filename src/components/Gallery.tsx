import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';
import { Camera, ZoomIn, X, ChevronRight, Share2, Sparkles, Check } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [copied, setCopied] = useState(false);

  const filters = ['All', 'Atmosphere', 'Craft', 'Plating', 'Brew', 'Vibe'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.tag === activeFilter);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="gallery" 
      className="py-24 bg-transparent scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6 text-left">
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cafe-terracotta mb-3 block">Boutique Lookbook</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cafe-dark-espresso leading-tight">
              An Aesthetic Diary of Light and Fluffiness
            </h2>
            <div className="w-12 h-[2px] bg-cafe-terracotta mt-4 mb-3" />
            <p className="font-sans text-sm sm:text-base text-cafe-text-muted">
              Pared-down textures, warm earthy palettes, and steaming griddles. Scroll through the snapshots of our daily bread.
            </p>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {filters.map((fOrTag) => (
              <button
                key={fOrTag}
                id={`gallery-filter-${fOrTag}`}
                onClick={() => setActiveFilter(fOrTag)}
                className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none shadow-xs ${
                  activeFilter === fOrTag
                    ? 'bg-cafe-terracotta text-white shadow-sm'
                    : 'bg-white/40 border border-white/40 backdrop-blur-sm text-cafe-dark-espresso hover:bg-white/60 hover:border-white'
                }`}
              >
                {fOrTag}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[240px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                layout
                key={item.id}
                id={`gallery-item-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-[28px] overflow-hidden border border-white/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  item.colSpan || 'col-span-1'
                } ${item.rowSpan || 'row-span-1'}`}
              >
                {/* Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                />

                {/* Dark Hover Layer Sheet */}
                <div className="absolute inset-0 bg-gradient-to-t from-cafe-dark-espresso/90 via-cafe-dark-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

                {/* Overlay card tag (always visible in frosted glass) */}
                <span className="absolute top-4 left-4 bg-white/65 backdrop-blur-md border border-white/50 px-3.5 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-widest text-cafe-dark-espresso">
                  {item.tag}
                </span>

                {/* Hover zoom magnifying button */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 flex items-center justify-center text-cafe-dark-espresso shadow-sm">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Title & Caption block on Hover */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-end justify-between text-left">
                  <div>
                    <span className="font-sans text-[10px] text-white/80 uppercase tracking-widest font-bold">Lookbook Snapshot</span>
                    <h4 className="font-serif text-lg font-bold text-white mt-0.5">{item.title}</h4>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white shrink-0" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox pop-up modal updated to clean frosted glass styling */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-cafe-dark-espresso/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                id="close-lightbox"
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 hover:rotate-90 transition-all flex items-center justify-center focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-white/50 backdrop-blur-lg rounded-[32px] overflow-hidden max-w-4xl w-full max-h-[85vh] shadow-2xl flex flex-col md:flex-row border border-white/60"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo container of lightbox */}
                <div className="flex-1 max-h-[50vh] md:max-h-[85vh] bg-transparent relative border-r border-white/30">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                  />
                </div>

                {/* Info Card sidebar of lightbox - glass effect */}
                <div className="p-6 md:p-8 md:w-[350px] flex flex-col justify-between text-left bg-white/35 backdrop-blur-md">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Camera className="w-4 h-4 text-cafe-terracotta" />
                      <span className="font-sans text-xs text-cafe-terracotta uppercase tracking-[0.2em] font-bold">
                        {selectedImage.tag} Series
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-cafe-dark-espresso mt-4 leading-tight">
                      {selectedImage.title}
                    </h3>
                    
                    <p className="font-sans text-sm text-cafe-text-muted mt-4 leading-relaxed">
                      Captured at Soufflé Pancake Cafe. This snapshot illustrates our dedication to lighting, texture, and visual balance. We encourage all of our guests to snap, tag, and preserve their cloud memories.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="text-[10px] bg-white/60 text-cafe-dark-espresso border border-white/55 px-3 py-1 rounded-full font-semibold">
                        #SoufflePancakeCafe
                      </span>
                      <span className="text-[10px] bg-white/60 text-cafe-dark-espresso border border-white/55 px-3 py-1 rounded-full font-semibold">
                        #JiggleCloud
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/35 flex items-center justify-between">
                    <span className="font-sans text-[10px] text-cafe-text-muted uppercase tracking-[0.2em] font-bold">
                      Shot in 2026
                    </span>
                    <button
                      id="lightbox-share-button"
                      onClick={handleShare}
                      className="inline-flex items-center space-x-1.5 text-xs text-cafe-terracotta hover:text-cafe-dark-espresso transition-colors font-semibold py-1.5 px-3.5 rounded-full bg-white/60 border border-white/60"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Share Look</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
