import { useState } from 'react';
import { MapPin, Clock, Compass, Phone, Mail, Check, Copy, Wifi, Leaf, Zap, Heart } from 'lucide-react';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("712 Pastel Boulevard, Suite 100, Cream District");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hours = [
    { days: "Mon — Thu", hours: "10:00 AM — 8:00 PM", status: "Slow hours" },
    { days: "Friday", hours: "10:00 AM — 9:30 PM", status: "Golden hour peak" },
    { days: "Sat & Sun", hours: "9:00 AM — 10:00 PM", status: "Brunch peak" },
  ];

  const features = [
    { icon: <Wifi className="w-4 h-4 text-cafe-terracotta" />, label: "Giga Wi-Fi & Outlets" },
    { icon: <Zap className="w-4 h-4 text-cafe-terracotta" />, label: "Power banks available" },
    { icon: <Leaf className="w-4 h-4 text-cafe-terracotta" />, label: "Oat & Vegan default" },
    { icon: <Heart className="w-4 h-4 text-cafe-terracotta" />, label: "Pet-friendly terrace" }
  ];

  return (
    <section 
      id="location" 
      className="py-24 bg-transparent scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Column 1: Opening Hours & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-cafe-terracotta mb-3 block">Visit Our Sanctuary</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cafe-dark-espresso leading-tight mb-6">
                Locate a Space of Warmth and Quiet
              </h2>
              <div className="w-12 h-[2px] bg-cafe-terracotta mb-6" />
              <p className="font-sans text-sm sm:text-base text-cafe-text-muted leading-relaxed mb-8">
                Nestled in the heart of the Cream District, our café is designed with soft curves, acoustic warmth, and cozy study zones. Come early for a quiet morning espresso, or bring friends for a slow weekend dessert stack.
              </p>

              {/* Operating Hours Blocks */}
              <div className="space-y-4 bg-white/40 backdrop-blur-md border border-white/50 p-6 rounded-[28px] shadow-sm">
                <div className="flex items-center space-x-2 text-cafe-dark-espresso font-serif text-base font-bold mb-4">
                  <Clock className="w-4 h-4 text-cafe-terracotta" />
                  <span>Serving Hours</span>
                </div>
                {hours.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-white/20 last:border-0">
                    <div className="flex flex-col">
                      <span className="font-serif text-sm font-bold text-cafe-dark-espresso">{item.days}</span>
                      <span className="font-sans text-[10px] text-cafe-text-muted tracking-wider uppercase">{item.status}</span>
                    </div>
                    <span className="font-sans text-sm font-medium text-cafe-dark-espresso">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Block */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-sans font-semibold text-cafe-text-muted">
              <a href="tel:+15557278353" className="flex items-center space-x-2 bg-white/40 backdrop-blur-sm border border-white/50 px-4 py-2.5 rounded-full hover:bg-white/60 hover:text-cafe-terracotta transition-all">
                <Phone className="w-3.5 h-3.5 text-cafe-terracotta" />
                <span>+1 (555) 727-8353</span>
              </a>
              <a href="mailto:hello@souffleclouds.com" className="flex items-center space-x-2 bg-white/40 backdrop-blur-sm border border-white/50 px-4 py-2.5 rounded-full hover:bg-white/60 hover:text-cafe-terracotta transition-all">
                <Mail className="w-3.5 h-3.5 text-cafe-terracotta" />
                <span>hello@souffleclouds.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Stylized Grid Maps Vector Block */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* The Stylized Minimal MAP representation using CSS */}
            <div className="flex-1 min-h-[300px] md:min-h-[350px] relative rounded-[32px] overflow-hidden border border-white/60 shadow-md bg-white/40 backdrop-blur-md p-6 flex flex-col justify-between text-left group">
              {/* Abstract Map Background grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C28E5A_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />

              {/* Decorative map shapes depicting roads & cafe spot */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-white/30 border-y border-white/10 rotate-2 pointer-events-none" />
              <div className="absolute bottom-1/4 left-0 right-0 h-6 bg-white/30 border-y border-white/10 -rotate-12 pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-1/3 w-5 bg-white/30 border-x border-white/10 rotate-12 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-1/4 w-3 bg-white/30 border-x border-white/10 -rotate-2 pointer-events-none" />
              
              {/* Cafe location PIN indicator circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-8 flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-cafe-terracotta/20 animate-ping rounded-full" />
                <div className="absolute w-6 h-6 bg-cafe-terracotta/40 rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-cafe-dark-espresso rounded-full" />
                </div>
                {/* Floating tooltip on physical spot */}
                <div className="absolute bottom-8 bg-cafe-dark-espresso/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl border border-white/20 font-sans text-xs font-semibold shadow-xl flex items-center space-x-1 whitespace-nowrap">
                  <Compass className="w-3.5 h-3.5 text-cafe-terracotta animate-spin" />
                  <span>Soufflé Cloud Spot</span>
                </div>
              </div>

              {/* Map Footer block details */}
              <div className="relative z-10 bg-white/60 backdrop-blur-lg border border-white p-6 rounded-2xl max-w-lg mt-auto shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cafe-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-cafe-terracotta" />
                  </div>
                  <div className="flex-1">
                    <span className="font-serif text-sm font-bold text-cafe-dark-espresso block">Our Address</span>
                    <span className="font-sans text-xs text-cafe-text-muted block mt-0.5">712 Pastel Boulevard, Suite 100, Cream District</span>
                  </div>
                  <button
                    id="copy-address-button"
                    onClick={handleCopyAddress}
                    className="p-2.5 bg-white border border-white/80 hover:bg-white/50 rounded-xl transition-all font-sans text-xs font-bold text-cafe-dark-espresso ml-3 flex items-center space-x-1 select-none cursor-pointer"
                    title="Copy Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cafe-text-muted" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Amenities details listing Grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {features.map((feat, index) => (
                <div 
                  key={index} 
                  className="bg-white/40 backdrop-blur-md border border-white/50 px-4 py-3 rounded-2xl flex items-center space-x-2.5 text-left text-xs font-sans font-semibold text-cafe-dark-espresso shadow-xs"
                >
                  <div className="shrink-0 p-1.5 bg-white border border-white/60 rounded-lg">
                    {feat.icon}
                  </div>
                  <span className="leading-tight">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
