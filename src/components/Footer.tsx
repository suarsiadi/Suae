import { useState, FormEvent } from 'react';
import { Coffee, Instagram, Facebook, ArrowUp, Send, Check } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSectionId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      window.scrollTo({
        top: elPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-cafe-dark-espresso text-cafe-cream pt-20 pb-10 text-left border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative vector */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cafe-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer split header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Brand Details */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                <Coffee className="w-5 h-5 text-cafe-terracotta" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-cafe-cream block leading-tight block leading-tight">Soufflé</span>
                <span className="font-sans text-[10px] tracking-widest text-[#E9E4DB]/70 font-semibold uppercase block">Pancake Cafe</span>
              </div>
            </div>
            
            <p className="font-sans text-sm text-cafe-cream/70 leading-relaxed max-w-sm mt-2">
              Baking happiness in slow motion. Slow-steamed Japanese Soufflé Pancakes, specialty drip teas, and warm community vibes designed with mindful aesthetic details.
            </p>

            {/* Social handles links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cafe-terracotta hover:text-white transition-colors text-cafe-cream/80">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cafe-terracotta hover:text-white transition-colors text-cafe-cream/80">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Sitemap Directory */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-cafe-cream/50 font-bold block">Applet links</span>
              <button onClick={() => scrollToSectionId('about')} className="text-sm text-[#E9E4DB]/70 hover:text-cafe-terracotta text-left cursor-pointer transition-colors">The Technique</button>
              <button onClick={() => scrollToSectionId('menu')} className="text-sm text-[#E9E4DB]/70 hover:text-cafe-terracotta text-left cursor-pointer transition-colors">Featured Menu</button>
              <button onClick={() => scrollToSectionId('reviews')} className="text-sm text-[#E9E4DB]/70 hover:text-cafe-terracotta text-left cursor-pointer transition-colors">Guest Vibes</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-cafe-cream/50 font-bold block">Sanctuary</span>
              <button onClick={() => scrollToSectionId('gallery')} className="text-sm text-[#E9E4DB]/70 hover:text-cafe-terracotta text-left cursor-pointer transition-colors">Lookbook Gallery</button>
              <button onClick={() => scrollToSectionId('location')} className="text-sm text-[#E9E4DB]/70 hover:text-cafe-terracotta text-left cursor-pointer transition-colors">Schedules</button>
              <button onClick={onOpenBooking} className="text-sm text-[#E9E4DB]/75 hover:text-cafe-terracotta text-left cursor-pointer font-bold transition-colors">Reserve Booth</button>
            </div>
          </div>

          {/* Newsletter mock handler */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 justify-start">
            <span className="font-sans text-xs uppercase tracking-widest text-white/50 font-bold block">Sprout Newsletter</span>
            <p className="font-sans text-sm text-[#E9E4DB]/85 leading-relaxed">
              Get secret recipes, seasonal product launch alerts, and exclusive priority booking keys.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 mt-2">
              <input
                type="email"
                id="footer-email-sub"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="chloe@example.com"
                className="flex-1 bg-transparent border-0 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-0 pl-4 py-1.5 min-w-0 font-sans"
              />
              <button
                type="submit"
                id="footer-submit-sub"
                className="w-10 h-10 rounded-full bg-cafe-terracotta text-white hover:bg-white hover:text-cafe-dark-espresso transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
              >
                {subscribed ? (
                  <Check className="w-4 h-4 text-green-300" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
            {subscribed && (
              <span className="font-sans text-[11px] text-emerald-400 mt-1 block">🥞 Cloud newsletters are headed to your inbox!</span>
            )}
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-cafe-cream/50 font-sans">
          <p>© 2026 Soufflé Pancake Cafe. Designed in California. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <button onClick={scrollToTop} className="inline-flex items-center space-x-1 hover:text-white cursor-pointer transition-colors decoration-none">
              <span>Back To Cloud top</span>
              <ArrowUp className="w-3.5 h-3.5 animate-bounce text-cafe-terracotta" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
