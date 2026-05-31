import { motion } from 'motion/react';
import { Sparkles, ArrowDown, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenu: () => void;
}

export default function Hero({ onOpenBooking, onExploreMenu }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-[#FDFBF7] pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic background element blobs for glass backdrop reflection */}
      <div className="absolute top-1/4 -left-12 w-80 h-80 bg-cafe-terracotta/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-12 w-[450px] h-[450px] bg-cafe-beep-warm bg-[#C28E5A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cafe-terracotta/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text panel */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tagline sticker pill with glass styling */}
            <motion.div
              id="hero-tagline-sticker"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 bg-white/40 fallback-blur backdrop-blur-md text-cafe-dark-espresso border border-white/60 px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-cafe-terracotta animate-pulse" />
              <span>Jiggly, Heavenly Fluffy Delights</span>
            </motion.div>

            {/* Title / Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cafe-dark-espresso leading-[1.1] tracking-tight mb-6"
            >
              Clouds on a Plate, <span className="text-cafe-terracotta italic font-light">Lovingly</span> Crafted.
            </motion.h1>

            {/* Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-sans text-base sm:text-lg text-cafe-text-muted leading-relaxed mb-8 max-w-lg"
            >
              We craft authentic hand-whipped, slow-steamed Japanese soufflé pancakes that jiggle, melt in your mouth, and heal your soul. Perfect for weekend dates, cozy study hours, and aesthetic lookbooks.
            </motion.p>

            {/* Call to Action elements */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-cta-reserve"
                onClick={onOpenBooking}
                className="cursor-pointer flex-1 sm:flex-initial bg-cafe-terracotta hover:bg-[#C28E5A] text-white px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:translate-y-[-2px] hover:shadow-lg active:scale-95"
              >
                Book a Spot
              </button>
              <button
                id="hero-cta-explore"
                onClick={onExploreMenu}
                className="cursor-pointer flex-1 sm:flex-initial bg-white/40 border border-white/60 text-cafe-dark-espresso hover:bg-white/65 px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:translate-y-[-2px] active:scale-95"
              >
                Our Menu
              </button>
            </motion.div>

            {/* Highlights stats banner */}
            <motion.div
              id="hero-micro-highlights"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-cafe-dark-espresso/10 grid grid-cols-3 gap-6 w-full"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-cafe-terracotta">15cm</span>
                <span className="font-sans text-[10px] sm:text-xs text-cafe-text-muted mt-1 uppercase tracking-widest font-semibold">Average Height</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-cafe-terracotta">4.9★</span>
                <span className="font-sans text-[10px] sm:text-xs text-cafe-text-muted mt-1 uppercase tracking-widest font-semibold">Gen Z Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-cafe-terracotta">100%</span>
                <span className="font-sans text-[10px] sm:text-xs text-cafe-text-muted mt-1 uppercase tracking-widest font-semibold">Organic Wheat</span>
              </div>
            </motion.div>
          </div>

          {/* Hero image canvas panel */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Visual background framing with glass effect */}
            <motion.div
              id="hero-frame-bg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[85%] aspect-square rounded-full bg-white/40 border border-white/60 -z-10 backdrop-blur-sm"
            />

            {/* Main stack container */}
            <div className="relative w-[90%] sm:w-[80%] aspect-[4/3] sm:aspect-square">
              <motion.div
                id="hero-pancake-image-container"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-full rounded-[40px] overflow-hidden border-4 border-white/80 shadow-2xl relative"
              >
                <img
                  src="/src/assets/images/souffle_hero_1780228697669.png"
                  alt="Aesthetic stack of fluffy Japanese soufflé pancakes in cream room bowl"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating dynamic tags on the image */}
                <span className="absolute bottom-4 left-4 bg-white/65 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center space-x-1 border border-white/50 text-[11px] font-semibold text-cafe-dark-espresso shadow-md">
                  <Heart className="w-3.5 h-3.5 text-cafe-terracotta fill-cafe-terracotta" />
                  <span>"Jiggles on Tap"</span>
                </span>
                
                <span className="absolute top-4 right-4 bg-cafe-dark-espresso/90 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-[11px] font-sans font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Fresh Every 20 mins</span>
                </span>
              </motion.div>

              {/* Decorative mini cards or vectors */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: -5 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
                className="absolute -bottom-6 -left-6 bg-white/50 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[150px] border border-white/60 text-left hidden sm:block"
              >
                <p className="font-serif text-sm font-bold text-cafe-dark-espresso italic">"The texture is literal air."</p>
                <p className="font-sans text-[10px] text-cafe-text-muted mt-1.5">— @chloe_eats</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bounce indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none hidden md:flex z-10">
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-bold text-cafe-text-muted mb-2">Scroll To Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-cafe-text-muted/40 flex justify-center items-start p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-cafe-warm-brown" />
        </motion.div>
      </div>
    </section>
  );
}
