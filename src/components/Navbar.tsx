import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Menu, X, ArrowRight, CalendarDays } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'The Secret', target: 'about' },
    { label: 'Cloud Menu', target: 'menu' },
    { label: 'Vibes & Reviews', target: 'reviews' },
    { label: 'Lookbook', target: 'gallery' },
    { label: 'Hours & Spots', target: 'location' }
  ];

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/60 backdrop-blur-lg shadow-sm border-b border-white/50 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 focus:outline-none cursor-pointer group text-left"
              id="nav-logo"
            >
              <div className="w-10 h-10 rounded-full bg-cafe-taupe/40 flex items-center justify-center group-hover:bg-cafe-warm-brown/20 transition-colors duration-300">
                <Coffee className="w-5 h-5 text-cafe-terracotta" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-cafe-dark-espresso block leading-none">
                  Soufflé
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-cafe-text-muted/80 uppercase block mt-0.5">
                  Pancake Cafe
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`nav-link-${link.target}`}
                  onClick={() => scrollToSection(link.target)}
                  className="font-sans text-sm font-medium text-cafe-dark-espresso/80 hover:text-cafe-terracotta cursor-pointer transition-colors duration-200 relative py-1 group focus:outline-none"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cafe-warm-brown transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <button
                id="header-cta-booking"
                onClick={onOpenBooking}
                className="cursor-pointer inline-flex items-center space-x-2 bg-cafe-terracotta hover:bg-cafe-warm-brown text-white px-5 py-2.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Reserve a Spot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                id="header-mobile-booking-shortcut"
                onClick={onOpenBooking}
                className="p-2 rounded-full bg-cafe-beige text-cafe-dark-espresso hover:bg-cafe-taupe transition-colors"
                title="Book Table"
              >
                <CalendarDays className="w-4 h-4" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-cafe-beige text-cafe-dark-espresso focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[68px] left-0 right-0 z-40 bg-cafe-cream border-b border-cafe-taupe shadow-lg overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  id={`mobile-nav-link-${link.target}`}
                  onClick={() => scrollToSection(link.target)}
                  className="block w-full text-left font-serif text-lg font-medium text-cafe-dark-espresso hover:text-cafe-terracotta py-2 focus:outline-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-cafe-taupe/50">
                <button
                  id="mobile-nav-booking"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-cafe-terracotta hover:bg-cafe-dark-espresso text-cafe-cream py-3 rounded-xl font-sans font-semibold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Request Seat Reservation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
